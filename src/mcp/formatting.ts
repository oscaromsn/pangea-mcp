/**
 * MCP Response Formatters
 * Transforms verbose API responses into concise agent-friendly formats
 */
import type { Precedent } from "../connectors/bnp/schema";

export interface FormattedBnpResult {
  readonly id: string;
  readonly court: string;
  readonly type: string;
  readonly number: number;
  readonly status: string;
  readonly summary: string | null;
  readonly date: string | null;
  readonly paradigmProcesses: ReadonlyArray<{
    number: string;
    link: string | undefined;
  }> | null;
  readonly suspensions: ReadonlyArray<{
    active: boolean;
    date: string;
    description: string;
    decisionLink: string | undefined;
  }> | null;
}

/**
 * Strips HTML tags from text
 */
export const stripHtml = (html: string | null | undefined): string | null => {
  if (!html) return null;
  return html.replace(/<[^>]*>/g, "").trim();
};

/**
 * Formats a single BNP precedent result for agent consumption
 * - Strips HTML tags from tese and questao
 * - Preserves paradigm processes and suspensions with links for citations
 * - Removes highlight field (search-specific, not needed for citations)
 */
export const formatBnpResult = (precedent: Precedent): FormattedBnpResult => ({
  id: precedent.id,
  court: precedent.orgao,
  type: precedent.tipo,
  number: precedent.nr,
  status: precedent.situacao,
  summary: stripHtml(precedent.tese) ?? stripHtml(precedent.questao),
  date: precedent.ultimaAtualizacao ?? null,
  paradigmProcesses:
    precedent.processosParadigma?.map((p) => ({
      number: p.numero,
      link: p.link,
    })) ?? null,
  suspensions:
    precedent.suspensoes?.map((s) => ({
      active: s.ativa,
      date: s.dataSuspensao,
      description: s.descricao,
      decisionLink: s.linkDecisao,
    })) ?? null,
});

/**
 * Formats an array of BNP results
 */
export const formatBnpResults = (
  results: ReadonlyArray<Precedent>
): ReadonlyArray<FormattedBnpResult> => results.map(formatBnpResult);
