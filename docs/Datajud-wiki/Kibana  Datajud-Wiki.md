---
title: "Kibana | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/Datajud/Kibana/"
author:
published:
created: 2025-09-30
description: "O Kibana é a interface de usuário para visualizar os dados do Elasticsearch e navegar"
tags:
  - "clippings"
---
# Kibana | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/Datajud/Kibana/


## Kibana

O **Kibana** é a interface de usuário para visualizar os dados do ***Elasticsearch*** e navegar nos dados do Datajud, ele permite através de uma interface visual consutar os dados do Datajud através do Discover e o ***Dev Tools***.

O ***Dev Tools*** permite o envio de solicitações para ***Elasticsearch*** e a visualização das respostas, bem como a visualização da documentação da API.

O ***Discover*** permite explorar os dados de forma interativa, incluindo pesquisa e filtragem.

## Tutorial Acesso ao Kibana

O acesso ao ambiente será feito pela URL [https://kibana.datajud.cnj.jus.br](https://kibana.datajud.cnj.jus.br/), onde será exibida a tela para efetuar login de acesso restrito a pessoas autorizadas na etapa anterior.

![imagem](https://datajud-wiki.cnj.jus.br/assets/images/acesso_elastic-b43d77d94ba89a78d8f0f04ae82bed06.png)

Após o acesso pelo login e senha do usuário, será apresentada a tela para acesso ao Kibana, conforme imagem abaixo.

![imagem](https://datajud-wiki.cnj.jus.br/assets/images/welcome_kibana-8cae9aebfddb191fd7eac2fea2b194df.png)

## Acesso às ferramentas de desenvolvimento

### Analytics - Discover

A página inicial do Kibana exibe o menu, localizado no canto superior esquerdo da tela inicial, logo abaixo do ícone da Elastic; quando selecionado permite visualizar e acessar as opções de ferramentas de consulta Elastic, o Discover e o Dev Tools. A ferramenta Discover está disponível no menu Analytics, conforme destacado na imagem, abaixo

![imagem](https://datajud-wiki.cnj.jus.br/assets/images/postman_kibana_discover-ebf1362f8d6c96aa28aec5e549f84ffa.png)

Ao selecionar o Discover, serão exibidas opções de criar (new), abrir (open), compartilhar (share) e inspecionar (inspect) consultas, conforme destacado na imagem, abaixo.

No Discover também é possível fixar um filtro e ele permanecerá no lugar quando você alterar alternar para visualizar. Observe que um filtro é baseado em um campo de índice específico — se os índices que estão sendo pesquisados não contiverem o campo em um filtro fixado, ele não terá efeito.

A figura, abaixo, apresenta a tela carregada com os dados indexados do tribunal do usuário logado. Por padrão, o Discover exibe a opção de realização de consulta utilizando Kibana Query Language.

O guia para utilização desta opção está disponível no link do fabricante em [***Kibana Query Language***](https://www.elastic.co/guide/en/kibana/current/kuery-query.html).

![imagem](https://datajud-wiki.cnj.jus.br/assets/images/postman_kibana_discover2-fb679dbc8dd8221b7478b9df3c5311e4.png)

Outra opção de realização de consulta é a sintaxe do Lucene quando a opção de utilização do ***Kibana Query Language*** for desabilitada, conforme imagem, abaixo.

![imagem](https://datajud-wiki.cnj.jus.br/assets/images/postman_kibana_discover3-903ee798f7dad7d4f278feb793e264f2.png)

O resultado da seleção de consulta utilizando o Lucene está representado na imagem, abaixo.

![imagem](https://datajud-wiki.cnj.jus.br/assets/images/postman_kibana_discover4-7d54451786f90ed08bebcf19eeffdfd2.png)

O guia para utilização do Lucene está disponível no link do fabricante em [***Lucene query syntax***](https://www.elastic.co/guide/en/kibana/current/lucene-query.html). Para maiores informações, o guia de utilização da ferramenta Discover está disponível no link do fabricante em [https://www.elastic.co/guide/en/kibana/current/discover.html](https://www.elastic.co/guide/en/kibana/current/discover.html).

### Management – Dev Tools

Também, no menu, é possível acessar a ferramenta de consulta DevTools. A ferramenta Dev Tools está disponível no menu Management, conforme destacada na imagem, abaixo

![imagem](https://datajud-wiki.cnj.jus.br/assets/images/postman_kibana_discover5-7a898c014be2b6c70ccb6f2344fb343c.png)

Ao selecionar o Dev Tools, a tela a seguir é exibida para execução de consultas utilizando query DSL. A seguir, estão listados exemplos de consultas que podem ser executadas utilizando o console.

![imagem](https://datajud-wiki.cnj.jus.br/assets/images/postman_kibana_discover6-6f644166b0525fead70423a07949ba7d.png)

Para maiores informações, o guia de utilização da ferramenta Dev Tools está disponível no link do fabricante em [https://www.elastic.co/guide/en/kibana/current/console-kibana.html](https://www.elastic.co/guide/en/kibana/current/console-kibana.html).

## Pesquisando seus dados no console do Dev Tools

Este item descreve as consultas elaboradas para auxiliar os Tribunais na busca de dados na solução Elasticsearch.

### Consultas básicas

```json
GET view-processos-sigilo-*/_search
{
  "query": {
    "term": {
      "dadosBasicos.classeProcessual": {
        "value": 11551
      }
    }
  }
}
```

### Quantidade (Count)

```json
GET view-processos-sigilo-*/_count
{
  "query": {
    "term": {
      "dadosBasicos.classeProcessual": {
        "value": 11551
      }
    }
  }
}
```

### Agregação (Group By)

### Paginação (From / Size)

```json
GET view-processos-sigilo-*/_search
{
  "from": 0,
  "size": 20,
  "query": {
    "match": {
      "dadosBasicos.classeProcessual": 11551
    }
  }
}
```

### Agregação por classe com Range

```json
GET view-processos-sigilo-*/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "dadosBasicos.dataAjuizamento": {
              "gte": 20220401000000,
              "lte": 20240430235959
            }
          }
        },
        {
          "term": {
            "dadosBasicos.classeProcessual": {
              "value": 11551
            }
          }
        }
      ]
    }
  }
}
```

### Consulta Nested

### Agregação por órgão julgador / sem código de movimento específico

### Utilização de Wildcard (Like) em Partes

```json
GET view-processos-sigilo-*/_search
{
  "query": {
    "nested": {
      "path": "dadosBasicos.polo",
      "query": {
        "nested": {
          "path": "dadosBasicos.polo.parte",
          "query": {
            "wildcard": {
              "dadosBasicos.polo.parte.pessoa.nome": "*INSS*"
            }
          }
        }
      }
    }
  }
}
```

### Partes tipoPessoa = "FISICA" sem numeroDocumentoPrincipal

```json
GET view-processos-sigilo-*/_search
{
  "size": 2,
  "query": {
    "bool": {
      "filter": [
        {
          "nested": {
            "path": "dadosBasicos.polo.parte",
            "query": {
              "bool": {
                "must": [
                  {
                    "match": {
                      "dadosBasicos.polo.parte.pessoa.tipoPessoa": "FISICA"
                    }
                  }
                ],
                "must_not": [
                  {
                    "exists": {
                      "field": "dadosBasicos.polo.parte.pessoa.numeroDocumentoPrincipal"
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  }
}
```