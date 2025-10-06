import { ZodError, z } from "zod";

// ----------------------------------------------------------------------
// 1. Configuration & Constants
// ----------------------------------------------------------------------

const DATAJUD_PUBLIC_API_KEY =
  "cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==";

const DATAJUD_BASE_URL = "https://api-publica.datajud.cnj.jus.br/";
const BNP_BASE_URL = "https://pangeabnp.pdpj.jus.br/api/v1/";

// ----------------------------------------------------------------------
// 2. Zod Schemas for Datajud (Process Metadata)
// ----------------------------------------------------------------------

const ComplementoTabeladoSchema = z.object({
  codigo: z.number(),
  nome: z.string(),
  valor: z.number(),
  descricao: z.string(),
});

const MovimentoSchema = z.object({
  codigo: z.number(),
  nome: z.string(),
  dataHora: z.string().datetime(),
  complementosTabelados: z.array(ComplementoTabeladoSchema).optional(),
});

const SimpleCodeNameSchema = z.object({
  codigo: z.number(),
  nome: z.string(),
});

const OrgaoJulgadorSchema = z.object({
  codigo: z.number(),
  nome: z.string(),
  codigoMunicipioIBGE: z.number(),
});

const DatajudProcessSourceSchema = z.object({
  id: z.string(),
  numeroProcesso: z.string(),
  tribunal: z.string(),
  dataAjuizamento: z.string().datetime(),
  grau: z.string(),
  nivelSigilo: z.number(),
  classe: SimpleCodeNameSchema,
  sistema: SimpleCodeNameSchema,
  formato: SimpleCodeNameSchema,
  orgaoJulgador: OrgaoJulgadorSchema,
  assuntos: z.array(
    z.union([SimpleCodeNameSchema, z.array(SimpleCodeNameSchema)])
  ), // TPU data can be nested
  movimentos: z.array(MovimentoSchema).optional(),
});

const DatajudHitSchema = z.object({
  _index: z.string(),
  _id: z.string(),
  _score: z.number().nullable(),
  _source: DatajudProcessSourceSchema,
});

const DatajudSearchResponseSchema = z.object({
  took: z.number(),
  timed_out: z.boolean(),
  hits: z.object({
    total: z.object({
      value: z.number(),
      relation: z.string(),
    }),
    max_score: z.number().nullable(),
    hits: z.array(DatajudHitSchema),
  }),
});

// Infer TypeScript types from Zod schemas
type DatajudSearchResponse = z.infer<typeof DatajudSearchResponseSchema>;
type DatajudProcess = z.infer<typeof DatajudProcessSourceSchema>;

// ----------------------------------------------------------------------
// 3. Zod Schemas for BNP (Precedents Search)
// ----------------------------------------------------------------------

const PrecedentSearchFilterSchema = z.object({
  buscaGeral: z.string().optional().default(""),
  cancelados: z.boolean().optional().default(false),
  ordenacao: z
    .enum([
      "Textual",
      "Cronologica Ascendente",
      "Cronologica Descendente",
      "Numérica Ascendente",
      "Numérica Descendente",
    ])
    .optional()
    .default("Textual"),
  orgaos: z.array(z.string()).optional().default([]),
  pagina: z.number().int().positive().optional().default(1),
  tipos: z.array(z.string()).optional().default([]),
  todasPalavras: z.string().optional(),
  quaisquerPalavras: z.string().optional(),
  semPalavras: z.string().optional(),
  trechoExato: z.string().optional(),
});

const PrecedentSearchBodySchema = z.object({
  filtro: PrecedentSearchFilterSchema,
});

const PrecedentSchema = z.object({
  id: z.string(),
  orgao: z.string(), // API returns "orgao" not "siglaOrgao"
  tipo: z.string(), // API returns "tipo" not "especie"
  nr: z.number(), // API returns "nr" not "numero"
  questao: z.string(),
  tese: z.string().optional().nullable(), // A tese can be null/undefined if not yet decided
  situacao: z.string(),
  ultimaAtualizacao: z.string().optional(),
  possuiDecisoes: z.boolean().optional(),
  processosParadigma: z
    .array(
      z.object({
        numero: z.string(),
        link: z.string(),
      })
    )
    .optional(),
  suspensoes: z
    .array(
      z.object({
        ativa: z.boolean(),
        dataSuspensao: z.string(),
        descricao: z.string(),
        linkDecisao: z.string().optional(),
      })
    )
    .optional(),
  highlight: z.record(z.string(), z.string()).optional(), // Fixed: z.record needs both key and value types
  tese_snippet: z.string().optional(),
});

const AggregationSchema = z.object({
  tipo: z.string(),
  total: z.number(),
});

