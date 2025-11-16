/**
 * BNP Connector Example
 * Demonstrates searching for legal precedents using the Effect-TS BNP connector
 */

import { BunRuntime } from "@effect/platform-bun";
import { Effect } from "effect";
import {
	BnpService,
	BnpServiceLive,
	type Precedent,
	type PrecedentSearchFilter,
} from "../src/connectors/bnp/index";

/**
 * Example query that searches for precedents about "adicional de periculosidade"
 * (hazard pay allowance) in the TST (Superior Labor Court)
 */
const runBnpExample = Effect.gen(function* () {
  console.log("=== BNP Legal Precedents Search Example ===\n");

  // Get the BNP service
  const bnpService = yield* BnpService;

  // Define the search filter
  // This searches for IRR (Incidente de Recursos Repetitivos) precedents
  // about "adicional de periculosidade" in the TST
  const bnpFilter: PrecedentSearchFilter = {
    buscaGeral: "adicional de periculosidade",
    tipos: ["IRR"], // Incidente de Recursos Repetitivos
    orgaos: ["TST"], // Tribunal Superior do Trabalho
    pagina: 1,
  };

  console.log("Searching BNP for legal precedents...");
  console.log(`Search term: "${bnpFilter.buscaGeral}"`);
  console.log(`Precedent types: ${bnpFilter.tipos?.join(", ")}`);
  console.log(`Courts: ${bnpFilter.orgaos?.join(", ")}`);
  console.log(`Page: ${bnpFilter.pagina}`);
  console.log();

  // Execute the search
  const result = yield* bnpService.searchPrecedents(bnpFilter);

  console.log(`✅ Search successful!`);
  console.log(`Total precedents found: ${result.total}`);
  console.log(
    `Showing results ${result.posicao_inicial} to ${result.posicao_final}`,
  );
  console.log();

  // Display aggregations
  if (result.aggsEspecies.length > 0) {
    console.log("📊 Precedent Types (Especies):");
    result.aggsEspecies.forEach((agg) => {
      console.log(`  - ${agg.tipo}: ${agg.total}`);
    });
    console.log();
  }

  if (result.aggsOrgaos.length > 0) {
    console.log("🏛️  Courts (Orgaos):");
    result.aggsOrgaos.forEach((agg) => {
      console.log(`  - ${agg.tipo}: ${agg.total}`);
    });
    console.log();
  }

  // Display first few precedents
  if (result.resultados.length > 0) {
    console.log(
      `📚 First ${Math.min(3, result.resultados.length)} Precedents:\n`,
    );

    result.resultados.slice(0, 3).forEach((precedent: Precedent, index) => {
      console.log(`${index + 1}. [${precedent.tipo} ${precedent.nr}]`);
      console.log(`   Court: ${precedent.orgao}`);
      console.log(`   Status: ${precedent.situacao}`);
      console.log(
        `   Question: ${precedent.questao?.substring(0, 100) ?? "N/A"}${(precedent.questao?.length ?? 0) > 100 ? "..." : ""}`,
      );

      if (precedent.tese) {
        console.log(
          `   Thesis: ${precedent.tese.substring(0, 100)}${precedent.tese.length > 100 ? "..." : ""}`,
        );
      }

      if (precedent.processosParadigma && precedent.processosParadigma.length > 0) {
        console.log(
          `   Paradigm Processes: ${precedent.processosParadigma.length}`,
        );
      }

      if (precedent.ultimaAtualizacao) {
        console.log(`   Last Update: ${precedent.ultimaAtualizacao}`);
      }

      console.log();
    });

    if (result.resultados.length > 3) {
      console.log(`... and ${result.resultados.length - 3} more precedents`);
    }
  } else {
    console.log("⚠️  No precedents found for this search");
  }
});

// Run the example with BunRuntime.runMain
// This provides automatic error handling with pretty-printed output
const runnable = runBnpExample.pipe(Effect.provide(BnpServiceLive));

BunRuntime.runMain(runnable);
