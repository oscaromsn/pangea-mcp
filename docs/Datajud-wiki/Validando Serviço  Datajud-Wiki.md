---
title: "Validando Serviço | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/exemplos/validando-servico"
author:
published:
created: 2025-09-30
description: "O serviço Validar Serviço consiste em um endpoint apenas para verificação se a API de recebimento do Datajud está no ar e se a autenticação do Tribunal é bem sucedida."
tags:
  - "clippings"
---
# Validando Serviço | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/exemplos/validando-servico


## Validando Serviço

O serviço **Validar Serviço** consiste em um ***endpoint*** apenas para verificação se a API de recebimento do Datajud está no ar e se a autenticação do Tribunal é bem sucedida.

Vale lembrar que **o login e a senha de acesso a API são informados pelo CNJ** e os atributos de autenticação deverão obedecer as regras já detalhadas em **[Autenticação](https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/autenticacao)**

## GET /v1/infra/versao

## Resposta

Após o envio do ***request*** a resposta esperada é a menssagem abaixo indicando que a autenticação foi bem sucedida e os dados da versão atual da API em produção:

```json
JSON de resposta{
    "status": "SUCESSO",
    "mensagem": "Versão: 1.0.1.1 (PROD)"
}
```