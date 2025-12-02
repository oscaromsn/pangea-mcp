/**
 * MCP Tool Handlers - Toolkit Implementation
 *
 * Implements the business logic for each MCP tool by delegating to
 * the LegalResearchService (shared business logic) and session management.
 *
 * Uses the Toolkit.toLayer pattern to create handlers as an Effect Layer.
 *
 * Architecture:
 * - LegalResearchService: Core business logic (API calls, data transformation)
 * - MCP Handlers: JSON formatting for MCP protocol responses
 *
 * LOGGING CONSTRAINT:
 * All Effect.log* calls in this file are routed to stderr via the Logger
 * configured in server.ts (Logger.prettyLogger({ stderr: true })). This is
 * CRITICAL because stdout is reserved for JSON-RPC protocol messages - any
 * stdout output would corrupt the MCP communication channel.
 *
 * Safe to use: Effect.logInfo, Effect.logDebug, Effect.logError, Effect.logWarning
 * These all write to stderr when the server's logger layer is provided.
 */

import { Effect, Layer } from "effect";
import { SessionService } from "../services/session-service";
import { LegalResearchService } from "../usecases/legal-research";
import {
  COURT_CODES,
  DEFAULT_COURTS,
  DEFAULT_TYPES,
  PRECEDENT_TYPES,
} from "./constants";
import { formatBnpResults, stripHtml } from "./formatting";
import { PangeaToolkit } from "./tools";

// COURT_CODES, PRECEDENT_TYPES, DEFAULT_COURTS, DEFAULT_TYPES imported from ./constants

/**
 * Error hints for agent self-correction
 * Provides actionable guidance to help agents recover from errors
 */
const ERROR_HINTS: Record<string, string> = {
  DatajudValidationError:
    "Process number must be exactly 20 digits. Format: NNNNNNN-DD.AAAA.J.TR.OOOO or unformatted.",
  DatajudApiError:
    "Check if the process number format is correct and the tribunal is supported.",
  BnpValidationError:
    "Ensure both 'orgaos' and 'tipos' are provided. Use get_available_courts and get_precedent_types tools for valid codes.",
  BnpApiError:
    "The BNP API returned an error. Try simplifying your search query or reducing filters.",
  FalcaoValidationError:
    "Check search parameters. Use valid document_type: 'acordaos', 'precedentes', 'sentencas', or 'decisoesmonocraticas'.",
  FalcaoApiError:
    "The Falcão API returned an error. Try a different search query or check tribunal availability.",
  InvalidProcessNumberFormatError:
    "Process number format is invalid. Expected 20 digits: NNNNNNN-DD.AAAA.J.TR.OOOO",
  UnsupportedTribunalError:
    "This tribunal is not supported by DataJud. Use a supported tribunal alias.",
};

/**
 * Helper function to format errors for MCP tool responses
 * Extracts appropriate error message based on error type and adds hints for agent self-correction
 * Note: Error logging is handled via Effect.logError in handler pipelines
 */
function formatError(error: unknown): string {
  let errorMessage = "Unknown error";
  let errorTag = "UnknownError";
  let hint: string | undefined;

  if (typeof error === "object" && error !== null && "_tag" in error) {
    errorTag = String((error as { _tag: unknown })._tag);
    hint = ERROR_HINTS[errorTag];

    // Handle BnpApiError specially (has status, statusText, details)
    if (
      errorTag === "BnpApiError" &&
      "status" in error &&
      "statusText" in error &&
      "details" in error
    ) {
      const statusText = (error as { statusText: unknown }).statusText;
      const details = (error as { details: unknown }).details;
      errorMessage = `API Error: ${statusText} - ${details}`;
    }
    // Handle DatajudApiError (has status, tribunal)
    else if (
      errorTag === "DatajudApiError" &&
      "status" in error &&
      "tribunal" in error
    ) {
      const status = (error as { status: unknown }).status;
      const tribunal = (error as { tribunal: unknown }).tribunal;
      errorMessage = `DataJud API Error (${tribunal}): HTTP ${status}`;
    }
    // Handle FalcaoApiError (has status)
    else if (errorTag === "FalcaoApiError" && "status" in error) {
      const status = (error as { status: unknown }).status;
      errorMessage = `Falcão API Error: HTTP ${status}`;
    }
    // Handle BnpValidationError (filter validation failures)
    else if (errorTag === "BnpValidationError") {
      if (
        "message" in error &&
        typeof (error as { message: unknown }).message === "string"
      ) {
        errorMessage = (error as { message: string }).message;
      } else {
        errorMessage = "Validation Error: Invalid search parameters";
      }
    }
    // Handle errors with message property
    else if (
      "message" in error &&
      typeof (error as { message: unknown }).message === "string"
    ) {
      errorMessage = (error as { message: string }).message;
    }
    // Fallback to just the tag name
    else {
      errorMessage = `Error: ${errorTag}`;
    }
  }

  return JSON.stringify(
    {
      success: false,
      error: errorTag,
      message: errorMessage,
      ...(hint && { hint }),
    },
    null,
    2
  );
}

