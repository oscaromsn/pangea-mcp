/**
 * Datajud Connector Examples
 * Demonstrates three query patterns using the Effect-TS Datajud connector with type-safe Query DSL
 *
 * Key Features:
 * - Automatic tribunal inference from process number
 * - Type-safe Elasticsearch Query DSL
 * - Advanced filtering and pagination
 */

import { Effect, Exit } from "effect";
import {
  DatajudFields,
  DatajudService,
  DatajudServiceLive,
  type DatajudProcessSource,
  TribunalAlias,
} from "../src/connectors/datajud/index";

/**
 * Helper function to display process details
 */
const displayProcessDetails = (process: DatajudProcessSource) => {
  console.log("📋 Process Details:");
  console.log(`  Process Number: ${process.numeroProcesso}`);
  console.log(`  Tribunal: ${process.tribunal}`);
  console.log(`  Class: ${process.classe.codigo} - ${process.classe.nome}`);
  console.log(`  Court: ${process.orgaoJulgador.nome}`);
  if (process.orgaoJulgador.codigoMunicipioIBGE !== undefined) {
    console.log(
      `  Municipality IBGE: ${process.orgaoJulgador.codigoMunicipioIBGE}`,
    );
  }
  console.log(`  Filing Date: ${process.dataAjuizamento}`);
  console.log(`  Degree: ${process.grau}`);
  console.log();
};

/**
 * Example 1: Simple search by process number
 */
const example1SimpleSearch = Effect.gen(function* () {
  console.log("📍 Example 1: Simple Search by Process Number");
  console.log("Search: 00008323520184013202 (unformatted)");
  console.log();

  const datajudService = yield* DatajudService;

  const result = yield* datajudService.searchProcessMetadata(
    "00008323520184013202",
  );

  console.log(`✅ Search successful!`);
  console.log(`Total hits: ${result.hits.total.value}`);
  console.log(`Search took: ${result.took}ms`);
  console.log();

  if (result.hits.hits.length > 0 && result.hits.hits[0]) {
    displayProcessDetails(result.hits.hits[0]._source);
  } else {
    console.log("⚠️  No results found");
  }
});

/**
 * Example 2: Advanced filter - Search by class code and judging body
 * Based on DataJud Wiki Example 2
 */
const example2AdvancedFilter = Effect.gen(function* () {
  console.log(
    "📍 Example 2: Advanced Filter - Class Code + Judging Body",
  );
  console.log("Filter: Class 1116 (Execução Fiscal) AND Judging Body 13597");
  console.log("Reference process: 07223914020178070001");
  console.log();

  const datajudService = yield* DatajudService;

  const result = yield* datajudService.searchProcessMetadata(
    "07223914020178070001",
    {
      query: {
        bool: {
          must: [
            { match: { [DatajudFields.classe.codigo]: 1116 } },
            { match: { [DatajudFields.orgaoJulgador.codigo]: 13597 } },
          ],
        },
      },
      size: 100,
    },
  );

  console.log(`✅ Search successful!`);
  console.log(`Total hits: ${result.hits.total.value}`);
  console.log(`Search took: ${result.took}ms`);
  console.log(`Returned: ${result.hits.hits.length} processes`);
  console.log();

  if (result.hits.hits.length > 0) {
    console.log("Sample results:");
    result.hits.hits.slice(0, 3).forEach((hit, index) => {
      console.log(`\n  ${index + 1}. ${hit._source.numeroProcesso}`);
      console.log(`     Class: ${hit._source.classe.nome}`);
      console.log(`     Court: ${hit._source.orgaoJulgador.nome}`);
    });

    if (result.hits.hits.length > 3) {
      console.log(`\n  ... and ${result.hits.hits.length - 3} more`);
    }
  } else {
    console.log("⚠️  No results found");
  }
});

/**
 * Example 3: Pagination with search_after
 * Based on DataJud Wiki Example 3
 */
