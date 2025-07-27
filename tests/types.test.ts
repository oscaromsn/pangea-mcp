import { expect, test } from "bun:test";
import {
  COURT_CODES,
  type CourtCode,
  CourtCodeSchema,
  getAllCourtCodes,
  getAllPrecedentTypes,
  getCourtName,
  getPrecedentTypeName,
  PRECEDENT_TYPES,
  PrecedentTypeSchema,
  SearchParamsSchema,
  SearchRequestSchema,
  SearchResponseSchema,
  SearchResultItemSchema,
} from "@/types";

test("CourtCodeSchema - validates valid court codes", () => {
  const validCodes = ["STF", "STJ", "TST", "TJSP", "TRT01"];

  for (const code of validCodes) {
    expect(() => CourtCodeSchema.parse(code)).not.toThrow();
  }
});

test("CourtCodeSchema - rejects invalid court codes", () => {
  const invalidCodes = ["INVALID", "ABC", "", 123];

  for (const code of invalidCodes) {
    expect(() => CourtCodeSchema.parse(code)).toThrow();
  }
});

test("PrecedentTypeSchema - validates valid precedent types", () => {
  const validTypes = ["SUM", "SV", "RG", "IRDR", "OJ"];

  for (const type of validTypes) {
    expect(() => PrecedentTypeSchema.parse(type)).not.toThrow();
  }
});

test("PrecedentTypeSchema - rejects invalid precedent types", () => {
  const invalidTypes = ["INVALID", "ABC", "", 123];

  for (const type of invalidTypes) {
    expect(() => PrecedentTypeSchema.parse(type)).toThrow();
  }
});

test("SearchParamsSchema - validates complete search params", () => {
  const validParams = {
    buscaGeral: "responsabilidade civil",
    todasPalavras: "civil penal",
    quaisquerPalavras: "direito lei",
    semPalavras: "criminal",
    trechoExato: "responsabilidade civil",
    atualizacaoDesde: "2023-01-01",
    atualizacaoAte: "2023-12-31",
    cancelados: false,
    ordenacao: "Text",
    nr: "123",
    pagina: 1,
    tamanhoPagina: 10,
    orgaos: ["STF", "STJ"],
    tipos: ["RG", "SUM"],
  };

  expect(() => SearchParamsSchema.parse(validParams)).not.toThrow();
});

test("SearchParamsSchema - applies defaults", () => {
  const minimalParams = {};
  const parsed = SearchParamsSchema.parse(minimalParams);

  expect(parsed.buscaGeral).toBe("");
  expect(parsed.todasPalavras).toBe("");
  expect(parsed.quaisquerPalavras).toBe("");
  expect(parsed.semPalavras).toBe("");
  expect(parsed.trechoExato).toBe("");
  expect(parsed.atualizacaoDesde).toBe("");
  expect(parsed.atualizacaoAte).toBe("");
  expect(parsed.cancelados).toBe(false);
  expect(parsed.ordenacao).toBe("Text");
  expect(parsed.nr).toBe("");
  expect(parsed.pagina).toBe(1);
  expect(parsed.tamanhoPagina).toBe(10);
});

test("SearchParamsSchema - validates pagination", () => {
  // Valid pagination
  expect(() =>
    SearchParamsSchema.parse({ pagina: 1, tamanhoPagina: 10 })
  ).not.toThrow();
  expect(() =>
    SearchParamsSchema.parse({ pagina: 5, tamanhoPagina: 100 })
  ).not.toThrow();

  // Invalid pagination
  expect(() => SearchParamsSchema.parse({ pagina: 0 })).toThrow(); // Not positive
  expect(() => SearchParamsSchema.parse({ pagina: -1 })).toThrow(); // Negative
  expect(() => SearchParamsSchema.parse({ tamanhoPagina: 101 })).toThrow(); // Too large
  expect(() => SearchParamsSchema.parse({ tamanhoPagina: 0 })).toThrow(); // Not positive
});

test("SearchRequestSchema - validates request structure", () => {
  const validRequest = {
    filtro: {
      buscaGeral: "test",
      pagina: 1,
      tamanhoPagina: 10,
      orgaos: ["STF"],
      tipos: ["RG"],
    },
  };

  expect(() => SearchRequestSchema.parse(validRequest)).not.toThrow();
});

