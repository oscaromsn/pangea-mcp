/**
 * Test Fixtures
 *
 * Reusable test data for all connector tests.
 * All fixtures are valid against their respective Effect schemas.
 */

import type {
  BnpSearchResponse,
  Precedent,
  PrecedentSearchFilter,
} from "../connectors/bnp/schema";

/**
 * Sample BNP precedent
 */
export const sampleBnpPrecedent: Precedent = {
  id: "test-id-123",
  nr: 1,
  orgao: "STJ",
  tipo: "SUM",
  situacao: "Ativo",
  questao: "Can consumer rights be waived in advance?",
  tese: "Sample legal thesis about consumer rights",
  ultimaAtualizacao: "2024-01-15",
};

/**
 * Sample BNP search response with one result
 */
export const sampleBnpSearchResponse: BnpSearchResponse = {
  total: 1,
  posicao_inicial: 0,
  posicao_final: 1,
  resultados: [sampleBnpPrecedent],
  aggsEspecies: [{ tipo: "SUM", total: 1 }],
  aggsOrgaos: [{ tipo: "STJ", total: 1 }],
};

/**
 * Sample BNP search response with multiple results
 */
export const sampleBnpMultipleResults: BnpSearchResponse = {
  total: 3,
  posicao_inicial: 0,
  posicao_final: 3,
  resultados: [
    sampleBnpPrecedent,
    {
      ...sampleBnpPrecedent,
      id: "test-id-456",
      nr: 2,
      questao: "Second legal question",
      tese: "Second precedent thesis",
    },
    {
      ...sampleBnpPrecedent,
      id: "test-id-789",
      nr: 3,
      orgao: "STF",
      tipo: "RG",
      questao: "Third legal question",
      tese: "Third precedent thesis",
    },
  ],
  aggsEspecies: [
    { tipo: "SUM", total: 2 },
    { tipo: "RG", total: 1 },
  ],
  aggsOrgaos: [
    { tipo: "STJ", total: 2 },
    { tipo: "STF", total: 1 },
  ],
};

/**
 * Empty BNP search response
 */
export const emptyBnpSearchResponse: BnpSearchResponse = {
  total: 0,
  posicao_inicial: 0,
  posicao_final: 0,
  resultados: [],
  aggsEspecies: [],
  aggsOrgaos: [],
};

/**
 * Sample BNP search filter
 */
export const sampleBnpFilter: PrecedentSearchFilter = {
  buscaGeral: "direito consumidor",
  orgaos: ["STJ", "STF"],
  tipos: ["SUM", "RG"],
  pagina: 1,
};

/**
 * Minimal BNP search filter
 */
export const minimalBnpFilter: PrecedentSearchFilter = {
  buscaGeral: "test query",
};
