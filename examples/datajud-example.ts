/**
 * Datajud Connector Example
 * Demonstrates searching for judicial process metadata using the Effect-TS Datajud connector
 */

import { Effect, Exit } from "effect";
import {
  DatajudService,
  DatajudServiceLive,
  type DatajudProcessSource,
} from "../src/connectors/datajud/index";

/**
 * Example query that searches for a specific process in the TJDFT tribunal
 * (Tribunal de Justiça do Distrito Federal)
 */
const runDatajudExample = Effect.gen(function* () {
  console.log("=== Datajud Process Metadata Search Example ===\n");

  // Get the Datajud service
  const datajudService = yield* DatajudService;

  // Define the Elasticsearch query DSL
  // This searches for process number "07223914020178070001" in TJDFT
  const datajudQuery = {
    query: {
      match: {
        numeroProcesso: "07223914020178070001",
      },
    },
    size: 1,
  };

  console.log("Searching Datajud for process metadata...");
  console.log(`Tribunal: tjdft`);
  console.log(`Process Number: 07223914020178070001`);
  console.log();

  // Execute the search
  const result = yield* datajudService.searchProcessMetadata(
    "tjdft",
    datajudQuery,
  );

  console.log(`✅ Search successful!`);
  console.log(`Total hits: ${result.hits.total.value}`);
  console.log(`Search took: ${result.took}ms`);
  console.log();

  // Display first result if available
  if (result.hits.hits.length > 0) {
    const firstHit = result.hits.hits[0];
    if (firstHit) {
      const process: DatajudProcessSource = firstHit._source;

      console.log("📋 Process Details:");
      console.log(`  Process Number: ${process.numeroProcesso}`);
      console.log(`  Tribunal: ${process.tribunal}`);
      console.log(
        `  Class: ${process.classe.codigo} - ${process.classe.nome}`,
      );
      console.log(`  Court: ${process.orgaoJulgador.nome}`);
      console.log(
        `  Municipality IBGE: ${process.orgaoJulgador.codigoMunicipioIBGE}`,
      );
      console.log(`  Filing Date: ${process.dataAjuizamento}`);
      console.log(`  Degree: ${process.grau}`);
      console.log();

      // Display movements if available
      if (process.movimentos && process.movimentos.length > 0) {
        console.log(`📝 Movements (${process.movimentos.length} total):`);
        process.movimentos.slice(0, 3).forEach((mov) => {
          console.log(`  - [${mov.codigo}] ${mov.nome}`);
          console.log(`    Date: ${mov.dataHora}`);
        });
        if (process.movimentos.length > 3) {
          console.log(`  ... and ${process.movimentos.length - 3} more`);
        }
      }
    }
  } else {
    console.log("⚠️  No results found for this process number");
  }
});

// Run the example with proper error handling
const program = runDatajudExample.pipe(
  Effect.provide(DatajudServiceLive),
  Effect.catchAll((error) =>
    Effect.gen(function* () {
      console.error("\n❌ Error occurred during Datajud search:");
      console.error(error);
      return yield* Effect.fail(error);
    }),
  ),
);

// Execute the program
Effect.runPromiseExit(program).then((exit) => {
  if (Exit.isFailure(exit)) {
    console.error("\n Program failed:");
    console.error(exit.cause);
    process.exit(1);
  } else {
    console.log("\n✅ Program completed successfully");
  }
});
