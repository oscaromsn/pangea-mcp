/**
 * MCP Constants - Shared reference data
 * Used by handlers for default values and by server for MCP resources
 */

/**
 * Court codes organized by hierarchy
 */
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
} as const;

/**
 * Precedent type definitions
 */
export const PRECEDENT_TYPES = {
  SUM: "Súmula",
  SV: "Súmula Vinculante",
  RG: "Repercussão Geral",
  IAC: "Incidente de Assunção de Competência",
  IRDR: "Incidente de Resolução de Demandas Repetitivas",
  RR: "Recursos Repetitivos",
} as const;

/**
 * Default filter values for agent convenience
 * Applied when agent doesn't specify these parameters
 */
export const DEFAULT_COURTS = ["STF", "STJ", "TST"] as const;
export const DEFAULT_TYPES = ["SUM", "SV", "RG", "IRDR", "RR"] as const;
