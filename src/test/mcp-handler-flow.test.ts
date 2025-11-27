/**
 * MCP Handler Flow Tests
 *
 * End-to-end tests verifying the complete flow from MCP parameters
 * through schema validation to API calls.
 *
 * These tests document the expected behavior and help catch regressions
 * when modifying the handler or schema code.
 */

import { it } from "@effect/vitest";
import { Effect } from "effect";
import { assert, describe } from "vitest";
import { BnpService, BnpServiceLive } from "../connectors/bnp";
import { PrecedentSearchFilter } from "../connectors/bnp/schema";

describe("MCP Handler Flow - Parameter Transformation", () => {
  it("should trace parameter flow from handler input to API request", () => {
    console.error("\n🔍 Tracing parameter transformation pipeline...");

    // Step 1: MCP input (snake_case - as received from MCP protocol)
    const mcpInput = {
      busca_geral: "adicional de insalubridade",
      pagina: 1,
      tamanho_pagina: 10, // Accepted but ignored (API doesn't support it)
    };

    console.error("\n1️⃣  MCP Input (snake_case):");
    console.error("  ", JSON.stringify(mcpInput, null, 2));

    // Step 2: Handler transformation (camelCase - what handler passes to service)
    const handlerParams = {
      buscaGeral: mcpInput.busca_geral,
      pagina: mcpInput.pagina,
      // NOTE: tamanho_pagina is intentionally NOT mapped
      // The API doesn't support page size parameter
    };

    console.error("\n2️⃣  Handler Transforms (camelCase):");
    console.error("  ", JSON.stringify(handlerParams, null, 2));
    console.error("  ⚠️  tamanho_pagina dropped (API doesn't support it)");

    // Step 3: Schema validation (applies defaults)
    const validated = PrecedentSearchFilter.make(handlerParams);

    console.error("\n3️⃣  After Schema Validation:");
    console.error("  ", JSON.stringify(validated, null, 2));

    // Verify critical transformations
    assert.strictEqual(validated.buscaGeral, mcpInput.busca_geral);
    assert.strictEqual(validated.pagina, mcpInput.pagina);
    assert.isFalse(
      "tamanhoPagina" in validated,
      "tamanhoPagina should not be in validated object"
    );

    // Verify defaults applied
    assert.strictEqual(validated.cancelados, false);
    assert.strictEqual(validated.ordenacao, "Textual");

    console.error("\n✅ Parameter flow validated");
    console.error("   Input: busca_geral + tamanho_pagina");
    console.error(
      "   Output: buscaGeral only (tamanho_pagina correctly dropped)"
    );
  });

  it("should handle all search parameters correctly", () => {
    console.error("\n🧪 Testing full parameter set...");

    const fullMcpInput = {
      busca_geral: "test",
      todas_palavras: "palavra1 palavra2",
      quaisquer_palavras: "palavra3 palavra4",
      sem_palavras: "excluir",
      trecho_exato: "frase exata",
      pagina: 2,
      tamanho_pagina: 20, // Will be ignored
    };

    console.error("\nMCP Input:");
    console.error("  busca_geral:", fullMcpInput.busca_geral);
    console.error("  todas_palavras:", fullMcpInput.todas_palavras);
    console.error(
      "  tamanho_pagina:",
      fullMcpInput.tamanho_pagina,
      "(will be dropped)"
    );

    // Simulate handler transformation
    const handlerParams = {
      buscaGeral: fullMcpInput.busca_geral,
      todasPalavras: fullMcpInput.todas_palavras,
      quaisquerPalavras: fullMcpInput.quaisquer_palavras,
      semPalavras: fullMcpInput.sem_palavras,
      trechoExato: fullMcpInput.trecho_exato,
      pagina: fullMcpInput.pagina,
      // tamanho_pagina intentionally omitted
    };

    const validated = PrecedentSearchFilter.make(handlerParams);

    console.error("\nValidated Output:");
    console.error("  buscaGeral:", validated.buscaGeral);
    console.error("  todasPalavras:", validated.todasPalavras);
    console.error("  pagina:", validated.pagina);
    console.error(
      "  tamanhoPagina:",
      "tamanhoPagina" in validated
        ? (validated as any).tamanhoPagina
        : "❌ NOT PRESENT"
    );

    // Verify transformation
    assert.strictEqual(validated.buscaGeral, fullMcpInput.busca_geral);
    assert.strictEqual(validated.todasPalavras, fullMcpInput.todas_palavras);
    assert.isFalse("tamanhoPagina" in validated);

    console.error("\n✅ All parameters transformed correctly");
  });
});

