/**
 * Tribunal Alias Inference
 * Infer DataJud API tribunal alias from process number components
 */

import { Effect } from "effect";
import { UnsupportedTribunalError } from "./errors";
import { JUSTICE_SEGMENT_NAMES, STATE_CODE_TO_ABBREV } from "./mappings";
import {
  JusticaSegment,
  type NumeroProcessoComponents,
  TribunalAlias,
} from "./models";

/**
 * Infer tribunal alias for Superior Courts (STJ, TST, TSE, STM)
 */
const inferSuperiorCourtAlias = (
  components: NumeroProcessoComponents
): Effect.Effect<TribunalAlias, UnsupportedTribunalError> =>
  Effect.gen(function* () {
    const { id_orgao, id_tribunal } = components;

    // Superior courts should have id_tribunal = 0
    if (id_tribunal !== 0) {
      return yield* Effect.fail(
        new UnsupportedTribunalError({
          processNumber: formatComponents(components),
          tribunalName: JUSTICE_SEGMENT_NAMES[id_orgao] ?? "Unknown",
          reason: `Invalid id_tribunal=${id_tribunal} for superior court (expected 0)`,
        })
      );
    }

    switch (id_orgao) {
      case JusticaSegment.STF:
        return yield* Effect.fail(
          new UnsupportedTribunalError({
            processNumber: formatComponents(components),
            tribunalName: "Supremo Tribunal Federal",
            reason: "STF is not available in DataJud Public API",
          })
        );
      case JusticaSegment.CNJ:
        return yield* Effect.fail(
          new UnsupportedTribunalError({
            processNumber: formatComponents(components),
            tribunalName: "Conselho Nacional de Justiça",
            reason: "CNJ is not available in DataJud Public API",
          })
        );
      case JusticaSegment.STJ:
        return TribunalAlias("stj");
      case JusticaSegment.TRABALHO:
        return TribunalAlias("tst");
      case JusticaSegment.ELEITORAL:
        return TribunalAlias("tse");
      case JusticaSegment.MILITAR_UNIAO:
        return TribunalAlias("stm");
      default:
        return yield* Effect.fail(
          new UnsupportedTribunalError({
            processNumber: formatComponents(components),
            tribunalName: JUSTICE_SEGMENT_NAMES[id_orgao] ?? "Unknown",
            reason: `Unexpected id_orgao=${id_orgao} for superior court`,
          })
        );
    }
  });

/**
 * Infer tribunal alias for Federal Courts (TRF1-6)
 */
const inferFederalCourtAlias = (
  components: NumeroProcessoComponents
): Effect.Effect<TribunalAlias, UnsupportedTribunalError> =>
  Effect.gen(function* () {
    const { id_tribunal } = components;

    // Federal courts: TRF1-6 (id_tribunal 1-6)
    if (id_tribunal >= 1 && id_tribunal <= 6) {
      return TribunalAlias(`trf${id_tribunal}`);
    }

    return yield* Effect.fail(
      new UnsupportedTribunalError({
        processNumber: formatComponents(components),
        tribunalName: `TRF${id_tribunal}`,
        reason: `Invalid id_tribunal=${id_tribunal} for federal court (expected 1-6)`,
      })
    );
  });

/**
 * Infer tribunal alias for Labor Courts (TRT1-24)
 */
const inferLaborCourtAlias = (
  components: NumeroProcessoComponents
): Effect.Effect<TribunalAlias, UnsupportedTribunalError> =>
  Effect.gen(function* () {
    const { id_tribunal } = components;

    // Superior Labor Court (TST)
    if (id_tribunal === 0) {
      return TribunalAlias("tst");
    }

    // Regional Labor Courts: TRT1-24
    if (id_tribunal >= 1 && id_tribunal <= 24) {
      return TribunalAlias(`trt${id_tribunal}`);
    }

    return yield* Effect.fail(
      new UnsupportedTribunalError({
        processNumber: formatComponents(components),
        tribunalName: `TRT${id_tribunal}`,
        reason: `Invalid id_tribunal=${id_tribunal} for labor court (expected 0 or 1-24)`,
      })
    );
  });

/**
 * Infer tribunal alias for Electoral Courts (TRE-{state})
 */
const inferElectoralCourtAlias = (
  components: NumeroProcessoComponents
): Effect.Effect<TribunalAlias, UnsupportedTribunalError> =>
  Effect.gen(function* () {
    const { id_tribunal } = components;

    // Superior Electoral Court (TSE)
    if (id_tribunal === 0) {
      return TribunalAlias("tse");
    }

    // Regional Electoral Courts by state
    const stateAbbrev = STATE_CODE_TO_ABBREV[id_tribunal];
    if (!stateAbbrev) {
      return yield* Effect.fail(
        new UnsupportedTribunalError({
          processNumber: formatComponents(components),
          tribunalName: `TRE (id_tribunal=${id_tribunal})`,
          reason: `Invalid state code id_tribunal=${id_tribunal}`,
        })
      );
    }

    return TribunalAlias(`tre-${stateAbbrev}`);
  });

