/**
 * BNP Service Interface
 * Contract-driven service for searching legal precedents
 */

import {
  HttpBody,
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from "@effect/platform";
import { Effect, Match } from "effect";
import { BNP_BASE_URL } from "./config";
import { BnpApiError, BnpNetworkError, BnpValidationError } from "./errors";
import {
  BnpSearchResponse,
  PrecedentSearchBody,
  PrecedentSearchFilter,
} from "./schema";

/**
 * BNP Service - Interface for searching Brazilian legal precedents
 *
 * This service provides access to the BNP (Banco Nacional de Precedentes) API
 * for retrieving legal precedents from Brazilian courts.
 */
export class BnpService extends Effect.Service<BnpService>()("app/BnpService", {
  effect: Effect.gen(function* () {
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

          // Apply default values
          const validatedFilter = {
            buscaGeral: filter.buscaGeral ?? "",
            cancelados: filter.cancelados ?? false,
            ordenacao: filter.ordenacao ?? ("Textual" as const),
            orgaos: filter.orgaos ?? [],
            pagina: filter.pagina ?? 1,
            tipos: filter.tipos ?? [],
            todasPalavras: filter.todasPalavras,
            quaisquerPalavras: filter.quaisquerPalavras,
            semPalavras: filter.semPalavras,
            trechoExato: filter.trechoExato,
          };
          const requestBody: PrecedentSearchBody = {
            filtro: validatedFilter,
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

          // Execute request and handle response with proper error mapping
          return yield* httpClient.execute(request).pipe(
            Effect.flatMap(
              HttpClientResponse.schemaBodyJson(BnpSearchResponse)
            ),
            Effect.scoped,
            Effect.catchAll((error) =>
              Match.value(error).pipe(
                Match.tags({
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
                }),
                Match.exhaustive
              )
            )
          );
        }),
    };
  }),
}) {}
