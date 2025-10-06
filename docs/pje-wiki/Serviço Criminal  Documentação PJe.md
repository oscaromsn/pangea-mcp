---
title: "Serviço Criminal | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/servico-criminal"
author:
published:
created: 2025-09-30
description: "Início rápido"
tags:
  - "clippings"
---
# Serviço Criminal | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/servico-criminal


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Serviço Criminal

## Início rápido

```jsx
Restaurar base de dados limpapsql -U postgres -h localhost -d criminal < "./src/main/resources/db/base/criminalV1.sql"
```
```jsx
Clonar o repositóriogit clone git@git.cnj.jus.br:pje2/pje2-servicos/criminal.git
```
```jsx
Compilar o projeto usando mavenmvn clean package
```
```jsx
Executar a aplicaçãojava -jar target/crimnal*.jar
```

## Tecnologias empregadas

O serviço criminal foi construído com *SpringBoot 2*. Este serviço fornece *API* para manipulação e recuperação de seus recursos utilizando *REST*. Possui banco de dados relacional com parte das informações armazenadas em conceito *NoSQL*.

Utiliza o broker de mensagens *RabbitMQ* para consumir mensagens da exchange do PJe `pje.exchange`.

### Linguagem de programação

Java versão 8.

### Framework

SpringBoot 2.

### Armazenamneto dos dados

Banco relacional *PostgreSQL*. Parte das informação são amrazenada em *JSONB*.

### Outros temas

Os logs da aplicação podem ser enviados à um serviço *REDIS* para que seja consumido pelo *Logstash* e indexado no *ElasticSearch*.

Os logs de auditoria da aplicação estão sendo armazenados na tecnologia *Envers*. Possui demanda para migração deste método de auditoria, de modo que os logs sejam indexados no *ElasticSearch*.

## Visão arquitetural

**Arquitetura do serviço criminal**

