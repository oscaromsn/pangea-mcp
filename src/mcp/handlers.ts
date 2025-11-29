/**
 * MCP Tool Handlers - Toolkit Implementation
 *
 * Implements the business logic for each MCP tool by delegating to
 * connector services (BnpService) and session management (SessionService).
 *
 * Uses the Toolkit.toLayer pattern to create handlers as an Effect Layer.
 */

import { Effect, Layer } from "effect";
import { BnpService, BnpServiceLive } from "../connectors/bnp";
import { DatajudService, DatajudServiceLive } from "../connectors/datajud";
import { FalcaoService, FalcaoServiceLive } from "../connectors/falcao";
import { SessionService } from "../services/session-service";
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
 */
function formatError(error: unknown, context: string): string {
  // Log full error to stderr for debugging
  console.error(`❌ ${context} error:`, error);

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
    const bnpService = yield* BnpService;
    const datajudService = yield* DatajudService;
    const falcaoService = yield* FalcaoService;
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

          const serviceParams = {
            buscaGeral: params.busca_geral,
            todasPalavras: params.todas_palavras,
            quaisquerPalavras: params.quaisquer_palavras,
            semPalavras: params.sem_palavras,
            trechoExato: params.trecho_exato,
            pagina: params.pagina,
            orgaos: effectiveOrgaos,
            tipos: effectiveTipos,
          };

          const result = yield* bnpService.searchPrecedents(serviceParams);

          // Add to search history
          yield* sessionService.addToHistory(params, result.total);

          // Format and return response with cleaned/flattened results
          return JSON.stringify(
            {
              success: true,
              total: result.total,
              page: params.pagina ?? 1,
              page_size: 10, // API always returns 10 results
              results: formatBnpResults(result.resultados),
              aggregations: {
                types: result.aggsEspecies.map((a) => ({
                  code: a.tipo,
                  count: a.total,
                })),
                courts: result.aggsOrgaos.map((a) => ({
                  code: a.tipo,
                  count: a.total,
                })),
              },
            },
            null,
            2
          );
        }).pipe(
          Effect.catchAll((error) =>
            Effect.succeed(formatError(error, "search_jurisprudence"))
          )
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
          const serviceParams = {
            buscaGeral: params.busca_geral,
            orgaos: [...params.orgaos],
            tipos: [...params.tipos],
            pagina: params.pagina,
            // Note: tamanho_pagina accepted but not sent (API always returns 10 results)
          };

          const result = yield* bnpService.searchPrecedents(serviceParams);

          return JSON.stringify(
            {
              success: true,
              total: result.total,
              courts_filter: params.orgaos,
              types_filter: params.tipos,
              results: result.resultados,
            },
            null,
            2
          );
        }).pipe(
          Effect.catchAll((error) =>
            Effect.succeed(formatError(error, "search_by_court"))
          )
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
          const result = yield* bnpService.searchPrecedents({
            buscaGeral: params.busca_geral,
            tipos: [...params.tipos],
            orgaos: [...params.orgaos],
            pagina: params.pagina,
            // Note: tamanho_pagina accepted but not sent (API always returns 10 results)
          });

          return JSON.stringify(
            {
              success: true,
              total: result.total,
              types_filter: params.tipos,
              courts_filter: params.orgaos,
              results: result.resultados,
            },
            null,
            2
          );
        }).pipe(
          Effect.catchAll((error) =>
            Effect.succeed(formatError(error, "search_by_type"))
          )
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
        ),

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
        ),

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
        }),

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
        }),

      /**
       * Get process details handler (DataJud)
       */
      get_process_details: (params: { readonly process_number: string }) =>
        Effect.gen(function* () {
          const result = yield* datajudService.searchProcessMetadata(
            params.process_number
          );

          // Format response for agent consumption
          const hits = result.hits.hits;
          const firstHit = hits[0];
          if (!firstHit) {
            return JSON.stringify({
              success: true,
              found: false,
              message: "No process found with that number",
            });
          }

          const process = firstHit._source;
          // Normalize assuntos - array of (single object | array of objects)
          const subjectsList = (process.assuntos ?? []).flatMap((item) => {
            // Check if item is an array by checking for 'length' property
            if ("length" in item) {
              return (item as ReadonlyArray<{ nome: string }>).map(
                (a) => a.nome
              );
            }
            return [item.nome];
          });

          return JSON.stringify(
            {
              success: true,
              found: true,
              process: {
                number: process.numeroProcesso,
                tribunal: process.tribunal,
                court: process.orgaoJulgador?.nome,
                class: process.classe?.nome,
                subjects: subjectsList,
                filingDate: process.dataAjuizamento,
                degree: process.grau,
                system: process.sistema?.nome,
              },
            },
            null,
            2
          );
        }).pipe(
          Effect.catchAll((error) =>
            Effect.succeed(formatError(error, "get_process_details"))
          )
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
          const result = yield* falcaoService.search({
            texto: params.query,
            colecao: params.document_type ?? "acordaos",
            page: params.page ?? 0,
            size: 10,
          });

          // Format response for agent consumption
          return JSON.stringify(
            {
              success: true,
              total: result.quantidadeTotal,
              page: params.page ?? 0,
              results: result.documentos.map((doc) => ({
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
              })),
            },
            null,
            2
          );
        }).pipe(
          Effect.catchAll((error) =>
            Effect.succeed(formatError(error, "search_labor_jurisprudence"))
          )
        ),
    };
  })
).pipe(
  // Provide service dependencies
  Layer.provide(
    Layer.mergeAll(
      BnpServiceLive,
      DatajudServiceLive,
      FalcaoServiceLive,
      SessionService.Default
    )
  )
);
