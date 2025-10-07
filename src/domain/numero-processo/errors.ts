/**
 * Número Processo Domain Errors
 * Tagged errors for all failure modes when parsing and validating Brazilian judicial process numbers
 */

import { Data } from "effect";

/**
 * Error thrown when the process number format is invalid
 * Expected format: NNNNNNN-DD.AAAA.J.TR.OOOO or 20-digit numeric string
 */
export class InvalidProcessNumberFormatError extends Data.TaggedError(
  "InvalidProcessNumberFormatError"
)<{
  readonly input: string;
  readonly expectedFormat: string;
}> {}

/**
 * Error thrown when the check digit validation fails
 * The check digit is calculated using módulo 97 base 10 algorithm (CNJ Resolution 65/2008)
 */
export class InvalidCheckDigitError extends Data.TaggedError(
  "InvalidCheckDigitError"
)<{
  readonly processNumber: string;
  readonly expectedDigit: number;
  readonly actualDigit: number;
}> {}

/**
 * Error thrown when the tribunal is not supported by the DataJud Public API
 * Some courts (e.g., STF, CNJ) are not available in the public API
 */
export class UnsupportedTribunalError extends Data.TaggedError(
  "UnsupportedTribunalError"
)<{
  readonly processNumber: string;
  readonly tribunalName: string;
  readonly reason: string;
}> {}
