/**
 * Número Processo - Public API
 * Complete toolkit for parsing, validating, and extracting information from Brazilian judicial process numbers
 */

import { Effect } from "effect";
import type {
  InvalidCheckDigitError,
  InvalidProcessNumberFormatError,
  UnsupportedTribunalError,
} from "./errors";
import type { TribunalAlias } from "./models";
import { parseNumeroProcesso } from "./parser";
import { inferTribunalAliasFromComponents } from "./tribunal-alias";
import { validateCheckDigit } from "./validator";

// Export all domain errors
export {
  InvalidCheckDigitError,
  InvalidProcessNumberFormatError,
  UnsupportedTribunalError,
} from "./errors";
// Export mappings (useful for reference and extension)
export {
  JUSTICE_SEGMENT_NAMES,
  STATE_CODE_TO_ABBREV,
  SUPPORTED_TRIBUNAL_ALIASES,
} from "./mappings";
// Re-export types for convenience
export type { NumeroProcessoComponents as NumeroProcessoComponentsType } from "./models";
// Export all models and types
export {
  FormattedNumeroProcesso,
  JusticaSegment,
  NumeroProcessoComponents,
  NumeroProcessoInput,
  TribunalAlias,
} from "./models";
// Export parser functions
export {
  formatNumeroProcesso,
  parseAndFormat,
  parseNumeroProcesso,
} from "./parser";

// Export tribunal alias inference
export { inferTribunalAliasFromComponents } from "./tribunal-alias";
// Export validator functions
export { getExpectedCheckDigit, validateCheckDigit } from "./validator";

/**
 * Main convenience function: Infer tribunal alias directly from process number string
 *
 * This function combines parsing and tribunal alias inference into a single operation.
 * It does NOT validate the check digit by default for performance reasons.
 * If you need check digit validation, use the individual functions.
 *
 * @param processNumber - Process number in any valid format (formatted or unformatted)
 * @param options - Configuration options
 * @param options.validateCheckDigit - Whether to validate the check digit (default: false)
 * @returns Effect with tribunal alias or appropriate error
 *
 * @example
 * ```typescript
 * // Simple usage - infer alias without check digit validation
 * const alias = yield* inferTribunalAlias("07223914020178070001");
 * // Returns: TribunalAlias("tjdft")
 *
 * // With check digit validation
 * const aliasValidated = yield* inferTribunalAlias("0722391-40.2017.8.07.0001", {
 *   validateCheckDigit: true
 * });
 * ```
 */
export const inferTribunalAlias = (
  processNumber: string,
  options: { validateCheckDigit?: boolean } = {}
): Effect.Effect<
  TribunalAlias,
  | InvalidProcessNumberFormatError
  | InvalidCheckDigitError
  | UnsupportedTribunalError
> =>
  Effect.gen(function* () {
    // Parse the process number
    const components = yield* parseNumeroProcesso(processNumber);

    // Optionally validate check digit
    if (options.validateCheckDigit) {
      yield* validateCheckDigit(components);
    }

    // Infer and return the tribunal alias
    return yield* inferTribunalAliasFromComponents(components);
  });
