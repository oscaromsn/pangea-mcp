import { z } from "zod";

// Brazilian court codes
export const COURT_CODES = {
  SUPREME_COURTS: {
    STF: "Supremo Tribunal Federal",
    STJ: "Superior Tribunal de Justiça",
    TST: "Tribunal Superior do Trabalho",
    STM: "Superior Tribunal Militar",
  },
  FEDERAL_COURTS: {
    TNU: "Turma Nacional de Uniformização",
    TRF01: "TRF 1ª Região",
    TRF02: "TRF 2ª Região",
    TRF03: "TRF 3ª Região",
    TRF04: "TRF 4ª Região",
    TRF05: "TRF 5ª Região",
    TRF06: "TRF 6ª Região",
  },
  STATE_COURTS: {
    TJAC: "TJ Acre",
    TJAP: "TJ Amapá",
    TJAM: "TJ Amazonas",
    TJBA: "TJ Bahia",
    TJDF: "TJ Distrito Federal",
    TJES: "TJ Espírito Santo",
    TJGO: "TJ Goiás",
    TJMA: "TJ Maranhão",
    TJMT: "TJ Mato Grosso",
    TJMS: "TJ Mato Grosso do Sul",
    TJMG: "TJ Minas Gerais",
    TJPA: "TJ Pará",
    TJPB: "TJ Paraíba",
    TJPR: "TJ Paraná",
    TJPE: "TJ Pernambuco",
    TJPI: "TJ Piauí",
    TJRJ: "TJ Rio de Janeiro",
    TJRN: "TJ Rio Grande do Norte",
    TJRS: "TJ Rio Grande do Sul",
    TJRO: "TJ Rondônia",
    TJRR: "TJ Roraima",
    TJSC: "TJ Santa Catarina",
    TJSP: "TJ São Paulo",
    TJSE: "TJ Sergipe",
    TJTO: "TJ Tocantins",
  },
  LABOR_COURTS: {
    TRT01: "TRT 1ª Região (RJ)",
    TRT02: "TRT 2ª Região (SP)",
    TRT03: "TRT 3ª Região (MG)",
    TRT04: "TRT 4ª Região (RS)",
    TRT05: "TRT 5ª Região (BA)",
    TRT06: "TRT 6ª Região (PE)",
    TRT07: "TRT 7ª Região (CE)",
    TRT08: "TRT 8ª Região (PA/AP)",
    TRT09: "TRT 9ª Região (PR)",
    TRT10: "TRT 10ª Região (DF/TO)",
    TRT11: "TRT 11ª Região (AM/RR)",
    TRT12: "TRT 12ª Região (SC)",
    TRT13: "TRT 13ª Região (PB)",
    TRT14: "TRT 14ª Região (AC/RO)",
    TRT15: "TRT 15ª Região (Campinas/SP)",
    TRT16: "TRT 16ª Região (MA)",
    TRT17: "TRT 17ª Região (ES)",
    TRT18: "TRT 18ª Região (GO)",
    TRT19: "TRT 19ª Região (AL)",
    TRT20: "TRT 20ª Região (SE)",
    TRT21: "TRT 21ª Região (RN)",
    TRT22: "TRT 22ª Região (PI)",
    TRT23: "TRT 23ª Região (MT)",
    TRT24: "TRT 24ª Região (MS)",
  },
} as const;

// Precedent type definitions
export const PRECEDENT_TYPES = {
  SUM: "Súmula",
  SV: "Súmula Vinculante",
  RG: "Repercussão Geral",
  IAC: "Incidente de Assunção de Competência",
  SIRDR: "Súmula de IRDR",
  RR: "Recursos Repetitivos",
  CT: "Conflito de Teses",
  IRDR: "Incidente de Resolução de Demandas Repetitivas",
  IRR: "Incidente de Recursos Repetitivos",
  PUIL: "Pedido de Uniformização de Interpretação de Lei",
  OJ: "Orientação Jurisprudencial",
} as const;

// Extract union types from the constants
export type CourtCode =
  | keyof typeof COURT_CODES.SUPREME_COURTS
  | keyof typeof COURT_CODES.FEDERAL_COURTS
  | keyof typeof COURT_CODES.STATE_COURTS
  | keyof typeof COURT_CODES.LABOR_COURTS;

export type PrecedentType = keyof typeof PRECEDENT_TYPES;

// Zod schemas for validation
export const CourtCodeSchema = z.enum([
  // Supreme courts
  "STF",
  "STJ",
  "TST",
  "STM",
  // Federal courts
  "TNU",
  "TRF01",
  "TRF02",
  "TRF03",
  "TRF04",
  "TRF05",
  "TRF06",
  // State courts
  "TJAC",
  "TJAP",
  "TJAM",
  "TJBA",
  "TJDF",
  "TJES",
  "TJGO",
  "TJMA",
  "TJMT",
  "TJMS",
  "TJMG",
  "TJPA",
  "TJPB",
  "TJPR",
  "TJPE",
  "TJPI",
  "TJRJ",
  "TJRN",
  "TJRS",
  "TJRO",
  "TJRR",
  "TJSC",
  "TJSP",
  "TJSE",
  "TJTO",
  // Labor courts
  "TRT01",
  "TRT02",
  "TRT03",
  "TRT04",
  "TRT05",
  "TRT06",
  "TRT07",
  "TRT08",
  "TRT09",
  "TRT10",
  "TRT11",
  "TRT12",
  "TRT13",
  "TRT14",
  "TRT15",
  "TRT16",
  "TRT17",
  "TRT18",
  "TRT19",
  "TRT20",
  "TRT21",
  "TRT22",
  "TRT23",
  "TRT24",
]);

