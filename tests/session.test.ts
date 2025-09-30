import { expect, test } from "bun:test";
import type { SearchResponse } from "@/types";
import { SessionManager } from "../src/session";

test("SessionManager - save and retrieve search", () => {
  const sessionManager = new SessionManager();
  const searchParams = { busca_geral: "civil" };
  const results = { total: 10, resultados: [] };

  sessionManager.saveSearch("test-search", searchParams, results);

  const savedSearch = sessionManager.getSavedSearch("test-search");
  expect(savedSearch).toBeDefined();
  expect(savedSearch?.search_params).toEqual(searchParams);
  expect(savedSearch?.results).toEqual(results);
  expect(savedSearch?.timestamp).toBeDefined();
});

test("SessionManager - get non-existent search", () => {
  const sessionManager = new SessionManager();
  const savedSearch = sessionManager.getSavedSearch("non-existent");
  expect(savedSearch).toBeUndefined();
});

test("SessionManager - delete saved search", () => {
  const sessionManager = new SessionManager();
  const searchParams = { busca_geral: "civil" };
  const results = { total: 10, resultados: [] };

  sessionManager.saveSearch("test-search", searchParams, results);
  expect(sessionManager.getSavedSearch("test-search")).toBeDefined();

  const deleted = sessionManager.deleteSavedSearch("test-search");
  expect(deleted).toBe(true);
  expect(sessionManager.getSavedSearch("test-search")).toBeUndefined();
});

test("SessionManager - delete non-existent search", () => {
  const sessionManager = new SessionManager();
  const deleted = sessionManager.deleteSavedSearch("non-existent");
  expect(deleted).toBe(false);
});

test("SessionManager - get all saved searches", () => {
  const sessionManager = new SessionManager();

  sessionManager.saveSearch("search1", { term: "civil" }, { total: 5 });
  sessionManager.saveSearch("search2", { term: "penal" }, { total: 3 });

  const allSearches = sessionManager.getAllSavedSearches();
  expect(allSearches.size).toBe(2);
  expect(allSearches.has("search1")).toBe(true);
  expect(allSearches.has("search2")).toBe(true);
});

test("SessionManager - add to history", () => {
  const sessionManager = new SessionManager();
  const params = { busca_geral: "civil" };

  sessionManager.addToHistory(params, 15);

  const history = sessionManager.getSearchHistory();
  expect(history).toHaveLength(1);
  expect(history[0]?.params).toEqual(params);
  expect(history[0]?.total_results).toBe(15);
  expect(history[0]?.timestamp).toBeDefined();
});

test("SessionManager - history size limit", () => {
  const sessionManager = new SessionManager();

  // Add more than 100 entries
  for (let i = 0; i < 105; i++) {
    sessionManager.addToHistory({ search: `query-${i}` }, i);
  }

  const history = sessionManager.getSearchHistory();
  expect(history).toHaveLength(100);
  // Should keep the latest 100 entries
  expect(history[0]?.total_results).toBe(5); // entries 5-104 (100 total)
  expect(history[99]?.total_results).toBe(104);
});

test("SessionManager - clear history", () => {
  const sessionManager = new SessionManager();

  sessionManager.addToHistory({ busca_geral: "civil" }, 10);
  sessionManager.addToHistory({ busca_geral: "penal" }, 5);

  expect(sessionManager.getSearchHistory()).toHaveLength(2);

  sessionManager.clearHistory();
  expect(sessionManager.getSearchHistory()).toHaveLength(0);
});

test("SessionManager - analyze empty results", () => {
  const sessionManager = new SessionManager();
  const emptyResults: SearchResponse = {
    total: 0,
    posicao_inicial: 0,
    posicao_final: 0,
    resultados: [],
  };

  const analysis = sessionManager.analyzeResults(emptyResults);

  expect(analysis.total_results).toBe(0);
  expect(Object.keys(analysis.courts_distribution)).toHaveLength(0);
  expect(Object.keys(analysis.types_distribution)).toHaveLength(0);
  expect(Object.keys(analysis.status_distribution)).toHaveLength(0);
  expect(Object.keys(analysis.year_distribution)).toHaveLength(0);
});

