/**
 * Both Filters Hypothesis Test
 *
 * Tests if the BNP API requires BOTH orgaos AND tipos (not just one)
 */

import { it } from "@effect/vitest";
import { Effect } from "effect";
import { assert, describe } from "vitest";
import { BnpService, BnpServiceLive } from "../connectors/bnp";

describe("Both Filters Hypothesis - API Requires BOTH orgaos AND tipos", () => {
  it.effect("should test with BOTH filters (expected to work)", () =>
    Effect.gen(function* () {
      console.error("\n✅ Test with BOTH orgaos AND tipos:");

      const service = yield* BnpService;

      const result = yield* service.searchPrecedents({
        buscaGeral: "direito",
        orgaos: ["STF"],
        tipos: ["SUM"],
      });

      console.error(`   ✅ SUCCESS - Total: ${result.total}`);
      assert.isTrue(result.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should test with ONLY orgaos (expected to fail)", () =>
    Effect.gen(function* () {
      console.error("\n❌ Test with ONLY orgaos (no tipos):");

      const service = yield* BnpService;

      const exit = yield* Effect.exit(
        service.searchPrecedents({
          buscaGeral: "direito",
          orgaos: ["STF"],
        })
      );

      if (exit._tag === "Success") {
        console.error(`   ⚠️  UNEXPECTED SUCCESS - Total: ${exit.value.total}`);
        console.error("   API accepted request with only orgaos!");
      } else {
        console.error("   ✅ EXPECTED FAILURE - API rejected request");
        console.error(JSON.stringify(exit.cause, null, 2));
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should test with ONLY tipos (expected to fail)", () =>
    Effect.gen(function* () {
      console.error("\n❌ Test with ONLY tipos (no orgaos):");

      const service = yield* BnpService;

      const exit = yield* Effect.exit(
        service.searchPrecedents({
          buscaGeral: "direito",
          tipos: ["SUM"],
        })
      );

      if (exit._tag === "Success") {
        console.error(`   ⚠️  UNEXPECTED SUCCESS - Total: ${exit.value.total}`);
        console.error("   API accepted request with only tipos!");
      } else {
        console.error("   ✅ EXPECTED FAILURE - API rejected request");
        console.error(JSON.stringify(exit.cause, null, 2));
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should verify MCP scenario with BOTH filters", () =>
    Effect.gen(function* () {
      console.error("\n🎯 MCP scenario but with BOTH filters:");

      const service = yield* BnpService;

      const result = yield* service.searchPrecedents({
        buscaGeral: "adicional de insalubridade",
        orgaos: ["TST", "STF", "STJ"],
        tipos: ["SUM"], // ← Adding tipos!
      });

      console.error(`   ✅ SUCCESS - Total: ${result.total}`);
      assert.isTrue(result.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );
});
