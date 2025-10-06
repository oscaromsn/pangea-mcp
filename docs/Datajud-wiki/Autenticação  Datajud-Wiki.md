---
title: "Autenticação | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/autenticacao"
author:
published:
created: 2025-09-30
description: "O tipo de autenticação utilizada é Basic Auth. Quando a API é chamada, é necessário incluir"
tags:
  - "clippings"
---
# Autenticação | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/autenticacao


## Autenticação

O tipo de autenticação utilizada é ***Basic Auth***. Quando a API é chamada, é necessário incluir no cabeçalho da requisição (***request HTTP***) o usuário e a senha do tribunal. **O login e a senha de acesso a API são informados pelo CNJ**.

Basicamente, o funcionamento desse método de autenticação é suportado pelo protocolo HTTP através da inclusão do campo ***Authorization*** no cabeçalho.

Cada usuário (Tribunal) tem um valor único gerado para esse campo.

O exemplo abaixo de uma requisição para confirmação do status da conexão com o serviço **Valdiar Serviço(/v1/infra/versao)**:

```json
Exemplo de autenticação no ambiente de homologação:GET https://datajud.stg.cloud.cnj.jus.br/modelo-de-transferencia-de-dados/v1/infra/versao
HTTP/1.1
Accept-Encoding: gzip,deflate
Authorization: Basic <hash de autenticação>
Host: wwwh.cnj.jus.br
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```