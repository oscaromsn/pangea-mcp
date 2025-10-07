/**
 * Número Processo Domain Models
 * Schemas and types for Brazilian judicial process numbers (CNJ Resolution 65/2008)
 */

import { Schema } from "@effect/schema";
import { Brand } from "effect";

/**
 * Branded type for tribunal aliases to prevent accidental string usage
 * Example: "tjdft", "trf1", "trt2", "tre-sp"
 */
export type TribunalAlias = string & Brand.Brand<"TribunalAlias">;
export const TribunalAlias = Brand.nominal<TribunalAlias>();

/**
 * Justice segment identifiers according to CNJ Resolution 65/2008
 */
export enum JusticaSegment {
  STF = 1,
  CNJ = 2,
  STJ = 3,
  FEDERAL = 4,
  TRABALHO = 5,
  ELEITORAL = 6,
  MILITAR_UNIAO = 7,
  ESTADUAL = 8,
  MILITAR_ESTADUAL = 9,
}

/**
 * Parsed components of a judicial process number
 * Format: NNNNNNN-DD.AAAA.J.TR.OOOO
 * Where:
 * - sequencial (NNNNNNN): 7-digit sequential number
 * - dv (DD): 2-digit check digit (módulo 97)
 * - ano (AAAA): 4-digit year
 * - id_orgao (J): 1-digit justice segment identifier
 * - id_tribunal (TR): 2-digit court identifier
 * - id_unidade_origem (OOOO): 4-digit origin unit identifier
 */
export class NumeroProcessoComponents extends Schema.Class<NumeroProcessoComponents>(
  "NumeroProcessoComponents"
)({
  sequencial: Schema.Number.pipe(
    Schema.int(),
    Schema.greaterThanOrEqualTo(0),
    Schema.lessThan(10000000)
  ),
  dv: Schema.Number.pipe(
    Schema.int(),
    Schema.greaterThanOrEqualTo(0),
    Schema.lessThan(100)
  ),
  ano: Schema.Number.pipe(
    Schema.int(),
    Schema.greaterThanOrEqualTo(1000),
    Schema.lessThan(10000)
  ),
  id_orgao: Schema.Number.pipe(
    Schema.int(),
    Schema.greaterThanOrEqualTo(1),
    Schema.lessThanOrEqualTo(9)
  ),
  id_tribunal: Schema.Number.pipe(
    Schema.int(),
    Schema.greaterThanOrEqualTo(0),
    Schema.lessThan(100)
  ),
  id_unidade_origem: Schema.Number.pipe(
    Schema.int(),
    Schema.greaterThanOrEqualTo(0),
    Schema.lessThan(10000)
  ),
}) {}

/**
 * Input schema for process number validation
 * Accepts either:
 * - Formatted string: "NNNNNNN-DD.AAAA.J.TR.OOOO" (25 characters)
 * - Unformatted string: "NNNNNNNNDDAAAAJTROOOO" (20 characters)
 */
export const NumeroProcessoInput = Schema.String.pipe(
  Schema.filter((s) => s.length === 20 || s.length === 25, {
    message: () =>
      "Process number must be 20 digits (unformatted) or 25 characters (formatted NNNNNNN-DD.AAAA.J.TR.OOOO)",
  })
);

/**
 * Formatted process number schema
 * Format: NNNNNNN-DD.AAAA.J.TR.OOOO
 */
export const FormattedNumeroProcesso = Schema.String.pipe(
  Schema.pattern(/^\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}$/)
);
