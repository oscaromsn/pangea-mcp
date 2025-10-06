---
title: "Enviando Processos ao Datajud | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/exemplos/envio-processo"
author:
published:
created: 2025-09-30
description: "O serviço Enviar Processo é o endpoint oficial para envio de processos judiciais ao Datajud."
tags:
  - "clippings"
---
# Enviando Processos ao Datajud | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/exemplos/envio-processo


## Enviando Processos ao Datajud

O serviço **Enviar Processo** é o ***endpoint*** oficial para envio de processos judiciais ao Datajud.

Vale lembrar que **o login e a senha de acesso a API são informados pelo CNJ** e os atributos de autenticação deverão obedecer as regras já detalhadas em **[Autenticação](https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/autenticacao)**

## POST v1/processos/{GRAU}

É importante ressaltar que neste serviço o atributo **GRAU** é obrigatório e o arquivo XML de processos deverão agrupar somente processos dessa instancia.

No exemplo a seguir será utilizado o arquivo **processos.xml** conforme criado na seção [Criação dos XMLs](https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/criacao-arquivo/exemplo-xml). Portanto, o processo judicial deste exemplo irá utilizar o ***endpoint*** **v1/processos/G2** e o atributo ***Authorization*** do **TJMS**.

## Resposta

Após o envio do ***request*** a resposta esperada é a menssagem abaixo indicando que o envio foi bem sucedido e com um **número de protocolo**:

```json
JSON de resposta{
    "status": "SUCESSO",
    "protocolo": "TJMS70476202307241690234021493",
    "mensagem": "Arquivo recebido"
}
```

A partir do **número de protocolo** é possível fazer o acompanhamento do processamento deste lote de processo no Datajud através da rotina .

## Enviando arquivos ZIP (compactados)

É possível fazer o envio de arquivos XML no formato ZIP, o que pode auxiliar os tribunais que precisam fazer envios de XMLs com tamanhos maiores.

O endpoint usado é exatamente o mesmo informado acima, tomando o cuidado de informar o **GRAU** na posição adequada do path (/v2/processos/G1, por exemplo).

A diferença para a requisição convencional (com conteúdo não compactado) é que o **Content-type** da parte que carrega o arquivo deve ser no formato **application/zip**. Mais especificamente, será necessário informar 2 Content-types: um primeiro **Content-type** (que fica no Header da requisição HTTP), será ***multipart/form-data***. O segundo **Content-type** na requisição, numa parte chamada payload, que é onde o arquivo é carregado para envio. Nesse segundo Content-type, o valor deve ser ***application/zip***. Veja no dump HTTP abaixo (com destaques em **negrito** para os 2 Content-types):

POST /modelo-de-transferencia-de-dados/v1/processos/G1 HTTP/1.1 **Content-Type: multipart/form-data**; boundary=---011000010111000001101001 Authorization: Basic V **\*\*\*\*** hNg== Host: datajud.stg.cloud.cnj.jus.br Content-Length: 210

\-----011000010111000001101001 Content-Disposition: form-data; name="arquivo"; filename="2024\_TRT15\_03\_G1.zip" **Content-Type: application/zip**

\-----011000010111000001101001--

Veja o exemplo abaixo: