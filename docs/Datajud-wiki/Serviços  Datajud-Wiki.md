---
title: "Serviços | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/manutencao-datajud/servicos/"
author:
published:
created: 2025-09-30
description: "Exclusão Parcial - JSON"
tags:
  - "clippings"
---
# Serviços | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/manutencao-datajud/servicos/


## Serviços

## Exclusão Parcial - JSON

### POST /v1/processos/manutencao/pedido-exclusao

Esse *endpoint* permite que o Tribunal um arquivo **JSON** com uma lista de chaves que devem ser removidas. O arquivo tem *mime-type application/json* e deve ter o formato seguinte:

```json
chaves_para_exclusao.json{
    "listaProcessos": [
        "TJPR_202_G2_26818_00211340420198160000",
        "TJPR_202_G2_26812_00608409120198160000",
        "TJPR_198_G2_26830_00021310320198160117"
    ]
}
```

O arquivo é enviado como *multipart/form-data* para o *endpoint* **/v1/processos/manutencao/pedido-exclusao** usando o método **HTTP POST**. O pacote **HTTP** será formado em conformidade com o padrão abaixo:

```markdown
POST /modelo-de-transferencia-de-dados/v1/processos/manutencao/pedido-exclusao HTTP/1.1
Content-Type: multipart/form-data; boundary=---011000010111000001101001
Authorization: Basic VE—----------------kNw==
Host: wwwh.cnj.jus.br
Content-Length: 183
-----011000010111000001101001
Content-Disposition: form-data; name="arquivo"; filename="chaves_para_exclusao.json"
Content-Type: application/json
-----011000010111000001101001--
```

### Resposta

Como resposta, o serviço irá responder com um resultado também no formato application/json:

```json
{
    "tribunal": "TJPR",
    "listaProcessos": [
        "TJPR_202_G2_26818_00211340420198160000",
        "TJPR_202_G2_26812_00608409120198160000",
        "TJPR_198_G2_26830_00021310320198160117"
    ],
    "protocolo": "TJPR86196DEL202212011669931750938",
    "dataPedido": "1693411712918",
    "hash": "dd3a503eb13ef440d3da44b60e84fbc03fface2577a1946d428386e26d3c0441"
}
```

O atributo **dataPedido** está no formato de milissegundos a partir de 1970, também chamado de UTC, ou *UNIX* *timestamp*. Este atributo representa a data do envio do pedido de exclusão.

Perceba que o campo **protocolo** deve ser armazenado pelo usuário, para que possa fazer o acompanhamento do processamento do arquivo. De posse de número, é possível utilizar o *endpoint* **GET /v1/processos/manutencao/lista-pedido/{protocolo}**.

## Exclusão Parcial - CSV

### DELETE /v1/processos/manutencao/pedido-exclusao

Esse endpoint permite que o Tribunal um arquivo CSV (formato texto) com uma lista de chaves que devem ser removidas. O arquivo é *multipart/form-data* e deve ter o formato seguinte:

```markdown
chave_para_deletar.csvTJPR_202_G2_26818_00211340420198160000
TJPR_202_G2_26812_00608409120198160000
TJPR_198_G2_26830_00021310320198160117
```

O arquivo é enviado como *multipart/form-data* para o endpoint **/v1/processos/manutencao/pedido-exclusao** usando o método **HTTP DELETE**. O pacote HTTP será formado em conformidade com o padrão abaixo:

```markdown
DELETE /modelo-de-transferencia-de-dados/v1/processos/manutencao/pedido-exclusao HTTP/1.1
Content-Type: multipart/form-data; boundary=---011000010111000001101001
Authorization: Basic VE—----------------kNw==
Host: datajud.stg.cloud.cnj.jus.br
Content-Length: 175
-----011000010111000001101001
Content-Disposition: form-data; name="arquivo"; filename="chave_para_deletar.csv"
Content-Type: text/csv
-----011000010111000001101001--
```

### Resposta

Como resposta, o serviço irá responder com um resultado também no formato *application/json*:

```json
{
    "tribunal": "TJPR",
    "listaProcessos": [
        "TJPR_202_G2_26818_00211340420198160000",
        "TJPR_202_G2_26812_00608409120198160000",
        "TJPR_198_G2_26830_00021310320198160117"
],
    "protocolo": "TJPR86196DEL202212011669931750938",
    "dataPedido": "1693411712918",
    "hash": "dd3a503eb13ef440d3da44b60e84fbc03fface2577a1946d428386e26d3c0441"
}
```

A resposta é a mesma do serviço de exclusão via JSON, e também é importante armazenar o **protocolo** para acompanhamento no *endpoint* **GET /v1/processos/manutencao/lista-pedido/{protocolo}**.

## Protocolo - Exclusão

### GET /v1/processos/manutencao/lista-pedido/{protocolo}

O *endpoint* **GET** permite a consulta de um protocolo enviado anteriormente com o método **POST** ou **DELETE** descritos nas seções anteriores. Como parâmetro *Path* desse endpoint é necessário passar o **código de protocolo**, tendo esse código de protocolo sido obtido do método POST acima.

Exemplo consultando o protocolo de número **TJPR86196DEL202212011669931750938**:

- GET /v1/processos/manutencao/lista-pedido/TJPR86196DEL202212011669931750938

### Resposta

A resposta da requisição acima é similar ao resultado do POST:

```json
{
    "tribunal": "TJPR",
    "listaProcessos": [
        "TJPR_202_G2_26818_00211340420198160000",
        "TJPR_202_G2_26812_00608409120198160000",
        "TJPR_198_G2_26830_00021310320198160117"
],
    "protocolo": "TJPR86196DEL202212011669931750938",
    "dataPedido": "1693411712918",
    "hash": "dd3a503eb13ef440d3da44b60e84fbc03fface2577a1946d428386e26d3c0441"
}
```