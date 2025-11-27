/**
 * Search Parameter Variants Test
 *
 * Tests different combinations of search parameters to identify
 * which ones the BNP API accepts without filters
 */

import { it } from "@effect/vitest";
import { Effect } from "effect";
import { assert, describe } from "vitest";
import { BnpService, BnpServiceLive } from "../connectors/bnp";

// SKIPPED: Exploratory tests for API parameter investigation.
// The API constraint (both orgaos AND tipos required) is now enforced in service layer.
// biome-ignore lint/suspicious/noSkippedTests: Exploratory tests - constraint now enforced in service
describe.skip("Search Parameter Variants - BNP API Acceptance", () => {
  it.effect("should test buscaGeral alone", () =>
    Effect.gen(function* () {
      console.error("\n1️⃣  Testing: buscaGeral only");

      const service = yield* BnpService;

      const exit = yield* Effect.exit(
        service.searchPrecedents({
          buscaGeral: "direito",
        })
      );

      if (exit._tag === "Success") {
        console.error(`   ✅ SUCCESS - Total: ${exit.value.total}`);
      } else {
        console.error("   ❌ FAILED - buscaGeral alone not accepted");
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should test todasPalavras alone", () =>
    Effect.gen(function* () {
      console.error("\n2️⃣  Testing: todasPalavras only");

      const service = yield* BnpService;

      const exit = yield* Effect.exit(
        service.searchPrecedents({
          todasPalavras: "adicional insalubridade",
        })
      );

      if (exit._tag === "Success") {
        console.error(`   ✅ SUCCESS - Total: ${exit.value.total}`);
      } else {
        console.error("   ❌ FAILED - todasPalavras alone not accepted");
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should test quaisquerPalavras alone", () =>
    Effect.gen(function* () {
      console.error("\n3️⃣  Testing: quaisquerPalavras only");

      const service = yield* BnpService;

      const exit = yield* Effect.exit(
        service.searchPrecedents({
          quaisquerPalavras: "adicional insalubridade",
        })
      );

      if (exit._tag === "Success") {
        console.error(`   ✅ SUCCESS - Total: ${exit.value.total}`);
      } else {
        console.error("   ❌ FAILED - quaisquerPalavras alone not accepted");
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should test trechoExato alone", () =>
    Effect.gen(function* () {
      console.error("\n4️⃣  Testing: trechoExato only");

      const service = yield* BnpService;

      const exit = yield* Effect.exit(
        service.searchPrecedents({
          trechoExato: "adicional de insalubridade",
        })
      );

      if (exit._tag === "Success") {
        console.error(`   ✅ SUCCESS - Total: ${exit.value.total}`);
      } else {
        console.error("   ❌ FAILED - trechoExato alone not accepted");
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should test buscaGeral + todasPalavras", () =>
    Effect.gen(function* () {
      console.error("\n5️⃣  Testing: buscaGeral + todasPalavras");

      const service = yield* BnpService;

      const exit = yield* Effect.exit(
        service.searchPrecedents({
          buscaGeral: "direito",
          todasPalavras: "trabalho",
        })
      );

      if (exit._tag === "Success") {
        console.error(`   ✅ SUCCESS - Total: ${exit.value.total}`);
      } else {
        console.error("   ❌ FAILED - Combined search params not accepted");
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should test wildcard search", () =>
    Effect.gen(function* () {
      console.error("\n6️⃣  Testing: Empty search (wildcard)");

      const service = yield* BnpService;

      const exit = yield* Effect.exit(
        service.searchPrecedents({
          // No search parameters at all - just defaults
        })
      );

      if (exit._tag === "Success") {
        console.error(`   ✅ SUCCESS - Total: ${exit.value.total}`);
        console.error("   📝 API accepts empty search (returns all results)");
      } else {
        console.error("   ❌ FAILED - API requires some search criteria");
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should document working combination", () =>
    Effect.gen(function* () {
      console.error("\n7️⃣  Control: Known working combination");

      const service = yield* BnpService;

      const result = yield* service.searchPrecedents({
        buscaGeral: "direito",
        orgaos: ["STF"],
      });

      console.error(`   ✅ SUCCESS - Total: ${result.total}`);
      console.error("   📝 Confirmed: buscaGeral + orgaos filter works");

      assert.isTrue(result.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );
});
