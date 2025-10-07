/**
 * Número Processo Parser
 * Functions to parse and format Brazilian judicial process numbers
 */

import { Schema } from "@effect/schema";
import { Effect } from "effect";
import { InvalidProcessNumberFormatError } from "./errors";
import { NumeroProcessoComponents, NumeroProcessoInput } from "./models";

/**
 * Regex pattern for parsing process number components
 * Matches format: NNNNNNN-DD.AAAA.J.TR.OOOO or NNNNNNNNDDAAAAJTROOOO
 */
const PROCESS_NUMBER_PATTERN = /(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/;

/**
 * Remove all non-digit characters from a string
 */
const removeNonDigits = (input: string): string => input.replace(/\D/g, "");

/**
 * Parse a processo number into its components
 *
 * @param input - Process number in formatted (NNNNNNN-DD.AAAA.J.TR.OOOO) or unformatted (20 digits) format
 * @returns Effect that succeeds with parsed components or fails with InvalidProcessNumberFormatError
 *
 * @example
 * ```typescript
 * const components = yield* parseNumeroProcesso("07223914020178070001");
 * // { sequencial: 722391, dv: 40, ano: 2017, id_orgao: 8, id_tribunal: 7, id_unidade_origem: 1 }
 * ```
 */
export const parseNumeroProcesso = (
  input: string
): Effect.Effect<NumeroProcessoComponents, InvalidProcessNumberFormatError> =>
  Effect.gen(function* () {
    // Validate input format (20 or 25 characters)
    const validatedInput = yield* Schema.decodeUnknown(NumeroProcessoInput)(
      input
    ).pipe(
      Effect.mapError(
        () =>
          new InvalidProcessNumberFormatError({
            input,
            expectedFormat: "NNNNNNN-DD.AAAA.J.TR.OOOO (25 chars) or 20 digits",
          })
      )
    );

    // Remove formatting characters
    const digitsOnly = removeNonDigits(validatedInput);

    // Extract components using regex
    const match = PROCESS_NUMBER_PATTERN.exec(digitsOnly);
    if (!match) {
      return yield* Effect.fail(
        new InvalidProcessNumberFormatError({
          input: validatedInput,
          expectedFormat: "NNNNNNN-DD.AAAA.J.TR.OOOO",
        })
      );
    }

    const [
      ,
      sequencialStr,
      dvStr,
      anoStr,
      id_orgaoStr,
      id_tribunalStr,
      id_unidade_origemStr,
    ] = match;

    // Ensure all captured groups exist (they should always match if regex matched)
    if (
      !sequencialStr ||
      !dvStr ||
      !anoStr ||
      !id_orgaoStr ||
      !id_tribunalStr ||
      !id_unidade_origemStr
    ) {
      return yield* Effect.fail(
        new InvalidProcessNumberFormatError({
          input: validatedInput,
          expectedFormat: "NNNNNNN-DD.AAAA.J.TR.OOOO",
        })
      );
    }

    // Parse and validate components using schema
    return yield* Schema.decodeUnknown(NumeroProcessoComponents)({
      sequencial: Number.parseInt(sequencialStr, 10),
      dv: Number.parseInt(dvStr, 10),
      ano: Number.parseInt(anoStr, 10),
      id_orgao: Number.parseInt(id_orgaoStr, 10),
      id_tribunal: Number.parseInt(id_tribunalStr, 10),
      id_unidade_origem: Number.parseInt(id_unidade_origemStr, 10),
    }).pipe(
      Effect.mapError(
        () =>
          new InvalidProcessNumberFormatError({
            input: validatedInput,
            expectedFormat: "Valid CNJ process number components",
          })
      )
    );
  });

/**
 * Format process number components into standard CNJ format
 *
 * @param components - Parsed process number components
 * @returns Formatted string: NNNNNNN-DD.AAAA.J.TR.OOOO
 *
 * @example
 * ```typescript
 * const formatted = formatNumeroProcesso(components);
 * // "0722391-40.2017.8.07.0001"
 * ```
 */
export const formatNumeroProcesso = (
  components: NumeroProcessoComponents
): string => {
  const { sequencial, dv, ano, id_orgao, id_tribunal, id_unidade_origem } =
    components;

  return `${sequencial.toString().padStart(7, "0")}-${dv.toString().padStart(2, "0")}.${ano}.${id_orgao}.${id_tribunal.toString().padStart(2, "0")}.${id_unidade_origem.toString().padStart(4, "0")}`;
};

/**
 * Parse and format a process number in one step
 *
 * @param input - Process number in any valid format
 * @returns Effect with formatted process number
 */
export const parseAndFormat = (
  input: string
): Effect.Effect<string, InvalidProcessNumberFormatError> =>
  Effect.gen(function* () {
    const components = yield* parseNumeroProcesso(input);
    return formatNumeroProcesso(components);
  });
