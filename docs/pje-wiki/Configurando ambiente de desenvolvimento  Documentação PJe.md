---
title: "Configurando ambiente de desenvolvimento | Documentação PJe"
source: "https://docs.pje.jus.br/manuais-de-inicializacao/configurando-ambiente-desenvolvimento"
author:
published:
created: 2025-09-30
description: "Conhecimentos necessários e desejáveis"
tags:
  - "clippings"
---
# Configurando ambiente de desenvolvimento | Documentação PJe
Available at https://docs.pje.jus.br/manuais-de-inicializacao/configurando-ambiente-desenvolvimento


[Pular para o conteúdo principal](https://docs.pje.jus.br/manuais-de-inicializacao/#__docusaurus_skipToContent_fallback)

## Configurando ambiente de desenvolvimento

## Conhecimentos necessários e desejáveis

#### Necessários

- Linguagem de programação Java;
- Persistência com JPA e Hibernate;
- Linguagem SQL do banco de dados PostgreSQL;
- JSF; (PJE1)
- Angular4+; (PJE2)
- SpringBoot, SpringCloud; (PJE2)
- JavaScript;
- Wildfly 9.0.2;
- Uso da ferramenta Eclipse.

#### Desejáveis

- Uso da ferramenta Maven;
- Uso das ferramentas Git e GitLab;
- Padrões de projeto (design patterns);
- JBPM;
- Uso da ferramenta de controle de demandas JIRA;
- Ter tido algum contato de uso com o sistema PJe.

## Principais ferramentas

Jira – gerenciador de desenvolvimento de demandas [https://www.cnj.jus.br/jira/projects/PJEII/issues](https://www.cnj.jus.br/jira/projects/PJEII/issues);

Git – sistema de controle de versões do código [http://git.cnj.jus.br/pje/pje/merge\_requests](http://git.cnj.jus.br/pje/pje/merge_requests);

Jenkins – gerenciador de integração;

Rocketchat – ferramenta de comunicaçãoda comunidade [https://rocketchat.cloud.pje.jus.br](https://rocketchat.cloud.pje.jus.br/);

Wildfly - servidor de aplicação [http://wildfly.org/news/2015/10/26/WildFly902-Released](http://wildfly.org/news/2015/10/26/WildFly902-Released)\].

## Configurando o ambiente de desenvolvimento PJeLegacy com Eclipse

### Pré-requisitos mínimos do sistema

- Java JDK 8 (Oracle ou OpenJDK)
- Eclipse IDE
- PostgreSQL 9.4 ou superior
- Apache Maven 3
- Wildfly 9.0.2 com mojarra 1.2
- Docker 18.09 ou superior
- Node 8 ou superior
- NPM 6 ou superior
- Git client

### Configurações do Maven

No diretório raiz do usuário será necessário alterar/criar o arquivo settings.xml que se encontrar na pasta.m2.

```jsx
~/.m2/settings.xml$ cd ~/.m2
$ touch settings.xml
```

Incluir o seguinte conteúdo no arquivo settings.xml

```jsx
<?xml version="1.0" encoding="UTF-8"?>
<settings xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd"
xmlns="http://maven.apache.org/SETTINGS/1.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <servers>
    <server>
      <id>nexus</id>
      <username>developer</username>
      <password>123456</password>
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

### Configurações do SGBD Postgresql

#### Configurando o arquivo postgresql.conf

É necessário aumentar o parâmetro max\_prepared\_transactions do arquivo de configuração do postgres postgresql.conf:

```jsx
/etc/postgresql/14/main/postgresql.conf$ locate postgresql.conf
$ cd /etc/postgresql/9.1/main
$ sudo gedit postgresql.conf
```

Colocar um valor maior que 20.

#### Criando um banco de dados novo

Criar um novo banco com os parâmetros conforme abaixo:

![Imagem ilustrando a criação de um novo banco de dados 1](https://docs.pje.jus.br/assets/images/postgres_1-798acdfe9c8879fb01d3042b10440d6a.png)

![Imagem ilustrando a criação de um novo banco de dados 2](https://docs.pje.jus.br/assets/images/postgres_2-6f35f4d006581d5b9b7a29022d5802c7.png)

#### Restaurar um dump no novo banco de dados criado

```jsx
$ psql -U postgres -h localhost -d pje < "~/Dumps/dump.sql"
```

ou

```jsx
$ pg_restore -U postgres -h localhost -v -Fc -d nome_base arquivo.dump
```

### Configurações do servidor de aplicação Wildfly

O servidor Wildfly a ser utilizado deve conter o módulo Mojarra 1.2.

Com o intuito de facilitar a configuração do servidor wildfly ou Jboss EAP a partir do zero para o PJe 2.x, copie o arquivo [https://cnj-pje-programs.s3-sa-east-1.amazonaws.com/config\_pje\_wildfly\_jboss.zip](https://cnj-pje-programs.s3-sa-east-1.amazonaws.com/config_pje_wildfly_jboss.zip) para um diretório, descompacte-o e execute o interface da linha de comando do jboss/wildfly (jboss-cli.sh) a partir do diretório descompactado criado. O motivo para executar dentro do diretório criado se deve ao fato que dentro do arquivo compactado existem 2(duas) adições ao subsystem module do wildfly/jboss a saber: 1) o driver jdbc do postgres e 2) mojarra 1.2. Desta forma, esses dois arquivos devem estar no mesmo diretório do arquivo pje-wildfly.cli!

Execute o comando:

```jsx
<JBOSS_HOME>/bin/jboss-cli.bat -c --file=pje-wildfly.cli
```

Se o comando executou com sucesso, deverá aparecer a seguinte mensagem:

Mais alguns pontos a observar:

O arquivo de standalone-full.xml deve ser utilizado para subir o servidor de aplicação.

```jsx
standalone-full.xml<datasource jndi-name="java:/pjeQuartzNMDS" pool-name="pjeQuartzNMDS" enabled="true" use-java-context="true">
    <connection-url>jdbc:postgresql://localhost:5432/pje</connection-url>
    <driver>postgres</driver>
    <security>
        <user-name>postgres</user-name>
        <password>P123456</password>
    </security>
</datasource>
<xa-datasource jndi-name="java:/pjeDS" pool-name="pjeDS" enabled="true" use-java-context="true" use-ccm="true">
    <xa-datasource-property name="ServerName">
        localhost
    </xa-datasource-property>
    <xa-datasource-property name="PortNumber">
        5432
    </xa-datasource-property>
    <xa-datasource-property name="DatabaseName">
        pje
    </xa-datasource-property>
    <xa-datasource-property name="prepareThreshold">
        0
    </xa-datasource-property>
    <driver>postgresql</driver>
    <new-connection-sql>set search_path=client,core,jt,criminal,public,acl</new-connection-sql>
    <xa-pool>
        <min-pool-size>5</min-pool-size>
        <initial-pool-size>5</initial-pool-size>
        <max-pool-size>100</max-pool-size>
        <prefill>true</prefill>
    </xa-pool>
    <security>
        <user-name>postgres</user-name>
        <password>P123456</password>
    </security>
    <validation>
        <valid-connection-checker class-name="org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker"/>
        <exception-sorter class-name="org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter"/>
    </validation>
    <statement>
        <prepared-statement-cache-size>0</prepared-statement-cache-size>
        <share-prepared-statements>false</share-prepared-statements>
    </statement>
</xa-datasource>
<xa-datasource jndi-name="java:/pjeLogDS" pool-name="pjeLogDS" enabled="true" use-java-context="true">
    <xa-datasource-property name="ServerName">
        localhost
    </xa-datasource-property>
    <xa-datasource-property name="PortNumber">
        5432
    </xa-datasource-property>
    <xa-datasource-property name="DatabaseName">
        pje_log
    </xa-datasource-property>
    <driver>postgresql</driver>
    <xa-pool>
        <min-pool-size>5</min-pool-size>
        <initial-pool-size>5</initial-pool-size>
        <max-pool-size>100</max-pool-size>
        <prefill>true</prefill>
    </xa-pool>
    <security>
        <user-name>postgres</user-name>
        <password>P123456</password>
    </security>
    <validation>
        <valid-connection-checker class-name="org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker"/>
        <exception-sorter class-name="org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter"/>
    </validation>
</xa-datasource>
<xa-datasource jndi-name="java:/PJE_DESCANSO_BIN_DS" pool-name="pjeBinDs" enabled="true" use-java-context="true">
    <xa-datasource-property name="ServerName">
        localhost
    </xa-datasource-property>
    <xa-datasource-property name="PortNumber">
        5432
    </xa-datasource-property>
    <xa-datasource-property name="DatabaseName">
        pje_bin
    </xa-datasource-property>
    <driver>postgresql</driver>
    <new-connection-sql>set search_path=client,core,public</new-connection-sql>
    <xa-pool>
        <min-pool-size>5</min-pool-size>
        <initial-pool-size>5</initial-pool-size>
        <max-pool-size>100</max-pool-size>
        <prefill>true</prefill>
    </xa-pool>
    <security>
        <user-name>postgres</user-name>
        <password>P123456</password>
    </security>
    <validation>
        <valid-connection-checker class-name="org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker"/>
        <exception-sorter class-name="org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter"/>
    </validation>
</xa-datasource>
<xa-datasource jndi-name="java:/pjeQuartzDS" pool-name="pjeQuartzDS" enabled="true" use-java-context="true" use-ccm="true">
    <xa-datasource-property name="DatabaseName">
        pje
    </xa-datasource-property>
    <xa-datasource-property name="ServerName">
        localhost
    </xa-datasource-property>
    <xa-datasource-property name="PortNumber">
        5432
    </xa-datasource-property>
    <driver>postgresql</driver>
    <xa-pool>
        <min-pool-size>1</min-pool-size>
        <max-pool-size>10</max-pool-size>
        <prefill>true</prefill>
    </xa-pool>
    <security>
        <user-name>postgres</user-name>
        <password>P123456</password>
    </security>
</xa-datasource>
```

### Alterações no arquivo standalone-full.xml

Habilitar o wildfly para aceitar conexões externas (equivalente ao -b 0.0.0.0 do jboss 5.1). Incluir entre o final da seção `</extensions>` e o início da seção `<management>` - linhas 33 a 36 aproximadamente.

```jsx
<system-properties>
  <property name="jboss.bind.address" value="0.0.0.0" />
  <property name="jboss.bind.address.management" value="0.0.0.0" />
</system-properties>
```

Alterar o subsystem weld para incluir a cláusula require-bean-descriptor.

**Antes**:

```jsx
<subsystem xmlns="urn:jboss:domain:weld:2.0" />
```

**Depois**:

```jsx
<subsystem xmlns="urn:jboss:domain:weld:2.0" require-bean-descriptor="true" />
```

Criação das entradas dos drivers jdbc para o jboss Dentro do arquivo standalone.xml, existe uma seção chamada `<drivers>`, que fica dentro da seção `<datasources>`, que pertence ao subsystem `<subsystem xmlns="urn:jboss:domain:datasources:3.0">` e deve ser configurada em dois passos. O primeiro é a configuração do driver e o segundo, o datasource:

```jsx
<driver name="postgres_XA" module="org.postgresql">
    <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
</driver>
<driver name="postgres" module="org.postgresql">
    <datasource-class>org.postgresql.Driver</datasource-class>
</driver>
```

Segue um exemplo como ficaria a seção drivers completa:

```jsx
<drivers>
  <driver name="h2" module="com.h2database.h2">
    <xa-datasource-class>org.h2.jdbcx.JdbcDataSource</xa-datasource-class>
  </driver>
  <driver name="postgres_XA" module="org.postgresql">
    <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
  </driver>
  <driver name="postgres" module="org.postgresql">
    <datasource-class>org.postgresql.Driver</datasource-class>
  </driver>
</drivers>
```

Para testar se tudo está correto, ao iniciar o wildfly, no arquivo de log, deverão aparecer as entradas para os dois drivers criados no arquivo standalone.xml:

```jsx
INFO  [org.jboss.as.connector.subsystems.datasources] (ServerService Thread Pool -- 36) WFLYJCA0005: Deploying non-JDBC-compliant driver class org.postgresql.Driver (version 9.4)
INFO  [org.jboss.as.connector.subsystems.datasources] (ServerService Thread Pool -- 36) WFLYJCA0005: Deploying non-JDBC-compliant driver class org.postgresql.Driver (version 9.4)
INFO  [org.jboss.as.connector.deployers.jdbc] (MSC service thread 1-8) WFLYJCA0018: Started Driver service with driver-name = postgres
INFO  [org.jboss.as.connector.deployers.jdbc] (MSC service thread 1-2) WFLYJCA0018: Started Driver service with driver-name = postgres_XA
```

### Clonando o repositório do git

O pje-legacy encontra-se no repositório do [PJe](https://git.cnj.jus.br/pje/pje).

Para clonar o repositório, execute o comando abaixo:

```jsx
$ git clone git@git.cnj.jus.br:pje/pje.git
```

### JCR Storage

JCR Storage é responsável pelo armazenamento dos binários utilizados pelo PJe.

#### Clonando o repositório do git

O jcr-storage encontra-se no repositório do [JCR Storage](https://git.cnj.jus.br/utilitarios/jcr-storage).

Para clonar o repositório, execute o comando abaixo:

```jsx
$ git clone git@git.cnj.jus.br:utilitarios/jcr-storage.git
```

#### Gerando jar e executando JCR

Após baixar o projeto e com maven devidamente configurado, execute:

```jsx
$ mvn clean package -DskipTests=true
```

Feito isso será gerado o arquivo jcr-storage-server-exec.jar na pasta target do server. Conceda permissão de execução e rode esse jar passando os parâmetros:

```jsx
$ java -jar jcr-storage-server-exec.jar -httpPort 9000 -Dbr.jus.cnj.jcr.serverProperties=D:<HOME_DIR>/src/main/resources/server.properties
```

#### Configurações do JCR Storage

Próximo passo é criar um arquivo jcr-storage.properties num diretório do seu ambiente, por exemplo, `D:\\jcr-storage.properties`, com seguinte conteúdo:

```jsx
jcr.username=admin
jcr.password=admin
jcr.url=http://localhost:9000/storage/documents
jcr.chunkSize=800000
jcr.hostMaxConn=10000
```

### Configuração do frontend

O cliente web do Pje (PJE2-WEB) encontra-se no repositório do [PJe2-WEB](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web).

Para clonar o repositório, execute:

```jsx
$ git clone git@git.cnj.jus.br:pje2/pje2-clientes/pje2-web.git
```

Feito isso, rode o comando do npm para inicializar a aplicação na porta 4200:

```jsx
ng serve
```

### Configuração do Eureka e Gateway

O Eureka (PJe-Discovery) e Gateway (PJe-Gateway) são 2 componentes que podem ser instânciados através do Docker localmente.

Para isso é preciso fazer o login no registry do CNJ:

Crie um arquivo docker-compose.yml:

```jsx
version: "3"
services:
  discovery:
    image: registry.cnj.jus.br/pje2/pje-discovery:latest
    ports:
    - '8761:8761'
  gateway:
    image: registry.cnj.jus.br/pje2/pje-gateway:latest
    ports:
      - '8180:8180'
      - '8181:8181'
    environment:
      - EUREKA_SERVER_DEFAULT_ZONE=http://discovery:8761/eureka/
      - HOSTNAME=localhost
```

Próximo passo, é executar o docker compose no diretório do arquivo yml criado:

```jsx
$ docker-compose up -d
```

### Configuração do Eclipse

#### Plugins

##### Filesync

Instalar o plugin FileSync para o eclipse:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/filesync1-579234945621216fc757ff51e20e9991.png)

Após a instalação, clicar com o botão direito no projeto pje-web, selecionar "Properties" e localizar o item “File synchronization”. Clicar em “Add Folder” e adicionar a pasta `/src/main/webapp`:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/filesync2-aed470d730aca4d453b433fde41c84f6.png)

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/filesync3-e0778780881197d27a6d73396babde6a.png)

Abrir a pasta incluída, selecionar “Excluded” e clicar em “Edit”:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/filesync4-675398ecea535c26600b07c0e312be6f.png)

Clicar no botão “Add Multiple” do “Exclusion patterns”, selecionar todos os arquivos do WEB-INF exceto a pasta XHTML e clicar em “OK”:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/filesync5-0d5c5261fa0b6582f41c43d7eecf281b.png)

Informar em "Default target folder" o caminho do.war:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/filesync6-8fdd27cae60f7749f1f557db21c36f07.png)

##### JbossTools

Instalar o plugins JBoss Toos para o eclipse. Clique em Help > Eclipse Marketplace:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/jboss_tools1-a8cc63714bce27e3b60a46c547af0ddf.png)

Digite Jboss Tools no campo Find e clique em Install.

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/jboss_tools2-bb3d8ec1d55b85848911fccb39f70a91.png)

Prossiga com a instalação clicando em confirmar:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/jboss_tools3-9c4b141a9379dc1a4b2b07833fd0ca70.png)

Após o restart do Eclipse, o ícone do JBoss Tools aparecerá em Help > About Eclipse IDE:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/jboss_tools4-e7ef67065cbfdd7ad33c455403a73572.png)

##### SonarLint

SonarLint auxilia o desenvolvedor a detectar e corrigir problemas no código enquanto codifica.

Como instalar: No Eclipse, clique em Help → Eclipse Marketplace. Na aba Search digite SonarLint e pressione Enter. Clique em Install para prosseguir com o processo de instalação.

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/sonarlint1-f594e7721d55c4f4ef18fa3af600a6ec.png)

- Durante a codificação o usuário poderá solicitar uma análise do código produzido. Clique com o botão direito do mouse sobre o projeto e selecione **SonarLint → Analyse changed files**
- Existe também a possíbilidade de se realizar um bind (vínculo) com o SonarQube do CNJ. Clique com o botão direito do mouse sobre o projeto e selecione **SonarLint → Bind to SonarQube or SonarCloud**. Essa associação permite que as mesmas regras aplicadas ao projeto durante a análise pelo SonarQube estejam presentes no Eclipse.

##### Flyway

No projeto pje-comum, existe um diretório chamado migrations onde estão os scripts de migração do banco do Pje para versão corrente do Pje.

Para que configurar o flyway no Eclipse, abra o pom.xml desse projeto e clique no menu Run > Run Configurations, selecione Maven Build e clique em New launch configuration:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/flyway1-0f6915caae673e5eb666323706d900dc.png)

Ativar o profile do flyway no arquivo settings.xml:

```jsx
<activeProfiles>
  <activeProfile>artifactory</activeProfile>
  <activeProfile>pje-descanso</activeProfile>
</activeProfiles>
```

Após esses dois passos, ao clicar em run, deverão aparecer as seguintes informações no console:

```jsx
---
[INFO] ------------------------------------------------------------------------
[INFO] Building pje-comum 2.1.1.6-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO] --- flyway-maven-plugin:2.2.1:migrate (default-cli) @ pje-comum ---
[INFO] Current version of schema "public": 2.1.1.4.001
[INFO] Successfully applied 56 migrations to schema "public" (execution time 00:12.485s).
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
---
```

##### Wildfly

Após a instalação do JBoss Tools, na aba Servers, clique com botão direito e adicione um novo server:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/wildfly_1-7b5c5d5df1c9546d441da4a0e507bfad.png)

Selecione o Wildfly 9.X:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/wildfly_2-ecdc08a1323066347f8b40bf5fa1d8dd.png)

Selecione o Home Directory do Wildfly localmente:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/wildfly_3-85e59b29aaa12c42ba58a15125c55480.png)

Clicar com botão direito e adicionar o pje-web para Wildfly:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/wildfly_4-bcd9d02cdecfb2b19fac7ac59ae677c0.png)

Ao clicar 2 vezes em cima do Server Wildfly, será exibido uma tela de Overview:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/wildfly_5-b682d4977c796d4a735053096f3bec1a.png)

Clique em Open Launch Configuration:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/wildfly_6-7f2a56c0cba05fdf7e01b36afc9887f4.png)

Altere/inclua os seguintes argumentos na opção VM arguments:

- **Xms**: 1024 ou mais;
- **Xmx**: 1500 ou mais;
- – **noverify**: flag responsável por evitar verificaçãod o bytecode gerado;
- – **Dpje.producao=false**: flag responsável de indicação do ambiente;
- \- **Dbr.jus.cnj.pje.jcr-storage.configuration** = `<HOME_DIR>/jcr-storage.properties`: arquivo de configuração do JCR Storage.

Ainda na janela de Open Launch Configuration, clique na aba Environment e adicione a variável `ENV_PJE2_CLIENTE_URL=http://localhost:4200`

Altere a opção activeByDefault para true no arquivo pom.xml no projeto pje-web, habilitando o profile do jcr-storage:

```jsx
<profile>
  <id>jcr-storage</id>
  <activation>
    <activeByDefault>true</activeByDefault>
  </activation>
  <dependencies>
    <dependency>
      <groupId>br.jus.cnj.pje</groupId>
      <artifactId>jcr-storage-client</artifactId>
    </dependency>
  </dependencies>
</profile>
```

Próximo passo, é iniciar o Wildfly:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/wildfly_7-6286076f7709dbc89e4573c14b30c6c5.png)

Dando tudo certo, ao acessar no browser o endereço a página inicial do [PJe](http://localhost:8080/pje), deve ser exibida a página de login:

![Imagem plugin filesync](https://docs.pje.jus.br/assets/images/pje_login_1-08be4420b16ee47e15dc241609604714.png)