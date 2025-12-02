/**
 * Shared Tool Input Schemas
 *
 * Common input schemas used by both Agent and MCP tool definitions.
 * These schemas define the core parameter types for legal research operations.
 */

import { Schema } from "effect";

// =============================================================================
// BNP (Banco Nacional de Precedentes) Schemas
// =============================================================================

/**
 * Document type literals for Falcao labor law searches
 */
export const FalcaoDocumentTypeLiteral = Schema.Literal(
  "acordaos",
  "precedentes",
  "sentencas",
  "decisoesmonocraticas",
  "recursorevista",
  "precedentesBNP"
);

export type FalcaoDocumentType = Schema.Schema.Type<
  typeof FalcaoDocumentTypeLiteral
>;

/**
 * Sort order literals for BNP searches
 */
export const BnpSortOrderLiteral = Schema.Literal(
  "Textual",
  "Cronologica Ascendente",
  "Cronologica Descendente"
);

export type BnpSortOrder = Schema.Schema.Type<typeof BnpSortOrderLiteral>;

/**
 * Core BNP search parameters
 * Used by both simple and advanced BNP search tools
 */
export const BnpSearchParamsSchema = Schema.Struct({
  /** Primary search query */
  query: Schema.optional(Schema.String),
  /** Court codes to filter by (e.g., ['STF', 'STJ', 'TST']) */
  orgaos: Schema.optional(Schema.Array(Schema.String)),
  /** Precedent type codes to filter by (e.g., ['SUM', 'RG']) */
  tipos: Schema.optional(Schema.Array(Schema.String)),
  /** Page number for pagination */
  page: Schema.optional(Schema.Int.pipe(Schema.positive())),
});

export type BnpSearchParams = Schema.Schema.Type<typeof BnpSearchParamsSchema>;

/**
 * Advanced BNP search parameters with boolean operators
 */
export const BnpAdvancedSearchParamsSchema = Schema.Struct({
  /** Primary search query */
  query: Schema.String,
  /** AND operator - all words must be present */
  allWords: Schema.optional(Schema.String),
  /** OR operator - at least one word must be present */
  anyWords: Schema.optional(Schema.String),
  /** NOT operator - exclude these words */
  excludeWords: Schema.optional(Schema.String),
  /** Exact phrase match */
  exactPhrase: Schema.optional(Schema.String),
  /** Court codes (comma-separated or array) */
  courts: Schema.optional(Schema.String),
  /** Precedent type codes (comma-separated or array) */
  types: Schema.optional(Schema.String),
  /** Include cancelled/suspended precedents */
  includeCancelled: Schema.optional(Schema.Boolean),
  /** Sort order */
  sortBy: Schema.optional(BnpSortOrderLiteral),
  /** Page number */
  page: Schema.optional(Schema.Int.pipe(Schema.positive())),
});

export type BnpAdvancedSearchParams = Schema.Schema.Type<
  typeof BnpAdvancedSearchParamsSchema
>;

// =============================================================================
// Falcao (Labor Law Jurisprudence) Schemas
// =============================================================================

/**
 * Core Falcao search parameters
 */
export const FalcaoSearchParamsSchema = Schema.Struct({
  /** Search query text */
  query: Schema.String,
  /** Document type to search */
  documentType: Schema.optional(FalcaoDocumentTypeLiteral),
  /** Tribunal codes to filter by */
  tribunals: Schema.optional(Schema.Array(Schema.String)),
  /** Page number (0-indexed) */
  page: Schema.optional(Schema.Int.pipe(Schema.nonNegative())),
});

export type FalcaoSearchParams = Schema.Schema.Type<
  typeof FalcaoSearchParamsSchema
>;

/**
 * Advanced Falcao search parameters with date and judge filters
 */
export const FalcaoAdvancedSearchParamsSchema = Schema.Struct({
  /** Search query text */
  query: Schema.String,
  /** Document type */
  documentType: Schema.optional(
    Schema.Literal(
      "acordaos",
      "precedentes",
      "sentencas",
      "decisoesmonocraticas",
      "recursorevista"
    )
  ),
  /** Tribunal codes (comma-separated string) */
  tribunals: Schema.optional(Schema.String),
  /** Start date in DD/MM/YYYY format */
  dateStart: Schema.optional(Schema.String),
  /** End date in DD/MM/YYYY format */
  dateEnd: Schema.optional(Schema.String),
  /** Reporting judge name filter */
  judgeReporter: Schema.optional(Schema.String),
  /** Process number filter */
  processNumber: Schema.optional(Schema.String),
  /** Page number */
  page: Schema.optional(Schema.Int.pipe(Schema.nonNegative())),
});

export type FalcaoAdvancedSearchParams = Schema.Schema.Type<
  typeof FalcaoAdvancedSearchParamsSchema
>;

/**
 * Falcao document retrieval parameters
 */
export const FalcaoDocumentParamsSchema = Schema.Struct({
  /** Tribunal code (e.g., 'TST', 'TRT1') */
  tribunal: Schema.String,
  /** Document ID from search results */
  documentId: Schema.String,
});

export type FalcaoDocumentParams = Schema.Schema.Type<
  typeof FalcaoDocumentParamsSchema
>;

/**
 * Falcao document count parameters
 */
export const FalcaoDocumentCountParamsSchema = Schema.Struct({
  /** Search query */
  query: Schema.String,
  /** Optional tribunal filter (comma-separated) */
  tribunals: Schema.optional(Schema.String),
});

export type FalcaoDocumentCountParams = Schema.Schema.Type<
  typeof FalcaoDocumentCountParamsSchema
>;

// =============================================================================
// Datajud (Process Metadata) Schemas
// =============================================================================

/**
 * Datajud process lookup parameters
 */
export const DatajudProcessParamsSchema = Schema.Struct({
  /** CNJ process number (20 digits, formatted or unformatted) */
  processNumber: Schema.String,
});

export type DatajudProcessParams = Schema.Schema.Type<
  typeof DatajudProcessParamsSchema
>;

/**
 * Advanced Datajud search parameters
 */
export const DatajudAdvancedSearchParamsSchema = Schema.Struct({
  /** Tribunal alias (e.g., 'tjsp', 'tst', 'stj') */
  tribunal: Schema.String,
  /** Process class code */
  processClass: Schema.optional(Schema.Number),
  /** Judicial body code */
  courtCode: Schema.optional(Schema.Number),
  /** Start date filter (ISO format YYYY-MM-DD) */
  dateFrom: Schema.optional(Schema.String),
  /** End date filter (ISO format YYYY-MM-DD) */
  dateTo: Schema.optional(Schema.String),
  /** Number of results to return (1-100) */
  size: Schema.optional(Schema.Number),
});

export type DatajudAdvancedSearchParams = Schema.Schema.Type<
  typeof DatajudAdvancedSearchParamsSchema
>;

// =============================================================================
// Utility Schemas
// =============================================================================

/**
 * Process number parsing parameters
 */
export const ParseProcessNumberParamsSchema = Schema.Struct({
  /** Brazilian process number in any format */
  processNumber: Schema.String,
});

export type ParseProcessNumberParams = Schema.Schema.Type<
  typeof ParseProcessNumberParamsSchema
>;
