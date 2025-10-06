---
title: "Glossário de Dados | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/api-publica/glossario"
author:
published:
created: 2025-09-30
description: "O glossário de dados da API Pública do Datajud oferece de maneira detalhada os termos, conceitos e estruturas de dados específicos dessa API. A compreensão desse glossário é essencial para otimizar suas consultas, pois ele oferece uma referência sobre como os dados estão organizados e como podem ser acessados. Isso não só agiliza suas pesquisas, mas também garante a precisão e relevância dos resultados obtidos."
tags:
  - "clippings"
---
# Glossário de Dados | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/api-publica/glossario


## Glossário de Dados

O glossário de dados da API Pública do Datajud oferece de maneira detalhada os termos, conceitos e estruturas de dados específicos dessa API. A compreensão desse glossário é essencial para otimizar suas consultas, pois ele oferece uma referência sobre como os dados estão organizados e como podem ser acessados. Isso não só agiliza suas pesquisas, mas também garante a precisão e relevância dos resultados obtidos.

Portanto, recomendamos enfaticamente a exploração e compreensão do glossário como um passo essencial para aproveitar plenamente os recursos da API.

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| **id** | text/keyword | Identificador da origem do processo no Datajud - Chave **Tribunal\_Classe\_Grau\_OrgaoJulgador\_NumeroProcesso** |
| **tribunal** | text/keyword | Identificação do Tribunal pela sigla |
| **numeroProcesso** | text/keyword | Numeração Única (CNJ) do processo sem formatação |
| **dataAjuizamento** | datetime | Data de ajuizamento da capa do processo |
| **grau** | text/keyword | Identificação do instância/grau (G1, G2, JE, etc...) |
| **nivelSigilo** | long | Nível de sigilo |
| **formato** | **object{}** | **Identificação de processo Físico ou Eletrônico** |
| **formato.codigo** | long | Código de identificação do formato do processo |
| **formato.nome** | text/keyword | Identificação se é Físico ou Eletrônico |
| **sistema** | **object{}** | **Sistema processual de origem do processo no Tribunal** |
| **sistema.codigo** | long | Código do sistema processual |
| **sistema.nome** | text/keyword | Descrição do sistema processual |
| **classe** | **object{}** | **Classe Processual conforme TPU** |
| **classe.codigo** | long | Código da classe processual |
| **classe.nome** | text/keyword | Descrição da classe processual |
| **assuntos** | **array \[\]** | **Assuntos do Processo conforme TPU** |
| **assuntos.codigo** | **long** | Código do assunto |
| **assuntos.nome** | text/keyword | Descrição do assunto |
| **orgaoJulgador** | **object {}** | **Órgão Julgador** |
| **orgaoJulgador.codigo** | long | Código da serventia/vara atual do processo |
| **orgaoJulgador.nome** | text/keyword | Nome da serventia/vara |
| **orgaoJulgador.codigoMunicipioIBGE** | long | Identificação do município pelo código do IBGE |
| **movimentos** | **array \[\]** | **Movimentos Processuais** |
| **movimentos.codigo** | long | Código da movimentação processual conforme TPU |
| **movimentos.nome** | text/keyword | Descrição da movimentação |
| **movimentos.dataHora** | datetime | Data e hora da ocorrência de movimentação |
| **movimentos.complementosTabelados** | **array \[\]** | **Lista de complementos tabelados daquela movimentação** |
| **movimentos.complementosTabelados.codigo** | long | Código da variável de movimento tabelado |
| **movimentos.complementosTabelados.descricao** | text/keyword | Descrição da variável do movimento tabelado |
| **movimentos.complementosTabelados.valor** | long | Código do complemento tabelado |
| **movimentos.complementosTabelados.nome** | text/keyword | Descrição do complemento tabelado |
| **movimentos.orgaoJulgador** | object {}\*\* | **Órgão julgador do movimento** |
| **movimentos.orgaoJulgador.codigoOrgao** | long | Código da serventia/vara do movimento |
| **movimentos.orgaoJulgador.nomeOrgao** | text/keyword | Nome da serventia/vara |

Os atributos abaixo são utilizados para controle interno da aplicação:

| Atributos | Tipo | Descrição |
| --- | --- | --- |
| **dataHoraUltimaAtualizacao** | datetime | Milisegundos do atributo *millisInsercao* da origem do dado |
| **@timestamp** | datetime | *Timestamp* da atualização do documento no índice |