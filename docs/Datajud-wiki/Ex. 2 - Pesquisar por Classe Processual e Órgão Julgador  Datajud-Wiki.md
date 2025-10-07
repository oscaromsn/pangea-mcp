---
title: "Ex. 2 - Pesquisar por Classe Processual e Órgão Julgador | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/api-publica/exemplos/exemplo2"
author:
published:
created: 2025-09-30
description: "No exemplo abaixo é realizada a consulta de processos que possuam a Classe Processual 1116 – \"Execução Fiscal\" do Órgão Julgador 13597 - VARA DE EXECUÇÃO FISCAL DO DF no tribunal TJDFT."
tags:
  - "clippings"
---
# Ex. 2 - Pesquisar por Classe Processual e Órgão Julgador | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/api-publica/exemplos/exemplo2


## Ex. 2 - Pesquisar por Classe Processual e Órgão Julgador

No exemplo abaixo é realizada a consulta de processos que possuam a Classe Processual **1116 – "Execução Fiscal"** do Órgão Julgador **13597 - VARA DE EXECUÇÃO FISCAL DO DF** no tribunal **TJDFT**.

```python
import requests
import json

url = "https://api-publica.datajud.cnj.jus.br/api_publica_tjdft/_search"

payload = json.dumps({
    "query": {
        "bool": {
            "must": [
                {"match": {"classe.codigo": 1116}},
                {"match": {"orgaoJulgador.codigo": 13597}}
            ]
        }
    }
}
)

#Substituir <API Key> pela Chave Pública
headers = {
  'Authorization': 'ApiKey <API Key>',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

## Resposta

A resposta esperado é um JSON com os metadados de 1 ou mais processos conforme o critério da busca:

```json
JSON com os metadados processuais{
    "took": 213,
    "timed_out": false,
    "_shards": {
        "total": 3,
        "successful": 3,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": {
            "value": 10000,
            "relation": "gte"
        },
        "max_score": 2.0,
        "hits": [
            {
                "_index": "api_publica_tjdft",
                "_type": "_doc",
                "_id": "TJDFT_1116_G1_13597_07223914020178070001",
                "_score": 2.0,
                "_source": {
                    "classe": {
                        "codigo": 1116,
                        "nome": "Execução Fiscal"
                    },
                    "numeroProcesso": "07223914020178070001",
                    "sistema": {
                        "codigo": 1,
                        "nome": "Pje"
                    },
                    "formato": {
                        "codigo": 1,
                        "nome": "Eletrônico"
                    },
                    "tribunal": "TJDFT",
                    "dataHoraUltimaAtualizacao": "2022-09-06T12:03:20.257Z",
                    "grau": "G1",
                    "@timestamp": "2023-04-13T17:59:46.214Z",
                    "dataAjuizamento": "2017-08-21T10:05:32.000Z",
                    "movimentos": [
                        {
                            "complementosTabelados": [
                                {
                                    "codigo": 2,
                                    "valor": 2,
                                    "nome": "sorteio",
                                    "descricao": "tipo_de_distribuicao_redistribuicao"
                                }
                            ],
                            "codigo": 26,
                            "nome": "Distribuição",
                            "dataHora": "2017-08-21T10:05:32.000Z"
                        },
                        ...
                        {
                            "codigo": 11382,
                            "nome": "Bloqueio/penhora on line",
                            "dataHora": "2022-07-13T07:25:59.000Z"
                        },
                        {
                            "codigo": 132,
                            "nome": "Recebimento",
                            "dataHora": "2022-07-13T07:26:00.000Z"
                        }
                    ],
                    "id": "TJDFT_1116_G1_13597_07223914020178070001",
                    "nivelSigilo": 0,
                    "orgaoJulgador": {
                        "codigoMunicipioIBGE": 5300108,
                        "codigo": 13597,
                        "nome": "VARA DE EXECU??O FISCAL DO DF"
                    },
                    "assuntos": [
                        [
                            {
                                "codigo": 6017,
                                "nome": "Dívida Ativa (Execução Fiscal)"
                            }
                        ]
                    ]
                }
            },
            {
                "_index": "api_publica_tjdft",
                "_type": "_doc",
                "_id": "TJDFT_1116_G1_13597_00073039720138070015",
                "_score": 2.0,
                "_source": {
                    "classe": {
                        "codigo": 1116,
                        "nome": "Execução Fiscal"
                    },
                    "numeroProcesso": "00073039720138070015",
                    "sistema": {
                        "codigo": 1,
                        "nome": "Pje"
                    },
                    "formato": {
                        "codigo": 1,
                        "nome": "Eletrônico"
                    },
                    "tribunal": "TJDFT",
                    "dataHoraUltimaAtualizacao": "2022-09-06T17:26:23.938Z",
                    "grau": "G1",
                    "@timestamp": "2023-04-13T18:02:23.754Z",
                    "dataAjuizamento": "2019-05-30T03:17:56.000Z",
                    "movimentos": [
                        {
                            "complementosTabelados": [
                                {
                                    "codigo": 2,
                                    "valor": 1,
                                    "nome": "competência exclusiva",
                                    "descricao": "tipo_de_distribuicao_redistribuicao"
                                }
                            ],
                            "codigo": 26,
                            "nome": "Distribuição",
                            "dataHora": "2013-02-18T13:17:23.000Z"
                        },
                        ...
                        {
                            "codigo": 245,
                            "nome": "Provisório",
                            "dataHora": "2019-05-30T11:10:02.000Z"
                        }
                    ],
                    "id": "TJDFT_1116_G1_13597_00073039720138070015",
                    "nivelSigilo": 0,
                    "orgaoJulgador": {
                        "codigoMunicipioIBGE": 5300108,
                        "codigo": 13597,
                        "nome": "VARA DE EXECU??O FISCAL DO DF"
                    },
                    "assuntos": [
                        [
                            {
                                "codigo": 6017,
                                "nome": "Dívida Ativa (Execução Fiscal)"
                            }
                        ],
                        [
                            {
                                "codigo": 10394,
                                "nome": "Dívida Ativa não-tributária"
                            }
                        ]
                    ]
                }
            }
            ...
        ]
    }
}
```
