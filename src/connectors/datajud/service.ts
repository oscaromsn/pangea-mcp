/**
 * Datajud Service Interface
 * Contract-driven service for searching judicial process metadata
 */

import {
  HttpBody,
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from "@effect/platform";
import { Effect, Match } from "effect";
import {
  inferTribunalAlias,
  parseNumeroProcesso,
} from "../../domain/numero-processo";
import { DATAJUD_BASE_URL, DATAJUD_PUBLIC_API_KEY } from "./config";
import {
  DatajudApiError,
  DatajudNetworkError,
  DatajudValidationError,
} from "./errors";
import type { DatajudSearchOptions } from "./query-types";
import { DatajudSearchResponse } from "./schema";

/**
 * Datajud Service - Interface for searching Brazilian judicial process metadata
 *
 * This service provides access to the Datajud public API for retrieving
 * process metadata from Brazilian courts.
 */
export class DatajudService extends Effect.Service<DatajudService>()(
  "app/DatajudService",
  {
    effect: Effect.gen(function* () {
      const httpClient = yield* HttpClient.HttpClient;

      return {
        /**
         * Search for judicial process metadata
         *
         * This method automatically:
         * - Infers the tribunal alias from the process number (supports all 91 DataJud endpoints)
         * - Normalizes the process number (handles both formatted and unformatted input)
         * - Constructs the Elasticsearch query (or uses provided custom query)
         *
         * @param processNumber - Brazilian judicial process number (formatted or unformatted)
         *                        Examples: "0722391-40.2017.8.07.0001" or "07223914020178070001"
         *                        Used for automatic tribunal inference (required)
         * @param options - Search configuration with type-safe Elasticsearch Query DSL
         * @returns Effect that succeeds with validated search response or fails with domain errors
         *
         * @example
         * // Simple search by process number
         * const result = yield* datajudService.searchProcessMetadata("00008323520184013202");
         *
         * @example
         * // Advanced filter: Search by class and judging body
         * const result = yield* datajudService.searchProcessMetadata("07223914020178070001", {
         *   query: {
         *     bool: {
         *       must: [
         *         { match: { "classe.codigo": 1116 } },
         *         { match: { "orgaoJulgador.codigo": 13597 } }
         *       ]
         *     }
         *   },
         *   size: 100
         * });
         *
         * @example
         * // Pagination with search_after
         * const page1 = yield* datajudService.searchProcessMetadata("07223914020178070001", {
         *   query: {
         *     bool: {
         *       must: [
         *         { match: { "classe.codigo": 1116 } },
         *         { match: { "orgaoJulgador.codigo": 13597 } }
         *       ]
         *     }
         *   },
         *   size: 100,
         *   sort: [{ "@timestamp": { order: "asc" } }]
         * });
         *
         * const lastHit = page1.hits.hits[page1.hits.hits.length - 1];
         * const page2 = yield* datajudService.searchProcessMetadata("07223914020178070001", {
         *   query: {
         *     bool: {
         *       must: [
         *         { match: { "classe.codigo": 1116 } },
         *         { match: { "orgaoJulgador.codigo": 13597 } }
         *       ]
         *     }
         *   },
         *   size: 100,
         *   sort: [{ "@timestamp": { order: "asc" } }],
         *   search_after: lastHit.sort
         * });
         */
        searchProcessMetadata: (
          processNumber: string,
          options?: DatajudSearchOptions
        ) =>
          Effect.gen(function* () {
            // Parse the process number to extract components and validate format
            const components = yield* parseNumeroProcesso(processNumber);

            // Get the unformatted (normalized) process number for DataJud API
            // DataJud stores process numbers without formatting (20 digits)
            const normalizedProcessNumber = `${components.sequencial.toString().padStart(7, "0")}${components.dv.toString().padStart(2, "0")}${components.ano}${components.id_orgao}${components.id_tribunal.toString().padStart(2, "0")}${components.id_unidade_origem.toString().padStart(4, "0")}`;

            // Automatically infer the tribunal alias from the process number
            const tribunalAlias = yield* inferTribunalAlias(processNumber);

            // Build the complete Elasticsearch request body
            // If custom query provided, use it; otherwise, default to match query on process number
            const requestBody = {
              query: options?.query ?? {
                match: {
                  numeroProcesso: normalizedProcessNumber,
                },
              },
              size: options?.size ?? 10,
              ...(options?.sort && { sort: options.sort }),
              ...(options?.search_after && {
                search_after: options.search_after,
              }),
            };

            const url = `${DATAJUD_BASE_URL}api_publica_${tribunalAlias}/_search`;

            // Make the HTTP request with proper headers and body
            const request = HttpClientRequest.post(url).pipe(
              HttpClientRequest.setHeader(
                "Authorization",
                `APIKey ${DATAJUD_PUBLIC_API_KEY}`
              ),
              HttpClientRequest.setHeader("Content-Type", "application/json"),
              HttpClientRequest.setBody(HttpBody.unsafeJson(requestBody))
            );

            // Execute request and handle response with proper error mapping
            return yield* httpClient.execute(request).pipe(
              Effect.flatMap(
                HttpClientResponse.schemaBodyJson(DatajudSearchResponse)
              ),
              Effect.scoped,
              Effect.catchAll((error) =>
                Match.value(error).pipe(
                  Match.tags({
                    RequestError: (e) =>
                      Effect.fail(
                        new DatajudNetworkError({
                          message: `Network error while calling Datajud API: ${e.reason}`,
                          cause: e,
                        })
                      ),
                    ResponseError: (e) =>
                      Effect.fail(
                        new DatajudApiError({
                          status: e.response.status,
                          statusText: `HTTP ${e.response.status}`,
                          details: e.reason,
                          tribunal: tribunalAlias,
                        })
                      ),
                    ParseError: (e) =>
                      Effect.fail(
                        new DatajudValidationError({
                          message: `Response validation failed: ${e.message}`,
                          tribunal: tribunalAlias,
                        })
                      ),
                  }),
                  Match.exhaustive
                )
              )
            );
          }),
      };
    }),
  }
) {}
