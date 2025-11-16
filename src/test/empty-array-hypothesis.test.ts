/**
 * Empty Array Hypothesis Test
 *
 * Tests whether the BNP API rejects empty arrays in the filtro object.
 * This could explain why searches without court/type filters fail with HTTP 400.
 */

import { it } from "@effect/vitest";
import { Effect } from "effect";
import { assert, describe } from "vitest";
import { BnpService, BnpServiceLive } from "../connectors/bnp";

describe("Empty Array Hypothesis - BNP API Behavior", () => {
  it.effect("should test if API accepts empty arrays", () =>
    Effect.gen(function* () {
      console.error("\n🧪 === EMPTY ARRAY HYPOTHESIS ===");

      const service = yield* BnpService;

      // Test 1: With populated arrays (known to work)
      console.error("\n1️⃣  Test with populated arrays:");
      const withFilters = {
        buscaGeral: "direito",
        orgaos: ["STF"],
        tipos: ["SUM"],
      };
      console.error(JSON.stringify(withFilters, null, 2));

      const result1 = yield* service.searchPrecedents(withFilters);
      console.error(`✅ SUCCESS - Total: ${result1.total}`);

      // Test 2: With empty arrays (suspected to fail)
      console.error("\n2️⃣  Test with empty arrays:");
      const withEmptyArrays = {
        buscaGeral: "direito",
        orgaos: [],
        tipos: [],
      };
      console.error(JSON.stringify(withEmptyArrays, null, 2));

      const result2 = yield* service.searchPrecedents(withEmptyArrays).pipe(
        Effect.tap(() =>
          Effect.sync(() => {
            console.error(`✅ SUCCESS - Total: ${result2.total}`);
          })
        ),
        Effect.tapError((error) =>
          Effect.sync(() => {
            console.error("❌ FAILED with empty arrays!");
            console.error(JSON.stringify(error, null, 2));
          })
        )
      );

      assert.isTrue(result1.total >= 0);
      assert.isTrue(result2.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect(
    "should test if omitting arrays is different from empty arrays",
    () =>
      Effect.gen(function* () {
        console.error("\n🔬 === OMITTED VS EMPTY ARRAYS ===");

        const service = yield* BnpService;

        // Test 1: Explicitly passing empty arrays
        console.error("\n1️⃣  With explicit empty arrays:");
        const explicit = {
          buscaGeral: "direito",
          orgaos: [],
          tipos: [],
          pagina: 1,
        };
        console.error(JSON.stringify(explicit, null, 2));

        // Test 2: Omitting array fields entirely
        console.error("\n2️⃣  Without array fields (omitted):");
        const omitted = {
          buscaGeral: "direito",
          pagina: 1,
          // orgaos and tipos not specified
        };
        console.error(JSON.stringify(omitted, null, 2));

        const result1 = yield* service.searchPrecedents(explicit).pipe(
          Effect.tap(() =>
            Effect.sync(() => console.error("   ✅ Explicit succeeded"))
          ),
          Effect.catchAll(() =>
            Effect.succeed({
              total: -1,
              resultados: [],
              posicao_inicial: 0,
              posicao_final: 0,
              aggsEspecies: [],
              aggsOrgaos: [],
            })
          )
        );

        const result2 = yield* service.searchPrecedents(omitted).pipe(
          Effect.tap(() =>
            Effect.sync(() => console.error("   ✅ Omitted succeeded"))
          ),
          Effect.catchAll(() =>
            Effect.succeed({
              total: -1,
              resultados: [],
              posicao_inicial: 0,
              posicao_final: 0,
              aggsEspecies: [],
              aggsOrgaos: [],
            })
          )
        );

        console.error(
          `\nExplicit result: ${result1.total >= 0 ? "SUCCESS" : "FAILED"}`
        );
        console.error(
          `Omitted result: ${result2.total >= 0 ? "SUCCESS" : "FAILED"}`
        );
      }).pipe(Effect.provide(BnpServiceLive))
  );
});
