---
title: "Ambiente Local de Desenvolvimento | Documentação PDPJ-Br"
source: "https://docs.pdpj.jus.br/desenvolvendo-para-a-pdpj/ambiente-local-de-desenvolvimento"
author:
published:
created: 2025-09-30
description: "Assista abaixo ao webinário com instruções para o desenvolvimento \"hands on\" na PDPJ-Br:"
tags:
  - "clippings"
---
# Ambiente Local de Desenvolvimento | Documentação PDPJ-Br
Available at https://docs.pdpj.jus.br/desenvolvendo-para-a-pdpj/ambiente-local-de-desenvolvimento


Assista abaixo ao webinário com instruções para o desenvolvimento "hands on" na PDPJ-Br:

![](https://www.youtube.com/watch?v=P6JQKxUvFyM)

## Infraestrutura básica com docker

A arquitetura baseada em micro serviços da PDPJ depende de alguns recursos de infraestrutura. Estes recursos são responsáveis por prover a integração necessária para o ambiente. Entre estes recursos estão: serviço de descoberta (Eureka), API gateway (Zuul) e broker de mensagens (RabbitMQ). Todos esses serviços estão disponíveis no repositório de imagens Docker do CNJ.

Para facilitar a composição do ambiente de desenvolvimento a sugestão é utilizar o docker-compose. O docker-compose permite fazer uma composição de serviços que serão executados na máquina do desenvolvedor. A pilha de serviços de infraestrutura de nuvem, então, será executada localmente e o desenvolvedor poderá focar em desenvolver o seu microserviço.

## Executando o docker-compose da pilha da PDPJ

Para executar a pilha de serviços da PDPJ devemos utilizar o seguinte docker-compose.yml:

```yaml
version: "3"

services:
  discovery:
    image: registry.cnj.jus.br/pdpj/pdpj-discovery:latest
    container_name: discovery
    ports:
      - '8761:8761'
  gateway:
    image: registry.cnj.jus.br/pdpj/pdpj-gateway:latest
    container_name: gateway
    ports:
      - '8180:8180'
      - '8181:8181'
    environment:
      - EUREKA_SERVER_DEFAULT_ZONE=http://discovery:8761/eureka/
      - EUREKA_INSTANCE_PREFERIPADDRESS=true
      - GATEWAY_ACTIVE_PROFILES=dev
  rabbitmq:
    image: rabbitmq:3.7.9-management-alpine
    container_name: rabbitmq
    ports:
      - '15672:15672'
      - '5672:5672'
    environment:
      - RABBITMQ_DEFAULT_USER=pdpj
      - RABBITMQ_DEFAULT_PASS=pdpj
      - RABBITMQ_DEFAULT_VHOST=pdpj-dev
  postgres:
      image: postgres
      volumes:
        - ${HOME}/PostgreSQL:/var/lib/postgresql/data
      environment:
        POSTGRES_DB: keycloak
        POSTGRES_USER: keycloak
        POSTGRES_PASSWORD: password
  keycloak:
      image: quay.io/keycloak/keycloak:latest
      environment:
        DB_VENDOR: POSTGRES
        DB_ADDR: postgres
        DB_DATABASE: keycloak
        DB_USER: keycloak
        DB_SCHEMA: public
        DB_PASSWORD: password
        KEYCLOAK_USER: admin
        KEYCLOAK_PASSWORD: Pa55w0rd
      ports:
        - 8280:8280
      depends_on:
        - postgres
```

O comando para executar o compose será:

`docker-compose docker-compose.yml up -d`

Ao executar o compose temos acesso aos seguintes serviços:

| Serviço | Tecnologia | Url |
| --- | --- | --- |
| keycloak | Keycloak | [http://localhost:8280](http://localhost:8280/) |
| pdpj-discovery-service | Netflix Eureka | [http://localhost:8761](http://localhost:8761/) |
| pdpj-gateway-service | Netflix Zuul | [http://localhost:8180](http://localhost:8180/) |
| message-broker | RabbitMQ | [http://localhost:5672](http://localhost:5672/) |
| message-broker-management | RabbitMQ | [http://localhost:15672](http://localhost:15672/) |

## Executando manualmente a pilha de Serviços da PDPJ

Alternativamente, você também pode executar alguns dos serviços da pilha manualmente, clonando os projetos abaixo e executando-os conforme instruções de seus arquivos README.md:

| Serviço | Git |
| --- | --- |
| pdpj-discovery-service | [https://git.cnj.jus.br/pdpj/infraestrutura/discovery](https://git.cnj.jus.br/pdpj/infraestrutura/discovery) |
| pdpj-gateway-service | [https://git.cnj.jus.br/pdpj/infraestrutura/gateway](https://git.cnj.jus.br/pdpj/infraestrutura/gateway) |

## Configurando o Projeto de Referência da PDPJ

Para realizar a correta configuração do Maven, se faz necessário configurar o repositório Nexus. Conforme aquivo de configuração\[settings.xml\] abaixo

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <servers>
        <server>
            <id>nexus</id>
            <username>USUARIO</username>
            <password>SENHA</password>
        </server>
    </servers>
    <mirrors>
        <mirror>
            <id>nexus</id>
            <name>nexus.cnj.jus.br</name>
            <url>https://nexus.cnj.jus.br/repository/maven-public</url>
            <mirrorOf>external:*</mirrorOf>
        </mirror>
    </mirrors>
</settings>
```

Realize um [git clone](https://git-scm.com/downloads) do [Projeto Referência](https://git.cnj.jus.br/pdpj/dev/) e siga as instruções contidas no arquivo [README.md](https://git.cnj.jus.br/pdpj/dev/referencia/-/blob/master/README.md) do projeto.

***Exemplo da organização das camadas no projeto de referência***

![Arquitetura REST](https://docs.pdpj.jus.br/assets/images/img_rest_1-2ee058584c90854cfbb4da504afe0831.png)

Para se integrar ao ambiente de desenvolvimento (pilha de serviços locais ou em stage) da PDPJ, se faz necessário realizar as configurações do ambiente, como: url do pdpj-discovery-service, url do gateway, url do rabbitmq entre outras configurações possíveis. Vamos nos concentrar nesse momento nas configurações básicas para o ambiente de desenvolvimento local.

Estas configurações serão passadas aos serviços de pilha da PDPJ através de propriedades definidas no [application.yml](https://git.cnj.jus.br/pdpj/dev/referencia/-/blob/master/src/main/resources/application.yaml) de cada projeto e seus ambientes (dev, stg e prod).

```yaml
# configurações do servidor
server: 
  servlet:
    context-path: ${CONTEXT_PATH:/} 
  port: ${SERVER_PORT:8880}

# configurações do serviço
spring:
  application:
    name: ${APP_NAME:referencia}
  aop:
    auto: false
  profiles:
    active: sso-security
  rabbitmq:
    host: ${RABBITMQ_HOST:localhost}
    username: ${RABBIT_USERNAME:referencia}
    password: ${RABBIT_PASSWORD:referencia}
    virtual-host: ${RABBIT_VHOST:pdpj-dev}
    template:
      exchange: ${RABBIT_EXCHANGE:pdpj.exchange}
    port: ${RABBIT_PORT:5672}
    connection-timeout: 1000ms
  zipkin:
    sender:
      type: web
    discovery-client-enabled: ${EUREKA_REGISTER_ENABLE:true}
    service:
      name: ${APP_NAME:referencia}
  datasource:
    url: jdbc:h2:mem:mydb
    driver-class-name: org.h2.Driver
    username: sa
    password:
  jpa:
    hibernate:
      ddl-auto: update

pdpj:
  appName: ${APP_NAME:referencia}

# configurações do cliente para keycloak
keycloak:
  auth-server-url: ${SSO_AUTH_SERVER:http://localhost:8280/auth}
  realm: ${SSO_REALM:pdpj}
  resource: ${SSO_RESOURCE:referencia}
  bearer-only: true
  principal-attribute: preferred_username

# configurações da instancia no service discovery    
eureka:
  client:
    serviceUrl:
      defaultZone: ${EUREKA_SERVER_DEFAULT_ZONE:http://localhost:8761/eureka}
    enabled: ${EUREKA_REGISTER_ENABLE:true}
  instance:
    healthCheckUrlPath: /actuator/health
    statusPageUrlPath: /actuator/info

# configurações do actuator    
management:
  endpoints:
    web.exposure.include: "*"
  endpoint:
    health:
      show-details: ALWAYS 
      
# opções de log
logging:
  level:
    br.jus.pdpj: DEBUG
```

Com as variáveis defidamente configuradas é só subir o servidor de aplicação(conforme instruções no arquivo README.md do projeto). No startup da aplicação o projeto de referência deverá se registrar no serviço do PDPJ-discovery-service. Para verificar quais serviços estão registrados acesse [http://localhost:8761](http://localhost:8761/). Os seguinte serviços devem estar registrados no painel do Eureka:

- gateway-service
- pdpj-referencia