---
title: "Versão 1.1 | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/mtd/v1_1"
author:
published:
created: 2025-09-30
description: "Novidades"
tags:
  - "clippings"
---
# Versão 1.1 | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/mtd/v1_1


## Versão 1.1

## Novidades

### Cabeçalho Processual

- **Prioridade Processual**: atributos *pedidoPrioridade* e *tipoPrioridade* criados para identificação e espeficicação da prioridade processual;
- **Custas Processuais:** atributo *custasRecolhidas* para informação das custas do processo;
- **Tipificação do Juizado:** atributo *juizo100Digital* para identificação se o processo tramita em uma vara [100% Digital](https://atos.cnj.jus.br/atos/detalhar/3512);
- **Ano da Eleição:** atributo *anoEleicao* para referência do ano da Eleição em processos da **Justiça Eleitoral**.

### Movimento

- **Classe Processual:** incluído atributo *classeProcessual* no movimento para identificação da classe processual do processo no momento daquela movimentação;
- **Órgão Colegiado:** atributo *orgaoJulgadorColegiado* na movimentação para identificação das movimentações em Órgãos Colegiados;
- **Responsável pela Movimentação:** incluída o opção "2: Automático" em *tipoResponsavelMovimento* para as movimentações automáticas.

### Parte/Pessoa

- **Personificação de Pessoa:** incluída a opção "ente despersonalizado" em *tipoQualificacaoPessoa* para identificação de Entes despersonalizados que, embora não possuam personalidade jurídica, podem ter direitos e deveres. Ex: espólio e condomínio.

### Documentos KML

A partir dessa versão, os tribunais poderão encaminhar os arquivos geoespaciais no formato KML referente ao processo judicial. Ex.: Ações Ambientais. A estrutura de envio dos arquivos segue o mesmo padrão do MNI de envio de documentos processuais, devendo se observar o preenchimento do *tipoDocumento* com o código nacional do tipo de documento do [SGT](https://www.cnj.jus.br/sgt/consulta_publica_documentos.php).

## Arquivo XSD

- Download: [modelo-de-transferencia-de-dados-1.1.xsd](https://datajud-wiki.cnj.jus.br/assets/files/modelo-de-transferencia-de-dados-1.1-bad15805f0dc0a2f012019dcfe3dfde2.xsd)