const example3Pagination = Effect.gen(function* () {
  console.log("📍 Example 3: Pagination with search_after");
  console.log("Filter: Class 1116 (Execução Fiscal) AND Judging Body 13597");
  console.log("Fetching 2 pages of 10 results each");
  console.log();

  const datajudService = yield* DatajudService;

  // Page 1: Initial search with sorting
  console.log("Fetching page 1...");
  const page1 = yield* datajudService.searchProcessMetadata(
    "07223914020178070001",
    {
      query: {
        bool: {
          must: [
            { match: { [DatajudFields.classe.codigo]: 1116 } },
            { match: { [DatajudFields.orgaoJulgador.codigo]: 13597 } },
          ],
        },
      },
      size: 10,
      sort: [{ "@timestamp": { order: "asc" } }],
    },
  );

  console.log(`✅ Page 1: ${page1.hits.hits.length} results`);
  console.log(`Total available: ${page1.hits.total.value}`);

  if (page1.hits.hits.length > 0) {
    console.log("\nPage 1 sample:");
    page1.hits.hits.slice(0, 2).forEach((hit, index) => {
      console.log(`  ${index + 1}. ${hit._source.numeroProcesso}`);
    });
  }

  // Page 2: Use search_after from last hit of page 1
  if (page1.hits.hits.length === 10) {
    console.log("\nFetching page 2...");
    const lastHit = page1.hits.hits[page1.hits.hits.length - 1];

    if (lastHit?.sort) {
      const page2 = yield* datajudService.searchProcessMetadata(
        "07223914020178070001",
        {
          query: {
            bool: {
              must: [
                { match: { [DatajudFields.classe.codigo]: 1116 } },
                { match: { [DatajudFields.orgaoJulgador.codigo]: 13597 } },
              ],
            },
          },
          size: 10,
          sort: [{ "@timestamp": { order: "asc" } }],
          search_after: lastHit.sort,
        },
      );

      console.log(`✅ Page 2: ${page2.hits.hits.length} results`);

      if (page2.hits.hits.length > 0) {
        console.log("\nPage 2 sample:");
        page2.hits.hits.slice(0, 2).forEach((hit, index) => {
          console.log(`  ${index + 1}. ${hit._source.numeroProcesso}`);
        });
      }

      console.log(`\n✅ Successfully paginated through 2 pages`);
      console.log(
        `Total fetched: ${page1.hits.hits.length + page2.hits.hits.length} processes`,
      );
    }
  }
});

/**
 * Example 4: Text-based search with bool query (must + should)
 * Real-world use case: Legal research using human-readable field names
 * Demonstrates direct tribunal specification (no process number needed)
 */
const example4TextSearch = Effect.gen(function* () {
  console.log("📍 Example 4: Text Search - Usucapião in Praia Grande");
  console.log("Query: MUST be in Praia Grande court");
  console.log("       SHOULD match 'usucapião' in class OR subject");
  console.log("Tribunal: TJSP (Tribunal de Justiça de São Paulo)");
  console.log();

  const datajudService = yield* DatajudService;

  const result = yield* datajudService.searchProcessMetadata(
    TribunalAlias("tjsp"), // Direct tribunal specification (clean API!)
    {
      query: {
        bool: {
          must: [
            { match: { [DatajudFields.orgaoJulgador.nome]: "Praia Grande" } },
          ],
          should: [
            { match: { [DatajudFields.classe.nome]: "usucapião" } },
            { match: { [DatajudFields.assuntos.nome]: "usucapião" } },
          ],
        },
      },
      size: 50,
    },
  );

  console.log(`✅ Search successful!`);
  console.log(`Total hits: ${result.hits.total.value}`);
  console.log(`Search took: ${result.took}ms`);
  console.log(`Returned: ${result.hits.hits.length} processes`);
  console.log();

  if (result.hits.hits.length > 0) {
    console.log("Sample results:");
    result.hits.hits.slice(0, 3).forEach((hit, index) => {
      console.log(`\n  ${index + 1}. ${hit._source.numeroProcesso}`);
      console.log(`     Class: ${hit._source.classe.nome}`);
      console.log(`     Court: ${hit._source.orgaoJulgador.nome}`);
      if (hit._source.assuntos && hit._source.assuntos.length > 0) {
        const firstAssunto = hit._source.assuntos[0];
        if (firstAssunto) {
          let assuntoNome: string | undefined;
          if (Array.isArray(firstAssunto)) {
            assuntoNome = firstAssunto[0]?.nome;
          } else if ("nome" in firstAssunto) {
            assuntoNome = firstAssunto.nome;
          }
          if (assuntoNome) {
            console.log(`     Subject: ${assuntoNome}`);
          }
        }
      }
    });

    if (result.hits.hits.length > 3) {
      console.log(`\n  ... and ${result.hits.hits.length - 3} more`);
    }
  } else {
    console.log("⚠️  No results found");
  }
});

/**
 * Main program - Run all examples
 */
const runDatajudExamples = Effect.gen(function* () {
  console.log("=== Datajud Type-Safe Query Examples ===\n");

  yield* example1SimpleSearch;
  console.log("\n" + "=".repeat(60) + "\n");

  yield* example2AdvancedFilter;
  console.log("\n" + "=".repeat(60) + "\n");

  yield* example3Pagination;
  console.log("\n" + "=".repeat(60) + "\n");

  yield* example4TextSearch;
  console.log("\n" + "=".repeat(60) + "\n");

  console.log("✅ All 4 examples completed successfully!");
});

// Run all examples with proper error handling
const program = runDatajudExamples.pipe(
  Effect.provide(DatajudServiceLive),
  Effect.catchAll((error) =>
    Effect.gen(function* () {
      console.error("\n❌ Error occurred during Datajud examples:");
      console.error(error);
      return yield* Effect.fail(error);
    }),
  ),
);

// Execute the program
Effect.runPromiseExit(program).then((exit) => {
  if (Exit.isFailure(exit)) {
    console.error("\nProgram failed:");
    console.error(exit.cause);
    process.exit(1);
  } else {
    console.log("\n✅ All 4 examples completed successfully!");
  }
});
