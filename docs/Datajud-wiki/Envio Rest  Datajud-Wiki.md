---
title: "Envio Rest | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/envio-rest"
author:
published:
created: 2025-09-30
description: "O envio dos processos judiciais é realizado por meio de serviços do tipo REST, criados para que os Tribunais possam encaminhar os arquivos no formato XML. Os serviços Validar Serviço e Enviar Processos disponibilizam coleções de recursos para facilitar o envio de dados processuais."
tags:
  - "clippings"
---
# Envio Rest | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/envio-rest


## Envio Rest

O envio dos processos judiciais é realizado por meio de serviços do tipo REST, criados para que os Tribunais possam encaminhar os arquivos no formato XML. Os serviços **Validar Serviço** e **Enviar Processos** disponibilizam coleções de recursos para facilitar o envio de dados processuais.

## Endpoints

## Recomendações

- Para enviar os processos, é necessário criar o arquivo no formato XML utilizando o esquema XSD do [Modelo de Tranferência - MTD 1.1](https://datajud-wiki.cnj.jus.br/mtd/v1_1), conforme arquivo criado neste exemplo: [processos.xml](https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/criacao-arquivo/exemplo-xml);
- Tribunais podem enviar arquivos de qualquer tamanho, facilitando a transferência de grandes volumes de dados processuais. Porém, para gerir os arquivos de forma eficiente, sugere-se que o arquivo enviado não ultrapasse **100Mb**;
- O arquivo XML pode conter um processo ou uma lista de processos. **DEVE ser enviado 1 único arquivo** por vez, ou seja, por requisição;
- O tipo de ***Media Type*** para o envio tem de ser ***multipart/form-data***, ou seja, enviar o arquivo como ***multipart***.

Caso seja executado com sucesso e sem erros, a resposta virá com HTTP status code 201. A mensagem de resposta do envio com sucesso é uma mensagem JSON no formato abaixo:

```json
{
 "status": "SUCESSO",
 "protocolo": "SIGLATRIBUNALXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

Onde o atributo status aparecerá o valor **SUCESSO**, e o protocolo será uma composição da sigla do Tribunal, com uma sequência de 26 dígitos. Essa sequência de 26 dígitos é composto pelo seguinte: número de 5 dígitos aleatórios, ano (4 dígitos), mês (2 dígitos), dia (2 dígitos) e o restante é o intervalo de tempo em milissegundos entre a data 01/01/1970 e o dia e hora atuais de envio.

É importante que os tribunais, nas suas soluções de integração, mantenham registro desses números de protocolo. Eles são importantes para pesquisas posteriores na aplicação dedicada a acompanhar o processamento - [Protocolo](https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/protocolo/protocolo).