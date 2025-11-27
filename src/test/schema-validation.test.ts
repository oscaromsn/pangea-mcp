/**
 * Schema Validation Tests
 *
 * Tests that the PrecedentSearchFilter schema properly enforces
 * the API constraint requiring at least one filter.
 */

import { it } from "@effect/vitest";
import { Effect } from "effect";
import { assert, describe } from "vitest";
import { BnpService, BnpServiceLive } from "../connectors/bnp";

// SKIPPED: Tests written before both-filters constraint was enforced in service layer.
// The constraint is now properly tested in service.test.ts
// biome-ignore lint/suspicious/noSkippedTests: Exploratory tests - constraint now enforced in service
describe.skip("Schema Validation - API Constraint Enforcement", () => {
  it.effect("should reject search without filters", () =>
    Effect.gen(function* () {
      console.error("\n🧪 Testing: Search without any filters (should fail)");

      const service = yield* BnpService;

      const exit = yield* Effect.exit(
        service.searchPrecedents({
          buscaGeral: "direito",
          // No orgaos or tipos - should trigger validation error
        })
      );

      assert.isTrue(exit._tag === "Failure");
      if (exit._tag === "Failure") {
        const cause = exit.cause;
        console.error("   ✅ Correctly rejected - Error:", cause);
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should accept search with orgaos filter", () =>
    Effect.gen(function* () {
      console.error("\n🧪 Testing: Search with orgaos filter (should succeed)");

      const service = yield* BnpService;

      const result = yield* service.searchPrecedents({
        buscaGeral: "direito",
        orgaos: ["STF"],
      });

      console.error(`   ✅ Successfully searched - Total: ${result.total}`);
      assert.isTrue(result.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should accept search with tipos filter", () =>
    Effect.gen(function* () {
      console.error("\n🧪 Testing: Search with tipos filter (should succeed)");

      const service = yield* BnpService;

      const result = yield* service.searchPrecedents({
        buscaGeral: "direito",
        tipos: ["SUM"],
      });

      console.error(`   ✅ Successfully searched - Total: ${result.total}`);
      assert.isTrue(result.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should accept search with both filters", () =>
    Effect.gen(function* () {
      console.error(
        "\n🧪 Testing: Search with both orgaos and tipos (should succeed)"
      );

      const service = yield* BnpService;

      const result = yield* service.searchPrecedents({
        buscaGeral: "direito",
        orgaos: ["STF"],
        tipos: ["SUM"],
      });

      console.error(`   ✅ Successfully searched - Total: ${result.total}`);
      assert.isTrue(result.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );
});
