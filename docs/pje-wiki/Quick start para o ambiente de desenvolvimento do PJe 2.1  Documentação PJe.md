---
title: "Quick start para o ambiente de desenvolvimento do PJe 2.1 | Documentação PJe"
source: "https://docs.pje.jus.br/manuais-de-inicializacao/quick-start-para-o-ambiente-de-desenvolvimento-do-pje-2-1"
author:
published:
created: 2025-09-30
description: "Infraestrutura básica com docker"
tags:
  - "clippings"
---
# Quick start para o ambiente de desenvolvimento do PJe 2.1 | Documentação PJe
Available at https://docs.pje.jus.br/manuais-de-inicializacao/quick-start-para-o-ambiente-de-desenvolvimento-do-pje-2-1


[Pular para o conteúdo principal](https://docs.pje.jus.br/manuais-de-inicializacao/#__docusaurus_skipToContent_fallback)

## Quick start para o ambiente de desenvolvimento do PJe 2.1

## Infraestrutura básica com docker

A arquitetura baseada em microsserviços do PJe 2.1 depende de alguns recursos de infraestrutura. Estes recursos são responsáveis por prover a integração necessária para o ambiente. Entre estes recursos estão: serviço de descoberta (*Eureka*), *API gateway* (*Zuul*) e *broker de mensagens* (*RabbitMQ*). Todos esses serviços estão disponíveis no repositório de imagens *Docker* do CNJ.

Para facilitar a composição do ambiente de desenvolvimento a sugestão é utilizar o `docker-compose`. O `docker-compose` permite fazer uma composição de serviços que serão executados na máquina do desenvolvedor. A pilha de serviços de infraestrutura de nuvem, então, será executada localmente e o desenvolvedor poderá focar em desenvolver o seu microsserviço.

## Executando o docker-compose da pilha do PJe

Para executar a pilha de serviços do PJe devemos utilizar o seguinte `docker-compose.yml`:

```yaml
version: "3"

services:
  discovery:
    image: registry.cnj.jus.br/pje2/pje-discovery:latest
    container_name: discovery
    ports:
      - "8761:8761"
  gateway:
    image: registry.cnj.jus.br/pje2/pje-gateway:latest
    container_name: gateway
    ports:
      - "8180:8180"
      - "8181:8181"
    environment:
      - EUREKA_SERVER_DEFAULT_ZONE=http://discovery:8761/eureka/
      - EUREKA_INSTANCE_PREFERIPADDRESS=true
      - GATEWAY_ACTIVE_PROFILES=dev
  rabbitmq:
    image: rabbitmq:3.7.9-management-alpine
    container_name: rabbitmq
    ports:
      - "15672:15672"
      - "5672:5672"
    environment:
      - RABBITMQ_DEFAULT_USER=pje
      - RABBITMQ_DEFAULT_PASS=pje
      - RABBITMQ_DEFAULT_VHOST=pje-dev
  frontend:
    image: registry.cnj.jus.br/pje2/pje2-clientes/pje-frontend:master
    container_name: pje-frontend
    ports:
      - "4200:80"
```

O comando para executar o compose será:

```jsx
sudo docker-compose docker-compose.yml up -d
```

Ao executar o compose temos acesso aos seguintes serviços:

| Serviço | Tecnologia | URL |
| --- | --- | --- |
| pje2-discovery-service | Netflix Eureka | [http://localhost:8761](http://localhost:8761/) |
| pje2-gateway-service | Netflix Zuul | [http://localhost:8761](http://localhost:8180/) |
| pje2-web | Frontend Angular | [http://localhost:8761](http://localhost:4200/) |
| message-broker | RabbitMQ | [http://localhost:8761](http://localhost:5672/) |
| message-broker-mangement | RabbitMQ | [http://localhost:8761](http://localhost:15672/) |

## Subindo o frontend Angular (pje2-web)

O PJe conta agora com um projeto *Angular* para *frontend*. Este projeto visa a substituição gradual das telas *JSF* atuais. O novo cliente `pje2-web` com Angular foi construído de forma a se comunicar com toda *API* de serviços do PJe, e prover os serviços ao usuário final através de uma experiência mais moderna e amigável. Caso o desenvolvedor necessite realizar alterações no código do *frontend* é necessário removê-lo do `docker-compose`, e subir a aplicação separadamente.

### Clonando o projeto pje2-web

O `pje2-web` é um projeto *Angular* padrão gerado com `angular-cli`, portanto antes de começar certifique-se de que você tem o *Node.js* na versão 10.x ou superior instalado em sua máquina.

Com o *Node.js* instalado já podemos instalar o `angular-cli`:

```jsx
npm install -g @angular/cli
```

Após a instalação do `angular-cli` faça o clone do repositório do `pje2-web`:

```jsx
git clone git@git.cnj.jus.br:pje2/pje2-clientes/pje2-web.git
```

Com o repositório clonado iremos instalar as depedências do projeto:

```jsx
npm install
```

### Iniciando o frontend pj2-web

Para executar nosso *frontend* usaremos o próprio `angular-cli`, que já nos provê um servidor para desenvolvimento. Na raiz do projeto `pje2-web` execute:

```jsx
ng serve --host=0.0.0.0 --disable-host-check
```

Este comando irá compilar e servir o projeto *frontend* em [http://localhost:4200](http://localhost:4200/).

## PJe legado para o ambiente de microsserviços

O projeto PJe deve ser configurado para que se integre ao ambiente de microsserviços. Na nova arquitetura o PJe passou por diversas alterações para que pudesse fazer parte desse novo ambiente. Hoje, o projeto é um grande monolito, com diversos emaranhamentos negociais que o torna um projeto de difícil manutenção e muito sujeito a falhas. Com a nova arquitetura quebraremos aos poucos o monolito, criando novos microsserviços que atendam a contextos de negócio bem definidos.

### Configurando o PJe

Para se integrar ao ambiente o PJe precisa de configurações como: URL do `pje2-discovery-service`, URL do `gateway`, URL do `rabbitmq` entre outras configurações possíveis. Vamos nos concetrar nas configurações básicas para o ambiente de desenvolvimento.

Estas configurações serão passadas ao PJe através de variáveis de ambiente.

As seguintes variáveis de ambiente deverão ser passadas ao servidor de aplicação do PJe com os respectivos valores:

| Variável | Valor | Descrição |
| --- | --- | --- |
| ENV\_PJE2\_CLOUD\_APP\_NAME | `pje-cnj` | Nome do serviço PJe. |
| ENV\_PJE2\_CLOUD\_REGISTRAR | `true` | Indica se o PJe deve se registrar no service discovery. |
| ENV\_EUREKA\_SERVER\_URL | [`http://localhost:8761/eureka`](http://localhost:8761/eureka) | Endereço para registro no service discovery. |
| ENV\_PJE2\_CLIENTE\_URL | [`http://localhost:4200`](http://localhost:4200/) | Endereço do fontend. |
| ENV\_PJE2\_CLOUD\_URL\_GATEWAY | [`http://localhost:8180`](http://localhost:8180/) | Endereço do API Gateway. |
| ENV\_PJE2\_CLOUD\_RABBIT\_PUBLISH\_MESSAGES | `true` | Indica se o PJe deve publicar mensagens para o broker. |
| ENV\_PJE2\_CLOUD\_RABBIT\_HOST | `localhost` | Endereço do message broker RabbitMQ. |
| ENV\_PJE2\_CLOUD\_RABBIT\_USERNAME | `pje` | Nome de usuário do PJe no RabbitMQ. |
| ENV\_PJE2\_CLOUD\_RABBIT\_PASSWORD | `pje` | Senha de usuário do PJe no RabbitMQ. |
| ENV\_PJE2\_CLOUD\_RABBIT\_VIRTUALHOST | `pje-dev` | Nome do virtual host a ser utilizado no RabbitMQ. |

Com as variáveis configuradas é só subir o servidor de aplicação. No *startup* da aplicação o PJe deverá se registrar no `pje2-discovery-service`. Para verificar quais serviços estão registrados acesse [http://localhost:8761](http://localhost:8761/). Os seguinte serviços devem estar registrados no painel do *Eureka*:

- gateway-service
- pje-cnj