/**
 * Infer tribunal alias for State Courts (TJ{state})
 */
const inferStateCourtAlias = (
  components: NumeroProcessoComponents
): Effect.Effect<TribunalAlias, UnsupportedTribunalError> =>
  Effect.gen(function* () {
    const { id_tribunal } = components;

    const stateAbbrev = STATE_CODE_TO_ABBREV[id_tribunal];
    if (!stateAbbrev) {
      return yield* Effect.fail(
        new UnsupportedTribunalError({
          processNumber: formatComponents(components),
          tribunalName: `TJ (id_tribunal=${id_tribunal})`,
          reason: `Invalid state code id_tribunal=${id_tribunal}`,
        })
      );
    }

    return TribunalAlias(`tj${stateAbbrev}`);
  });

/**
 * Infer tribunal alias for State Military Courts (TJM{state})
 * Only MG (13), RS (21), and SP (26) have military courts
 */
const inferStateMilitaryCourtAlias = (
  components: NumeroProcessoComponents
): Effect.Effect<TribunalAlias, UnsupportedTribunalError> =>
  Effect.gen(function* () {
    const { id_tribunal } = components;

    const stateAbbrev = STATE_CODE_TO_ABBREV[id_tribunal];
    if (!stateAbbrev) {
      return yield* Effect.fail(
        new UnsupportedTribunalError({
          processNumber: formatComponents(components),
          tribunalName: `TJM (id_tribunal=${id_tribunal})`,
          reason: `Invalid state code id_tribunal=${id_tribunal}`,
        })
      );
    }

    // Only MG, RS, and SP have state military courts
    const validStates = ["mg", "rs", "sp"];
    if (!validStates.includes(stateAbbrev)) {
      return yield* Effect.fail(
        new UnsupportedTribunalError({
          processNumber: formatComponents(components),
          tribunalName: `Tribunal de Justiça Militar de ${stateAbbrev.toUpperCase()}`,
          reason: `State ${stateAbbrev.toUpperCase()} does not have a military court (only MG, RS, SP)`,
        })
      );
    }

    return TribunalAlias(`tjm${stateAbbrev}`);
  });

/**
 * Format components for error messages
 */
const formatComponents = (components: NumeroProcessoComponents): string => {
  const { sequencial, dv, ano, id_orgao, id_tribunal, id_unidade_origem } =
    components;
  return `${sequencial.toString().padStart(7, "0")}-${dv.toString().padStart(2, "0")}.${ano}.${id_orgao}.${id_tribunal.toString().padStart(2, "0")}.${id_unidade_origem.toString().padStart(4, "0")}`;
};

/**
 * Main function: Infer tribunal alias from process number components
 *
 * @param components - Parsed process number components
 * @returns Effect with tribunal alias or UnsupportedTribunalError
 *
 * @example
 * ```typescript
 * const components = yield* parseNumeroProcesso("0722391-40.2017.8.07.0001");
 * const alias = yield* inferTribunalAliasFromComponents(components);
 * // Returns: TribunalAlias("tjdft")
 * ```
 */
export const inferTribunalAliasFromComponents = (
  components: NumeroProcessoComponents
): Effect.Effect<TribunalAlias, UnsupportedTribunalError> =>
  Effect.gen(function* () {
    const { id_orgao } = components;

    switch (id_orgao) {
      case JusticaSegment.STF:
      case JusticaSegment.CNJ:
      case JusticaSegment.STJ:
      case JusticaSegment.MILITAR_UNIAO:
        return yield* inferSuperiorCourtAlias(components);

      case JusticaSegment.FEDERAL:
        return yield* inferFederalCourtAlias(components);

      case JusticaSegment.TRABALHO:
        return yield* inferLaborCourtAlias(components);

      case JusticaSegment.ELEITORAL:
        return yield* inferElectoralCourtAlias(components);

      case JusticaSegment.ESTADUAL:
        return yield* inferStateCourtAlias(components);

      case JusticaSegment.MILITAR_ESTADUAL:
        return yield* inferStateMilitaryCourtAlias(components);

      default:
        return yield* Effect.fail(
          new UnsupportedTribunalError({
            processNumber: formatComponents(components),
            tribunalName: `Unknown (id_orgao=${id_orgao})`,
            reason: `Invalid id_orgao=${id_orgao} (expected 1-9)`,
          })
        );
    }
  });
