---
title: "Simulador de Envio | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/verificacao/Simulando%20Envio"
author:
published:
created: 2025-09-30
description: "A programa validador também simula o envio dos XMLs ao Datajud porém não salva os dados no ambiente do Datajud, esse serviço é utilizado apenas com caráter de teste do serviço de envio de XMLs ao Datajud."
tags:
  - "clippings"
---
# Simulador de Envio | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/verificacao/Simulando%20Envio


## Simulador de Envio

A programa validador também simula o envio dos XMLs ao Datajud porém não salva os dados no ambiente do Datajud, esse serviço é utilizado apenas com caráter de teste do serviço de envio de XMLs ao Datajud.

## Simulando o Envio do XML

Pra simular o uso dessa aplicação, faremos uso do [Postman](https://www.postman.com/) para exemplificar o passo a passo de um envio de um arquivo XML.

O [arquivo XML](https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/criacao-arquivo/exemplo-xml) de exemplo contem informações processuais de um órgão julgador de grau G2, portando, o exemplo a seguir utilizará o ***endpoint*** específico (***v1/processos/G2***) para envio de processos desse grau:

![Validador Postman](https://datajud-wiki.cnj.jus.br/assets/images/post_simula_envio_xml_marcadores-fa21a73760364f5149d75d97d0a46d14.png)

1. Crie uma nova ***request*** do tipo **POST**;
2. Digite a url do ***endpoint*** do Validador, no caso ***v1/processos/G2***;
3. Selecione o item **Body** para indicar que sua ***request*** irá enviar essa estrutura;
4. Selectiona o atributo **form-data** para habilitar o envio do arquivo;
5. Digite "arquivo" no atributo ***Key*** para incluir esse elemento;
6. Após a digitação, estará disponível a opção ***File*** conforme ilustrado na figura, e abrirá uma janela de diálogo para seleção do arquivo XML. Após a seleção do aqruivo, o campo **Value** será preenchido automaticamente com o nome do arquivo;
7. Por fim, clicar em ***Send*** para envio do arquivo;
8. Após o envio, será gerado uma resposta confirmando o envio do arquivo e geração de um número de protocolo.

Além disso, também é possivel também utilizar o serviço de simulação de envio dos XMLs via linha de comando ou da linguagem de programação de sua preferência conforme ilustrado nos exemplos abaixo:

## Resposta do Envio de XML

Após o envio da requisição com o arquivo XML, o serviço de simulação de envio irá gerar um protocolo apenas de caráter ilustrativo conforme a resposta de requisição abaixo:

```json
Resposta do Validador:{ "status": "SUCESSO", "protocolo": TJMS26234202307231690121193385 }
```