export const PrecedentTypeSchema = z.enum([
  "SUM",
  "SV",
  "RG",
  "IAC",
  "SIRDR",
  "RR",
  "CT",
  "IRDR",
  "IRR",
  "PUIL",
  "OJ",
]);

// Search parameter types
export const SearchParamsSchema = z.object({
  buscaGeral: z.string().optional().default(""),
  todasPalavras: z.string().optional().default(""),
  quaisquerPalavras: z.string().optional().default(""),
  semPalavras: z.string().optional().default(""),
  trechoExato: z.string().optional().default(""),
  atualizacaoDesde: z.string().optional().default(""),
  atualizacaoAte: z.string().optional().default(""),
  cancelados: z.boolean().optional().default(false),
  ordenacao: z.string().optional().default("Text"),
  nr: z.string().optional().default(""),
  pagina: z.number().int().positive().optional().default(1),
  tamanhoPagina: z.number().int().positive().max(100).optional().default(10),
  orgaos: z.array(CourtCodeSchema).optional(),
  tipos: z.array(PrecedentTypeSchema).optional(),
});

export type SearchParams = z.infer<typeof SearchParamsSchema>;

// API request/response types
export const SearchRequestSchema = z.object({
  filtro: SearchParamsSchema,
});

export type SearchRequest = z.infer<typeof SearchRequestSchema>;

// Search result item schema
export const SearchResultItemSchema = z.object({
  id: z.string(),
  nr: z.number(),
  orgao: CourtCodeSchema,
  tipo: PrecedentTypeSchema,
  situacao: z.string(),
  tese: z.string().optional(),
  questao: z.string().optional(),
  ultimaAtualizacao: z.string().optional(),
  texto: z.string().optional(),
  assunto: z.string().optional(),
  ementa: z.string().optional(),
});

export type SearchResultItem = z.infer<typeof SearchResultItemSchema>;

// Aggregation schemas
export const AggregationItemSchema = z.object({
  tipo: z.string(),
  total: z.number(),
});

export type AggregationItem = z.infer<typeof AggregationItemSchema>;

// Main search response schema
export const SearchResponseSchema = z.object({
  total: z.number(),
  posicao_inicial: z.number(),
  posicao_final: z.number(),
  resultados: z.array(SearchResultItemSchema),
  aggsEspecies: z.array(AggregationItemSchema).optional(),
  aggsOrgaos: z.array(AggregationItemSchema).optional(),
});

export type SearchResponse = z.infer<typeof SearchResponseSchema>;

// MCP tool parameters
export const GeneralSearchToolSchema = z.object({
  busca_geral: z.string().optional().default(""),
  todas_palavras: z.string().optional().default(""),
  quaisquer_palavras: z.string().optional().default(""),
  sem_palavras: z.string().optional().default(""),
  trecho_exato: z.string().optional().default(""),
  pagina: z.number().int().positive().optional().default(1),
  tamanho_pagina: z.number().int().positive().max(100).optional().default(10),
});

export type GeneralSearchTool = z.infer<typeof GeneralSearchToolSchema>;

export const CourtSearchToolSchema = z.object({
  busca_geral: z.string(),
  orgaos: z.array(CourtCodeSchema),
  pagina: z.number().int().positive().optional().default(1),
  tamanho_pagina: z.number().int().positive().max(100).optional().default(10),
});

export type CourtSearchTool = z.infer<typeof CourtSearchToolSchema>;

export const TypeSearchToolSchema = z.object({
  busca_geral: z.string(),
  tipos: z.array(PrecedentTypeSchema),
  pagina: z.number().int().positive().optional().default(1),
  tamanho_pagina: z.number().int().positive().max(100).optional().default(10),
});

export type TypeSearchTool = z.infer<typeof TypeSearchToolSchema>;

export const SaveSearchToolSchema = z.object({
  name: z.string(),
  search_params: z.record(z.string(), z.unknown()),
  results: z.record(z.string(), z.unknown()),
});

export type SaveSearchTool = z.infer<typeof SaveSearchToolSchema>;

export const AnalyzeResultsToolSchema = z.object({
  results: z.record(z.string(), z.unknown()),
});

export type AnalyzeResultsTool = z.infer<typeof AnalyzeResultsToolSchema>;

// Error types
export class PangeaAPIError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly response?: string
  ) {
    super(message);
    this.name = "PangeaAPIError";
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public readonly details?: unknown
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

// Session management types
export interface SavedSearch {
  timestamp: string;
  search_params: Record<string, unknown>;
  results: Record<string, unknown>;
}

export interface SearchHistoryEntry {
  timestamp: string;
  params: Record<string, unknown>;
  total_results: number;
}

// Analysis result types
export interface SearchAnalysis {
  total_results: number;
  courts_distribution: Record<string, number>;
  types_distribution: Record<string, number>;
  status_distribution: Record<string, number>;
  year_distribution: Record<string, number>;
}

// Utility functions for getting all court codes and precedent types
export function getAllCourtCodes(): CourtCode[] {
  return [
    ...Object.keys(COURT_CODES.SUPREME_COURTS),
    ...Object.keys(COURT_CODES.FEDERAL_COURTS),
    ...Object.keys(COURT_CODES.STATE_COURTS),
    ...Object.keys(COURT_CODES.LABOR_COURTS),
  ] as CourtCode[];
}

export function getAllPrecedentTypes(): PrecedentType[] {
  return Object.keys(PRECEDENT_TYPES) as PrecedentType[];
}

// Helper to get court name by code
export function getCourtName(code: CourtCode): string {
  for (const category of Object.values(COURT_CODES)) {
    if (code in category) {
      return category[code as keyof typeof category];
    }
  }
  return code;
}

// Helper to get precedent type name by code
export function getPrecedentTypeName(code: PrecedentType): string {
  return PRECEDENT_TYPES[code];
}