test("SearchResultItemSchema - validates result item", () => {
  const validItem = {
    id: "stf-rg-123",
    nr: 123,
    orgao: "STF",
    tipo: "RG",
    situacao: "Vigente",
    tese: "Tese sobre responsabilidade civil",
    questao: "Questão jurídica",
    ultimaAtualizacao: "2023-01-01",
    texto: "Texto completo",
    assunto: "Direito Civil",
    ementa: "Ementa do precedente",
  };

  expect(() => SearchResultItemSchema.parse(validItem)).not.toThrow();
});

test("SearchResultItemSchema - validates minimal result item", () => {
  const minimalItem = {
    id: "stf-rg-123",
    nr: 123,
    orgao: "STF",
    tipo: "RG",
    situacao: "Vigente",
  };

  expect(() => SearchResultItemSchema.parse(minimalItem)).not.toThrow();
});

test("SearchResponseSchema - validates complete response", () => {
  const validResponse = {
    total: 1,
    posicao_inicial: 1,
    posicao_final: 1,
    resultados: [
      {
        id: "stf-rg-123",
        nr: 123,
        orgao: "STF",
        tipo: "RG",
        situacao: "Vigente",
      },
    ],
    aggsEspecies: [{ tipo: "RG", total: 1 }],
    aggsOrgaos: [{ tipo: "STF", total: 1 }],
  };

  expect(() => SearchResponseSchema.parse(validResponse)).not.toThrow();
});

test("SearchResponseSchema - validates minimal response", () => {
  const minimalResponse = {
    total: 0,
    posicao_inicial: 0,
    posicao_final: 0,
    resultados: [],
  };

  expect(() => SearchResponseSchema.parse(minimalResponse)).not.toThrow();
});

test("getAllCourtCodes - returns all court codes", () => {
  const allCodes = getAllCourtCodes();

  expect(allCodes).toContain("STF");
  expect(allCodes).toContain("STJ");
  expect(allCodes).toContain("TST");
  expect(allCodes).toContain("TJSP");
  expect(allCodes).toContain("TRT01");

  // Should include all categories
  expect(allCodes.length).toBeGreaterThan(40);
});

test("getAllPrecedentTypes - returns all precedent types", () => {
  const allTypes = getAllPrecedentTypes();

  expect(allTypes).toContain("SUM");
  expect(allTypes).toContain("SV");
  expect(allTypes).toContain("RG");
  expect(allTypes).toContain("IRDR");

  expect(allTypes.length).toBe(11);
});

test("getCourtName - returns correct court names", () => {
  expect(getCourtName("STF")).toBe("Supremo Tribunal Federal");
  expect(getCourtName("STJ")).toBe("Superior Tribunal de Justiça");
  expect(getCourtName("TJSP")).toBe("TJ São Paulo");
  expect(getCourtName("TRT01")).toBe("TRT 1ª Região (RJ)");
});

test("getCourtName - returns code for unknown courts", () => {
  expect(getCourtName("UNKNOWN" as CourtCode)).toBe("UNKNOWN");
});

test("getPrecedentTypeName - returns correct type names", () => {
  expect(getPrecedentTypeName("SUM")).toBe("Súmula");
  expect(getPrecedentTypeName("SV")).toBe("Súmula Vinculante");
  expect(getPrecedentTypeName("RG")).toBe("Repercussão Geral");
  expect(getPrecedentTypeName("IRDR")).toBe(
    "Incidente de Resolução de Demandas Repetitivas"
  );
});

test("COURT_CODES - contains all expected categories", () => {
  expect(COURT_CODES.SUPREME_COURTS).toBeDefined();
  expect(COURT_CODES.FEDERAL_COURTS).toBeDefined();
  expect(COURT_CODES.STATE_COURTS).toBeDefined();
  expect(COURT_CODES.LABOR_COURTS).toBeDefined();

  expect(Object.keys(COURT_CODES.SUPREME_COURTS)).toContain("STF");
  expect(Object.keys(COURT_CODES.FEDERAL_COURTS)).toContain("TRF01");
  expect(Object.keys(COURT_CODES.STATE_COURTS)).toContain("TJSP");
  expect(Object.keys(COURT_CODES.LABOR_COURTS)).toContain("TRT01");
});

test("PRECEDENT_TYPES - contains all expected types", () => {
  expect(PRECEDENT_TYPES.SUM).toBe("Súmula");
  expect(PRECEDENT_TYPES.SV).toBe("Súmula Vinculante");
  expect(PRECEDENT_TYPES.RG).toBe("Repercussão Geral");
  expect(PRECEDENT_TYPES.IRDR).toBe(
    "Incidente de Resolução de Demandas Repetitivas"
  );

  expect(Object.keys(PRECEDENT_TYPES)).toHaveLength(11);
});
