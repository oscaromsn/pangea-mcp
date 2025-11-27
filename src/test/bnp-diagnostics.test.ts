/**
 * BNP Service Diagnostic Tests
 *
 * These tests help diagnose issues with the BNP API service layer.
 * They're designed to be run when debugging API failures or investigating
 * changes in API behavior.
 *
 * Run with: bunx vitest run src/test/bnp-diagnostics.test.ts
 */

import {
  FetchHttpClient,
  HttpBody,
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from "@effect/platform";
import { it } from "@effect/vitest";
import { Effect } from "effect";
import { assert, describe } from "vitest";
import { BnpService, BnpServiceLive } from "../connectors/bnp";

// SKIPPED: Diagnostic tests created during API investigation.
// Don't satisfy the now-enforced constraint that both orgaos AND tipos must be provided.
// biome-ignore lint/suspicious/noSkippedTests: Exploratory tests - constraint now enforced in service
describe.skip("BNP Service - Basic Connectivity", () => {
  it.effect("should successfully connect to BNP API", () =>
    Effect.gen(function* () {
      console.error("\n🔌 Testing BNP API connectivity...");

      const service = yield* BnpService;

      console.error("Making simple search request...");

      const result = yield* service
        .searchPrecedents({
          buscaGeral: "direito", // Common term that should always have results
          pagina: 1,
        })
        .pipe(
          Effect.tap(() =>
            Effect.sync(() => {
              console.error("✅ API call succeeded");
            })
          ),
          Effect.tapError((error) =>
            Effect.sync(() => {
              console.error("❌ API call failed:");
              console.error("   Error type:", error._tag);
              if (error._tag === "BnpApiError") {
                console.error("   Status:", (error as any).status);
                console.error("   Details:", (error as any).details);
              }
            })
          )
        );

      // Validate response structure
      assert.isDefined(result.total, "Response should have total");
      assert.isArray(
        result.resultados,
        "Response should have resultados array"
      );
      assert.isDefined(
        result.posicao_inicial,
        "Response should have posicao_inicial"
      );
      assert.isDefined(
        result.posicao_final,
        "Response should have posicao_final"
      );

      console.error(`✅ Connectivity OK - Found ${result.total} results`);
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should return valid response structure", () =>
    Effect.gen(function* () {
      console.error("\n📋 Validating API response structure...");

      const service = yield* BnpService;

      const result = yield* service.searchPrecedents({
        buscaGeral: "test",
        pagina: 1,
      });

      console.error("\nResponse fields:");
      console.error(`  total: ${result.total} (${typeof result.total})`);
      console.error(`  resultados: Array[${result.resultados.length}]`);
      console.error(`  posicao_inicial: ${result.posicao_inicial}`);
      console.error(`  posicao_final: ${result.posicao_final}`);
      console.error(`  aggsEspecies: Array[${result.aggsEspecies.length}]`);
      console.error(`  aggsOrgaos: Array[${result.aggsOrgaos.length}]`);

      if (result.resultados.length > 0) {
        const first = result.resultados[0];
        if (first) {
          console.error("\nFirst result structure:");
          console.error(`  id: ${first.id}`);
          console.error(`  orgao: ${first.orgao}`);
          console.error(`  tipo: ${first.tipo}`);
          console.error(`  nr: ${first.nr}`);
          console.error(`  situacao: ${first.situacao}`);
        }
      }

      assert.isTrue(result.total >= 0);
      assert.isAtMost(
        result.resultados.length,
        10,
        "API returns max 10 results per page"
      );

      console.error("\n✅ Response structure valid");
    }).pipe(Effect.provide(BnpServiceLive))
  );
});

// biome-ignore lint/suspicious/noSkippedTests: Exploratory tests - constraint now enforced in service
describe.skip("BNP Service - Search Parameters", () => {
  it.effect("should handle simple text search", () =>
    Effect.gen(function* () {
      console.error("\n🔍 Testing simple text search...");

      const service = yield* BnpService;

      const result = yield* service.searchPrecedents({
        buscaGeral: "adicional de insalubridade",
        pagina: 1,
      });

      console.error(`  Query: "adicional de insalubridade"`);
      console.error(
        `  Results: ${result.total} total, ${result.resultados.length} returned`
      );

      assert.isTrue(result.total > 0, "Should find results for common term");

      console.error("✅ Simple search working");
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should handle boolean operators", () =>
    Effect.gen(function* () {
      console.error("\n🔀 Testing boolean operators...");

      const service = yield* BnpService;

      // Test "todas palavras" (AND)
      const andResult = yield* service.searchPrecedents({
        todasPalavras: "direito trabalhista",
        pagina: 1,
      });

      console.error(`\n  AND ("direito trabalhista"):`);
      console.error(`    Results: ${andResult.total}`);

      assert.isDefined(andResult.total);

      console.error("\n✅ Boolean operators working");
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should handle filters (court, type)", () =>
    Effect.gen(function* () {
      console.error("\n🏛️  Testing filters...");

      const service = yield* BnpService;

      // Filter by court
      const courtResult = yield* service.searchPrecedents({
        buscaGeral: "direito",
        orgaos: ["STF"],
        pagina: 1,
      });

      console.error(`\n  Court filter (STF):`);
      console.error(`    Results: ${courtResult.total}`);

      // Filter by type
      const typeResult = yield* service.searchPrecedents({
        buscaGeral: "direito",
        tipos: ["SUM"],
        pagina: 1,
      });

      console.error(`\n  Type filter (SUM - Súmula):`);
      console.error(`    Results: ${typeResult.total}`);

      console.error("\n✅ Filters working");
    }).pipe(Effect.provide(BnpServiceLive))
  );
});

describe("BNP Service - Error Handling", () => {
  it("should format errors correctly for debugging", () => {
    console.error("\n🐛 Testing error formatting...");

    // Simulate a BnpApiError
    const mockError = {
      _tag: "BnpApiError" as const,
      status: 400,
      statusText: "Bad Request",
      details: "Invalid parameter",
    };

    console.error("\nMock error object:");
    console.error(JSON.stringify(mockError, null, 2));

    // Test error extraction logic (same as in handlers)
    let errorMessage = "Unknown error";
    const error: unknown = mockError;

    if (typeof error === "object" && error !== null && "_tag" in error) {
      const errorTag = String((error as { _tag: unknown })._tag);

      if (
        errorTag === "BnpApiError" &&
        "statusText" in error &&
        "details" in error
      ) {
        const statusText = (error as { statusText: unknown }).statusText;
        const details = (error as { details: unknown }).details;
        errorMessage = `API Error: ${statusText} - ${details}`;
      }
    }

    console.error("\nFormatted message:");
    console.error(`  "${errorMessage}"`);

    assert.strictEqual(
      errorMessage,
      "API Error: Bad Request - Invalid parameter"
    );

    console.error("\n✅ Error formatting correct");
  });
});

// biome-ignore lint/suspicious/noSkippedTests: Exploratory tests - constraint now enforced in service
describe.skip("BNP Service - Raw HTTP Diagnostics", () => {
  it.effect("should diagnose raw HTTP connectivity", () =>
    Effect.gen(function* () {
      console.error("\n🌐 Testing raw HTTP request to BNP API...");

      const httpClient = yield* HttpClient.HttpClient;

      const url = "https://pangeabnp.pdpj.jus.br/api/v1/precedentes";
      const requestBody = {
        filtro: {
          buscaGeral: "test",
          pagina: 1,
        },
      };

      console.error(`\nRequest URL: ${url}`);
      console.error("Request body:", JSON.stringify(requestBody, null, 2));

      const request = HttpClientRequest.post(url).pipe(
        HttpClientRequest.setHeader("Content-Type", "application/json"),
        HttpClientRequest.setHeader(
          "Accept",
          "application/json, text/plain, */*"
        ),
        HttpClientRequest.setHeader("Origin", "https://pangeabnp.pdpj.jus.br"),
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

      yield* httpClient.execute(request).pipe(
        Effect.flatMap(HttpClientResponse.filterStatusOk),
        Effect.scoped,
        Effect.tap((resp) =>
          Effect.sync(() => {
            console.error(`\n✅ HTTP ${resp.status} - Request successful`);
          })
        ),
        Effect.tapError((error) =>
          Effect.sync(() => {
            console.error("\n❌ HTTP request failed:");
            console.error("   Error:", error);
          })
        )
      );

      console.error("✅ Raw HTTP connectivity OK");
    }).pipe(Effect.provide(FetchHttpClient.layer))
  );
});