/**
 * Pangea Tool Handlers Layer
 *
 * Creates a Layer that provides implementations for all Pangea toolkit methods.
 * All handlers return Effect<string> where the string is JSON-formatted response data.
 */
export const PangeaToolHandlersLive = PangeaToolkit.toLayer(
  Effect.gen(function* () {
    const legalResearch = yield* LegalResearchService;
    const sessionService = yield* SessionService;

    return {
      /**
       * Search jurisprudence handler
       */
      search_jurisprudence: (params: {
        readonly busca_geral?: string | undefined;
        readonly todas_palavras?: string | undefined;
        readonly quaisquer_palavras?: string | undefined;
        readonly sem_palavras?: string | undefined;
        readonly trecho_exato?: string | undefined;
        readonly pagina?: number | undefined;
        readonly tamanho_pagina?: number | undefined;
        readonly orgaos?: readonly string[] | undefined;
        readonly tipos?: readonly string[] | undefined;
      }) =>
        Effect.gen(function* () {
          // Apply smart defaults when not provided
          const effectiveOrgaos =
            params.orgaos && params.orgaos.length > 0
              ? [...params.orgaos]
              : [...DEFAULT_COURTS];

          const effectiveTipos =
            params.tipos && params.tipos.length > 0
              ? [...params.tipos]
              : [...DEFAULT_TYPES];

          const result = yield* legalResearch.searchBnp({
            query: params.busca_geral,
            allWords: params.todas_palavras,
            anyWords: params.quaisquer_palavras,
            excludeWords: params.sem_palavras,
            exactPhrase: params.trecho_exato,
            page: params.pagina,
            courts: effectiveOrgaos,
            types: effectiveTipos,
          });

          // Add to search history
          yield* sessionService.addToHistory(params, result.total);

          // Format and return response with cleaned/flattened results
          return JSON.stringify(
            {
              success: true,
              total: result.total,
              page: result.page,
              page_size: result.pageSize,
              results: formatBnpResults(result.results),
              aggregations: {
                types: result.aggregations.byType,
                courts: result.aggregations.byCourt,
              },
            },
            null,
            2
          );
        }).pipe(
          Effect.tapError((error) =>
            Effect.logError("search_jurisprudence failed", error)
          ),
          Effect.catchAll((error) => Effect.succeed(formatError(error))),
          Effect.withSpan("MCP.search_jurisprudence", {
            attributes: { busca_geral: params.busca_geral },
          })
        ),

      /**
       * Search by court handler
       */
      search_by_court: (params: {
        readonly busca_geral: string;
        readonly orgaos: readonly string[];
        readonly tipos: readonly string[];
        readonly pagina?: number | undefined;
        readonly tamanho_pagina?: number | undefined;
      }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch.searchBnp({
            query: params.busca_geral,
            courts: [...params.orgaos],
            types: [...params.tipos],
            page: params.pagina,
            // Note: tamanho_pagina accepted but not sent (API always returns 10 results)
          });

          return JSON.stringify(
            {
              success: true,
              total: result.total,
              courts_filter: params.orgaos,
              types_filter: params.tipos,
              results: result.results,
            },
            null,
            2
          );
        }).pipe(
          Effect.tapError((error) =>
            Effect.logError("search_by_court failed", error)
          ),
          Effect.catchAll((error) => Effect.succeed(formatError(error))),
          Effect.withSpan("MCP.search_by_court", {
            attributes: { busca_geral: params.busca_geral },
          })
        ),

      /**
       * Search by type handler
       */
      search_by_type: (params: {
        readonly busca_geral: string;
        readonly tipos: readonly string[];
        readonly orgaos: readonly string[];
        readonly pagina?: number | undefined;
        readonly tamanho_pagina?: number | undefined;
      }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch.searchBnp({
            query: params.busca_geral,
            types: [...params.tipos],
            courts: [...params.orgaos],
            page: params.pagina,
            // Note: tamanho_pagina accepted but not sent (API always returns 10 results)
          });

          return JSON.stringify(
            {
              success: true,
              total: result.total,
              types_filter: params.tipos,
              courts_filter: params.orgaos,
              results: result.results,
            },
            null,
            2
          );
        }).pipe(
          Effect.tapError((error) =>
            Effect.logError("search_by_type failed", error)
          ),
          Effect.catchAll((error) => Effect.succeed(formatError(error))),
          Effect.withSpan("MCP.search_by_type", {
            attributes: { busca_geral: params.busca_geral },
          })
        ),

      /**
       * Get available courts handler
       */
      get_available_courts: () =>
        Effect.succeed(
          JSON.stringify(
            {
              description: "Brazilian court system hierarchy",
              total_courts: Object.values(COURT_CODES).reduce(
                (acc, category) => acc + Object.keys(category).length,
                0
              ),
              categories: COURT_CODES,
              usage_hint: "Use these codes in 'orgaos' parameter",
            },
            null,
            2
          )
        ).pipe(Effect.withSpan("MCP.get_available_courts")),

      /**
       * Get precedent types handler
       */
      get_precedent_types: () =>
        Effect.succeed(
          JSON.stringify(
            {
              description: "Types of legal precedents in Brazilian system",
              total_types: Object.keys(PRECEDENT_TYPES).length,
              precedent_types: PRECEDENT_TYPES,
              usage_hint: "Use these codes in 'tipos' parameter",
            },
            null,
            2
          )
        ).pipe(Effect.withSpan("MCP.get_precedent_types")),

      /**
       * Save search handler
       */
      save_search: (params: {
        readonly name: string;
        readonly search_params: unknown;
        readonly results: unknown;
      }) =>
        Effect.gen(function* () {
          yield* sessionService.saveSearch(
            params.name,
            params.search_params,
            params.results
          );

          return JSON.stringify({
            success: true,
            message: `Search '${params.name}' saved successfully`,
          });
        }).pipe(
          Effect.withSpan("MCP.save_search", {
            attributes: { name: params.name },
          })
        ),

      /**
       * Analyze results handler
       */
      analyze_results: (params: { readonly results: unknown }) =>
        Effect.gen(function* () {
          const analysis = yield* sessionService.analyzeResults(
            params.results as {
              resultados?: Array<{
                orgao?: string;
                tipo?: string;
                situacao?: string;
                ultimaAtualizacao?: string;
              }>;
            }
          );

          return JSON.stringify(
            {
              success: true,
              analysis,
            },
            null,
            2
          );
        }).pipe(Effect.withSpan("MCP.analyze_results")),

      /**
       * Get process details handler (DataJud)
       */
      get_process_details: (params: { readonly process_number: string }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch.getProcessDetails(
            params.process_number
          );

          if (!result.found || !result.process) {
            return JSON.stringify({
              success: true,
              found: false,
              message: "No process found with that number",
            });
          }

          return JSON.stringify(
            {
              success: true,
              found: true,
              process: {
                number: result.process.number,
                tribunal: result.process.tribunal,
                court: result.process.court,
                class: result.process.class,
                subjects: result.process.subjects,
                filingDate: result.process.filingDate,
                degree: result.process.degree,
                system: result.process.system,
              },
            },
            null,
            2
          );
        }).pipe(
          Effect.tapError((error) =>
            Effect.logError("get_process_details failed", error)
          ),
          Effect.catchAll((error) => Effect.succeed(formatError(error))),
          Effect.withSpan("MCP.get_process_details", {
            attributes: { process_number: params.process_number },
          })
        ),

      /**
       * Search labor jurisprudence handler (Falcão)
       */
      search_labor_jurisprudence: (params: {
        readonly query: string;
        readonly document_type?:
          | "acordaos"
          | "precedentes"
          | "sentencas"
          | "decisoesmonocraticas"
          | undefined;
        readonly page?: number | undefined;
      }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch.searchFalcao({
            query: params.query,
            documentType: params.document_type ?? "acordaos",
            page: params.page ?? 0,
          });

          // Format response for agent consumption
          return JSON.stringify(
            {
              success: true,
              total: result.total,
              page: result.page,
              results: result.documents.map((doc) => ({
                id: "id" in doc ? doc.id : undefined,
                tribunal: doc.tribunal,
                process_number:
                  "numeroProcesso" in doc ? doc.numeroProcesso : undefined,
                rapporteur: "relator" in doc ? doc.relator : undefined,
                summary:
                  "ementa" in doc ? stripHtml(doc.ementa as string) : undefined,
                judgment_date:
                  "dataJulgamento" in doc ? doc.dataJulgamento : undefined,
                class: "classeProcesso" in doc ? doc.classeProcesso : undefined,
                link: "link" in doc ? doc.link : undefined,
                paradigm_processes:
                  "processosParadigma" in doc && doc.processosParadigma
                    ? (
                        doc.processosParadigma as ReadonlyArray<{
                          numero: string;
                          link: string;
                        }>
                      ).map((p) => ({
                        number: p.numero,
                        link: p.link,
                      }))
                    : undefined,
              })),
            },
            null,
            2
          );
        }).pipe(
          Effect.tapError((error) =>
            Effect.logError("search_labor_jurisprudence failed", error)
          ),
          Effect.catchAll((error) => Effect.succeed(formatError(error))),
          Effect.withSpan("MCP.search_labor_jurisprudence", {
            attributes: { query: params.query },
          })
        ),
    };
  })
).pipe(
  // Provide LegalResearchService (which internally provides connector services) and SessionService
  Layer.provide(
    Layer.mergeAll(LegalResearchService.Default, SessionService.Default)
  )
);
