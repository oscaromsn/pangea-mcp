/**
 * Número Processo Validator
 * Check digit validation using módulo 97 base 10 algorithm (CNJ Resolution 65/2008)
 */

import { Effect } from "effect";
import { InvalidCheckDigitError } from "./errors";
import type { NumeroProcessoComponents } from "./models";

/**
 * Calculate the check digit using módulo 97 base 10 algorithm
 *
 * According to CNJ Resolution 65/2008:
 * 1. Construct the number with dv = "00": NNNNNNNAAAA0TROOOO00
 * 2. Calculate: remainder = number % 97
 * 3. Check digit = 98 - remainder
 *
 * @param components - Process number components (without validated dv)
 * @returns The calculated check digit (0-97)
 */
const calculateCheckDigit = (components: NumeroProcessoComponents): number => {
  const { sequencial, ano, id_orgao, id_tribunal, id_unidade_origem } =
    components;

  // Build the number with dv = "00"
  const numberWithoutDV =
    sequencial * 100000000000 +
    ano * 10000000 +
    id_orgao * 1000000 +
    id_tribunal * 10000 +
    id_unidade_origem * 100;

  // Apply módulo 97 algorithm
  const remainder = numberWithoutDV % 97;
  return 98 - remainder;
};

/**
 * Validate the check digit of a process number
 *
 * @param components - Process number components including the dv to validate
 * @returns Effect that succeeds if check digit is valid, fails with InvalidCheckDigitError otherwise
 *
 * @example
 * ```typescript
 * const components = yield* parseNumeroProcesso("0722391-40.2017.8.07.0001");
 * yield* validateCheckDigit(components); // Succeeds if dv is correct
 * ```
 */
export const validateCheckDigit = (
  components: NumeroProcessoComponents
): Effect.Effect<void, InvalidCheckDigitError> =>
  Effect.gen(function* () {
    const expectedDigit = calculateCheckDigit(components);

    if (expectedDigit !== components.dv) {
      return yield* Effect.fail(
        new InvalidCheckDigitError({
          processNumber: `${components.sequencial}${components.dv}${components.ano}${components.id_orgao}${components.id_tribunal}${components.id_unidade_origem}`,
          expectedDigit,
          actualDigit: components.dv,
        })
      );
    }
  });

/**
 * Calculate and return the expected check digit for a process number
 * This is useful when you want to know what the check digit should be without validating
 *
 * @param components - Process number components
 * @returns The calculated check digit
 */
export const getExpectedCheckDigit = (
  components: NumeroProcessoComponents
): number => calculateCheckDigit(components);
