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
import { SessionService } from "../services/session-service";
import { PangeaToolkit } from "./tools";

/**
 * Court codes organized by hierarchy
 */
const COURT_CODES = {
  SUPREME_COURTS: {
    STF: "Supremo Tribunal Federal",
    STJ: "Superior Tribunal de Justiça",
    TST: "Tribunal Superior do Trabalho",
    STM: "Superior Tribunal Militar",
  },
  FEDERAL_COURTS: {
    TNU: "Turma Nacional de Uniformização",
    TRF01: "TRF 1ª Região",
    TRF02: "TRF 2ª Região",
    TRF03: "TRF 3ª Região",
    TRF04: "TRF 4ª Região",
    TRF05: "TRF 5ª Região",
    TRF06: "TRF 6ª Região",
  },
  // Add more court categories as needed
};

/**
 * Precedent type definitions
 */
const PRECEDENT_TYPES = {
  SUM: "Súmula",
  SV: "Súmula Vinculante",
  RG: "Repercussão Geral",
  IAC: "Incidente de Assunção de Competência",
  IRDR: "Incidente de Resolução de Demandas Repetitivas",
  RR: "Recursos Repetitivos",
};

/**
 * Helper function to format errors for MCP tool responses
 * Extracts appropriate error message based on error type
 */
function formatError(error: unknown, context: string): string {
  // Log full error to stderr for debugging
  console.error(`❌ ${context} error:`, error);

  let errorMessage = "Unknown error";
  let errorTag = "UnknownError";

  if (typeof error === "object" && error !== null && "_tag" in error) {
    errorTag = String((error as { _tag: unknown })._tag);

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
          const serviceParams = {
            buscaGeral: params.busca_geral,
            todasPalavras: params.todas_palavras,
            quaisquerPalavras: params.quaisquer_palavras,
            semPalavras: params.sem_palavras,
            trechoExato: params.trecho_exato,
            pagina: params.pagina,
            orgaos: params.orgaos ? [...params.orgaos] : undefined,
            tipos: params.tipos ? [...params.tipos] : undefined,
            // Note: tamanho_pagina is accepted from MCP but not sent to API (API always returns 10 results)
          };

          const result = yield* bnpService.searchPrecedents(serviceParams);

          // Add to search history
          yield* sessionService.addToHistory(params, result.total);

          // Format and return response
          return JSON.stringify(
            {
              success: true,
              total: result.total,
              page: params.pagina ?? 1,
              page_size: params.tamanho_pagina ?? 10,
              results: result.resultados,
              aggregations: {
                especies: result.aggsEspecies,
                orgaos: result.aggsOrgaos,
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
    };
  })
).pipe(
  // Provide service dependencies
  Layer.provide(Layer.mergeAll(BnpServiceLive, SessionService.Default))
);
