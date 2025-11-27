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
import type {
  DatajudHit,
  DatajudProcessSource,
  DatajudSearchResponse,
} from "../connectors/datajud/schema";
import type {
  FalcaoAutocompleteResponse,
  FalcaoCountResponse,
  FalcaoDocument,
  FalcaoPrecedenteDocument,
  FalcaoSearchResponse,
  FalcaoSearchResult,
  FalcaoTribunal,
} from "../connectors/falcao/schema";

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
 * Sample BNP precedent with processosParadigma
 * Demonstrates that link field is optional per OpenAPI spec
 */
export const sampleBnpPrecedentWithProcessoParadigma: Precedent = {
  ...sampleBnpPrecedent,
  id: "test-id-with-paradigma",
  processosParadigma: [
    { numero: "00266050920098260053" }, // Without link (valid per API)
    {
      numero: "12345678901234567890",
      link: "https://example.com/processo/123",
    }, // With link
  ],
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

// =============================================================================
// FALCAO FIXTURES
// =============================================================================

/**
 * Sample Falcao search result (regular document - acordao)
 */
export const sampleFalcaoSearchResult: FalcaoSearchResult = {
  tribunal: "TST",
  numeroProcesso: "0001234-56.2024.5.00.0000",
  ementa:
    "RECURSO DE REVISTA. HORAS EXTRAS. Sample ementa about labor law case.",
  textoAcordao:
    "Full text of the court decision regarding overtime compensation.",
  relator: "Min. João Silva",
  dataJulgamento: "2024-01-15",
  classeProcesso: "Recurso de Revista",
  siglaClasseProcesso: "RR",
  id: "doc-12345",
  orgaoJulgador: "3ª Turma",
  turma: "3ª Turma",
};

/**
 * Sample Falcao precedente document
 */
export const sampleFalcaoPrecedenteDocument: FalcaoPrecedenteDocument = {
  origemDocumentos: "TST",
  tribunal: "TST",
  descricaoTribunal: "Tribunal Superior do Trabalho",
  questao: "Legal question about overtime compensation",
  tese: "Legal thesis establishing the precedent",
  situacao: { valor: "ATIVO", descricao: "Ativo" },
  pendenteDecisao: false,
  idTema: "tema-123",
  dataJulgamento: "2024-01-15",
};

/**
 * Sample Falcao search response with documents
 */
export const sampleFalcaoSearchResponse: FalcaoSearchResponse = {
  documentos: [sampleFalcaoSearchResult],
  quantidadeTotal: 1,
  totalPaginas: 1,
  paginaAtual: 0,
  filtrosDisponiveis: [],
  temasTopFive: [],
  tempoResposta: 150,
};

/**
 * Sample Falcao search response with multiple results
 */
export const sampleFalcaoMultipleResults: FalcaoSearchResponse = {
  documentos: [
    sampleFalcaoSearchResult,
    {
      ...sampleFalcaoSearchResult,
      id: "doc-67890",
      numeroProcesso: "0002345-67.2024.5.00.0000",
      ementa: "Second labor law case about vacation pay.",
      relator: "Min. Maria Santos",
    },
    {
      ...sampleFalcaoSearchResult,
      id: "doc-11111",
      tribunal: "TRT1",
      numeroProcesso: "0003456-78.2024.5.01.0000",
      ementa: "Regional court decision about termination.",
    },
  ],
  quantidadeTotal: 3,
  totalPaginas: 1,
  paginaAtual: 0,
  filtrosDisponiveis: [],
  temasTopFive: [],
  tempoResposta: 200,
};

/**
 * Empty Falcao search response
 */
export const emptyFalcaoSearchResponse: FalcaoSearchResponse = {
  documentos: [],
  quantidadeTotal: 0,
  totalPaginas: 0,
  paginaAtual: 0,
  filtrosDisponiveis: [],
  temasTopFive: [],
  tempoResposta: 50,
};

/**
 * Sample Falcao full document
 */
export const sampleFalcaoDocument: FalcaoDocument = {
  id: "doc-12345",
  tribunal: "TST",
  numeroProcesso: "0001234-56.2024.5.00.0000",
  conteudoCompleto:
    "Complete content of the document including all sections...",
  ementa:
    "RECURSO DE REVISTA. HORAS EXTRAS. Sample ementa about labor law case.",
  textoAcordao:
    "Full text of the court decision regarding overtime compensation.",
  decisao: "The court decided in favor of the plaintiff...",
  relator: "Min. João Silva",
  dataPublicacao: "2024-01-20",
  dataJulgamento: "2024-01-15",
  classeProcesso: "Recurso de Revista",
  siglaClasseProcesso: "RR",
  orgaoJulgador: "3ª Turma",
};

/**
 * Sample Falcao tribunals list
 */
export const sampleFalcaoTribunals: FalcaoTribunal[] = [
  { sigla: "TST", nome: "Tribunal Superior do Trabalho" },
  { sigla: "TRT1", nome: "Tribunal Regional do Trabalho da 1ª Região" },
  { sigla: "TRT2", nome: "Tribunal Regional do Trabalho da 2ª Região" },
  { sigla: "TRT3", nome: "Tribunal Regional do Trabalho da 3ª Região" },
  { sigla: "TRT4", nome: "Tribunal Regional do Trabalho da 4ª Região" },
];

/**
 * Sample Falcao count response
 */
export const sampleFalcaoCountResponse: FalcaoCountResponse = {
  countPrecedentes: 15,
  countAcordaos: 250,
  countSentencas: 120,
  countRR: 85,
  countDecisoesMonocraticas: 45,
};

/**
 * Sample Falcao autocomplete response
 */
export const sampleFalcaoAutocompleteResponse: FalcaoAutocompleteResponse = {
  sugestoes: [
    "horas extras",
    "horas extras noturnas",
    "horas extras reflexos",
    "horas extras habituais",
  ],
  tempoElasticsearch: 10,
  tempoConsultaCompleta: 25,
  queriesRelated: [
    {
      queryString: "horas extras",
      queryRelated: [
        "adicional noturno",
        "jornada de trabalho",
        "banco de horas",
      ],
    },
  ],
};

/**
 * Empty Falcao autocomplete response
 */
export const emptyFalcaoAutocompleteResponse: FalcaoAutocompleteResponse = {
  sugestoes: [],
  tempoElasticsearch: 5,
  tempoConsultaCompleta: 10,
  queriesRelated: [],
};

// =============================================================================
// DATAJUD FIXTURES
// =============================================================================

/**
 * Sample Datajud process source
 */
export const sampleDatajudProcessSource: DatajudProcessSource = {
  id: "datajud-process-123",
  numeroProcesso: "0001234-56.2024.8.26.0100",
  tribunal: "TJSP",
  dataAjuizamento: "2024-01-10T10:30:00.000Z",
  grau: "G1",
  nivelSigilo: 0,
  classe: { codigo: 1116, nome: "Mandado de Segurança" },
  sistema: { codigo: 1, nome: "PJe" },
  formato: { codigo: 1, nome: "Eletrônico" },
  orgaoJulgador: {
    codigo: 1234,
    nome: "1ª Vara Cível",
    codigoMunicipioIBGE: 3550308,
  },
  assuntos: [
    { codigo: 10001, nome: "Direito Civil" },
    { codigo: 10002, nome: "Obrigações" },
  ],
  movimentos: [
    {
      codigo: 12001,
      nome: "Distribuição",
      dataHora: "2024-01-10T10:30:00.000Z",
    },
    {
      codigo: 12002,
      nome: "Conclusão",
      dataHora: "2024-01-15T14:00:00.000Z",
    },
  ],
};

/**
 * Sample Datajud hit
 */
export const sampleDatajudHit: DatajudHit = {
  _index: "tjsp-processos",
  _id: "datajud-process-123",
  _score: 1.5,
  _source: sampleDatajudProcessSource,
};

/**
 * Sample Datajud search response
 */
export const sampleDatajudSearchResponse: DatajudSearchResponse = {
  took: 50,
  timed_out: false,
  hits: {
    total: { value: 1, relation: "eq" },
    max_score: 1.5,
    hits: [sampleDatajudHit],
  },
};

/**
 * Sample Datajud search response with multiple hits
 */
export const sampleDatajudMultipleResults: DatajudSearchResponse = {
  took: 75,
  timed_out: false,
  hits: {
    total: { value: 3, relation: "eq" },
    max_score: 2.5,
    hits: [
      sampleDatajudHit,
      {
        ...sampleDatajudHit,
        _id: "datajud-process-456",
        _score: 2.0,
        _source: {
          ...sampleDatajudProcessSource,
          id: "datajud-process-456",
          numeroProcesso: "0002345-67.2024.8.26.0100",
        },
      },
      {
        ...sampleDatajudHit,
        _id: "datajud-process-789",
        _score: 1.0,
        _source: {
          ...sampleDatajudProcessSource,
          id: "datajud-process-789",
          numeroProcesso: "0003456-78.2024.8.26.0100",
          classe: { codigo: 1117, nome: "Ação Civil Pública" },
        },
      },
    ],
  },
};

/**
 * Empty Datajud search response
 */
export const emptyDatajudSearchResponse: DatajudSearchResponse = {
  took: 25,
  timed_out: false,
  hits: {
    total: { value: 0, relation: "eq" },
    max_score: null,
    hits: [],
  },
};
