---
title: "Serviço eCarta | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/servico-e-carta"
author:
published:
created: 2025-09-30
description: "Serviço destinado ao módulo negocial eCarta. O serviço é uma solução de captação eletrônica dos dados da mensagem que depois são processados para o meio físico pelos Correios, automatizando o envio e retorno de correspondências."
tags:
  - "clippings"
---
# Serviço eCarta | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/servico-e-carta


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Serviço eCarta

Serviço destinado ao módulo negocial eCarta. O serviço é uma solução de captação eletrônica dos dados da mensagem que depois são processados para o meio físico pelos Correios, automatizando o envio e retorno de correspondências.

## Como funciona

O serviço eCarta recebe informações e retorna relatórios via interface *REST*, e realiza o retorno de documentos via *MNI*.

### Configuração do tribunal no eCarta

Pode-se configurar o serviço eCarta para um tribunal através de serviço disponível em `/api/v1/configuracoes`.

### Monitoramento de batch e relatórios

Os relatórios de execução dos *batchs* do eCarta são obtidos via serviços disponíveis em `/api/v1/jobs`.

### Relatórios negociais

Os relatórios negociais do eCarta são obtidos via serviços disponíveis em `/api/v1/relatorio`.

### Retorno via MNI

O eCarta retorna documentos por meio do `mni-client-service`.

#### Fluxo básico do sistema

![Imagem do fluxo básico do eCarta](https://docs.pje.jus.br/assets/images/comunicacaoEcarta-622a3d479105dd32f6c032c4bf79f327.png)

## Testes

### Remoto

Acesse a *API* em [https://gateway.stg.cnj.cloud/ecarta-service/swagger-ui.html](https://gateway.stg.cnj.cloud/ecarta-service/swagger-ui.html).

### Local

```jsx
Execute o comando abaixo:docker container run --rm --name ecarta -it -p 8880:8880 \
registry.cnj.jus.br/pje2/pje2-servicos/ecarta:latest
```

| Variável | Valor padrão | Descrição |
| --- | --- | --- |
| SERVER\_PORT | `8880` | Porta do serviço. |
| SSO\_AUTH\_SERVER | [`http://localhost:8080/auth`](http://localhost:8080/auth) | URL do Keycloak. |
| SSO\_REALM | `pje` | Realm da aplicação no Keycloak. |
| SSO\_RESOURCE | `ecarta-service` | Resource no keycloak. |
| DB\_DRIVER | `org.h2.Driver` | Driver do banco de dados. |
| DB\_URL | `jdbc:h2:mem:mydb;DB_CLOSE_ON_EXIT=FALSE` | URL do banco. |
| DB\_USER | `sa` | Usuário do banco. |
| DB\_PASSWORD |  | Senha de acesso ao banco. |
| EUREKA\_SERVER\_DEFAULT\_ZONE | [`http://localhost:8761/eureka`](http://localhost:8761/eureka) | Url do *service discovery* |
| EUREKA\_CLIENT\_ENABLED | `true` | Indicativo de que o serviço deve ou não se registrar no *service discovery*. |

## Tecnologias empregadas

O serviço eCarta foi construído com *SpringBoot 2*. Este serviço fornece *API* para manipulação e recuperação de seus recursos utilizando *REST*. Utiliza o banco de dados *PostgreSQL*.

### Linguagem de programação

Java versão 11.

### Framework

SpringBoot 2.

### Armazenamento dos dados

Banco relacional PostgreSQL.

### Outros temas

Os logs da aplicação podem ser enviados à um serviço *REDIS* para que seja consumido pelo *Logstash* e indexado no *ElasticSearch*.

Os logs de auditoria da aplicação são armazenados no banco de dados e disponibilizados via *API*, concedendo acesso por tribunal conforme configurado no *Keycloak*.

## Comunidade

### Dúvidas

Faça parte da nossa comunidade no RocketChat! Acesse [https://rocketchat.cloud.pje.jus.br/channel/ecarta](https://rocketchat.cloud.pje.jus.br/channel/ecarta).

### Requisição de melhorias e correções de defeitos

Pode-se abrir uma demanda no sistema [*Jira*](https://www.cnj.jus.br/jira/projects/PJEECT) para o projeto **PJEECT**.