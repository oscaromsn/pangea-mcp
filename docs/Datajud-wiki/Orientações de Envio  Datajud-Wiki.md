---
title: "Orientações de Envio | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/"
author:
published:
created: 2025-09-30
description: "Os processos judiciais são enviados ao CNJ em arquivos no formato XML em conformidade com Modelo de Transmissão de Dados – MTD."
tags:
  - "clippings"
---
# Orientações de Envio | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/


## Orientações de Envio

Os processos judiciais são enviados ao CNJ em arquivos no formato XML em conformidade com [Modelo de Transmissão de Dados – MTD](https://datajud-wiki.cnj.jus.br/mtd/).

O processo de envio dos dados pelos Tribunais é realizado em quatro etapas:

1. **Criação e Verificação dos XMLs:** o Tribunal gera os arquivos no formato XML e os valida utilizando o Programa Validador de Arquivos XML;
2. **Envio dos Arquivos:** após validação utilizando o Programa Validador de Arquivos XML, o Tribunal envia os arquivos ao CNJ, que ao serem recebidos são armazenados em um "repositório" e serão gerados protocolos para o tribunal, informando a quantidade de processos recebidos, a detecção de possíveis problemas de envio e algumas informações adicionais. O protocolo será recebido de imediato antes de qualquer validação dos dados, cabendo ao Tribunal utilizá-lo para acompanhar o processamento dos dados recebidos;
3. **Acompanhamento do Processamento:** com o número de protocolo obtido, o tribunal deverá acessar a aplicação responsável pela gestão dos protocolos, disponível em: [https://replicacao.cnj.jus.br/](https://replicacao.cnj.jus.br/), em que acompanhará, em tempo real, o processamento dos arquivos recebidos pelo CNJ. Enquanto isso, ocorrerá um processo de validação automática dos dados, que verificará a existência de inconsistências na Chave Única Processual, composta de 5 campos (sigla do tribunal, grau, classe, código do órgão julgador e número do processo). Se for identificada inconsistência em algum desses cinco campos, o registro será rejeitado. Nesse caso, a solução de envio/recepção atualizará o protocolo de status, informando os motivos da rejeição. Diante disso, o tribunal poderá corrigir as inconsistências e proceder com o reenvio.
4. **Gravação dos Dados:** após o processo de validação, os registros processuais passarão por uma fase de saneamento de dados e serão armazenados na base de dados e, por fim, disponibilizadas para a equipe do DPJ/CNJ para posterior atualização dos painéis do DataJud.

O fluxo resumido do processo de envio/recepção de dados pode ser observado a seguir.

![Etapas do Envio ao Datajud](https://datajud-wiki.cnj.jus.br/assets/images/etapas_datajud-0e7ff147f302d2f02f67a07aa402e8c5.png)