![Imagem da arquitetura do serviço criminal](https://docs.pje.jus.br/assets/images/arq-criminal-4b8d124aca65ffc38623c77ee489b06e.png)

## Dependências

| Serviço | Tipo | Descrição |
| --- | --- | --- |
| PJeLegacy | Autenticação e autorização | Depende do PJe para validar se o usuário está autenticado e se possui os papeis necessários para a visualização dos recursos. |
| PJeLegacy | Permissão negocial | Depende do PJe para validar se um usuário tem permissão para visualizar determinado processo criminal. |
| RabbitMQ | Mensagens | Depende do *broker* de mensagens para receber atualizações ou notificações de outros serviços. |

## Configuração da aplicação

O serviço criminal pode ser configurado de acordo com as seguintes variáveis de ambiente:

| Variável | Valor padrão | Descrição |
| --- | --- | --- |
| CRIMINAL\_PORT | `8480` | Porta do serviço. |
| CRIMINAL\_APP\_NAME | `criminal` | Nome do serviço. |
| CRIMINAL\_DB\_URL | `jdbc:postgresql://localhost:5432/criminal?stringtype=unspecified` | Url do banco de dados do serviço. |
| CRIMINAL\_DB\_USER | `postgres` | Usuário do banco de dados. |
| CRIMINAL\_DB\_PASSWORD | `P123456` | Senha de usuário do banco de dados. |
| CRIMINAL\_RABBITMQ\_HOST | `localhost` | Host do broker de mensagens. |
| CRIMINAL\_RABBIT\_USERNAME | `criminal` | Usuário do broker de mensagens. |
| CRIMINAL\_RABBIT\_PASSWORD | `criminal` | Senha de usuário do broker de mensagens. |
| CRIMINAL\_RABBIT\_VHOST | `/` | Virtual *host* do *broker* de mensagens. |
| CRIMINAL\_RABBIT\_CONNECTION\_TIMEOUT | `500` | Tempo para timout de tentativa de conexão com o broker de mensagens em milisegundos. |
| EUREKA\_SERVER\_DEFAULT\_ZONE | [`http://localhost:8761/eureka`](http://localhost:8761/eureka) | Url do *service discovery*. |
| EUREKA\_CLIENT\_ENABLED | `true` | Indicativo de que o serviço deve ou não se registrar no service discovery. |
| CRIMINAL\_MANAGEMENT\_PORT | `8481` | Porta de monitoramento do serviço. |

## Configuração do armazenamento de dados

Este serviço utiliza banco de dados *PostgreSQL* versão 9.6 ou superior. A base de dados deve ter encoding *UTF-8*. Um *script* de base limpa pode ser encontrado na pasta:

```jsx
./src/main/resources/db/base/
```

## Papeis e/ou recursos

Não contém.

## Interações com o barramento de mensagens

O serviço criminal interage com o barramento de mensagens consumindo mensagens de outros serviços para sincronizar seus dados.

### Filas que escuta

O serviço criminal consome mensagens da fila `pje.criminal`.

São direcionadas para esta fila mensagens que cheguem à *exchange* `pje.exchange` com os *routing keys* `*.\*.*.ProcessoParte.\*` e `*.\*.*.ProcessoEvento.\*`.

### Mensagens que produz

Este serviço não envia mensagens ao broker de mensagens.

## Interações com outros serviços

O serviço criminal realiza dois tipos de interações com o serviço `pje-legacy`.

### Autenticação de usuário

A autenticação para acesso as funcionalidades do serviço é realizada no serviço `pje-legacy`. Ao acessar um *endpoint* do serviço criminal é executada uma requisição ao `pje-legacy` passando o *jsessionid* do usuário para validação de autenticação do usuário.

### Validação de acesso ao processo criminal

Quando um processo criminal é acessado, o serviço criminal faz consulta ao `pje-legacy` para saber se o usuário tem acesso àquele processo.

## Eventos de webhook

Não disponível.

## Consultas diretas ao serviço

De acordo com a arquitetura construída para o serviço, o serviço `pje-legacy` consome sua *API* para fazer alterações e recuperar informações, quando isso acontece o serviço criminal faz uma interação com o serviço `pje-legacy` para certificar-se de que o usuário possui permissão para executar a operação.

No entanto, muitos tribunais precisam ter acesso direto à *API* do serviço criminal para gerar relatórios e estatísticas. Para isso, foi criada uma possibilidade de acesso ao serviço sem interação com o serviço do `pje-legacy`, assim, a ferramenta que fica responsável pela autenticação e autorização do usuário é o serviço de *SSO*.

### Cadastramento de usuários

Atenção esse cadastramento será feito em nome do próprio tribunal que se responsabilizará pelo sigilo das informações acessadas.

Essa possibilidade de consulta direta ao serviço criminal é restrita aos usuários explicitamente autorizados no serviço de *SSO* com as *roles*:

- **ROLE\_sistemaProcessual**
- **ROLE\_visualizaInformacaoCriminal**

Para proceder ao cadastramento no serviço SSO para a consulta direta, solicite a autorização por meio da abertura de chamado em [https://suporteti.cnj.jus.br/](https://suporteti.cnj.jus.br/).

Após esse cadastramento o usuário receberá também as informações de:

- **CLIENT\_SECRET** - chave do serviço criminal no serviço SSO;
- **USERNAME** - nome de usuário para acesso direto ao serviço criminal
- **PASS** - senha cadastrada desse usuário
- **URL serviço SSO** - para fazer a requisição do token de acesso
- **URL serviço criminal** - para fazer a requisição direta ao serviço

### Endpoints disponíveis no serviço criminal

Depois de recebidas as informações de acesso, verifique a *API* disponível no serviço criminal para acesso:

- [https://gateway.stg.cloud.pje.jus.br/criminal/v2/api-docs?group=criminal-v1](https://gateway.stg.cloud.pje.jus.br/criminal/v2/api-docs?group=criminal-v1);
- [https://gateway.stg.cloud.pje.jus.br/criminal/v2/api-docs?group=criminal-v2](https://gateway.stg.cloud.pje.jus.br/criminal/v2/api-docs?group=criminal-v2).
- Copie e cole o conteúdo dessas páginas em um visualizador de *API swagger* como: [https://editor.swagger.io/](https://editor.swagger.io/) e identifique o *endpoint* responsável pela informação buscada.

### Acessando o serviço criminal

Utilize uma ferramenta como o [Postman](https://www.postman.com/) ou o comando `curl` para fazer a requisição.

Exemplo:

#### Solicitando o token de acesso no SSO

Este *token* de acesso tem a validade padrão de 5 minutos.

#### Solicitando informações diretamente no serviço criminal

- Deve-se agora repassar o token do SSO para acessar o serviço;
- Identifique também qual é o **APP\_NAME** do tribunal que se está buscando informações no serviço criminal, exemplos: `pje-tjmg-1g`, `pje-trf3-2g`, `pje-tjpb-1g`:

## Release notes

[Notas da versão](https://docs.pje.jus.br/servicos-negociais/servico-criminal/notas-da-versao)