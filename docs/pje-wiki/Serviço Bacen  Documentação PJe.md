---
title: "Serviço Bacen | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/servico-bacen"
author:
published:
created: 2025-09-30
description: "Confira a documentação do Sisbajud no Docs PDPJ."
tags:
  - "clippings"
---
# Serviço Bacen | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/servico-bacen


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Serviço Bacen

## Introdução

Em dezembro de 2019, foi firmado o [Acordo de Cooperação Técnica nº 41/2019](https://www.cnj.jus.br/wp-content/uploads/2020/07/TCOT-041_2019_PT.pdf) entre o Conselho Nacional de Justiça (CNJ), o Banco Central e a Procuradoria da Fazenda Nacional (PGFN), visando o desenvolvimento de novo sistema para substituir o BacenJud e aprimorar a forma do Poder Judiciário transmitir suas ordens às instituições financeiras.

Visando cumprir os comandos constitucionais de razoabilidade duração do processo e eficiência da prestação jurisdicional, bem como reduzir os riscos na tramitação física de documentos contendo informações sigilosas, foi desenvolvido o **Sistema de Busca de Ativos do Poder Judiciário (SISBAJUD)**.

## Integração

O `bacen-service` foi criado com o objetivo de abstrair toda complexidade de comunicação com a *API* do *SISBAJUD*, além de realizar o processo de desdobramento (envio de ações de desbloqueio e/ou transferência de valores bloqueados) e notificar o processo judicial (por meio do `mni-client-service`) de maneira automática.

### Diagrama de integração

![Imagem de integração do serviço bacen](https://docs.pje.jus.br/assets/images/diagrama-integracao-bacen-fab24e3446ed2b35de215428ecfcb956.png)

## Como funciona

Por meio de sua [*API*](https://gateway.stg.cnj.cloud/bacen-service/swagger-ui.html) é possível executar diversas operações relacionadas a ordem judicial de bloqueio de valores, como abertura / fechamento de ordem de bloqueio, transferência / desbloqueio de valores bloqueados, entrega de documento (certidão) e solicitação de logs.

Primeiramente, é necessário configurar o serviço. Essa configuração é específica para cada pessoa (CPF) e permite o cadastro da senha de acesso ao CNJ Corporativo, dos dados para realização do desdobramento e do mapeamento de varas.

Após abertura da ordem de bloqueio e posterior identificação, pelo `bacen-service`, das respostas, será realizado o desdobramento e o envio de uma certidão. Esta certidão pode ser do tipo:

- **Resposta negativa**: Não houve resposta ou não há saldo positivo.
- **Desbloqueado**: O valor bloqueado não atingiu o valor mínimo de acordo com os critérios previamente configurados.
- **Transferido parcialmente**: O valor bloqueado não atingiu o valor solicitado.
- **Transferido**: O valor bloqueado atingiu (ou ultrapassou) o valor solicitado. Caso o valor bloqueado supere o valor solicitado, o `bacen-service` enviará ações de desbloqueio dos valores excedentes.

## PJe

O PJe tem como dependência a biblioteca `api-client`. Esta contém o *Seam component* `BacenRestClient`, o qual disponibiliza métodos para comunicação com a *API* do `bacen-service`.

### Configuração

#### Cadastrar fluxo processual

Um exemplo de fluxo pode ser obtido [aqui](https://docs.pje.jus.br/assets/files/fluxo-df78a83c07f53fe4b17869b5e6de5589.txt). Neste exemplo existem um fluxo principal (**Bacen**) e fluxos auxiliares (**Bacen Resposta Negativa**, **Bacen Desbloqueado**, **Bacen Transferido Parcialmente**, **Bacen Transferido**, **Bacen Recibo**, **Bacen Aguardando Transferência** e **Bacen Desbloqueado Usuário**) responsáveis por sinalizar o fluxo principal quando do recebimento de uma certidão.

#### Associar fluxo aos novos documentos

Foram criados 7 tipos de documentos processuais. Cada um corresponde a uma certidão que o *serviço bacen* irá enviar ao PJe. Para cada um desses tipos de documento deve-se associar um fluxo, da seguinte forma:

- Documento de código **99801** → Fluxo **Bacen Resposta Negativa**;
- Documento de código **99802** → Fluxo **Bacen Desbloqueado**;
- Documento de código **99803** → Fluxo **Bacen Transferido Parcialmente**;
- Documento de código **99804** → Fluxo **Bacen Transferido**;
- Documento de código **99806** → Fluxo **Bacen Recibo**;
- Documento de código **99807** → Fluxo **Bacen Aguardando Transferência**;
- Documento de código **99808** → Fluxo **Bacen Desbloqueado Usuário**.

#### Configurar o serviço

A tela de configuração está disponível em **Configuração** → **Serviços** → **Bacen** → **Configuração**.

## Execução

### Configuração da aplicação

O `bacen-service` pode ser configurado de acordo com as seguintes variáveis de ambiente:

| Variável | Valor padrão | Descrição |
| --- | --- | --- |
| CRON\_EXPRESSION | `-` | Indica a periodicidade com a qual o sistema irá verificar a resposta da ordem judicial no sistema *SISBAJUD*. |
| DB\_DRIVER | `org.h2.Driver` | Driver do banco de dados. |
| DB\_PASSWORD |  | Senha do usuário do banco de dados. |
| DB\_URL | `jdbc:h2:mem:bacen;DB_CLOSE_ON_EXIT=FALSE` | URL do banco de dados. |
| DB\_USER | `sa` | Usuário do banco de dados. |
| EUREKA\_CLIENT\_ENABLED | `true` | Indicativo de que o serviço deve ou não se registrar no service discovery. |
| EUREKA\_SERVER\_DEFAULT\_ZONE | [`http://localhost:8761/eureka`](http://localhost:8761/eureka) | URL do *service discovery*. |
| GATEWAY\_URL | [`http://localhost:8180`](http://localhost:8180/) | URL do *gateway*. |
| HOST\_SISBAJUD |  | Host da *API* de serviços do *SISBAJUD*. |
| PASSWORD\_CRYPTO\_KEY |  | Chave de 128 *bits* codificada em *Base64* para encriptar a senha do usuário. |
| SERVICE\_PORT | `8585` | Porta do serviço. |
| SSO\_AUTH\_SERVER\_URL | [`http://localhost:9180/auth`](http://localhost:9180/auth) | URL de autenticação do serviço de SSO (keycloak). |
| SSO\_CLIENT\_ID\_SISBAJUD |  | Identificador da aplicação `sisbajud-api` no serviço de *SSO* (*keycloak*). |
| SSO\_CLIENT\_SECRET\_SISBAJUD |  | Chave da aplicação `sisbajud-api` no serviço de *SSO* (*keycloak*). |
| SSO\_REALM | `pje` | Domínio da política de segurança configurado no serviço de *SSO* (*keycloak*). |
| SSO\_RESOURCE | `bacen-service` | O identificador do cliente (`client_id`) no serviço de *SSO* (*keycloak*). |

### Docker

#### Inicialize a aplicação

```jsx
docker container run --rm --name bacen -it -p 8585:8585 \
      -e EUREKA_CLIENT_ENABLED=false \
      -e HOST_SISBAJUD=https://sisbajudh.cnj.jus.br \
      -e LOGGING_LEVEL_BR_JUS_PJE=DEBUG \
      registry.cnj.jus.br/pje2/pje2-servicos/bacen:latest
```

## Principais tecnologias utilizadas

### Linguagem de programação

Java versão 8

### Framework

SpringBoot 2

### Armazenamento dos dados

Banco relacional *H2* ou *PostgreSQL* com *enconding* **UTF-8**.

## Comunidade

### Dúvidas

Faça parte da nossa comunidade no RocketChat! Acesse [https://rocketchat.cloud.pje.jus.br/channel/bacen](https://rocketchat.cloud.pje.jus.br/channel/bacen).

### Requisição de melhorias e correções de defeitos

Pode-se abrir uma demanda no sistema [*Jira*](https://www.cnj.jus.br/jira/projects/PJEBCN) para o projeto **PJEBCN**.