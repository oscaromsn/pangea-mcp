---
title: "Validador de XML | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/verificacao/Validando%20XML"
author:
published:
created: 2025-09-30
description: "A validação do arquivo XML é um processo crucial que requer atenção aos detalhes e conformidade com os padrões estabelecidos pelo Modelo de Transferência de Dados do CNJ. Através das rotinas de verificação implementadas, o sistema assegura que os principais informações dos processos judiciais estejam corretas e em conformidade com os requisitos para recebimento adequado. Essa rotina visa aprimorar a qualidade e a eficiência do processamento dos dados, garantindo maior precisão e consistência nos registros judiciais."
tags:
  - "clippings"
---
# Validador de XML | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/verificacao/Validando%20XML


## Validador de XML

A validação do arquivo XML é um processo crucial que requer atenção aos detalhes e conformidade com os padrões estabelecidos pelo [Modelo de Transferência de Dados do CNJ](https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/verificacao/mtd/v1_1). Através das rotinas de verificação implementadas, o sistema assegura que os principais informações dos processos judiciais estejam corretas e em conformidade com os requisitos para recebimento adequado. Essa rotina visa aprimorar a qualidade e a eficiência do processamento dos dados, garantindo maior precisão e consistência nos registros judiciais.

O objetivo deste serviço é permitir que os tribunais executem suas rotinas de validação de dados XML que serão enviados para o serviço REST de recebimento do Datajud. O **CNJ** disponibiliza um versão online deste serviço no ***endpoint*** abaixo. Além disso, é possível rodar um versão local via (Docker).

## Validando o Arquivo XML

Pra simular o uso dessa aplicação, faremos uso do [Postman](https://www.postman.com/) para exemplificar o passo a passo para validação de um arquivo XML:

![Validador Postman](https://datajud-wiki.cnj.jus.br/assets/images/post_valida_xml_marcadores-b97ee4214d13a5f23e963003245e87dd.png)

1. Crie uma nova ***request*** do tipo **POST**;
2. Digite a url do ***endpoint*** do Validador;
3. Selecione o item **Body** para indicar que sua ***request*** irá enviar essa estrutura;
4. Selectiona o atributo **form-data** para habilitar o envio do arquivo;
5. Digite "arquivo" no atributo ***Key*** para incluir esse elemento;
6. Após a digitação, estará disponível a opção ***File*** conforme ilustrado na figura, e abrirá uma janela de diálogo para seleção do arquivo XML. Após a seleção do aqruivo, o campo **Value** será preenchido automaticamente com o nome do arquivo;
7. Por fim, clicar em ***Send*** para envio do arquivo.

É possivel também utilizar o serviço para validação dos XMLs via linha de comando ou da linguagem de programação de sua preferência conforme ilustrado nos exemplos abaixo:

## Resposta da Validação

Após o envio da requisição com o arquivo XML, o documento passará por um processo de verificação, onde serão aplicadas rotinas de validação. Será verificado se os principais atributos do cabeçalho processual, como **Classe**, **Assunto** e **Movimento**, bem como as informações das partes, como **ausência de documentos** ou **CPF/CNPJ inválidos**, estão em conformidade com os padrões aceitáveis de recebimento.

Essa etapa é fundamental para garantir a correta e eficiente integração dos dados no sistema do Datajud. Caso sejam identificadas quaisquer inconsistências ou erros, o sistema fornecerá feedback sobre as correções necessárias antes de prosseguir com o processamento do arquivo.

Abaixo segue um exemplo de retorno da resposta no format JSON do envio anterior:

```json
Resposta do Validador:{
    "errosPorProcesso": {
        "09203721020158120001": [
            {
                "id": "ERRO_MOVIMENTO_NACIONAL_COMPLEMENTO_OBRIGATORIO",
                "descricao": "Movimento 240 com identificador 1 exige complemento. Complementos válidos para o código 240: 1:nome_da_parte"
            },
            {
                "id": "ERRO_MOVIMENTO_NACIONAL_COMPLEMENTO_OBRIGATORIO",
                "descricao": "Movimento 85 com identificador 2 exige complemento. Complementos válidos para o código 85: 19:tipo_de_peticao:268,19:tipo_de_peticao:243..."
            },
            ...
            },
            {
                "id": "ERRO_PESSOA_SEM_DOCUMENTO_PRINCIPAL",
                "descricao": "Sem documento principal (atributo numeroDocumentoPrincipal vazio) () Município de Campo GrandeMS do polo Ativo"
            },
            {
                "id": "ERRO_PESSOA_SEM_DOCUMENTO",
                "descricao": "Sem documento(s) de pessoa Ms Venceslaus do polo Passivo"
            },
            {
                "id": "ERRO_PESSOA_COM_DOCUMENTO_CMF_INVALIDO",
                "descricao": "Pessoa com documento (CMF - Cadastro no Ministério da Fazenda) -  CPF 00000000000 inválido / Ms Venceslaus do polo Passivo"
            }
        ]
    },
    "errosPorIdentificador": {
        "ERRO_PESSOA_SEM_DOCUMENTO_PRINCIPAL": [
            "09203721020158120001"
        ],
        "ERRO_MOVIMENTO_LOCAL_NAO_FOLHA_INVALIDO": [
            "09203721020158120001"
        ],
        "ERRO_PESSOA_COM_DOCUMENTO_CMF_INVALIDO": [
            "09203721020158120001"
        ],
        "ERRO_PESSOA_SEM_DOCUMENTO": [
            "09203721020158120001"
        ],
        "ERRO_MOVIMENTO_NACIONAL_COMPLEMENTO_OBRIGATORIO": [
            "09203721020158120001"
        ]
    },
    "qtdErros": 13
}
```