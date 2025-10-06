---
title: "Endpoints | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/manutencao-datajud/endpoints/"
author:
published:
created: 2025-09-30
description: "Produção"
tags:
  - "clippings"
---
# Endpoints | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/manutencao-datajud/endpoints/


## Endpoints

## Produção

- **Deletar Chaves - JSON** (**POST /v1/processos/manutencao/pedido-exclusao**):
	- **`POST https://www.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/manutencao/pedido-exclusao`**
- **Deletar Chaves - CSV** (**DELETE /v1/processos/manutencao/pedido-exclusao**):
	- **`DELETE https://www.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/manutencao/pedido-exclusao`**
- **Consultar Protocolo - CSV** (**POST /v1/processos/manutencao/lista-pedido/{protocolo}**):
	- **`GET https://www.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/manutencao/lista-pedido/{protocolo}`**

## Homologação

- **Deletar Chaves - JSON** (**POST /v1/processos/manutencao/pedido-exclusao**):
	- `POST https://datajud.stg.cloud.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/manutencao/pedido-exclusao`
- **Deletar Chaves - CSV** (**DELETE /v1/processos/manutencao/pedido-exclusao**):
	- `DELETE https://datajud.stg.cloud.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/manutencao/pedido-exclusao`
- **Consultar Protocolo - CSV** (**POST /v1/processos/manutencao/lista-pedido/{protocolo}**):
	- `GET https://datajud.stg.cloud.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/manutencao/lista-pedido/{protocolo}`