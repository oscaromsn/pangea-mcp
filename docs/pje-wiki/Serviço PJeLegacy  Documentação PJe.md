---
title: "Serviço PJeLegacy | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/servico-pje-legacy"
author:
published:
created: 2025-09-30
description: "Trata-se do projeto monlítico e legado do PJe. Neste projeto encontram-se diversos contextos negociais emaranhados."
tags:
  - "clippings"
---
# Serviço PJeLegacy | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/servico-pje-legacy


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Serviço PJeLegacy

Trata-se do projeto monlítico e legado do PJe. Neste projeto encontram-se diversos contextos negociais emaranhados.

## Início rápido

Instruções para a inicialização de maneira rápida da aplicação. Nesta seção não se deve entrar nos detalhamentos técnicos da aplicação. O Objetivo desta seção é apenas descrever como a aplicação pode ser inicializada da maneira mais simples possível.

## Tecnologias empregadas

O `pje-legacy` possui um arcabouço de tecnologias legadas, em sua maioria já descontinuadas pela comunidade. Diante desse cenário tem-se uma das motivações da remodelagem arquitetural, com intuito de renovação do parque tecnológico do ecossistema PJe.

### Linguagem de programação

- Java versão 8;
- Javascript.

### Frameworks

- JBoss SEAM 2.2.2;
- JSF 1.2;

### Armazenamento dos dados

- PostgreSQL 9.4 ou superior;
- JCR-Storage.

### Outros temas

- Quartz
- EhCache
- Elasticsearch

## Visão arquitetural

