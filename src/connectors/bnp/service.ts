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
import { Effect, Schema } from "effect";
import { withNetworkRetry } from "../../shared/retry-policy";
import { BNP_BASE_URL } from "./config";
import { BnpApiError, BnpNetworkError, BnpValidationError } from "./errors";
import {
  BnpSearchResponse,
  type PrecedentSearchBody,
  type PrecedentSearchFilter,
  ValidatedPrecedentSearchFilter,
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

          // Step 1: Apply defaults for required API fields
          const filterWithDefaults = {
            ...filter,
            buscaGeral: filter.buscaGeral ?? "",
            cancelados: filter.cancelados ?? false,
            ordenacao: filter.ordenacao ?? "Textual",
            orgaos: filter.orgaos ?? [],
            pagina: filter.pagina ?? 1,
            tipos: filter.tipos ?? [],
          };

          // Step 2: Validate filter using schema - enforces API constraint
          // (both orgaos AND tipos must be non-empty)
          const validatedFilter = yield* Schema.decodeUnknown(
            ValidatedPrecedentSearchFilter
          )(filterWithDefaults).pipe(
            Effect.mapError(
              (parseError) =>
                new BnpValidationError({
                  message: parseError.message,
                })
            )
          );

          // Step 3: Build request body - remove empty arrays (API rejects them with HTTP 500)
          const requestFilter: Record<string, unknown> = {
            buscaGeral: validatedFilter.buscaGeral,
            cancelados: validatedFilter.cancelados,
            ordenacao: validatedFilter.ordenacao,
            pagina: validatedFilter.pagina,
          };

          // Only include non-empty arrays
          if (validatedFilter.orgaos && validatedFilter.orgaos.length > 0) {
            requestFilter.orgaos = validatedFilter.orgaos;
          }
          if (validatedFilter.tipos && validatedFilter.tipos.length > 0) {
            requestFilter.tipos = validatedFilter.tipos;
          }

          // Include optional search modifiers if provided
          if (validatedFilter.todasPalavras) {
            requestFilter.todasPalavras = validatedFilter.todasPalavras;
          }
          if (validatedFilter.quaisquerPalavras) {
            requestFilter.quaisquerPalavras = validatedFilter.quaisquerPalavras;
          }
          if (validatedFilter.semPalavras) {
            requestFilter.semPalavras = validatedFilter.semPalavras;
          }
          if (validatedFilter.trechoExato) {
            requestFilter.trechoExato = validatedFilter.trechoExato;
          }

          const requestBody: PrecedentSearchBody = {
            filtro: requestFilter as PrecedentSearchFilter,
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

          // Execute request with retry for network errors
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
            // Retry on network errors (RequestError) with exponential backoff
            withNetworkRetry,
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
