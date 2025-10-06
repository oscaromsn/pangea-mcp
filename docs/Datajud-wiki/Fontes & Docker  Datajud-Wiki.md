---
title: "Fontes & Docker | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/verificacao/Fontes-Docker"
author:
published:
created: 2025-09-30
description: "O programa de validação de arquivos XMLs está disponível para download pelo Tribunal, permitindo a análise das validações necessárias e a execução local sem depender do serviço hospedado no CNJ. Essa ferramenta possibilita ao Tribunal verificar a conformidade dos arquivos XML de forma independente e realizar as validações essenciais sem necessitar do ambiente centralizado do CNJ."
tags:
  - "clippings"
---
# Fontes & Docker | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/verificacao/Fontes-Docker


## Fontes & Docker

O programa de validação de arquivos XMLs está disponível para download pelo Tribunal, permitindo a análise das validações necessárias e a execução local sem depender do serviço hospedado no CNJ. Essa ferramenta possibilita ao Tribunal verificar a conformidade dos arquivos XML de forma independente e realizar as validações essenciais sem necessitar do ambiente centralizado do CNJ.

O **Validador** é hospedado na plataforma [GIT-JUS](https://www.cnj.jus.br/sistemas/git-jus/), acesse o link para obter maiores informações sobre o Repositório bem como obter as permissões de acesso: [https://www.cnj.jus.br/sistemas/git-jus/acesso/](https://www.cnj.jus.br/sistemas/git-jus/acesso/).

O Validador também encontra-se hospedado no CNJ para acesso por parte dos Tribunais, permitindo que os Tribunais possam realizar a validação de seus arquivos XMLs. O Validador é uma aplicação Spring Boot que utiliza o banco de dados MySQL para armazenar as informações necessárias para a validação dos arquivos XMLs.

```markdown
https://validador-datajud.stg.cloud.cnj.jus.br/v1/valida
```

## Repositórios Git-JUS

- Link git:[https://git.cnj.jus.br/git-jus/datajud/validador/](https://git.cnj.jus.br/git-jus/datajud/validador/)

## Docker

```bash
Imagem do validador
docker pull registry.cnj.jus.br/dcor/datajud/validador-datajud:1.4.4.0-homologacao
```
```bash
Imagem do banco
docker pull registry.cnj.jus.br/dcor/datajud/validador-datajud-banco:1.4.4.0-homologacao
```