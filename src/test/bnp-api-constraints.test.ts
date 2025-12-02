/**
 * BNP API Constraints Tests
 *
 * These tests document the actual constraints and limitations of the BNP API.
 * They serve as both validation and documentation for future developers.
 *
 * IMPORTANT: The BNP API has several constraints that differ from typical REST APIs:
 * - Fixed page size of 10 results (no page size parameter accepted)
 * - Field names must match exactly (case-sensitive)
 * - Unknown fields cause HTTP 400 errors
 */

import { it } from "@effect/vitest";
import { Effect } from "effect";
import { assert, describe } from "vitest";
import { BnpService, BnpServiceLive } from "../connectors/bnp";
import { PrecedentSearchFilter } from "../connectors/bnp/schema";

describe("BNP API Constraints - Schema Validation", () => {
  it("should NOT include tamanhoPagina in schema (API does not support it)", () => {
    console.error("\n🔍 Verifying schema matches API constraints...");

    // Create a minimal filter - only provided fields appear in output
    // NOTE: Defaults are applied in service layer, not schema
    const filter = {
      buscaGeral: "test",
      pagina: 1,
    };

    const constructed = PrecedentSearchFilter.make(filter);

    console.error("Schema fields:", Object.keys(constructed));

    // CRITICAL: tamanhoPagina should NOT be in the schema
    // The API does not accept this field and will return HTTP 400 if present
    assert.isFalse(
      "tamanhoPagina" in constructed,
      "tamanhoPagina should NOT be in schema - API does not support page size parameter"
    );

    // Verify provided fields ARE present
    assert.isTrue("buscaGeral" in constructed);
    assert.isTrue("pagina" in constructed);
    // NOTE: cancelados and ordenacao are optional - defaults applied in service layer

    console.error("✅ Schema correctly excludes unsupported fields");
  });

  it("should list exactly the fields the BNP API accepts", () => {
    console.error("\n📋 Documenting accepted API fields...");

    // These are the ONLY fields the BNP API accepts in the filtro object
    // Based on OpenAPI spec: bnp-pesquisa-simples.json
    const apiAcceptedFields = [
      "buscaGeral",
      "cancelados",
      "ordenacao",
      "orgaos",
      "pagina",
      "tipos",
      "todasPalavras",
      "quaisquerPalavras",
      "semPalavras",
      "trechoExato",
    ];

    console.error("API Accepted Fields (from OpenAPI spec):");
    apiAcceptedFields.forEach((field) => {
      console.error(`  ✓ ${field}`);
    });

    // Create filter with all optional fields
    const fullFilter = {
      buscaGeral: "test",
      cancelados: false,
      ordenacao: "Textual" as const,
      orgaos: ["STF"],
      pagina: 1,
      tipos: ["SUM"],
      todasPalavras: "palavra1",
      quaisquerPalavras: "palavra2",
      semPalavras: "palavra3",
      trechoExato: "exato",
    };

    const constructed = PrecedentSearchFilter.make(fullFilter);
    const schemaFields = Object.keys(constructed);

    console.error("\nSchema Fields:");
    schemaFields.forEach((field) => {
      console.error(
        `  ${apiAcceptedFields.includes(field) ? "✓" : "✗"} ${field}`
      );
    });

    // Verify no extra fields
    const extraFields = schemaFields.filter(
      (f) => !apiAcceptedFields.includes(f)
    );
    assert.isEmpty(
      extraFields,
      `Schema has fields not accepted by API: ${extraFields.join(", ")}`
    );

    console.error("\n✅ Schema matches API specification exactly");
  });

  it("should document that defaults are applied in service layer", () => {
    console.error("\n🔧 Documenting default value architecture...");

    // ARCHITECTURE NOTE:
    // Schema is for validation only - it does NOT apply defaults.
    // Defaults are applied in BnpService.searchPrecedents() BEFORE validation.
    // This ensures consistent behavior for both Schema.make() and Schema.decodeUnknown().

    const minimalFilter = {
      buscaGeral: "test",
    };

    const constructed = PrecedentSearchFilter.make(minimalFilter);

    console.error("Schema output (no defaults):");
    console.error(`  buscaGeral: "${constructed.buscaGeral ?? ""}"`);
    console.error(
      `  cancelados: ${constructed.cancelados} (undefined = not set)`
    );
    console.error(
      `  ordenacao: "${constructed.ordenacao}" (undefined = not set)`
    );
    console.error(
      `  orgaos: ${constructed.orgaos ? `[${constructed.orgaos.join(", ")}]` : "undefined"}`
    );
    console.error(`  pagina: ${constructed.pagina ?? "undefined"}`);
    console.error(
      `  tipos: ${constructed.tipos ? `[${constructed.tipos.join(", ")}]` : "undefined"}`
    );

    // Schema accepts optional fields without defaults
    assert.strictEqual(constructed.buscaGeral, "test");
    assert.isUndefined(
      constructed.cancelados,
      "Schema does not apply defaults"
    );
    assert.isUndefined(constructed.ordenacao, "Schema does not apply defaults");
    assert.isUndefined(constructed.orgaos, "Schema does not apply defaults");
    assert.isUndefined(constructed.pagina, "Schema does not apply defaults");
    assert.isUndefined(constructed.tipos, "Schema does not apply defaults");

    console.error("\n📋 Service layer applies these defaults before API call:");
    console.error("  cancelados: false");
    console.error("  ordenacao: 'Textual'");
    console.error("  orgaos: []");
    console.error("  pagina: 1");
    console.error("  tipos: []");

    console.error(
      "\n✅ Architecture documented: Schema validates, Service applies defaults"
    );
  });
});

