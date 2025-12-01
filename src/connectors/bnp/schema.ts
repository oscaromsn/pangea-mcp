/**
 * BNP API Schemas
 * Effect Schema definitions for BNP (Banco Nacional de Precedentes) API responses
 */

import { Schema } from "effect";

/**
 * Precedent Search Filter - Input parameters for precedent search
 *
 * CRITICAL API CONSTRAINT:
 * The BNP API requires BOTH of the following to be non-empty:
 * - A non-empty `orgaos` array (court filters)
 * - A non-empty `tipos` array (precedent type filters)
 *
 * Searches with only one filter (or neither) will fail with HTTP 400.
 * Use ValidatedPrecedentSearchFilter to enforce this constraint after defaults are applied.
 */
export const PrecedentSearchFilter = Schema.Struct({
  // Required search fields (API needs these)
  buscaGeral: Schema.optional(Schema.String),
  cancelados: Schema.optional(Schema.Boolean),
  ordenacao: Schema.optional(
    Schema.Literal(
      "Textual",
      "Cronologica Ascendente",
      "Cronologica Descendente",
      "Numérica Ascendente",
      "Numérica Descendente"
    )
  ),
  orgaos: Schema.optional(Schema.Array(Schema.String)),
  pagina: Schema.optional(Schema.Int.pipe(Schema.positive())),
  // Note: The BNP API does not support a page size parameter - it always returns 10 results per page
  tipos: Schema.optional(Schema.Array(Schema.String)),
  // Truly optional fields (no defaults needed)
  todasPalavras: Schema.optional(Schema.String),
  quaisquerPalavras: Schema.optional(Schema.String),
  semPalavras: Schema.optional(Schema.String),
  trechoExato: Schema.optional(Schema.String),
});

export type PrecedentSearchFilter = Schema.Schema.Type<
  typeof PrecedentSearchFilter
>;

/**
 * Validated Precedent Search Filter - Enforces BNP API constraint
 *
 * This schema ensures that both `orgaos` AND `tipos` arrays are non-empty
 * after defaults are applied. The BNP API returns HTTP 400 if either is missing.
 */
export const ValidatedPrecedentSearchFilter = PrecedentSearchFilter.pipe(
  Schema.filter(
    (filter) => {
      const hasOrgaos = filter.orgaos !== undefined && filter.orgaos.length > 0;
      const hasTipos = filter.tipos !== undefined && filter.tipos.length > 0;
      return hasOrgaos && hasTipos;
    },
    {
      message: () =>
        "BNP API requires BOTH filters: 'orgaos' (courts) AND 'tipos' (precedent types) must both be provided with non-empty values.",
    }
  )
);

export type ValidatedPrecedentSearchFilter = Schema.Schema.Type<
  typeof ValidatedPrecedentSearchFilter
>;

/**
 * Precedent Search Body - Request body structure
 */
export const PrecedentSearchBody = Schema.Struct({
  filtro: PrecedentSearchFilter,
});

export type PrecedentSearchBody = Schema.Schema.Type<
  typeof PrecedentSearchBody
>;

/**
 * Precedent - Individual precedent from search results
 */
export const Precedent = Schema.Struct({
  id: Schema.String,
  orgao: Schema.String,
  tipo: Schema.String,
  nr: Schema.Number,
  questao: Schema.optional(Schema.String),
  tese: Schema.optional(Schema.NullOr(Schema.String)),
  situacao: Schema.String,
  ultimaAtualizacao: Schema.optional(Schema.String),
  possuiDecisoes: Schema.optional(Schema.Boolean),
  processosParadigma: Schema.optional(
    Schema.Array(
      Schema.Struct({
        numero: Schema.String,
        link: Schema.optional(Schema.String),
      })
    )
  ),
  suspensoes: Schema.optional(
    Schema.Array(
      Schema.Struct({
        ativa: Schema.Boolean,
        dataSuspensao: Schema.String,
        descricao: Schema.String,
        linkDecisao: Schema.optional(Schema.String),
      })
    )
  ),
  highlight: Schema.optional(
    Schema.Record({ key: Schema.String, value: Schema.String })
  ),
  tese_snippet: Schema.optional(Schema.String),
});

export type Precedent = Schema.Schema.Type<typeof Precedent>;

/**
 * Aggregation - Facet aggregation for filtering
 */
export const Aggregation = Schema.Struct({
  tipo: Schema.String,
  total: Schema.Number,
});

export type Aggregation = Schema.Schema.Type<typeof Aggregation>;

/**
 * BNP Search Response - Complete API response
 */
export const BnpSearchResponse = Schema.Struct({
  total: Schema.Number,
  resultados: Schema.Array(Precedent),
  posicao_inicial: Schema.Number,
  posicao_final: Schema.Number,
  aggsEspecies: Schema.Array(Aggregation),
  aggsOrgaos: Schema.Array(Aggregation),
});

export type BnpSearchResponse = Schema.Schema.Type<typeof BnpSearchResponse>;
