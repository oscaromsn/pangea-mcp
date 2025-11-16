/**
 * MCP Request Trace Test
 *
 * Reproduces the EXACT scenario from MCP client logs to identify
 * where the HTTP 400 error is coming from.
 *
 * Run with: bunx vitest run src/test/mcp-request-trace.test.ts
 */

import { it } from "@effect/vitest";
import { Effect, Layer } from "effect";
import { assert, describe } from "vitest";
import { BnpService, BnpServiceLive } from "../connectors/bnp";
import { PrecedentSearchFilter } from "../connectors/bnp/schema";

describe("MCP Request Trace - Reproduce Exact Client Scenario", () => {
  it.effect("should trace request with exact MCP parameters", () =>
    Effect.gen(function* () {
      console.error("\n🔍 === MCP REQUEST TRACE ===");

      // Step 1: Simulate MCP input (exactly as received from client logs)
      const mcpInput = {
        busca_geral: "adicional de insalubridade",
        tamanho_pagina: 20,
      };

      console.error("\n1️⃣  MCP Client Input:");
      console.error(JSON.stringify(mcpInput, null, 2));

      // Step 2: Simulate handler transformation
      const handlerParams = {
        buscaGeral: mcpInput.busca_geral,
        // NOTE: Handler should NOT pass tamanho_pagina
      };

      console.error("\n2️⃣  Handler transforms to:");
      console.error(JSON.stringify(handlerParams, null, 2));

      // Step 3: Apply schema validation (what service does)
      const schemaValidated = PrecedentSearchFilter.make(handlerParams);

      console.error("\n3️⃣  After schema validation:");
      console.error(JSON.stringify(schemaValidated, null, 2));

      // Step 4: Check for unexpected fields
      console.error("\n4️⃣  Field inspection:");
      const allFields = Object.keys(schemaValidated);
      console.error("   All fields in validated object:", allFields);

      // Critical assertions
      assert.isFalse(
        "tamanhoPagina" in schemaValidated,
        "❌ FAIL: tamanhoPagina should NOT be present"
      );
      assert.isFalse(
        "tamanho_pagina" in schemaValidated,
        "❌ FAIL: tamanho_pagina should NOT be present"
      );

      // Step 5: Create the actual request body
      const requestBody = {
        filtro: schemaValidated,
      };

      console.error("\n5️⃣  Final HTTP request body:");
      console.error(JSON.stringify(requestBody, null, 2));

      console.error("\n✅ Data transformation pipeline complete");
    }).pipe(Effect.provide(Layer.empty))
  );

  it.effect("should make actual API call with traced parameters", () =>
    Effect.gen(function* () {
      console.error("\n🌐 === ACTUAL API CALL ===");

      const service = yield* BnpService;

      // Use the EXACT same parameters as MCP client
      const result = yield* service
        .searchPrecedents({
          buscaGeral: "adicional de insalubridade",
        })
        .pipe(
          Effect.tap(() =>
            Effect.sync(() => {
              console.error("✅ API call succeeded!");
            })
          ),
          Effect.tapError((error) =>
            Effect.sync(() => {
              console.error("❌ API call failed:");
              console.error("   Error type:", (error as any)._tag);
              console.error("   Full error:", JSON.stringify(error, null, 2));
            })
          )
        );

      console.error(`\n✅ Success - Total results: ${result.total}`);
      console.error(`   Returned: ${result.resultados.length} results`);

      assert.isTrue(result.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should compare with working example parameters", () =>
    Effect.gen(function* () {
      console.error("\n🔬 === COMPARISON WITH WORKING EXAMPLE ===");

      const service = yield* BnpService;

      // Working example from examples/bnp-example.ts
      const workingParams = {
        buscaGeral: "adicional de periculosidade",
        tipos: ["IRR"],
        orgaos: ["TST"],
        pagina: 1,
      };

      console.error("\n📋 Working example parameters:");
      console.error(JSON.stringify(workingParams, null, 2));

      const workingResult = yield* service.searchPrecedents(workingParams);

      console.error(
        `\n✅ Working example SUCCESS - Total: ${workingResult.total}`
      );

      // Now try the failing parameters
      const failingParams = {
        buscaGeral: "adicional de insalubridade",
      };

      console.error("\n📋 Failing parameters:");
      console.error(JSON.stringify(failingParams, null, 2));

      const failingResult = yield* service.searchPrecedents(failingParams);

      console.error(
        `\n✅ Failing params also WORKED - Total: ${failingResult.total}`
      );

      assert.isTrue(workingResult.total >= 0);
      assert.isTrue(failingResult.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );
});

describe("MCP Request Trace - Field Analysis", () => {
  it("should analyze all fields in schema output", () => {
    console.error("\n🔬 === SCHEMA FIELD ANALYSIS ===");

    // Test with minimal input
    const minimalInput = {
      buscaGeral: "test",
    };

    console.error("\n📥 Input:");
    console.error(JSON.stringify(minimalInput, null, 2));

    const validated = PrecedentSearchFilter.make(minimalInput);

    console.error("\n📤 Output:");
    console.error(JSON.stringify(validated, null, 2));

    console.error("\n🔍 Field inspection:");
    const fields = Object.keys(validated);
    console.error(`   Total fields: ${fields.length}`);
    console.error(`   Field names: ${fields.join(", ")}`);

    // Check each field
    fields.forEach((field) => {
      const value = (validated as any)[field];
      const type = Array.isArray(value) ? "array" : typeof value;
      console.error(`   - ${field}: ${type} = ${JSON.stringify(value)}`);
    });

    // Expected fields from API spec
    const expectedFields = [
      "buscaGeral",
      "cancelados",
      "ordenacao",
      "orgaos",
      "pagina",
      "tipos",
    ];

    console.error("\n✅ Expected fields from OpenAPI spec:");
    expectedFields.forEach((field) => {
      const present = field in validated;
      console.error(`   ${present ? "✓" : "✗"} ${field}`);
      if (!present) {
        assert.fail(`Expected field "${field}" is missing!`);
      }
    });

    // Check for unexpected fields
    const unexpectedFields = fields.filter((f) => !expectedFields.includes(f));
    if (unexpectedFields.length > 0) {
      console.error("\n❌ UNEXPECTED FIELDS FOUND:");
      unexpectedFields.forEach((field) => {
        console.error(
          `   - ${field} = ${JSON.stringify((validated as any)[field])}`
        );
      });
      assert.fail(`Unexpected fields: ${unexpectedFields.join(", ")}`);
    }

    console.error("\n✅ All fields valid");
  });
});
