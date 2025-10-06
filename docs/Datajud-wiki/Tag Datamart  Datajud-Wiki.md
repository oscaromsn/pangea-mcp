---
title: "Tag Datamart | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/Datajud/tag-datamart/"
author:
published:
created: 2025-09-30
description: "Após o processamento dos dados estatísticos, o processo no Elasticsearch receberá uma etiqueta contendo os metadados resultantes, incluindo o ID do Datamart, Situação Atual,  Fase Atual, Data da Baixa, Data do Caso Novo e Flag Criminal:"
tags:
  - "clippings"
---
# Tag Datamart | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/Datajud/tag-datamart/


## Tag Datamart

Após o processamento dos dados estatísticos, o processo no Elasticsearch receberá uma etiqueta contendo os metadados resultantes, incluindo o ***ID do Datamart***, ***Situação Atual***, ***Fase Atual***, ***Data da Baixa***, ***Data do Caso Novo*** e ***Flag Criminal***:

**Exemplo da etiqueta do datamart:**

```json
...
"datamart" : {
            "@timestamp" : "2024-11-09T18:07:40.192489",
            "updated_at" : "2024-11-09T04:33:14.118380",
            "id_situacao_atual" : 10,
            "id" : 639186446,
            "situacao_atual" : "Baixado definitivamente",
            "id_fase_atual" : 4,
            "fase_atual" : "OUTRO",
            "data_cn" : "2005-04-28T00:00:00",
            "data_situacao_atual" : "2024-04-03T11:33:46",
            "criminal" : false,
            "data_baixa" : "2011-01-10T00:00:00"
          }
```

A partir desses metadas é possível, por exemplo, identificar as chaves do Datamart de processos sigilosos e as respectivas chaves do Datajud (Elastic) para realização de futuras .

## Consultas via Kibana

### Dados consolidados:

#### Processos em Tramitação por Grau:

### IDs do Datamart de processos Sigilosos

#### Processos em segredo de justiça na situação "Tramitando":

```json
GET view-processos-sigilo-*/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "dadosBasicos.nivelSigilo": {
              "gte": 1
            }
          }
        },
        {
          "term": {
            "datamart.id_situacao_atual": {
              "value": 25
            }
          }
        }
      ]
    }
  }
}
```

## ETL de dados do Datajud usando a Tag Datamart

### CSV dos processos com IDs sigilosos do Painel de Estatísticas

Para os processos sigilosos, os dados exportados para download do [Painel de Estatística](https://justica-em-numeros.cnj.jus.br/painel-estatisticas/) apresentam apenas a identificação do ID do Datamart como mostra a tabela abaixo:

| Tribunal | Município | Ano | Mês | Processo |
| --- | --- | --- | --- | --- |
| CNJ | BRASÍLIA | 2024 | 2 | **sigiloso(405283225)** |
| CNJ | BRASÍLIA | 2024 | 6 | **sigiloso(405283291)** |
| CNJ | BRASÍLIA | 2023 | 8 | **sigiloso(405283312)** |

A partir do script abaixo, é possível gerar a relação dos processos no Datajud a partir da lista de IDs do Datamart que deseja pesquisar:

### CSV com processos "Tramitando" Sigilosos do Datamart

Além disso, é possível pesquisar por qualquer parâmetro disponível na *tag* **datamart**, conforme o exemplo abaixo que filtra os processos **sigilosos em tramitação**:

Por padrão, as pesquisas na API do Elasticsearch retornam até 10 registros por solicitação. No entanto, é possível aumentar esse número utilizando o parâmetro "size" para a paginação dos registros. Esse parâmetro permite especificar quantos resultados devem ser exibidos por página, podendo variar de 10 até 10.000 registros. Para mais informações, consulte a [Pesquisa com Paginação](https://datajud-wiki.cnj.jus.br/para-tribunais/Datajud/Api-elastic/#pesquisa-com-pagina%C3%A7%C3%A3o).