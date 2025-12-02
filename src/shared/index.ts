/**
 * Shared Module
 *
 * Re-exports common utilities, schemas, and policies used across the application.
 */

export {
  createRetryPolicy,
  httpRetrySchedule,
  withNetworkRetry,
} from "./retry-policy";

export {
  type BnpAdvancedSearchParams,
  BnpAdvancedSearchParamsSchema,
  type BnpSearchParams,
  // BNP schemas
  BnpSearchParamsSchema,
  type BnpSortOrder,
  BnpSortOrderLiteral,
  type DatajudAdvancedSearchParams,
  DatajudAdvancedSearchParamsSchema,
  type DatajudProcessParams,
  // Datajud schemas
  DatajudProcessParamsSchema,
  type FalcaoAdvancedSearchParams,
  FalcaoAdvancedSearchParamsSchema,
  type FalcaoDocumentCountParams,
  FalcaoDocumentCountParamsSchema,
  type FalcaoDocumentParams,
  FalcaoDocumentParamsSchema,
  // Types
  type FalcaoDocumentType,
  // Literals
  FalcaoDocumentTypeLiteral,
  type FalcaoSearchParams,
  // Falcao schemas
  FalcaoSearchParamsSchema,
  type ParseProcessNumberParams,
  // Utility schemas
  ParseProcessNumberParamsSchema,
} from "./tool-schemas";
