/**
 * Datajud Connector - Public API
 * Exports all public interfaces, types, errors, and layers for the Datajud connector
 */

// Configuration (if needed by consumers)
export { DATAJUD_BASE_URL, DATAJUD_PUBLIC_API_KEY } from "./config";
// Errors
export {
  DatajudApiError,
  DatajudNetworkError,
  DatajudValidationError,
} from "./errors";

// Schemas and Types
export {
  ComplementoTabelado,
  type ComplementoTabelado as ComplementoTabeladoType,
  DatajudHit,
  type DatajudHit as DatajudHitType,
  DatajudProcessSource,
  type DatajudProcessSource as DatajudProcessSourceType,
  DatajudSearchResponse,
  type DatajudSearchResponse as DatajudSearchResponseType,
  Movimento,
  type Movimento as MovimentoType,
  OrgaoJulgador,
  type OrgaoJulgador as OrgaoJulgadorType,
  SimpleCodeName,
  type SimpleCodeName as SimpleCodeNameType,
} from "./schema";
// Service and Implementation
export { DatajudService } from "./service";
export { DatajudServiceLive } from "./service.impl";
