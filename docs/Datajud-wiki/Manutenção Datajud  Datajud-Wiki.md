---
title: "Manutenção Datajud | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/manutencao-datajud/contrato/"
author:
published:
created: 2025-09-30
description: "Através dessa ferramenta os Tribunais poderão realizar as exclusões parciais de chaves do Datajud - Elastic."
tags:
  - "clippings"
---
# Manutenção Datajud | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/manutencao-datajud/contrato/


## Manutenção Datajud

Através dessa ferramenta os Tribunais poderão realizar as exclusões parciais de chaves do Datajud - *Elastic*.

## API de Manutenção de Registros do Datajud

A **API de Manutenção de Registros do Datajud** tem o objetivo de permitir aos tribunais encaminhar a lista de chaves processuais que devem ser removidas da base de dados do Datajud - *Elastic*.

## Contrato / API

O contrato de comunicação do sistema engloba 3 *endpoints*:

1. **POST /v1/processos/manutencao/pedido-exclusao**;
2. **DELETE /v1/processos/manutencao/pedido-exclusao**;
3. **GET /v1/processos/manutencao/lista-pedido/{protocolo}**;

Para efetivar a exclusão de chave no Datajud o *endpoint* **POST** permite que o Tribunal envie uma **lista de chaves** que precisam ser removidas no formato **JSON**, já o **DELETE** permite o envio de arquivos no format **CSV**.

Além disso, *endpoint* **GET** permite que o protocolo de pedido de remoção seja consultado.