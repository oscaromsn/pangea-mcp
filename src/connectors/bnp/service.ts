/**
 * BNP Service Interface
 * Contract-driven service for searching legal precedents
 */

import {
  FetchHttpClient,
  HttpBody,
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from "@effect/platform";
import { Effect } from "effect";
import { BNP_BASE_URL } from "./config";
import { BnpApiError, BnpNetworkError, BnpValidationError } from "./errors";
import {
  BnpSearchResponse,
  type PrecedentSearchBody,
  PrecedentSearchFilter,
} from "./schema";

/**
 * BNP Service - Interface for searching Brazilian legal precedents
 *
 * This service provides access to the BNP (Banco Nacional de Precedentes) API
 * for retrieving legal precedents from Brazilian courts.
 *
 * Uses the dependencies + scoped pattern to properly erase HttpClient from the R channel
 */
export class BnpService extends Effect.Service<BnpService>()("app/BnpService", {
  dependencies: [FetchHttpClient.layer],
  scoped: Effect.gen(function* () {
    const httpClient = yield* HttpClient.HttpClient;

    return {
      /**
       * Search for legal precedents using filter criteria
       *
       * @param filter - Search filter parameters
       * @returns Effect that succeeds with validated search response or fails with domain errors
       */
      searchPrecedents: (filter: PrecedentSearchFilter) =>
        Effect.gen(function* () {
          const url = `${BNP_BASE_URL}precedentes`;

          // Apply schema defaults and construct filter
          const validatedFilter = yield* Effect.try({
            try: () => PrecedentSearchFilter.make(filter),
            catch: (error) =>
              new BnpValidationError({
                message:
                  error instanceof Error
                    ? `Invalid search filter: ${error.message}`
                    : "Invalid search filter",
              }),
          });

          // CRITICAL: Validate API constraint AFTER defaults are applied
          // BNP API requires BOTH filters to be non-empty (orgaos AND tipos)
          const hasOrgaos =
            validatedFilter.orgaos && validatedFilter.orgaos.length > 0;
          const hasTipos =
            validatedFilter.tipos && validatedFilter.tipos.length > 0;

          if (!hasOrgaos || !hasTipos) {
            return yield* Effect.fail(
              new BnpValidationError({
                message:
                  "BNP API requires BOTH filters: 'orgaos' (courts) AND 'tipos' (precedent types) must both be provided with non-empty values.",
              })
            );
          }

          // Remove empty arrays before sending to API (API rejects empty arrays)
          const cleanedFilter: Record<string, unknown> = { ...validatedFilter };
          if (
            Array.isArray(cleanedFilter.orgaos) &&
            cleanedFilter.orgaos.length === 0
          ) {
            cleanedFilter.orgaos = undefined;
          }
          if (
            Array.isArray(cleanedFilter.tipos) &&
            cleanedFilter.tipos.length === 0
          ) {
            cleanedFilter.tipos = undefined;
          }

          const requestBody: PrecedentSearchBody = {
            filtro: cleanedFilter as PrecedentSearchFilter,
          };

          // Make the HTTP request with proper headers and body
          const request = HttpClientRequest.post(url).pipe(
            HttpClientRequest.setHeader("Content-Type", "application/json"),
            HttpClientRequest.setHeader(
              "Accept",
              "application/json, text/plain, */*"
            ),
            HttpClientRequest.setHeader(
              "Origin",
              "https://pangeabnp.pdpj.jus.br"
            ),
            HttpClientRequest.setHeader(
              "Referer",
              "https://pangeabnp.pdpj.jus.br/pesquisa"
            ),
            HttpClientRequest.setHeader(
              "User-Agent",
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
            ),
            HttpClientRequest.setBody(HttpBody.unsafeJson(requestBody))
          );

          // Execute request and let HttpClient handle all HTTP-level errors naturally
          // Filter for OK status before parsing body, then transform errors to domain-specific errors
          return yield* httpClient.execute(request).pipe(
            Effect.flatMap((response) =>
              HttpClientResponse.filterStatusOk(response).pipe(
                Effect.flatMap(
                  HttpClientResponse.schemaBodyJson(BnpSearchResponse)
                )
              )
            ),
            Effect.scoped,
            Effect.catchTags({
              RequestError: (e) =>
                Effect.fail(
                  new BnpNetworkError({
                    message: `Network error while calling BNP API: ${e.reason}`,
                    cause: e,
                  })
                ),
              ResponseError: (e) =>
                Effect.fail(
                  new BnpApiError({
                    status: e.response.status,
                    statusText: `HTTP ${e.response.status}`,
                    details: e.reason,
                  })
                ),
              ParseError: (e) =>
                Effect.fail(
                  new BnpValidationError({
                    message: `Response validation failed: ${e.message}`,
                  })
                ),
            })
          );
        }),
    };
  }),
}) {}