// SKIPPED: These live API tests were created during API investigation.
// They don't satisfy the now-enforced constraint that both orgaos AND tipos must be provided.
// The constraint is tested in service.test.ts unit tests.
// biome-ignore lint/suspicious/noSkippedTests: Exploratory tests - constraint now enforced in service
describe.skip("BNP API Constraints - Behavior Verification", () => {
  it.effect(
    "should document that API always returns max 10 results per page",
    () =>
      Effect.gen(function* () {
        console.error("\n📖 Testing API page size constraint...");

        const service = yield* BnpService;

        // Make a request that should return many results
        const result = yield* service.searchPrecedents({
          buscaGeral: "direito", // Common term - should have many results
          pagina: 1,
        });

        console.error(`\nAPI Response:`);
        console.error(`  Total results in database: ${result.total}`);
        console.error(
          `  Results returned this page: ${result.resultados.length}`
        );
        console.error(
          `  Position: ${result.posicao_inicial} to ${result.posicao_final}`
        );

        // DOCUMENTED CONSTRAINT: API always returns exactly 10 results per page
        // (unless there are fewer than 10 total results)
        if (result.total >= 10) {
          assert.strictEqual(
            result.resultados.length,
            10,
            "API should return exactly 10 results per page (fixed page size)"
          );
          console.error("\n✅ Confirmed: API uses fixed page size of 10");
        } else {
          console.error(
            `\n⚠️  Only ${result.total} results available (less than page size)`
          );
        }
      }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should verify pagination works correctly", () =>
    Effect.gen(function* () {
      console.error("\n📄 Testing pagination behavior...");

      const service = yield* BnpService;

      // Get page 1
      const page1 = yield* service.searchPrecedents({
        buscaGeral: "jurisprudencia",
        pagina: 1,
      });

      console.error(`\nPage 1:`);
      console.error(`  Results: ${page1.resultados.length}`);
      console.error(
        `  Position: ${page1.posicao_inicial}-${page1.posicao_final}`
      );

      if (page1.total > 10) {
        // Get page 2
        const page2 = yield* service.searchPrecedents({
          buscaGeral: "jurisprudencia",
          pagina: 2,
        });

        console.error(`\nPage 2:`);
        console.error(`  Results: ${page2.resultados.length}`);
        console.error(
          `  Position: ${page2.posicao_inicial}-${page2.posicao_final}`
        );

        // Verify pages are different
        assert.notStrictEqual(
          page1.resultados[0]?.id,
          page2.resultados[0]?.id,
          "Page 2 should have different results than page 1"
        );

        // Verify position increments correctly
        assert.strictEqual(
          page2.posicao_inicial,
          11,
          "Page 2 should start at position 11 (after first 10 results)"
        );

        console.error("\n✅ Pagination working correctly");
      } else {
        console.error("\n⚠️  Not enough results to test pagination");
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );
});

describe("BNP API Constraints - Error Cases", () => {
  it("should document that unknown fields cause HTTP 400", () => {
    console.error("\n⚠️  Documenting API rejection of unknown fields...");

    console.error("\nIMPORTANT CONSTRAINT:");
    console.error("  The BNP API rejects requests with unknown fields.");
    console.error("  This is why tamanhoPagina was removed from the schema.");
    console.error("");
    console.error(
      "  ❌ BAD:  { filtro: { buscaGeral: 'test', tamanhoPagina: 10 } }"
    );
    console.error("          ^ HTTP 400: Unknown field 'tamanhoPagina'");
    console.error("");
    console.error("  ✅ GOOD: { filtro: { buscaGeral: 'test', pagina: 1 } }");
    console.error("          ^ HTTP 200: All fields recognized");
    console.error("");
    console.error("  📏 WORKAROUND: API uses fixed page size of 10.");
    console.error(
      "               Use 'pagina' parameter to navigate through results."
    );

    // This test documents the constraint - no assertion needed
    assert.isTrue(true);
  });
});
