---
title: "API Elastic | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/Datajud/Api-elastic/"
author:
published:
created: 2025-09-30
description: "API Search"
tags:
  - "clippings"
---
# API Elastic | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/Datajud/Api-elastic/


## API Elastic

O acesso aos dados disponibilizados na API será feito pela URL:

- [https://api.datajud.cnj.jus.br/view-processos-sigilo-\*/\_search](https://api.datajud.cnj.jus.br/view-processos-sigilo-*/_search)

## Resposta

```json
Query DSL{
    "took": 700,
    "timed_out": false,
    "_shards": {
        "total": 239,
        "successful": 239,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": {
            "value": 10000,
            "relation": "gte"
        },
        "max_score": 1.0,
        "hits": [
            {
                "_index": "processos-tre-df",
                "_type": "_doc",
                "_id": "TRE-DF_261_G1_14580_06000448920216070014",
                "_score": 1.0,
                "_source": {
                    "id": "TRE-DF_261_G1_14580_06000448920216070014",
                    "protocoloRN": "TRE-DF23986202208051659721768206",
                    "dadosBasicos": {
                        "polo": [
                            {
        ...
```

## Pesquisa com paginação

Por padrão, as pesquisas na API do Elasticsearch retornam até 10 registros por solicitação. No entanto, é possível aumentar o número de registros retornados utilizando o parâmetro "size" de paginação dos registros. Esse parâmetro permite especificar quantos resultados devem ser retornados por página, variando de 10 até 10.000 registros por página.

Quando se tem uma necessidade de percorrer uma maior quantidade de resultados, é possível fazer uso do recurso "search\_after". Esse recurso é prioritariamente recomendado para paginação de dados, pois permite que a API do Datajud continue a partir do ponto onde a última página parou, sem a necessidade de recarregar todos os resultados a cada nova página. O "search\_after" é um ponteiro que aponta para o último registro retornado na página anterior e pode ser informado como parâmetro para a próxima solicitação, permitindo que a API retorne os resultados seguintes.

É importante ressaltar que a utilização do "search\_after" não prejudica a performance da API na busca de grandes volumes de dados, pois permite que a API do Datajud execute consultas de forma mais eficiente, sem a necessidade de recarregar todos os resultados em cada página. Combinando o uso do parâmetro "size" com o "search\_after", é possível percorrer grandes volumes de dados de forma eficiente e com baixo impacto no desempenho da API.

Para paginar os resultados utilizando o search\_after, é necessário a utilização da ordenação (sort) dos dados utilizando o atributo **“id”** conforme exemplo abaixo:

```json
Query DSL{
  "size": 100, 
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "id.keyword": {
        "order": "asc"
      }
    }
  ]
}
```

Após a primeira consulta, a resposta da API incluirá um array chamado "sort" que contém os valores do campo de ordenação para cada documento retornado. Esse array pode ser utilizado como o valor do parâmetro "search\_after" na próxima consulta, juntamente com o parâmetro "size" que define a quantidade de documentos a serem retornados na próxima página.

```json
Resposta  "hits" : {
    "total" : {
      "value" : 10000,
      "relation" : "gte"
    },
    "max_score" : null,
    "hits" : [
      {
        "_index" : "processos-tre-df",
        "_type" : "_doc",
        "_id" : "TRE-DF_11526_G2_76581_06016544220186070000",
        "_score" : null,
        "_source" : {...}
          "id" : "TRE-DF_11526_G2_76581_06016544220186070000",
          "protocoloRN" : "TRE-DF40954202307051688577230673",
          "dadosBasicos" : {
          ...
        ...
        "sort" : [
          "TRE-DF_11526_G2_76581_06016544220186070000"
        ]
}
```

Para buscar os próximos 100 processos, basta adicionar o parâmetro "search\_after" na próxima consulta, utilizando o valor do campo “sort” do último documento retornado na página anterior conforme exemplo abaixo:

```json
Query DSL{
  "size": 100,
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "id.keyword": {
        "order": "asc"
      }
    }
  ],
  "search_after": [
    "TRE-DF_11526_G2_76581_06016544220186070000"
  ]
}
```

Observe que o valor do campo "search\_after" é um array com os valores do campo de ordenação para o último documento retornado na página anterior. É importante lembrar que o "search\_after" deve ser utilizado em conjunto com o "sort" e o "size" para garantir uma paginação eficiente dos resultados.