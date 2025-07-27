import { expect, spyOn, test } from "bun:test";
import { PangeaAPIError, ValidationError } from "@/types";
import { PangeaClient, searchJurisprudence } from "../src/client.ts";

// Mock successful response
const mockSuccessResponse = {
  total: 1,
  posicao_inicial: 1,
  posicao_final: 1,
  resultados: [
    {
      id: "stf-rg-999",
      nr: 999,
      orgao: "STF",
      tipo: "RG",
      situacao: "Vigente",
      tese: "Esta é uma tese de exemplo sobre responsabilidade civil.",
      questao: "Questão sobre responsabilidade civil.",
      ultimaAtualizacao: "2024-01-01",
    },
  ],
  aggsEspecies: [{ tipo: "RG", total: 1 }],
  aggsOrgaos: [{ tipo: "STF", total: 1 }],
};

// Mock empty response
const mockEmptyResponse = {
  total: 0,
  posicao_inicial: 0,
  posicao_final: 0,
  resultados: [],
  aggsEspecies: [],
  aggsOrgaos: [],
};

test("PangeaClient - successful basic search", async () => {
  const fetchMock = spyOn(global, "fetch").mockResolvedValue(
    new Response(JSON.stringify(mockSuccessResponse), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  );

  const client = new PangeaClient();
  const result = await client.searchJurisprudence({ busca_geral: "civil" });

  expect(result.total).toBe(1);
  expect(result.resultados).toHaveLength(1);
  expect(result.resultados[0]?.nr).toBe(999);
  expect(result.resultados[0]?.orgao).toBe("STF");

  fetchMock.mockRestore();
});

test("PangeaClient - search with all parameters", async () => {
  const fetchMock = spyOn(global, "fetch").mockResolvedValue(
    new Response(JSON.stringify(mockSuccessResponse), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  );

  const client = new PangeaClient();
  const result = await client.searchJurisprudence({
    busca_geral: "responsabilidade",
    todas_palavras: "civil penal",
    quaisquer_palavras: "direito lei",
    sem_palavras: "criminal",
    trecho_exato: "responsabilidade civil",
    pagina: 2,
    tamanho_pagina: 20,
    orgaos: ["STF", "STJ"],
    tipos: ["RG", "SUM"],
  });

  expect(result.total).toBe(1);

  // Verify the request was made with correct payload
  const lastCall = fetchMock.mock.calls[fetchMock.mock.calls.length - 1];
  expect(lastCall).toBeDefined();

  const requestBody = JSON.parse(lastCall![1]!.body as string);
  expect(requestBody.filtro.buscaGeral).toBe("responsabilidade");
  expect(requestBody.filtro.todasPalavras).toBe("civil penal");
  expect(requestBody.filtro.quaisquerPalavras).toBe("direito lei");
  expect(requestBody.filtro.semPalavras).toBe("criminal");
  expect(requestBody.filtro.trechoExato).toBe("responsabilidade civil");
  expect(requestBody.filtro.pagina).toBe(2);
  expect(requestBody.filtro.tamanhoPagina).toBe(20);
  expect(requestBody.filtro.orgaos).toEqual(["STF", "STJ"]);
  expect(requestBody.filtro.tipos).toEqual(["RG", "SUM"]);

  fetchMock.mockRestore();
});

test("PangeaClient - empty search results", async () => {
  const fetchMock = spyOn(global, "fetch").mockResolvedValue(
    new Response(JSON.stringify(mockEmptyResponse), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  );

  const client = new PangeaClient();
  const result = await client.searchJurisprudence({
    busca_geral: "nonexistent_term",
  });

  expect(result.total).toBe(0);
  expect(result.resultados).toHaveLength(0);

  fetchMock.mockRestore();
});

test("PangeaClient - HTTP error handling", async () => {
  const fetchMock = spyOn(global, "fetch").mockResolvedValue(
    new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      statusText: "Internal Server Error",
    })
  );

  const client = new PangeaClient();

  await expect(
    client.searchJurisprudence({ busca_geral: "test" })
  ).rejects.toThrow(PangeaAPIError);

  fetchMock.mockRestore();
});

test("PangeaClient - network timeout", async () => {
  const fetchMock = spyOn(global, "fetch").mockImplementation((() => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        const error = new Error("AbortError");
        error.name = "AbortError";
        reject(error);
      }, 100);
    });
  }) as unknown as typeof fetch);

  const client = new PangeaClient("https://example.com", 50); // Very short timeout

  await expect(
    client.searchJurisprudence({ busca_geral: "test" })
  ).rejects.toThrow(PangeaAPIError);

  fetchMock.mockRestore();
});

test("PangeaClient - invalid response format", async () => {
  const fetchMock = spyOn(global, "fetch").mockResolvedValue(
    new Response(JSON.stringify({ invalid: "response" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  );

  const client = new PangeaClient();

  await expect(
    client.searchJurisprudence({ busca_geral: "test" })
  ).rejects.toThrow(ValidationError);

  fetchMock.mockRestore();
});

test("PangeaClient - default parameters", async () => {
  const fetchMock = spyOn(global, "fetch").mockResolvedValue(
    new Response(JSON.stringify(mockSuccessResponse), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  );

  const client = new PangeaClient();
  await client.searchJurisprudence();

  // Check the call was made with correct defaults
  const lastCall = fetchMock.mock.calls[fetchMock.mock.calls.length - 1];
  const requestBody = JSON.parse(lastCall![1]!.body as string);

  expect(requestBody.filtro.buscaGeral).toBe("");
  expect(requestBody.filtro.pagina).toBe(1);
  expect(requestBody.filtro.tamanhoPagina).toBe(10);
  expect(requestBody.filtro.orgaos.length).toBeGreaterThan(40); // All Brazilian courts
  expect(requestBody.filtro.tipos.length).toBe(11); // All precedent types

  fetchMock.mockRestore();
});

test("convenience function - searchJurisprudence", async () => {
  const fetchMock = spyOn(global, "fetch").mockResolvedValue(
    new Response(JSON.stringify(mockSuccessResponse), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  );

  const result = await searchJurisprudence({ busca_geral: "civil" });

  expect(result.total).toBe(1);
  expect(result.resultados).toHaveLength(1);

  fetchMock.mockRestore();
});

test("PangeaClient - request headers are correct", async () => {
  const fetchMock = spyOn(global, "fetch").mockResolvedValue(
    new Response(JSON.stringify(mockSuccessResponse), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  );

  const client = new PangeaClient();
  await client.searchJurisprudence({ busca_geral: "test" });

  const lastCall = fetchMock.mock.calls[fetchMock.mock.calls.length - 1];
  const headers = lastCall![1]!.headers as Record<string, string>;

  expect(headers["Content-Type"]).toBe("application/json");
  expect(headers["Accept"]).toBe("application/json, text/plain, */*");
  expect(headers["Origin"]).toBe("https://pangeabnp.pdpj.jus.br");
  expect(headers["Referer"]).toBe("https://pangeabnp.pdpj.jus.br/pesquisa");
  expect(headers["User-Agent"]).toContain("Mozilla");

  fetchMock.mockRestore();
});
