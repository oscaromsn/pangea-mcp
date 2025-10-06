---
title: "Guia rápido de implantação do PJe 2.1 | Documentação PJe"
source: "https://docs.pje.jus.br/manuais-de-inicializacao/guia-rapido-implantacao-pje-2-1"
author:
published:
created: 2025-09-30
description: "Guia rápido para configuração da versão 2.1 do PJe. Este guia é baseado em um ambiente de instalação tradicional do PJe, com Wildfly/JBoss EAP."
tags:
  - "clippings"
---
# Guia rápido de implantação do PJe 2.1 | Documentação PJe
Available at https://docs.pje.jus.br/manuais-de-inicializacao/guia-rapido-implantacao-pje-2-1


[Pular para o conteúdo principal](https://docs.pje.jus.br/manuais-de-inicializacao/#__docusaurus_skipToContent_fallback)

## Guia rápido de implantação do PJe 2.1

Guia rápido para configuração da versão 2.1 do PJe. Este guia é baseado em um ambiente de instalação tradicional do PJe, com Wildfly/JBoss EAP.

## Apresentação

A nova arquitetura do PJe não demanda alterações na infraestrutura dos tribunais. Somente deverá ser feito deploy do artefato `.war` do PJe. A aplicação passará a se comportar como mais um serviço na nuvem de serviços do PJe, se registrando no service discovery e consumindo outros serviços através do API Gateway.

A nova solução arquitetural foi pensada de modo a trazer o menor impacto possível para a infraestrutura dos tribunais, e dessa maneira promover uma adoção mais veloz para as novas versões do sistema.

## Artefatos

Na versão 2.1 o PJe produz apenas o artefato `.war`. O.EAR da versão 2.0 está descontinuado. Os demais serviços que compõem a API do PJe serão executados em nuvem. A instalação do PJe de cada tribunal será mais um serviço dentro desta nuvem e terá acesso aos recursos compartilhados por meio do projeto pje2-gateway-service.

## Configuração do ambiente

Para que o PJe possa se conectar à nuvem de serviços é necessário configurar o sistema com algumas variáveis. Estas configurações podem ser feitas de duas maneiras diferentes: variáveis de ambiente ou variáveis do maven.

### Configurando com variáveis de ambiente (Recomendado)

Esta é a maneira mais indicada por ser mais flexível. Utilizando variáveis de ambiente podemos detectar mais facilmente eventuais inconsistências na parametrização, bem como é mais fácil a correção destas inconsistências. Este método também é o mais recomendado para ambientes executados em containeres.

| Variável | Valor | Descrição |
| --- | --- | --- |
| ENV\_PJE2\_CLOUD\_APP\_NAME | `<id_tribunal>` | Identificador do serviço PJe do respectivo tribunal, veja aqui a lista de identificadores das instalações do PJe. |
| ENV\_EUREKA\_CLIENT\_HOSTNAME | Ex: `pje.tribunal.jus.br` | Hostname externo do PJe que seja acessível para o gateway. Sem protocolo, sem contexto e sem porta. |
| ENV\_PJE2\_CLOUD\_REGISTRAR | `true` | Indica que o serviço PJe do tribunal se registrará no service discovery do CNJ. |
| ENV\_EUREKA\_SERVER\_URL | Ex.: `https://discovery.stg.cnj.cloud/eureka` | URL do service discovery. |
| ENV\_EUREKA\_CLIENT\_NONSECURE\_PORT\_ENABLED | `false` | Indica se a aplicação deverá ser acessada de maneira não segura. |
| ENV\_EUREKA\_CLIENT\_NONSECURE\_PORT | `80` | Porta através da qual a aplicação será acessada de maneira não segura. |
| ENV\_EUREKA\_CLIENT\_NONSECURE\_PORT\_ENABLED | `false` | Indica se a aplicação deverá ser acessada de maneira não segura. |
| ENV\_EUREKA\_CLIENT\_NONSECURE\_PORT | `80` | Porta através da qual a aplicação será acessada de maneira não segura. |
| ENV\_EUREKA\_CLIENT\_SECURE\_PORT\_ENABLED | `true` | Indica se a aplicação deverá ser acessada de maneira segura. |
| ENV\_EUREKA\_CLIENT\_SECURE\_PORT | `443` | Porta através da qual a aplicação será acessada de maneira segura |
| ENV\_PJE2\_CLIENTE\_URL | Ex.: `https://frontend.stg.cnj.cloud` | URL do cliente Angular. |
| ENV\_PJE2\_CLOUD\_URL\_GATEWAY | Ex.: `https://gateway.stg.cnj.cloud` | Endereço do API Gateway. |
| ENV\_PJE2\_CLOUD\_RABBIT\_PUBLISH\_MESSAGES | `true` | Indica que o PJe irá publicar mensagens no barramento de mensagens. |
| ENV\_PJE2\_CLOUD\_RABBIT\_HOST | `mq.stg.cnj.cloud` | URL do barramento de mensagens, sem protocolo e sem porta. |
| ENV\_PJE2\_CLOUD\_RABBIT\_USERNAME | Ex.: `pje-tjxy-1g` | Nome de usuário no rabbitmq para a respectiva instalação do PJe. |
| ENV\_PJE2\_CLOUD\_RABBIT\_PASSWORD | `<senha rabbitmq>` | Senha no rabbitmq para a respectiva instalação do PJe. |
| ENV\_PJE2\_CLOUD\_RABBIT\_VIRTUALHOST | `pje-stg` | Nome do virtual host do broker. |

### Configurando com variáveis do maven

Neste caso a configuração é feita no momento do build da aplicação. Ao executar o comando mvn será necessário informar as variáveis conforme segue:

```jsx
mvn clean package -P jcr-storage -P UseEhCache \
    -Dpje2.cloud.appName=<id_tribunal> \
    -Dpje2.cliente.urlCliente=https://frontend.stg.cnj.cloud
    -Deureka.serviceUrl.default=https://discovery.stg.cnj.cloud/eureka
    -Dpje2.cloud.registrar=true
    -Dpje2.cloud.rabbit.publishMessages=true
    -Dpje2.cloud.rabbit.host=mq.stg.cnj.cloud
    -Dpje2.cloud.rabbit.username=<rabbit_user>
    -Dpje2.cloud.rabbit.password=<rabbit_pass>
```

## Banco de dados

A interação do PJe com o banco de dados continua a mesma, não sendo necessária nenhuma alteração nas configurações do ambiente de dados do PJe.

## Versão do Java

Para esta nova versão do PJe é necessário utilizar Java 8.

## Balanceamento de Carga

O acesso ao PJe pode ser balanceado entre múltiplos servidores de aplicação utilizando-se um balanceador de carga, como o Apache com \[**mod\_proxy**\]\[1\].

No entanto, devido à forma como os serviços do PJe atualmente interagem entre si, é fundamental que seja implementada a persistência entre os **backends**, ou \[**sticky session**\]\[2\].

\[1\] [https://httpd.apache.org/docs/2.4/mod/mod\_proxy.html](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html)

\[2\] [https://en.wikipedia.org/wiki/Load\_balancing\_(computing)#Persistence](https://en.wikipedia.org/wiki/Load_balancing_\(computing\)#Persistence)

### Considerações Importantes

A persistência entre os **backends** deve ser implementada por meio de um **cookie** HTTP, e esse **cookie** precisa ser repassado aos **backends sem modificações.**

Isso é necessário porque os **backends** realizam requisições diretamente aos serviços hospedados na nuvem, e as requisições originadas a partir da nuvem precisam chegar aos mesmos **backends** que originaram a requisição. O PJe implementa isso encaminhando todos os **cookies** para a nuvem e de volta ao Tribunal.

A maioria dos balanceadores de carga podem ser configurados para atender a esses requisitos, porém não vêm configurados dessa forma por padrão.

Abaixo está um trecho de configuração do Apache 2.4 que implementa corretamente a persistência conforme descrito acima:

```yaml
<VirtualHost *:80 *:443>
  ServerName pje.cnj.jus.br

  # Redirect HTTP to HTTPS
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/(.*) https://%{SERVER_NAME}/$1 [R,L]

  # Enable SSL and forward the client cert data
  SSLEngine on
  SSLProtocol TLSv1 +TLSv1.1 +TLSv1.2
  SSLCipherSuite TLSv1
  SSLOptions +ExportCertData
  SSLVerifyClient optional_no_ca
  SSLVerifyDepth 10

  # SSL Certificate configuration
  SSLCertificateFile /etc/letsencrypt/live/cnj.jus.br/cert.pem
  SSLCertificateKeyFile /etc/letsencrypt/live/cnj.jus.br/privkey.pem
  SSLCertificateChainFile /etc/letsencrypt/live/cnj.jus.br/chain.pem
  SSLCACertificateFile /etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem

  ###
  ### Usando AJP
  ###
  ProxyPass / balancer://pje/ stickysession=JSESSIONID|jsessionid nofailover=On scolonpathdelim=On
  <Proxy balancer://pje/>
    BalancerMember ajp://wildfly01.cnj.jus.br:8009 keepalive=On route=wildfly01
    BalancerMember ajp://wildfly02.cnj.jus.br:8009 keepalive=On route=wildfly02
    BalancerMember ajp://wildfly03.cnj.jus.br:8009 keepalive=On route=wildfly03
  </Proxy>

  ###
  ### Usando HTTP
  ###
  RequestHeader set X-Forwarded-Proto "https"
  RequestHeader set X-Forwarded-Port "443"
  ProxyPass / balancer://pje/ stickysession=JSESSIONID|jsessionid nofailover=On scolonpathdelim=On
  ProxyPassReverse / balancer://pje/
  <Proxy balancer://pje/>
    BalancerMember http://wildfly01.cnj.jus.br:8080 keepalive=On route=wildfly01
    BalancerMember http://wildfly02.cnj.jus.br:8080 keepalive=On route=wildfly02
    BalancerMember http://wildfly03.cnj.jus.br:8080 keepalive=On route=wildfly03
  </Proxy>
</VirtualHost>
```

### Liberação de IPs da Nuvem

Alguns serviços em execução na nuvem realizam requisiões ao PJe em execução no Tribunal. Por isso é importante que os seguintes IPs possam acessar o PJe:

- Homologação: `13.57.136.174` e `13.56.208.124`;
- Produção: `18.229.68.32` e `18.228.53.117`.

## Homologação e testes

Para os tribunais usuários do PJe também é possível simular o ambiente completo da nova arquitetura. Para isso é necessário executar a pilha de aplicações que compõem a nova arquitetura. Este cenário pode ser executado através dos containers docker disponibilizada pelo CNJ. Abaixo um exemplo de um docker compose para subir a pilha de serviços de infraestrutura e frontend:

```yaml
version: "3"

services:
  discovery:
    image: registry.cnj.jus.br/pje2/pje-discovery:latest
    ports:
      - "8761:8761"
  gateway:
    image: registry.cnj.jus.br/pje2/pje-gateway:latest
    ports:
      - "8180:8180"
      - "8181:8181"
    environment:
      - EUREKA_SERVER_DEFAULT_ZONE=http://discovery:8761/eureka/
      - HOSTNAME=localhost
  frontend:
    image: registry.cnj.jus.br/pje2/pje-frontend:latest
    ports:
      - "80:80"
  rabbitmq:
    image: rabbitmq:3.7.9-management-alpine
    ports:
      - "15672:15672"
      - "5672:5672"
pje-legacy:
  image: registry.cnj.jus.br/pje2/pje-legacy:latest
  ports:
    - "8080:8080"
  env_file: ./config/pje-legacy.env
  environment:
    - ENV_EUREKA_SERVER_URL=http://discovery:8761/eureka/
    - ENV_PJE2_CLIENTE_URL=http://${DOCKER_HOST}:4200
    - ENV_PJE2_CLOUD_APP_NAME=pje-legacy
    - ENV_PJE2_CLOUD_RABBIT_HOST=rabbitmq
    - ENV_PJE2_CLOUD_RABBIT_PUBLISH_MESSAGES=true
    - ENV_PJE2_CLOUD_REGISTRAR=true
    - ENV_PJE2_CLOUD_URL_GATEWAY=http://${DOCKER_HOST}:8180
    - PJE_QUARTZ_NMDS_DB_HOST=${DOCKER_HOST}
    - PJE_QUARTZ_NMDS_DB_PORT=${POSTGRES_DB_PORT}
    - PJE_QUARTZ_NMDS_DB_NAME=${POSTGRES_DB_NAME}
    - PJE_QUARTZ_NMDS_DB_USER=${POSTGRES_DB_USER}
    - PJE_QUARTZ_NMDS_DB_PASS=${POSTGRES_DB_PASSWORD}
    - PJE_DS_DB_HOST=${POSTGRES_DB_HOST}
    - PJE_DS_DB_PORT=${POSTGRES_DB_PORT}
    - PJE_DS_DB_NAME=${POSTGRES_DB_NAME}
    - PJE_DS_DB_USER=${POSTGRES_DB_USER}
    - PJE_DS_DB_PASS=${POSTGRES_DB_PASSWORD}
    - PJE_LOG_DS_DB_HOST=${POSTGRES_DB_HOST}
    - PJE_LOG_DS_DB_PORT=${POSTGRES_DB_PORT}
    - PJE_LOG_DS_DB_NAME=${POSTGRES_DB_LOG_NAME}
    - PJE_LOG_DS_DB_USER=${POSTGRES_DB_USER}
    - PJE_LOG_DS_DB_PASS=${POSTGRES_DB_PASSWORD}
    - PJE_DESCANSO_BIN_DS_DB_HOST=${POSTGRES_DB_HOST}
    - PJE_DESCANSO_BIN_DS_DB_PORT=${POSTGRES_DB_PORT}
    - PJE_DESCANSO_BIN_DS_DB_NAME=${POSTGRES_DB_BIN_NAME}
    - PJE_DESCANSO_BIN_DS_DB_USER=${POSTGRES_DB_USER}
    - PJE_DESCANSO_BIN_DS_DB_PASS=${POSTGRES_DB_PASSWORD}
    - PJE_QUARTZ_DS_DB_HOST=${POSTGRES_DB_HOST}
    - PJE_QUARTZ_DS_DB_PORT=${POSTGRES_DB_PORT}
    - PJE_QUARTZ_DS_DB_NAME=${POSTGRES_DB_NAME}
    - PJE_QUARTZ_DS_DB_USER=${POSTGRES_DB_USER}
    - PJE_QUARTZ_DS_DB_PASS=${POSTGRES_DB_PASSWORD}
```

Este compose irá executar os serviços:

- pje-discovery
- pje-gateway
- pje-frontend
- rabbitmq
- pje-legacy

Importante: lembre-se criar o arquivo pje-legacy.env e configurar corretamente as variaveis de ambiente do Docker-Compose conforme segue:

```yaml
DOCKER_HOST=172.20.18.41
POSTGRES_DB_HOST=172.20.18.41
POSTGRES_DB_PORT=5432
POSTGRES_DB_NAME=pje
POSTGRES_DB_LOG_NAME=pje-log
POSTGRES_DB_BIN_NAME=pje-bin
POSTGRES_DB_USER=postgres
POSTGRES_DB_PASSWORD=P123456
```

Após a execução da pilha deve-se proceder com a subida do serviço **pje-legacy** conforme descrito nos tópicos anteriores.

## Anexo A: Lista de identificadores das instalações do PJe

| Tribunal | Identificador |
| --- | --- |
| CNJ | pje-cnj |
|  | pje-corregedorias |
| TJBA | pje-tjba-1g |
|  | pje-tjba-2g |
| TJCE | pje-tjce-1g |
|  | pje-tjce-2g |
| TJDFT | pje-tjdft-1g |
|  | pje-tjdft-2g |
| TJES | pje-tjes-1g |
|  | pje-tjes-2g |
| TJMA | pje-tjma-1g |
|  | pje-tjma-2g |
| TJMG | pje-tjmg-1g |
|  | pje-tjmg-2g |
| TJMT | pje-tjmt-1g |
|  | pje-tjmt-2g |
| TJPA | pje-tjpa-1g |
|  | pje-tjpa-2g |
| TJPB | pje-tjpb-1g |
|  | pje-tjpb-2g |
| TJPE | pje-tjpe-1g |
|  | pje-tjpe-2g |
| TJPI | pje-tjpi-1g |
|  | pje-tjpi-2g |
| TJRJ | pje-tjrj-1g |
|  | pje-tjrj-2g |
| TJRN | pje-tjrn-1g |
|  | pje-tjrn-2g |
| TJRO | pje-tjro-1g |
|  | pje-tjro-2g |
| TJRR | pje-tjrr-1g |
|  | pje-tjrr-2g |
| TRF 1ª Região | pje-trf1-1g |
|  | pje-trf1-2g |
| TRF 3ª Região | pje-trf3-1g |
|  | pje-trf3-2g |
| TRF 5ª Região | pje-trf5-1g |
|  | pje-trf5-2g |
| TSE | pje-tse |