import {
  type CourtCode,
  getAllCourtCodes,
  getAllPrecedentTypes,
  PangeaAPIError,
  type PrecedentType,
  type SearchParams,
  SearchParamsSchema,
  type SearchRequest,
  SearchRequestSchema,
  type SearchResponse,
  SearchResponseSchema,
  ValidationError,
} from "@/types";

const PANGEA_API_BASE_URL = "https://pangeabnp.pdpj.jus.br/api/v1/precedentes";
const DEFAULT_TIMEOUT = 30000; // 30 seconds

interface SearchJurisprudenceOptions {
  busca_geral?: string;
  todas_palavras?: string;
  quaisquer_palavras?: string;
  sem_palavras?: string;
  trecho_exato?: string;
  pagina?: number;
  tamanho_pagina?: number;
  orgaos?: CourtCode[];
  tipos?: PrecedentType[];
}

export class PangeaClient {
  private readonly baseUrl: string;
  private readonly timeout: number;

  constructor(
    baseUrl: string = PANGEA_API_BASE_URL,
    timeout: number = DEFAULT_TIMEOUT
  ) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }

  /**
   * Search jurisprudence on Pangea database
   */
  async searchJurisprudence(
    options: SearchJurisprudenceOptions = {}
  ): Promise<SearchResponse> {
    const {
      busca_geral = "",
      todas_palavras = "",
      quaisquer_palavras = "",
      sem_palavras = "",
      trecho_exato = "",
      pagina = 1,
      tamanho_pagina = 10,
      orgaos,
      tipos,
    } = options;

    // Use all courts if none specified
    const selectedOrgaos = orgaos ?? getAllCourtCodes();

    // Use all precedent types if none specified
    const selectedTipos = tipos ?? getAllPrecedentTypes();

    // Build search parameters
    const searchParams: SearchParams = {
      buscaGeral: busca_geral,
      todasPalavras: todas_palavras,
      quaisquerPalavras: quaisquer_palavras,
      semPalavras: sem_palavras,
      trechoExato: trecho_exato,
      atualizacaoDesde: "",
      atualizacaoAte: "",
      cancelados: false,
      ordenacao: "Text",
      nr: "",
      pagina,
      tamanhoPagina: tamanho_pagina,
      orgaos: selectedOrgaos,
      tipos: selectedTipos,
    };

    // Validate search parameters
    const validatedParams = this.validateSearchParams(searchParams);

    // Build request payload
    const requestPayload: SearchRequest = {
      filtro: validatedParams,
    };

    // Validate request payload
    const validatedRequest = this.validateSearchRequest(requestPayload);

    try {
      const response = await this.makeHttpRequest(validatedRequest);
      return this.validateSearchResponse(response);
    } catch (error) {
      if (error instanceof PangeaAPIError || error instanceof ValidationError) {
        throw error;
      }

      // Handle fetch errors
      if (error instanceof Error) {
        throw new PangeaAPIError(`Network error: ${error.message}`);
      }

      throw new PangeaAPIError("Unknown error occurred during API request");
    }
  }

  /**
   * Make HTTP request to Pangea API
   */
  private async makeHttpRequest(
    requestPayload: SearchRequest
  ): Promise<unknown> {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
      Origin: "https://pangeabnp.pdpj.jus.br",
      Referer: "https://pangeabnp.pdpj.jus.br/pesquisa",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, this.timeout);

    try {
      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(requestPayload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text().catch(() => "Unknown error");
        throw new PangeaAPIError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          errorText
        );
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof PangeaAPIError) {
        throw error;
      }

      if (error instanceof Error && error.name === "AbortError") {
        throw new PangeaAPIError(`Request timeout after ${this.timeout}ms`);
      }

      throw error;
    }
  }

  /**
   * Validate search parameters using Zod schema
   */
  private validateSearchParams(params: SearchParams): SearchParams {
    try {
      return SearchParamsSchema.parse(params);
    } catch (error) {
      throw new ValidationError("Invalid search parameters", error);
    }
  }

  /**
   * Validate search request using Zod schema
   */
  private validateSearchRequest(request: SearchRequest): SearchRequest {
    try {
      return SearchRequestSchema.parse(request);
    } catch (error) {
      throw new ValidationError("Invalid search request", error);
    }
  }

  /**
   * Fix escaped Unicode sequences in any object
   */
  private fixEscapedUnicode(obj: any): any {
    if (typeof obj === "string") {
      // Replace escaped unicode sequences with actual characters
      return obj.replace(/\\u([0-9a-fA-F]{4})/g, (_, code) => {
        return String.fromCharCode(parseInt(code, 16));
      });
    } else if (Array.isArray(obj)) {
      return obj.map((item) => this.fixEscapedUnicode(item));
    } else if (obj !== null && typeof obj === "object") {
      const fixed: any = {};
      for (const [key, value] of Object.entries(obj)) {
        fixed[key] = this.fixEscapedUnicode(value);
      }
      return fixed;
    }
    return obj;
  }

  /**
   * Validate search response using Zod schema
   */
  private validateSearchResponse(response: unknown): SearchResponse {
    try {
      // Fix escaped Unicode sequences before validation
      const fixedResponse = this.fixEscapedUnicode(response);
      return SearchResponseSchema.parse(fixedResponse);
    } catch (error) {
      throw new ValidationError("Invalid API response format", error);
    }
  }
}

// Default client instance
export const pangeaClient = new PangeaClient();

// Convenience function for backward compatibility
export async function searchJurisprudence(
  options: SearchJurisprudenceOptions = {}
): Promise<SearchResponse> {
  return pangeaClient.searchJurisprudence(options);
}
