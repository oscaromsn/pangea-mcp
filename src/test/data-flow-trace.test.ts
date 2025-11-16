/**
 * Data Flow Trace Test
 *
 * Reproduces EXACT MCP client scenario with full logging to trace data flow
 */

import { it } from "@effect/vitest";
import { Effect } from "effect";
import { assert, describe } from "vitest";
import { BnpService, BnpServiceLive } from "../connectors/bnp";

describe("Data Flow Trace - Reproduce MCP Client Scenario", () => {
  it.effect("should trace EXACT request from MCP logs", () =>
    Effect.gen(function* () {
      console.error("\n🎯 === REPRODUCING EXACT MCP REQUEST ===");
      console.error("MCP Client sent:");
      console.error(
        JSON.stringify(
          {
            busca_geral: "adicional de insalubridade",
            orgaos: ["TST", "STF", "STJ"],
            tamanho_pagina: 10,
          },
          null,
          2
        )
      );

      const service = yield* BnpService;

      // Reproduce exact transformation that handler does
      const params = {
        busca_geral: "adicional de insalubridade",
        orgaos: ["TST", "STF", "STJ"],
        tamanho_pagina: 10,
      };

      const serviceParams = {
        buscaGeral: params.busca_geral,
        orgaos: [...params.orgaos],
        // tamanho_pagina NOT passed (handler doesn't send it)
      };

      console.error("\n📤 Calling service with:");
      console.error(JSON.stringify(serviceParams, null, 2));

      const result = yield* service.searchPrecedents(serviceParams);

      console.error(`\n✅ SUCCESS - Total: ${result.total}`);
      assert.isTrue(result.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should trace search_by_court request", () =>
    Effect.gen(function* () {
      console.error("\n🎯 === REPRODUCING search_by_court REQUEST ===");

      const service = yield* BnpService;

      const params = {
        busca_geral: "adicional de insalubridade",
        orgaos: ["TST", "STF", "STJ"],
        tamanho_pagina: 10,
      };

      const serviceParams = {
        buscaGeral: params.busca_geral,
        orgaos: [...params.orgaos],
        // tamanho_pagina NOT passed
      };

      console.error("\n📤 search_by_court calling service with:");
      console.error(JSON.stringify(serviceParams, null, 2));

      const result = yield* service.searchPrecedents(serviceParams);

      console.error(`\n✅ SUCCESS - Total: ${result.total}`);
      assert.isTrue(result.total >= 0);
    }).pipe(Effect.provide(BnpServiceLive))
  );

  it.effect("should compare working vs failing scenarios", () =>
    Effect.gen(function* () {
      console.error("\n🔬 === COMPARING SCENARIOS ===");

      const service = yield* BnpService;

      // Scenario 1: Working example from bnp-example.ts
      console.error("\n1️⃣ WORKING: bnp-example.ts parameters");
      const working = {
        buscaGeral: "adicional de periculosidade",
        tipos: ["IRR"],
        orgaos: ["TST"],
        pagina: 1,
      };
      console.error(JSON.stringify(working, null, 2));

      const result1 = yield* service.searchPrecedents(working);
      console.error(`   ✅ SUCCESS - Total: ${result1.total}`);

      // Scenario 2: MCP request (failing)
      console.error("\n2️⃣ FAILING: MCP client parameters");
      const failing = {
        buscaGeral: "adicional de insalubridade",
        orgaos: ["TST", "STF", "STJ"],
      };
      console.error(JSON.stringify(failing, null, 2));

      const exit = yield* Effect.exit(service.searchPrecedents(failing));

      if (exit._tag === "Success") {
        console.error(`   ✅ SUCCESS - Total: ${exit.value.total}`);
        assert.isTrue(exit.value.total >= 0);
      } else {
        console.error("   ❌ FAILED");
        console.error(JSON.stringify(exit.cause, null, 2));
      }
    }).pipe(Effect.provide(BnpServiceLive))
  );
});
