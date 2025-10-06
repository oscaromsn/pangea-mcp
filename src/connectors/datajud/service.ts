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
import { DATAJUD_BASE_URL, DATAJUD_PUBLIC_API_KEY } from "./config";
import {
  DatajudApiError,
  DatajudNetworkError,
  DatajudValidationError,
} from "./errors";
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
         * Search for judicial process metadata using Elasticsearch Query DSL
         *
         * @param tribunalAlias - The tribunal identifier (e.g., "tjdft", "trf1")
         * @param queryDSL - Elasticsearch Query DSL object
         * @returns Effect that succeeds with validated search response or fails with domain errors
         */
        searchProcessMetadata: (tribunalAlias: string, queryDSL: unknown) =>
          Effect.gen(function* () {
            const url = `${DATAJUD_BASE_URL}api_publica_${tribunalAlias}/_search`;

            // Make the HTTP request with proper headers and body
            const request = HttpClientRequest.post(url).pipe(
              HttpClientRequest.setHeader(
                "Authorization",
                `APIKey ${DATAJUD_PUBLIC_API_KEY}`
              ),
              HttpClientRequest.setHeader("Content-Type", "application/json"),
              HttpClientRequest.setBody(HttpBody.unsafeJson(queryDSL))
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
