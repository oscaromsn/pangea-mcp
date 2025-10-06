---
title: "Versão 1.2 | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/mtd/v1_2"
author:
published:
created: 2025-09-30
description: "A versão do MTD 1.2 busca aprimorar a versão anterior trazendo a identificação de raça/cor e a data de concessão da prioridade processual para pessoas idosas em partes. Além disso, a identificação do boletim de ocorrência e do inquérito policial no cabeçalho processual."
tags:
  - "clippings"
---
# Versão 1.2 | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/mtd/v1_2


## Versão 1.2

A versão do MTD 1.2 busca aprimorar a versão anterior trazendo a identificação de **raça/cor** e a **data de concessão da prioridade processual** para pessoas idosas em partes. Além disso, a identificação do **boletim de ocorrência** e do **inquérito policial** no cabeçalho processual.

## Novidades

### Cabeçalho Processual

- **Número do Boletim de Ocorrência**: atributo *numeroBoletimOcorrencia* para identificação dos números dos boletins de ocorrência que estão vinculados ao processo;
- **Número do Inquérito Policial:** atributo *numeroInqueritoPolicial* para identificação dos números dos inquéritos policiais que vinculados ao processo.

### Parte/Pessoa

- **Data de Concessão de Prioridade**: atributo multivalorado **parte.prioridade** do tipo *cnj:prioridadeProcessoParte* aninhado com a parte para identificação da prioridade da parte (*tipo*), data de concessão (*dataConcessao*) e data fim da concessão (*dataFim*).
- **Tipificação raça/cor de Pessoa**: atributo *racaCor* de cada pessoa para tipificação entre as opções BC - Branco(a), PD - Pardo(a), PR - Preto(a), IN - Indígena, AM - Amarelo(a) e ND - Não declarado.

## Arquivo XSD

- Download: [modelo-de-transferencia-de-dados-1.2.xsd](https://datajud-wiki.cnj.jus.br/assets/files/modelo-de-transferencia-de-dados-1.2-cd9bb1d6c9c6bfa350a61598e386890b.xsd)