const BnpSearchResponseSchema = z.object({
  total: z.number(),
  resultados: z.array(PrecedentSchema),
  posicao_inicial: z.number(),
  posicao_final: z.number(),
  aggsEspecies: z.array(AggregationSchema),
  aggsOrgaos: z.array(AggregationSchema),
});

// Infer TypeScript types from Zod schemas
// Use z.input for PrecedentSearchFilter to allow optional fields (before defaults applied)
type PrecedentSearchFilter = z.input<typeof PrecedentSearchFilterSchema>;
type BnpSearchResponse = z.infer<typeof BnpSearchResponseSchema>;
type Precedent = z.infer<typeof PrecedentSchema>;

// ----------------------------------------------------------------------
// 4. Strongly-Typed Judicial Data Client
// ----------------------------------------------------------------------

class JudicialDataClient {
  /**
   * Searches judicial process metadata and validates the response against the Zod schema.
   * @param tribunalAlias The tribunal alias (e.g., tjdft, trf1).
   * @param queryDSL The Elasticsearch Query DSL object.
   * @returns A promise resolving to the validated Datajud search response.
   */
  async searchProcessMetadata(
    tribunalAlias: string,
    queryDSL: object
  ): Promise<DatajudSearchResponse> {
    const url = `${DATAJUD_BASE_URL}api_publica_${tribunalAlias}/_search`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `APIKey ${DATAJUD_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify(queryDSL),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Datajud API Error: ${response.status} ${response.statusText}\nDetails: ${errorText}`
      );
    }

    const data = await response.json();
    // Here's the magic: parse and validate the response at the boundary
    return DatajudSearchResponseSchema.parse(data);
  }

  /**
   * Searches legal precedents and validates the response against the Zod schema.
   * @param filter The search criteria, conforming to the PrecedentSearchFilter type.
   * @returns A promise resolving to the validated BNP search results.
   */
  async searchPrecedents(
    filter: PrecedentSearchFilter
  ): Promise<BnpSearchResponse> {
    const url = `${BNP_BASE_URL}precedentes`;

    // Parse the filter to apply default values for required fields
    const validatedFilter = PrecedentSearchFilterSchema.parse(filter);
    const requestBody = PrecedentSearchBodySchema.parse({
      filtro: validatedFilter,
    });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
        Origin: "https://pangeabnp.pdpj.jus.br",
        Referer: "https://pangeabnp.pdpj.jus.br/pesquisa",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `BNP API Error: ${response.status} ${response.statusText}\nDetails: ${errorText}`
      );
    }

    const data = await response.json();
    return BnpSearchResponseSchema.parse(data);
  }
}

// ----------------------------------------------------------------------
// 5. Example Usage
// ----------------------------------------------------------------------

async function runClient() {
  const client = new JudicialDataClient();

  // --- Example 1: Datajud Process Search with Zod Validation ---
  console.log("--- 1. Searching Datajud for process metadata ---");
  try {
    const datajudQuery = {
      query: { match: { numeroProcesso: "07223914020178070001" } },
      size: 1,
    };

    const result = await client.searchProcessMetadata("tjdft", datajudQuery);

    console.log(
      `Datajud search successful! Total hits: ${result.hits.total.value}`
    );
    if (result.hits.hits.length > 0) {
      const firstHit = result.hits.hits[0]!;
      const process: DatajudProcess = firstHit._source;
      console.log(`  Process Number: ${process.numeroProcesso}`);
      console.log(`  Class: ${process.classe.codigo} - ${process.classe.nome}`);
      console.log(`  Court: ${process.orgaoJulgador.nome}`);
    }
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("Datajud response validation failed:", error.issues);
    } else {
      console.error("An error occurred during Datajud search:", error);
    }
  }

  // --- Example 2: BNP Precedents Search with Zod Validation ---
  console.log("\n--- 2. Searching BNP for legal precedents ---");
  try {
    const bnpFilterIRR: PrecedentSearchFilter = {
      buscaGeral: "adicional de periculosidade",
      tipos: ["IRR"], // Incidente de Recursos Repetitivos
      orgaos: ["TST"],
      pagina: 1,
    };

    const precedentResult = await client.searchPrecedents(bnpFilterIRR);

    console.log(
      `BNP search successful! Found ${precedentResult.total} precedents.`
    );
    if (precedentResult.resultados.length > 0) {
      console.log("First few precedents:");
      precedentResult.resultados.slice(0, 3).forEach((precedent: Precedent) => {
        console.log(
          `  - [${precedent.tipo} ${precedent.nr}] ${precedent.questao.substring(0, 80)}...`
        );
      });
    }
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("BNP response validation failed:", error.issues);
    } else {
      console.error("An error occurred during BNP search:", error);
    }
  }
}

runClient();