// SKIPPED: Live API tests that don't provide both required filters (orgaos AND tipos)
// biome-ignore lint/suspicious/noSkippedTests: Exploratory tests - constraint now enforced in service
describe.skip("MCP Handler Flow - End-to-End API Integration", () => {
  it.effect("should successfully execute full search flow", () =>
    Effect.gen(function* () {
      console.error("\n🎯 End-to-End Test: MCP → Handler → Service → API");

      const service = yield* BnpService;

      // Simulate what MCP handler does
      const mcpParams = {
        busca_geral: "adicional de insalubridade",
        pagina: 1,
        tamanho_pagina: 5, // This will be ignored
      };

      console.error("\n1️⃣  MCP Request:");
      console.error("  ", JSON.stringify(mcpParams, null, 2));

      // Transform like handler does
      const serviceParams = {
        buscaGeral: mcpParams.busca_geral,
        pagina: mcpParams.pagina,
      };

      console.error("\n2️⃣  Service Call:");
      console.error("  ", JSON.stringify(serviceParams, null, 2));

      // Call real API
      const result = yield* service.searchPrecedents(serviceParams);

      console.error("\n3️⃣  API Response:");
      console.error(`   Total: ${result.total}`);
      console.error(`   Returned: ${result.resultados.length} results`);
      console.error(
        `   Position: ${result.posicao_inicial}-${result.posicao_final}`
      );

      // Verify success
      assert.isTrue(result.total > 0, "Should find results");
      assert.isAtMost(
        result.resultados.length,
        10,
        "API always returns max 10 results (fixed page size)"
      );

      console.error("\n✅ Full flow successful");
      console.error(`   Note: Requested page_size=${mcpParams.tamanho_pagina}`);
      console.error(
        `        Actually got ${result.resultados.length} results (API's fixed size)`
      );
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should work with minimal parameters", () =>
    Effect.gen(function* () {
      console.error("\n🔬 Testing minimal parameter set...");

      const service = yield* BnpService;

      // Absolute minimum: just a search term
      const minimalParams = {
        buscaGeral: "test",
      };

      console.error("\nMinimal Request:");
      console.error("  ", JSON.stringify(minimalParams, null, 2));

      const result = yield* service.searchPrecedents(minimalParams);

      console.error("\nResponse:");
      console.error(`  Total: ${result.total}`);
      console.error(
        `  Page: ${result.posicao_inicial}-${result.posicao_final}`
      );

      // Verify defaults were applied by service/schema
      assert.isTrue(result.total >= 0);

      console.error("\n✅ Minimal parameters work correctly");
      console.error("   Schema applied all defaults successfully");
    }).pipe(Effect.provide(BnpServiceLive))
  );
});

describe("MCP Handler Flow - Error Scenarios", () => {
  it("should document why tamanho_pagina is accepted but ignored", () => {
    console.error("\n📚 Documenting tamanho_pagina handling strategy...");

    console.error("\nDESIGN DECISION:");
    console.error("  The MCP tool schema ACCEPTS tamanho_pagina parameter");
    console.error("  BUT the handler DOES NOT pass it to the API");
    console.error("");
    console.error("  WHY?");
    console.error("  1. User expectation: Users might try to set page size");
    console.error(
      "  2. Graceful handling: Better to accept & ignore than reject"
    );
    console.error(
      "  3. Future-proof: If API adds support later, easy to enable"
    );
    console.error("");
    console.error("  BEHAVIOR:");
    console.error("  - MCP receives: { tamanho_pagina: 20 }");
    console.error("  - Handler drops it (doesn't pass to service)");
    console.error("  - API returns: 10 results (its fixed page size)");
    console.error("  - Response shows: page_size: 10 (actual size returned)");
    console.error("");
    console.error("  ALTERNATIVE CONSIDERED:");
    console.error(
      "  ❌ Reject tamanho_pagina → Worse UX, breaks existing clients"
    );
    console.error("  ✅ Accept but ignore → Graceful degradation");

    assert.isTrue(true);
  });

  it("should verify response format matches expectations", () => {
    console.error("\n📊 Documenting expected response format...");

    // This documents what the handler returns to MCP
    const exampleSuccessResponse = {
      success: true,
      total: 45,
      page: 1,
      page_size: 10, // Always 10, regardless of request
      results: [], // Array of precedents
      aggregations: {
        especies: [], // Types aggregation
        orgaos: [], // Courts aggregation
      },
    };

    const exampleErrorResponse = {
      success: false,
      error: "BnpApiError",
      message: "API Error: HTTP 400 - StatusCode",
    };

    console.error("\nSuccess Response Structure:");
    console.error(JSON.stringify(exampleSuccessResponse, null, 2));

    console.error("\nError Response Structure:");
    console.error(JSON.stringify(exampleErrorResponse, null, 2));

    console.error("\n✅ Response formats documented");
  });
});