test("SessionManager - analyze results with data", () => {
  const sessionManager = new SessionManager();
  const results: SearchResponse = {
    total: 3,
    posicao_inicial: 1,
    posicao_final: 3,
    resultados: [
      {
        id: "1",
        nr: 1,
        orgao: "STF",
        tipo: "RG",
        situacao: "Vigente",
        ultimaAtualizacao: "01/01/2023",
      },
      {
        id: "2",
        nr: 2,
        orgao: "STF",
        tipo: "SUM",
        situacao: "Vigente",
        ultimaAtualizacao: "15/06/2023",
      },
      {
        id: "3",
        nr: 3,
        orgao: "STJ",
        tipo: "RG",
        situacao: "Cancelado",
        ultimaAtualizacao: "2022-12-01",
      },
    ],
  };

  const analysis = sessionManager.analyzeResults(results);

  expect(analysis.total_results).toBe(3);

  // Court distribution (STF: 2, STJ: 1)
  expect(analysis.courts_distribution["STF"]).toBe(2);
  expect(analysis.courts_distribution["STJ"]).toBe(1);

  // Type distribution (RG: 2, SUM: 1)
  expect(analysis.types_distribution["RG"]).toBe(2);
  expect(analysis.types_distribution["SUM"]).toBe(1);

  // Status distribution (Vigente: 2, Cancelado: 1)
  expect(analysis.status_distribution["Vigente"]).toBe(2);
  expect(analysis.status_distribution["Cancelado"]).toBe(1);

  // Year distribution (2023: 2, 2022: 1)
  expect(analysis.year_distribution["2023"]).toBe(2);
  expect(analysis.year_distribution["2022"]).toBe(1);
});

test("SessionManager - year extraction from different date formats", () => {
  const sessionManager = new SessionManager();
  const results: SearchResponse = {
    total: 4,
    posicao_inicial: 1,
    posicao_final: 4,
    resultados: [
      {
        id: "1",
        nr: 1,
        orgao: "STF",
        tipo: "RG",
        situacao: "Vigente",
        ultimaAtualizacao: "01/01/2023", // DD/MM/YYYY
      },
      {
        id: "2",
        nr: 2,
        orgao: "STF",
        tipo: "SUM",
        situacao: "Vigente",
        ultimaAtualizacao: "2022-12-01", // YYYY-MM-DD
      },
      {
        id: "3",
        nr: 3,
        orgao: "STJ",
        tipo: "RG",
        situacao: "Vigente",
        ultimaAtualizacao: "Data: 2021", // Year in text
      },
      {
        id: "4",
        nr: 4,
        orgao: "STJ",
        tipo: "SUM",
        situacao: "Vigente",
        ultimaAtualizacao: "invalid date", // No year
      },
    ],
  };

  const analysis = sessionManager.analyzeResults(results);

  expect(analysis.year_distribution["2023"]).toBe(1);
  expect(analysis.year_distribution["2022"]).toBe(1);
  expect(analysis.year_distribution["2021"]).toBe(1);
  expect(Object.keys(analysis.year_distribution)).toHaveLength(3); // Only valid years
});

test("SessionManager - distribution sorting", () => {
  const sessionManager = new SessionManager();
  const results: SearchResponse = {
    total: 6,
    posicao_inicial: 1,
    posicao_final: 6,
    resultados: [
      { id: "1", nr: 1, orgao: "STF", tipo: "RG", situacao: "Vigente" },
      { id: "2", nr: 2, orgao: "STJ", tipo: "RG", situacao: "Vigente" },
      { id: "3", nr: 3, orgao: "STJ", tipo: "RG", situacao: "Vigente" },
      { id: "4", nr: 4, orgao: "STJ", tipo: "SUM", situacao: "Vigente" },
      { id: "5", nr: 5, orgao: "TST", tipo: "SUM", situacao: "Vigente" },
      { id: "6", nr: 6, orgao: "TST", tipo: "SUM", situacao: "Vigente" },
    ],
  };

  const analysis = sessionManager.analyzeResults(results);

  // Should be sorted by count (descending)
  const courtEntries = Object.entries(analysis.courts_distribution);
  expect(courtEntries[0]).toEqual(["STJ", 3]); // Highest count first
  expect(courtEntries[1]).toEqual(["TST", 2]);
  expect(courtEntries[2]).toEqual(["STF", 1]); // Lowest count last

  const typeEntries = Object.entries(analysis.types_distribution);
  expect(typeEntries[0]).toEqual(["RG", 3]);
  expect(typeEntries[1]).toEqual(["SUM", 3]);
});
