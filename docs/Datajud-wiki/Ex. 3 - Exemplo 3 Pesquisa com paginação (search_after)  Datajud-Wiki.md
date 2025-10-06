---
title: "Ex. 3 - Exemplo 3: Pesquisa com paginação (search_after): | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/api-publica/exemplos/exemplo3"
author:
published:
created: 2025-09-30
description: "Por padrão, as pesquisas na API do Elasticsearch retornam até 10 registros por"
tags:
  - "clippings"
---
# Ex. 3 - Exemplo 3: Pesquisa com paginação (search_after): | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/api-publica/exemplos/exemplo3


## Ex. 3 - Exemplo 3: Pesquisa com paginação (search\_after):

Por padrão, as pesquisas na API do Elasticsearch retornam até 10 registros por solicitação. No entanto, é possível aumentar o número de registros retornados utilizando o parâmetro "size" de paginação dos registros. Esse parâmetro permite especificar quantos resultados devem ser retornados por página, variando de 10 até 10.000 registros por página.

Quando se tem uma necessidade de percorrer uma maior quantidade de resultados, é possível fazer uso do recurso "search\_after". Esse recurso é prioritariamente recomendado para paginação de dados, pois permite que a API do Datajud continue a partir do ponto onde a última página parou, sem a necessidade de recarregar todos os resultados a cada nova página. O "search\_after" é um ponteiro que aponta para o último registro retornado na página anterior e pode ser informado como parâmetro para a próxima solicitação, permitindo que a API retorne os resultados seguintes.

É importante ressaltar que a utilização do "search\_after" não prejudica a performance da API na busca de grandes volumes de dados, pois permite que a API do Datajud execute consultas de forma mais eficiente, sem a necessidade de recarregar todos os resultados em cada página. Combinando o uso do parâmetro "size" com o "search\_after", é possível percorrer grandes volumes de dados de forma eficiente e com baixo impacto no desempenho da API.

Para paginar os resultados utilizando o search\_after, é necessário a utilização da ordenação (sort) dos dados utilizando o atributo **“@timestamp”** conforme exemplo abaixo:

```json
Query DSL{
 "size": 100,
 "query": {
 "bool": {
 "must": [
  {"match": {"classe.codigo": 1116}},
  {"match": {"orgaoJulgador.codigo": 13597}}
 ]
 }
},
"sort": [
{
 "@timestamp": {
 "order": "asc"
  }
 }
 ]
}
```

Após a primeira consulta, a resposta da API incluirá um array chamado "sort" que contém os valores do campo de ordenação para cada documento retornado. Esse array pode ser utilizado como o valor do parâmetro "search\_after" na próxima consulta, juntamente com o parâmetro "size" que define a quantidade de documentos a serem retornados na próxima página

```json
Query DSL{
  "_index" : "api_publica_tjdft",
  "_type" : "_doc",
  "_id" : "TJDFT_1116_G1_13597_00356079220168070018",
  "_score" : null,
  "_source" : {...},
  "sort" : [
     1681366085550
  ]
}
```

Para buscar os próximos 100 processos, basta adicionar o parâmetro "search\_after" na próxima consulta, utilizando o valor do campo “sort” do último documento retornado na página anterior conforme exemplo abaixo:

```json
Query DSL{
  "size": 100,
  "query": {
  "bool": {
    "must": [
     {"match": {"classe.codigo": 1116}},
     {"match": {"orgaoJulgador.codigo": 13597}}
  ]
}
},
 "sort": [
 {
  "@timestamp": {
  "order": "asc"
  }
  }
],
  "search_after": [ 1681366085550 ]
}
```

Observe que o valor do campo "search\_after" é um array com os valores do campo de ordenação para o último documento retornado na página anterior. É importante lembrar que o "search\_after" deve ser utilizado em conjunto com o "sort" e o "size" para garantir uma paginação eficiente dos resultados.