![Imagem da visão arquitetural do PJeLegacy](https://docs.pje.jus.br/assets/images/pje_arq-50ad0b4337a69aee628107261d74adbf.png)

## Configuração da aplicação

| Profile | Descrição |
| --- | --- |
| producao | Configura aplicação com logs menos verbosos e *mocks* desativados. |
| UseEhCache | Configura a aplicação para utiliza cache de segundo nível do *Hibernate*. |
| db-storage-postgres | Configura a aplicação para armazenar dados binário em *filesystem* utilizando *PostgreSQL*. |
| jcr-storage | Configura a aplicação para armazenar dados binário em filesystem utilizando *JCR*. |

### Variáveis de ambiente

| Variável | Valor padrão | Descrição |
| --- | --- | --- |
| ENV\_PJE2\_CLIENTE\_URL | [`http://localhost:4200`](http://localhost:4200/) | Endereço do frontend Angular. |
| ENV\_EUREKA\_CLIENT\_HOSTNAME | `null` | Permite definir o hostname da instancia registrada no eureka. |
| ENV\_EUREKA\_CLIENT\_SECURE\_PORT | `443` | Permite definir a porta para o protocolo https. |
| ENV\_EUREKA\_CLIENT\_SECURE\_PORT\_ENABLED | `false` | Permite definir se a aplicação será registrada com o protocolo https. |
| ENV\_EUREKA\_CLIENT\_NONSECURE\_PORT | `true` | Permite definir a porta para o protocolo http. |
| ENV\_EUREKA\_CLIENT\_NONSECURE\_PORT\_ENABLED | `8080` | Permite definir se a aplicação será registrada com o protocolo http. |
| ENV\_PJE2\_CLOUD\_APP\_NAME | `pje-legacy` | Nome do serviço `pje-legacy`. Cada instalação do pje terá um nome de serviço único. Ex.: `pje-tjxy-1g`. |
| ENV\_PJE2\_CLOUD\_URL\_GATEWAY | `vazio` | Endereço do API Gateway. Este valor é facultativo. Caso não informado o pje-legacy irá descobrir através do discovery. |
| ENV\_PJE2\_CLOUD\_REGISTRAR | `true` | Indica que a aplicação deve se registrar no *discovery*. |
| ENV\_EUREKA\_SERVER\_URL | [`http://localhost:8761/eureka`](http://localhost:8761/eureka) | URL do serviço de descoberta *eureka server*. |
| ENV\_PJE2\_CLOUD\_RABBIT\_PUBLISH\_MESSAGES | `true` | Indica que a aplicação de publicar mensagens no *broker* *RabbitMQ*. |
| ENV\_PJE2\_CLOUD\_RABBIT\_HOST | `localhost` | Host do *broker* de mensagens, sem protocolo e sem porta. |
| ENV\_PJE2\_CLOUD\_RABBIT\_VIRTUALHOST | `/` | Path do *virtual host* do *broker* de mensagens. |
| ENV\_PJE2\_CLOUD\_RABBIT\_USERNAME | `guest` | Nome de usuário da aplicação no *broker* de mensagens. |
| ENV\_PJE2\_CLOUD\_RABBIT\_PASSWORD | `guest` | Senha de usuário da aplicação no *broker* de mensagens. |
| ENV\_PJE2\_CLOUD\_RABBIT\_EXCHANGENAME | `pje.exchange` | Nome da *exchange* para onde a aplicação publicará as mensagens. |
| ENV\_PJE2\_CLOUD\_RABBIT\_QUEUENAME | `pje.legacy` | Nome da fila que a aplicação receberá as mensagens do *broker* de mensagens. |
| ENV\_SSO\_AUTHENTICATION\_ENABLED | `true` | Indica se a autenticação será realizada pelo serviço de *SSO*. |
| ENV\_SSO\_AUTHORIZATION\_ENABLED | `false` | Indica se a autorização será realizada pelo serviço de *SSO*. |
| ENV\_SSO\_AUTHSERVER\_URL | [`http://localhost:8280/auth`](http://localhost:8280/auth) | Endpoint de autorização do keycloak. |
| ENV\_SSO\_CLIENT\_ID | `pje-tjxy-1g` | Nome do client-id do pje-legacy. Cada instalação do pje terá um `client_id` único. Ex.: `pje-tjxy-1g`. |
| ENV\_SSO\_CLIENT\_SECRET | `e96f91f6-873d-4fd6-c6fe-318d6913fe5f` | Nome do `client_secret` do `pje-legacy`. Cada instalação do pje terá um `client_secret` único. |
| ENV\_SSO\_CONFIDENTIAL\_PORT | `443` | Porta da conexão segura com o serviço do *SSO*. |
| ENV\_SSO\_REALM | `pje` | Realm do serviço do *SSO*. |
| ENV\_SSO\_SSL\_REQUIRED | `none` | Indica se requer uso de certificado *SSL* para o serviço do *SSO*. |

## Papeis e/ou recursos

Em construção...

## Interações com o barramento de mensagens

O `pje-legacy` realiza publicação de mensagens no *broker*.

### Filas que escuta

O `pje-legacy` ainda não escuta nenhuma fila do *broker*.

### Mensagens que produz

#### Movimentações processuais

Lançar mensagem ao *broker* sempre que uma movimentação processual for registrada para um processo.

```jsx
Classe e métodoLancadorMovimentoService.lancarMovimento(ProcessoEvento movimentoProcesso, boolean autoFlush);
```
```js
Payload da mensagem{
  idProcessoEvento : "",
  idProcesso : "",
  idProcessoDocumento : "",
  idUsuario : "",
  dataAtualizacao : "",
  descricaoEvento : "",
  idJbpmTask : "",
  idProcessInstance : "",
  idTarefa : "",
  nomeUsuario : "",
  cpfUsuario : "",
  cnpjUsuario : "",
  processado : "",
  verificadoProcessado : "",
  idProcessoEventoExcludente : "",
  visibilidadeExterna : "",
  observacao : "",
  textoFinalInterno : "",
  textoFinalExterno : "",
  textoParametrizado : ""
}
```

#### Retificação de partes

Enviar mensagem ao *broker* sempre que uma parte for incluída, excluída ou inativada de um processo através da retificação de autuação.

```jsx
Classe e métodoProcessoParteHome.inativarParticipante();
ProcessoParteHome.inserir();
```
```js
Payload da mensagem{
  numeroProcesso : "",
  idProcessoPje: "",
  idProcessoPartePje: "",
  idPessoaPje: "",
  rji: "",
  situacaoParte: ""
}
```

## Interações com outros serviços

| Serviço | Tipo de interação | Descrição |
| --- | --- | --- |
| criminal | Síncrona | Ao protocolar um processo com classe em agrupamento do tipo **CRI**. A aplicação realiza *POST* no serviço criminal para cadastramento do processo criminal. Caso o processo não seja cadastrado o protocolo não é realizado no `pje-legacy`. |

## Eventos de webhook

Não disponível.

## Release notes

[Notas da versão](https://docs.pje.jus.br/servicos-negociais/servico-pje-legacy/notas-da-versao)