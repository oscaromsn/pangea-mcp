---
title: Serviço SSO - PJe-KC | Documentação PJe
source: https://docs.pje.jus.br/servicos-negociais/servico-sso-pje-kc
author:
  - "[[​]]"
published:
created: 2025-09-30
description: Introdução
tags:
  - clippings
modified: 2025-10-01T07:44:27-03:00
---
# Serviço SSO - PJe-KC | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/servico-sso-pje-kc

[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Serviço SSO - PJe-KC

## Introdução

O modelo arquitetural baseado em microsserviços renova o panorama de possibilidades de melhorias para o PJe. Este tipo de abordagem permite a compartimentação de um grande sistema em blocos menores, cada qual sendo responsável por um contexto bem definido. A partir dessa sistemática podemos ter times menores trabalhando paralelamente em diferentes funcionalidades, sem que haja interferência entre as frentes de trabalho. Blocos de software menores possibilitam entregas mais rápidas, menor complexidade, flexibilidade nas tecnologias adotadas e uma entrega facilitada dos requisitos de escalabilidade.

A adoção de tal modelo traz também um ambiente com suas complexidades peculiares, entre as quais podemos destacar a necessidade de mecanismos de autenticação e autorização. Neste cenário o grande desafio reside em entregar um mecanismo seguro, flexível e eficiente, que seja capaz de abarcar todos os serviços componentes da arquitetura.

Analisando particularmente o cenário do Pje e seu processo de migração para ambiente de microsserviços, é necessário ainda contar com a realidade do monolítico legado. O Pje monolítico possui implementação própria dos recursos de autenticação e autorização, utilizando o ferramental do framework JbossSeam. Cada instalação do monolítico conta com sua base de usuários e permissões. As instâncias do legado são executadas em modo standalone, de modo que as sessões dos usuário são armazenadas em seus nós originários, criando um contexto statefull, onde as requisições devem ser respondidas pelo nó onde o usuário se autenticou inicialmente.

Essa realidade aumenta a complexidade de implementação de um serviço único e abrangente, que abarque todo o ecossistema de microsserviços da plataforma PJe.

## Cenário Atual

A infraestrutura básica de plataforma Pje já está em produção. A plataforma já conta, inclusive, com alguns microserviços negociais, os quais já estão atendendo a alguns tribunais em contexto nacional. Para tornar este cenário possível foi necessário estabelecer uma solução para a ausência do serviço de SSO nacional.

Tomando como base de análise o caso específico de serviço criminal, percebemos a necessidade de identificação do usuário antes da execução das operações de acesso aos recursos do serviço. Ao receber uma requisição o serviço precisa identificar que está realizando a operação. No caso de haver disponível um serviço de SSO baseado e Oauth a interação poderia ser resolvida utilizando implict flow ou authorization code flow. Como o monolítico não implementa o padrão Oauth é necessário prover solução que se adeque a realidade do legado.

Neste sentido, ao receber uma requisição protegida, o serviço criminal, antes de processá-la, faz uma requisição ao legado do usuário que executou a ação. Essa chamada tem o objetivo de descobrir a identidade e permissões do usuário. A identificação do usuário é realizada através do encaminhamento do cookie de persistência da sessão na origem do legado, no caso o cookie jsessionid.

Este tipo de abordagem, apesar de ser uma solução viável, causa um nível de acoplamento que traz repercussões inclusive aos requisitos não funcionais. A necessidade de chamada do legado provoca overhead no tempo de resposta do serviço criminal, diminuindo a qualidade do serviço. Junta-se a isso o contexto statefull do pje-legacy que submete as equipes de infraestrutura dos tribunais a configurarem os balanceadores para que as requisições dos serviços cheguem ao nó de origem da sessão do usuário.

## Proposta

Desenvolver solução de SSO a ser utilizada por todos os legados e serviços da plataforma PJe. A solução deve utilizar padrões OAuth2 provendo mecanismos seguros e flexíveis de autenticação e autorização.

Deverá ser utilizada solução pronta com a ferramenta Keycloak. A solução deverá ser disponibilizada através da plataforma de serviços do PJe, na forma de um serviço de infraestrutura da plataforma.

Os requisitos funcionais e não funcionais relacionados ao acesso do Pje legado devem ser mantidos, sem ônus às instalações dos tribunais. Deverá ser implementada autenticação com certificado utilizando a solução PJe Office.

Não deverão ser necessárias configurações de novos artefatos de infraestrutura nos tribunais usuários do PJe. Todas as configurações necessárias serão efetuadas através de variáveis de ambiente a serem documentadas.

Inicialmente os dados de usuário permanecerão sob o controle do PJe, e o serviço SSO deverá consultar os legados na forma de uma federação para autenticar os acessos. Poderão ser utilizados mecanismos de caching no SSO para que se evite chamadas sucessivas aos legados.

## Proposta arquitetural

A interação se inicia com o usuário acessando a URL do tribunal. Será apresentada a tela de login, com mesmo layout atual, porém com formulário carregado a partir de um iframe cuja fonte é a página de login do SSO. O usuário insere suas credenciais nos campos de login/senha, ou seleciona a opção de login com certificado através do PJeOffice.

As credenciais são enviadas pelo formulário para o servidor do SSO. O SSO identifica o tribunal do usuário e realiza a validação das credenciais junto ao tribunal de origem da requisição. Em caso de sucesso é efetuado o redirecionamento a partir do iframe, para a inicialização da sessão do usuário no Seam a partir do token provido pelo SSO.

Abaixo algumas representações gráficas das interações realizadas entre os três atores, PJe-Legacy, SSO e usuário:

### Diagrama de sequência

![Imagem do diagrama de sequência do PJe-KC](https://docs.pje.jus.br/assets/images/diagrama_sequencia-pje-kc-7b34d5c7063e210aa6759a7c1624e02d.png)

### Diagrama de interações com o SSO

![Imagem diagrama de interações com o SSO](https://docs.pje.jus.br/assets/images/fluxo_completo-pje-kc-8bcfb7a01aade2c01fb692c696ccdfa7.png)

- **1**: Usuário não autenticado acessa o PJe-Legacy;
- **2**: PJe-Legacy redireciona para login no SSO via iframe;
- **2A**: Usuário entra com suas credenciais no formulário de login do SSO;
- **2B**: Com as credenciais corretas o SSO cria a sessão interna e os Cookies do navegador;
- **3**: SSO gera o código de acesso e redireciona o usuário para o PJe-Legacy;
- **4**: PJe-Legacy realiza a troca do código por tokens com o SSO em um canal separado (backend to backend);
- **5**: PJe-Legacy verifica o token e associa a uma sessão interna do Jboss Seam;
- **5B**: Usuário está autenticado no PJe-Legacy e no SSO.

## Solução tecnológica - PJe-KC

Optou-se por utilizar a ferramenta Keycloak tendo como justificativa os critérios abaixo:

- Ferramenta livre;
- Comunidade ativa com mais de 300 contribuidores;
- Utiliza tecnologia Java;
- Documentação vasta e abrangente;
- Possui versão com suporte;
- Single Sign-on;
- Suporte a protocolos OAuth 2.0, OpenId Connect 1.0 e SAML 2.0;
- Suporte a gerenciamento centralizado dos usuário;
- Altamente customizável.

A utilização da ferramenta por si só não é capaz de resolver os desafios descritos anteriormente. Portanto é necessário algum nível de customização da ferrameta. As customizações implementadas não são feitas no core da aplicação, mas se utilizam dos pontos de extensão do Keycloak através de suas interfaces.

O Keycloak possui uma vasta gama de possibilidades de customizações, que vão desde a modificação do estilo e formato da tela de login, até a criação de provedores de acesso a repositórios de usuários remotos. Para produzir estes artefatos foi criado um projeto maven, contendo alguns módulos. Cada módulo é responsável por prover algum nível de customização, necessária para atender a realidade da plataforma PJe. A este projeto foi dado o nome **PJE-KC**. Abaixo a descrição da composição do projeto:

- **PJE-KC**: Refere-se ao projeto versionado em [https://git.cnj.jus.br/pje2/pje2-infraestrutura/pje-kc](https://git.cnj.jus.br/pje2/pje2-infraestrutura/pje-kc) contendo os instrumentos de extensão do Keycloak para possibilitar a arquitetura proposta. O projeto contém diversos módulos, dentre os quais destacam-se:
	- **PJE-KC-LEGACY-STORAGE**: este módulo é responsável por integrar a base de usuários do Keycloak à base de usuário distribuída das instalações do PJe Legacy.
	- **PJE-KC-PJEOFFICE**: responsável por implementar um autenticador customizado capaz de permitir a autenticação via certificado, com PJE-OFFICE, ou com formulário de usuário e senha.
	- **PJE-KC-LOGIN**: este módulo é responsável pela customização da tela de login a ser apresentada para os clientes WEB da plataforma PJe.
	- **PJE-KC-CORPORATIVO**: módulo responsável pela integração com o sistema corporativo do CNJ.
	- **PJE-KC-ENTITIES**: módulo responsável por extender o modelo de entidades do keycloak para atender às customizações implementadas pelo PJE-KC.
	- **PJE-KC-EAR**: Módulo de empacotamento EAR do PJE-KC.

### Compilando o projeto

```powershell
$ mvn clean package
```

### Gerando imagem Docker

O projeto versionado no git possui Dockerfile capaz de executar a aplicação por completo, sendo apenas necessário o apontamento de um banco de dados. Caso nenhum banco de dados seja informado, a aplicação será inicializada utilizando banco H2.

```powershell
$ docker image build -t pje-kc:latest .
```

### Executando um container

```powershell
$ docker container run --rm --name keycloak -it -p 8585:8080 -p 9100:9100 -e DB_VENDOR=postgres -e DB_ADDR=<DB_IP_OR_HOSTNAME> -e DB_PORT=<DB_DEFAULT_PORT> -e DB_DATABASE=<DB_NAME> -e DB_USER=<DB_USERNAME> -e DB_PASSWORD=<DB_PASSWORD> pje-kc:latest --debug *:9100
```

### Executando a partir de uma imagem oficial

Caso o desenvolvedor não tenha acesso ao repositório de códigos do PJe-KC imagens oficiais podem ser utilizadas.

```powershell
$ docker container run --rm --name keycloak -it -p 8585:8080 -p 9100:9100 -e DB_VENDOR=postgres -e DB_ADDR=<DB_IP_OR_HOSTNAME> -e DB_PORT=<DB_DEFAULT_PORT> -e DB_DATABASE=<DB_NAME> -e DB_USER=<DB_USERNAME> -e DB_PASSWORD=<DB_PASSWORD> registry.cnj.jus.br/pje2/pje2-infraestrutura/pje-kc:latest --debug *:9100
```

### Implantação

Deve ser feito deploy do artefato EAR em um servidor Keycloak padrão. Recomenda-se que o servidor utilize banco de dados PostgreSQL, entretanto, conforme documentação da própria ferramenta, é possível utilizar outras ferramentas para persistência dos dados.

### Outros projetos afetados

- **PJE-LEGACY**: Projeto monolítico do PJe. Foi necessária implementação para integrar o legado monolítico ao SSO. A integração é efetuada através da classe SSOFilter, conforme descrito na documentação do Keycloak. Há também que se configurar as seguintes variáveis de ambiente para a correta integração com o serviço de SSO:

| Variável                          | Descrição                                                    | Valor                                                                     |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| ENV\_SSO\_AUTHENTICATION\_ENABLED | Identifica se a aplicação utilizará o SSO para autenticação. | `boolean`                                                                 |
| ENV\_SSO\_AUTHSERVER\_URL         | Url de autenticação do servidor SSO.                         | URL válida. Ex.: [http://localhost:8080/auth](http://localhost:8080/auth) |
| ENV\_SSO\_CLIENT\_ID              | Identificador do legado como cliente do SSO (client\_id).    | Identificador do legado. Ex.: `pje-tjxy-1g`                               |
| ENV\_SSO\_CLIENT\_SECRET          | Senha do cliente do legado no SSO (client\_secret).          | Ex.: `cf2c23fd-39c2-49d7-9c31-bdb25f158af0`                               |
| ENV\_SSO\_REALM                   | Realm do SSO.                                                | `pje`                                                                     |

- **PJE-OFFICE**: O projeto PjeOffice também precisou ser adaptado para que fosse possível sua utilização pela tela customizada do pje-kc-login. Esta integração é importante para manter a usabilidade dos usuários em relação ao procedimento de login atual do PJe. Todas as alterações implementadas estão disponíveis no branch PJEOFC-28.
- **SAMPLE-SERVICE**: Uma implementação de referência foi disponibilizada no projeto sample-service. O microserviço faz uso do SSO utilizando a estratégia de Bearer Token.
- **CRIMINAL**: Foram feitas as alterações necessárias para que o serviço criminal utilize o bearer token gerado pelo SSO, e encaminhado por algum cliente através do header “Authorization”. A implementação mantém retrocompatibilidade com o mecanismo legado de autenticação;

## Configurando o PJe KC pela primeira vez

### Criando um banco de dados com postgres

O primeiro passo para subirmos o keycloak localmente com uma base de dados PostgreSQL é a criação do banco de dados. As configurações sugeridas para o banco seguem conforme as telas:

#### Criando um novo banco 1

![Imagem criando um novo banco 1](https://docs.pje.jus.br/assets/images/bd_1-kc-53ab10cb33765421420a27a433995cac.png)

#### Criando um novo banco 2

![Imagem criando um novo banco 2](https://docs.pje.jus.br/assets/images/bd_2-kc-37dbd28ceeccf7a7211fba7eb4f0c748.png)

Com o banco de dados criado podemos seguir para a inicialização do container, que usará a base recém criada. É importante lembrar que a imagem do PJe-KC utiliza a imagem oficial do Keycloak como base, portanto, outras configurações de bancos de dados também são possíveis. Para mais informações consulte a documentação oficial do Keycloak ([https://quay.io/repository/keycloak/keycloak](https://quay.io/repository/keycloak/keycloak))

### Subindo a imagem oficial do PJe-KC

Para subir um container Docker localmente com a imagem oficial do PJe-KC utilizaremos o seguinte comando:

```jsx
sudo docker run --name keycloak -it \
  -p 8585:8080 -p 9100:9100 \
  -e DB_VENDOR=postgres \
  -e DB_ADDR=<DB_IP_OR_HOSTNAME> \
  -e DB_PORT=<DB_DEFAULT_PORT> \
  -e DB_DATABASE=<DB_NAME> \
  -e DB_USER=<DB_USERNAME> \
  -e DB_PASSWORD=<DB_PASSWORD> \
  registry.cnj.jus.br/pje2/pje2-infraestrutura/pje-kc:latest --debug *:9100
```

Na primeira subida o container irá popular nosso banco com todos os recursos do keycloak, faltando apenas configurar um usuário admin padrão.

### Adicionando um usuário admin padrão

Com o container ainda em execução execute o seguinte comando:

```jsx
docker exec <CONTAINER> /opt/jboss/keycloak/bin/add-user-keycloak.sh -u <USERNAME> -p <PASSWORD>
```

Uma mensagem semelhante à abaixo deverá aparecer:

`Added 'admin' to '/opt/jboss/keycloak/standalone/configuration/keycloak-add-user.json', restart server to load user`

Reinicie o container com:

```jsx
docker restart <CONTAINER>
```

### Acessando o Keycloak

Após o reinicio do serviço o Keycloak deverá estar disponível em [http://localhost:8585](http://localhost:8585/).

A seguinte tela deverá ser carregada:

#### Tela inicial

![Imagem tela inicial do keycloak](https://docs.pje.jus.br/assets/images/kc_1-52267b94d9e23061e434a2329d69c885.png)

Clique na opção "Administration Console" e se autentique com as credenciais criadas no passo anterior.

O keycloak deverá abrir o painel de administração do realm "master".

#### Painel de administração do keycloak

![Imagem do painel de administração do keycloak](https://docs.pje.jus.br/assets/images/kc_2-6b34509152e20e9a1c9c7ef4e07db986.png)

### Criando um novo Realm

Todo o nosso trabalho será realizado em um novo Realm com nome "pje".

#### Formulário de criação do realm

![Imagem do formulário de criação de realm](https://docs.pje.jus.br/assets/images/kc_3-3a1e172ac623fb7ecac209b2d58f1f0d.png)

Após sua criação deverá ser exibida a tela de gerenciamento do Realm, onde conseguiremos configurar clients, providers e etc.

#### Tela de gerenciamento do realm

![Imagem da tela de gerenciamento do realm](https://docs.pje.jus.br/assets/images/kc_4-44942014aebd9b6d6e5f422dee3ccfcb.png)

### Configurando o realm

Precisamos agora fazer algumas configurações no novo realm. Entre as configurações estão algumas necessárias para integração com o PJe Legacy.

#### Ajustando as opções de segurança

Em **Realm Settings** acesse a aba **Security Defenses**. Nesta aba precisaremos ajusta o valor do campo `Content-Security-Policy`. Ele nos permitirá, por exemplo, carregar o formulário de login do SSO através de um iframe do pje-legacy. Para isso devemos incluir o domínio da instância do `pje-legacy` à propriedade `frame-ancestors`.

##### Tela de gerenciamento do realm

![Imagem da tela de gerenciamento do realm 2](https://docs.pje.jus.br/assets/images/kc_4_1-1d487b65f2a4dd7cd8b2264be7d92a2d.png)

#### Criando um user federation para o PJe Legacy

Entre os módulos disponibilizados através do **PJe KC** está o **PJE-KC-LEGACY-STORAGE** que é responsável por permitir a integração do Keycloak com o PJe Legacy. Ele possibilita que os usuários consigam se autenticar no SSO com as mesmas credenciais que possuem no PJe Legacy.

Para configurar o **User Federation** devemos acessar o menu lateral de mesmo nome e selecionar a opção **PJE-KC-LEGACY-STORAGE**. Será aberta a tela para configuração.

Por enquanto tudo que precisa ser feito é salvar a nova federação. O campo *clients* só deverá ser preenchido após o cadastro de algum *client* do PJe Legacy.

Neste campo são inseridos os identificadores de clients que se referem ao PJe Legacy e que utilizarão esse mecanismo de federação.

##### Configuração do PJE-KC-LEGACY-STORAGE

![Imagem da configuração do PJE-KC-LEGACY-STORAGE](https://docs.pje.jus.br/assets/images/kc_5-002fedbef741cb2234125ec6cfd0be8f.png)

#### Criando um client para o PJe Legacy

No menu lateral acessaremos a opção **Clients** e vamos criar um novo *client*, referente a uma instância local do PJe Legacy.

Recomenda-se que o *Client ID* tenha o mesmo valor da variável de ambiente `ENV_PJE2_CLOUD_APP_NAME` da sua instância do legacy.

##### Criando o client para o pje-legacy

![Imagem criando o client para o pje-legacy](https://docs.pje.jus.br/assets/images/kc_6-0d8e2b00aaec0ec9e8e34b9db96fcd94.png)

Clique em **Save**. A tela de configuração do client deverá ser atualizada, agora com mais opções.

Recomenda-se configurar o client conforma a figura abaixo:

##### Criando o client para o pje-legacy

![Imagem criando o client para o pje-legacy](https://docs.pje.jus.br/assets/images/kc_7-c5995872c3249a5774476854cb75f20a.png)

Precisamos ainda dar duas permissões para esse client. Para isso vamos acessar a aba **Service Account Roles**. No campo **Client Roles** digite `realm-management` uma lista de permissões disponíveis deverá aparecer. Selecione `manage-realm` e `manage-users`.

##### Service Account Roles

![Imagem da aba Service Account Roles do keycloak](https://docs.pje.jus.br/assets/images/kc_8-b7d23757f3b719501fda3ff1e7df4e0e.png)

Essas permissões possibilitam que o PJe Legacy possa gerenciar algumas autorizações no SSO a partir da interface do próprio PJe.

#### Configurando o PJe Office

O PJe KC possui um módulo chamado `PJE-KC-PJEOFFICE`. Este é o módulo responsável por permitir que um usuário se autentique por meio do PJe Office com certificado digital.

Para que essa funcionalidade se torne disponível precisamos configurar um fluxo de autenticação no Keycloak. Para isso vamos acessar o menu **Authentication** do nosso realm.

##### (Passo 1) Criar cópia do Browser Flow

![Imagem de criar cópia do Browser Flow do keycloak](https://docs.pje.jus.br/assets/images/kc_9-4ae46b19709cb25c558e7351b8c38c22.png)

Atribua um nome a esse novo fluxo. Ex.: PJe Office.

![Imagem PJeOffice Flow do keycloak](https://docs.pje.jus.br/assets/images/kc_10-0a0ee60fbe50380eadce6ed5e1391af3.png)

O novo fluxo criado nos permite configurar execuções. Vamos configurar uma nova execução em PJe Office Forms.

##### (Passo 2) Adicionar execução

![Imagem de adicionar execução do flow no keycloak](https://docs.pje.jus.br/assets/images/kc_11-d0976f892f626c242e5c2a4ffe9e7752.png)

Na combo **Provider** selecione **PjeOffice** e clique em **Save**.

![Imagem de adicionar execução 2 do flow no keycloak](https://docs.pje.jus.br/assets/images/kc_12-45abc2d06a73defdffae3d379d1e06dc.png)

##### (Passo 3) Remova as demais demais execuções de PJe Office Forms

O novo fluxo deve ficar da seguinte maneira:

![Imagem do PJeOffice Flow no keycloak](https://docs.pje.jus.br/assets/images/kc_14-e2c5ddff78547474bd52f19f4a606c3c.png)

##### (Passo 4) Associe o novo fluxo ao client anteriormente criado

Vá para a página de configuração do client recém criado. Acesse o menu dropdown **Authentication Flow Overrides**. Na combo **Browser Flow** selecione **PJe Office** e clique **Save**

![Imagem de Configuração do Fluxo de Autenticação no Client](https://docs.pje.jus.br/assets/images/kc_15-f30786e6df752813c59511042551f9c1.png)

## Tokens

O *SSO* irá gerar *token* no formato *JWT*. Os *tokens* serão assinados e poderão ter sua autenticidade verificada. Os tipos de *tokens* possíveis são:

- **Access Token**: Geralmente possui um tempo de vida mais curto. Utilizado para acessar os recursos dos serviços. Deve ser passado no *header* **Authorization** das requisições.
- **Refresh Token**: Utilizado para solicitar novos tokens. Possui tempo de vida maior que o *Access Token*.
- **ID Token**: Possui informações do usuário.
- **Offline Token**: *Token* com vida mais longa. Possui função semelhante ao Refresh Token.

### Exemplos de Tokens

#### Access Token

```jsx
Access token codificadoeyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaVmozWWhKbFFqTFlwblJQYXRHUEJhZlpXNVU2a2NvZ0lXNmJ1Q1lYNTRzIn0.eyJleHAiOjE1ODU3NzU1MjEsImlhdCI6MTU4NTc3NTIyMSwianRpIjoiYzRmZmMyYjYtODJhOC00MTI2LTgxZWUtNjNlNzFmNGQ0NGYwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4NTg1L2F1dGgvcmVhbG1zL3BqZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjMzM2OTI2MC0xNTQyLTQwZWQtYmI3YS1lM2NmYTkwNjVhMzciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwamUtdGptYS0xZyIsInNlc3Npb25fc3RhdGUiOiJiNDYyYjU0Yi0wZDU0LTRiZWUtYTUzZC03MmQ0NDk3OTQzMjciLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8iLCJodHRwOi8vMTkyLjE2OC4wLjE4OjgwODAvIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IlJPRFJJR08gU0FOVE9TIE1FTkVaRVMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIwMjI4OTY3NjE5NSIsImdpdmVuX25hbWUiOiJST0RSSUdPIFNBTlRPUyBNRU5FWkVTIiwiZW1haWwiOiJyb2RyaWdvLm1lbmV6ZXNAY25qLmp1cy5iciJ9.l6XlXkutou0Iw_KDiYR-tCQFOC0mhUClcF0kU0-zTGUpzuvRdad_i8IHxd5RXWfpYc5BWOy9EHjzoG5K6x9u7waOqeLkJRVlK-2lnicthxywxa9Pi2ov8GHN6Q9ue5DmxxQeR66lpmfe_9AV6uokA1cXcE_zsxcRAV9WqWgRR_e_h1ksFRiHA2zsUbKfHIci1Rvl7M2ww7a6Z3eCs1POZzkEmPX1T2bwkz4MHIsurWWMs8nuXlAxcFrPJmLz2Idtl1if41jDh7ypmBLcGTYfj0ReAIlgyQ0skAB-6fK_Li2iLKiw-BrhAq6SjOfuf38IDwdnTS2Y36nb0G5jbcpH_Q
```

```json
Payload: Dados{
  "exp": 1585773265,
  "iat": 1585772965,
  "jti": "b5f35a67-cf71-44ec-b169-edd848fb3409",
  "iss": "http://localhost:8585/auth/realms/pje",
  "aud": "account",
  "sub": "c3369260-1542-40ed-bb7a-e3cfa9065a37",
  "typ": "Bearer",
  "azp": "pje-tjxy-1g",
  "session_state": "f1bb79aa-09ce-43c7-93f9-ef25b217a3c1",
  "acr": "1",
  "allowed-origins": ["http://localhost:8080/", "http://192.168.0.18:8080/"],
  "realm_access": {
    "roles": ["offline_access", "uma_authorization"]
  },
  "resource_access": {
    "account": {
      "roles": ["manage-account", "manage-account-links", "view-profile"]
    }
  },
  "scope": "profile email",
  "email_verified": false,
  "name": "FULANO DE TAL SICRANO",
  "preferred_username": "12301239000",
  "given_name": "FULANO DE TAL SICRANO",
  "email": "fulano.sicrano@cnj.jus.br"
}
```

#### ID Token

```jsx
Id token codificadoeyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaVmozWWhKbFFqTFlwblJQYXRHUEJhZlpXNVU2a2NvZ0lXNmJ1Q1lYNTRzIn0.eyJleHAiOjE1ODU3NzU1MjEsImlhdCI6MTU4NTc3NTIyMSwiYXV0aF90aW1lIjowLCJqdGkiOiI5YTQ2NDBiMS1lZWJmLTRkMmQtYTkxYy05N2M3YjFjYWQ1YTEiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0Ojg1ODUvYXV0aC9yZWFsbXMvcGplIiwiYXVkIjoicGplLXRqbWEtMWciLCJzdWIiOiJjMzM2OTI2MC0xNTQyLTQwZWQtYmI3YS1lM2NmYTkwNjVhMzciLCJ0eXAiOiJJRCIsImF6cCI6InBqZS10am1hLTFnIiwic2Vzc2lvbl9zdGF0ZSI6ImI0NjJiNTRiLTBkNTQtNGJlZS1hNTNkLTcyZDQ0OTc5NDMyNyIsImFjciI6IjEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJST0RSSUdPIFNBTlRPUyBNRU5FWkVTIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMDIyODk2NzYxOTUiLCJnaXZlbl9uYW1lIjoiUk9EUklHTyBTQU5UT1MgTUVORVpFUyIsImVtYWlsIjoicm9kcmlnby5tZW5lemVzQGNuai5qdXMuYnIifQ.OIJ9rx1hhrb9dKt6xyLkgq4arc1_Z7QBXvXq8W-iqRwvnLkJd8GeHaKY_-9U_SxaCVY6cC3cWgMXh-jdX76x2y0nIvRyVefYFzJHr0iQKKN0KYE58lUiquP3iVWebJBhXt2vJmTCVx1yjxmCwnj1XLslJoROXO_CoLCYxJOWfa3e1g1EH66KzxdfCmeimrP5TmXFqw_Wt17SVSR7LSz0DkRFxS-gMZHxIGpFKu6uttmG_O7U_aFsYe3fv_jyVTu1iCU1G-zr5_N2XhjhHgSTKpkk4ICCiaGEzLLKicF-EG5BXR7NYzH5b39HhFhK7dj31JAQiAsB42lxxipDvk4OfQ
```

```json
Payload: Dados{
  "exp": 1585775521,
  "iat": 1585775221,
  "auth_time": 0,
  "jti": "9a4640b1-eebf-4d2d-a91c-97c7b1cad5a1",
  "iss": "http://localhost:8585/auth/realms/pje",
  "aud": "pje-tjxy-1g",
  "sub": "c3369260-1542-40ed-bb7a-e3cfa9065a37",
  "typ": "ID",
  "azp": "pje-tjxy-1g",
  "session_state": "b462b54b-0d54-4bee-a53d-72d449794327",
  "acr": "1",
  "email_verified": false,
  "name": "FULANO DE TAL SICRANO",
  "preferred_username": "12301239000",
  "given_name": "FULANO DE TAL SICRANO",
  "email": "fulano.sicrano@cnj.jus.br"
}
```

#### Refresh Token

```jsx
Refresh token codificadoeyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjZWYyNTE0YS1hOTg1LTQyYjMtODcwNi02ODc2ZjE2NTcwYTMifQ
  .eyJleHAiOjE1ODU3NzcwMjEsImlhdCI6MTU4NTc3NTIyMSwianRpIjoiMzIxOTNkMjEtM2EzNi00OWM1LTk2NTEtN2ExMmQ3YzJiNzc5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4NTg1L2F1dGgvcmVhbG1zL3BqZSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODU4NS9hdXRoL3JlYWxtcy9wamUiLCJzdWIiOiJjMzM2OTI2MC0xNTQyLTQwZWQtYmI3YS1lM2NmYTkwNjVhMzciLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoicGplLXRqbWEtMWciLCJzZXNzaW9uX3N0YXRlIjoiYjQ2MmI1NGItMGQ1NC00YmVlLWE1M2QtNzJkNDQ5Nzk0MzI3Iiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9
  .Xaj5mBRNcIG4jK4eS0uVuIutTYQmbvurV0qOstzUCkI;
```

```json
Payload: Dados{
  "exp": 1585777021,
  "iat": 1585775221,
  "jti": "32193d21-3a36-49c5-9651-7a12d7c2b779",
  "iss": "http://localhost:8585/auth/realms/pje",
  "aud": "http://localhost:8585/auth/realms/pje",
  "sub": "c3369260-1542-40ed-bb7a-e3cfa9065a37",
  "typ": "Refresh",
  "azp": "pje-tjxy-1g",
  "session_state": "b462b54b-0d54-4bee-a53d-72d449794327",
  "scope": "openid profile email"
}
```

### Obtendo Tokens

#### Utilizando Resource Owner Password Grant

Neste tipo de grant é realizado um Post no serviço de autenticação e autorização passando as credenciais do cliente e do usuário. O token a ser emitido será em nome do usuário informado. Normalmente este fluxo é utilizado por aplicações com quem o serviço de autenticação tenha maior confiança.

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaVmozWWhKbFFqTFlwblJQYXRHUEJhZlpXNVU2a2NvZ0lXNmJ1Q1lYNTRzIn0.eyJleHAiOjE1ODU3NzMyNjUsImlhdCI6MTU4NTc3Mjk2NSwianRpIjoiYjVmMzVhNjctY2Y3MS00NGVjLWIxNjktZWRkODQ4ZmIzNDA5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4NTg1L2F1dGgvcmVhbG1zL3BqZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjMzM2OTI2MC0xNTQyLTQwZWQtYmI3YS1lM2NmYTkwNjVhMzciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwamUtdGptYS0xZyIsInNlc3Npb25fc3RhdGUiOiJmMWJiNzlhYS0wOWNlLTQzYzctOTNmOS1lZjI1YjIxN2EzYzEiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8iLCJodHRwOi8vMTkyLjE2OC4wLjE4OjgwODAvIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiUk9EUklHTyBTQU5UT1MgTUVORVpFUyIsInByZWZlcnJlZF91c2VybmFtZSI6IjAyMjg5Njc2MTk1IiwiZ2l2ZW5fbmFtZSI6IlJPRFJJR08gU0FOVE9TIE1FTkVaRVMiLCJlbWFpbCI6InJvZHJpZ28ubWVuZXplc0BjbmouanVzLmJyIn0.OUSGiBI3gg0nLr-HfBXEM4EyGKsgevI_d34eYxtGQqmi9TazvDXvyoE0g7Wb3qMIEdatTbCR96I_rMrSFSnNrIBaGxO0OeuI7QhMLQ7rVw-rajZ1Y9TihVvFqeuSvHSpglZQWXAlGWuoERHSvGveYbUlA5cVuTST5ad7sc6zTCp2__wHYennU2_uwh7IAfAcuixxjo8IoRnNIHrgXlj-2-qxDs58YjAgN6iRJBwR05_XLY35Aecwh3JRgYLuQVTi5Pt2rLYNDNVL8FM2kEZ-hxP8JmgOTMTEr5uASusL-1iOute7WWLpeLWRtuBXsjvdxk4lkS4EuM7o72cxP-ef9A",
  "expires_in": 300,
  "refresh_expires_in": 1800,
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjZWYyNTE0YS1hOTg1LTQyYjMtODcwNi02ODc2ZjE2NTcwYTMifQ.eyJleHAiOjE1ODU3NzQ3NjUsImlhdCI6MTU4NTc3Mjk2NSwianRpIjoiN2ZmOWFjNDQtNGVhOS00OGExLTkzNGUtMDZkZGRjMTUzYjk2IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4NTg1L2F1dGgvcmVhbG1zL3BqZSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODU4NS9hdXRoL3JlYWxtcy9wamUiLCJzdWIiOiJjMzM2OTI2MC0xNTQyLTQwZWQtYmI3YS1lM2NmYTkwNjVhMzciLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoicGplLXRqbWEtMWciLCJzZXNzaW9uX3N0YXRlIjoiZjFiYjc5YWEtMDljZS00M2M3LTkzZjktZWYyNWIyMTdhM2MxIiwic2NvcGUiOiJwcm9maWxlIGVtYWlsIn0._35tLv14TY7u0s6YVlTt-1jc34ZQ341bL-dWBwBhNig",
  "token_type": "bearer",
  "not-before-policy": 1580489665,
  "session_state": "f1bb79aa-09ce-43c7-93f9-ef25b217a3c1",
  "scope": "profile email"
}
```

#### Utilizando Client Credentials Grant

Neste tipo de grant é realizado um Post no serviço de autenticação e autorização passando as credenciais do cliente. O token a ser emitido será em nome do cliente informado. Normalmente este fluxo é utilizado por aplicações que queiram consumir Resource Owners com um usuário do tipo serviço (App to App).

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaVmozWWhKbFFqTFlwblJQYXRHUEJhZlpXNVU2a2NvZ0lXNmJ1Q1lYNTRzIn0.eyJleHAiOjE1ODU3NzQ0NDksImlhdCI6MTU4NTc3NDE0OSwianRpIjoiYTU1MDA4ZWItNGViZi00ZWRmLTllZGEtZTgwMTc5NjcwZjRkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4NTg1L2F1dGgvcmVhbG1zL3BqZSIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiI5NjJmYjkxNi01OTczLTQ3NzEtOGMzNS0xZmE0NjQ4NWFiYWMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwamUtdGptYS0xZyIsInNlc3Npb25fc3RhdGUiOiI5YThjY2IxMS1jN2FlLTRkMzEtYjU0YS1iN2JhMmY4OTU5ZjkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8iLCJodHRwOi8vMTkyLjE2OC4wLjE4OjgwODAvIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsInZpZXctcmVhbG0iLCJtYW5hZ2UtaWRlbnRpdHktcHJvdmlkZXJzIiwiaW1wZXJzb25hdGlvbiIsInJlYWxtLWFkbWluIiwiY3JlYXRlLWNsaWVudCIsIm1hbmFnZS11c2VycyIsInF1ZXJ5LXJlYWxtcyIsInZpZXctYXV0aG9yaXphdGlvbiIsInF1ZXJ5LWNsaWVudHMiLCJxdWVyeS11c2VycyIsIm1hbmFnZS1ldmVudHMiLCJtYW5hZ2UtcmVhbG0iLCJ2aWV3LWV2ZW50cyIsInZpZXctdXNlcnMiLCJ2aWV3LWNsaWVudHMiLCJtYW5hZ2UtYXV0aG9yaXphdGlvbiIsIm1hbmFnZS1jbGllbnRzIiwicXVlcnktZ3JvdXBzIl19LCJwamUtdGptYS0xZyI6eyJyb2xlcyI6WyJ1bWFfcHJvdGVjdGlvbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRJZCI6InBqZS10am1hLTFnIiwiY2xpZW50SG9zdCI6IjE3Mi4xNy4wLjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtcGplLXRqbWEtMWciLCJjbGllbnRBZGRyZXNzIjoiMTcyLjE3LjAuMSIsImVtYWlsIjoic2VydmljZS1hY2NvdW50LXBqZS10am1hLTFnQHBsYWNlaG9sZGVyLm9yZyJ9.Mtvmu7kHuvAGwemh1Ie_V_nJbk0KD0M8Cb2BA1LmRBZERTcIJiuv8WN9tq95I3F5ego9T5f0K29boDLRAcdMKgiGW7Dwq832TzBQUNuNb0mOn1JJYat3iLdiFhd64QyFemSX-snq0UviPQ94jYvnhe76-gqcBcOpim7xc2y0lBN438fLRbsk6ITjYb0r1DkhiGjv8onD5ZrQ_k5MQz6fK4iuSk87FgGHWTHjkn8apzYcfcMrvXA6SsHEhMQBvFKH7k9ZZPsOmn09eE_5goe6nstq_ChFcyBiPp_K-H6WcXUp9XJLz_NFCjqzL_Tk5Ax-dS8EOUPB1F8zdq7LkZJKnA",
  "expires_in": 300,
  "refresh_expires_in": 1800,
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjZWYyNTE0YS1hOTg1LTQyYjMtODcwNi02ODc2ZjE2NTcwYTMifQ.eyJleHAiOjE1ODU3NzU5NDksImlhdCI6MTU4NTc3NDE0OSwianRpIjoiZTdiODBkYjMtMDNhMi00ZWU2LWFiMzktYjM5OTcwYzgyNDY4IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4NTg1L2F1dGgvcmVhbG1zL3BqZSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODU4NS9hdXRoL3JlYWxtcy9wamUiLCJzdWIiOiI5NjJmYjkxNi01OTczLTQ3NzEtOGMzNS0xZmE0NjQ4NWFiYWMiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoicGplLXRqbWEtMWciLCJzZXNzaW9uX3N0YXRlIjoiOWE4Y2NiMTEtYzdhZS00ZDMxLWI1NGEtYjdiYTJmODk1OWY5Iiwic2NvcGUiOiJwcm9maWxlIGVtYWlsIn0.InyXRpkhwgovKgxaSY7SoHJNerQ9fHfMiImCwBaHXGM",
  "token_type": "bearer",
  "not-before-policy": 1580489665,
  "session_state": "9a8ccb11-c7ae-4d31-b54a-b7ba2f8959f9",
  "scope": "profile email"
}
```

#### Utilizando Authorization Code Flow

Este tipo de fluxo se inicia com a autorização do usuário, que pode ser realizada:

- Autenticando as credenciais do usuário;
- Redirecionando o usuário para um Identity Provider que irá realizar a autenticação;
- Checando uma sessão ativa do usuário por meio de um SSO.

No caso do PJE-KC isso pode ser realizado por meio de uma chamada a url:

```jsx
http://localhost:8585/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjxy-1g&redirect_uri=http://callback.url/sample.seam&state=ebec7607-67b9-4cda-afe8-cb444d0387a0&login=true&scope=openid
```

Ao aferir a autenticidade do usuário, o serviço de autenticação irá chamar a URL informada no parâmetro redirectUri, agregando a essa URL um parâmetro code.

```jsx
https://callback.url/sample.seam/callback?code=AUTHORIZATION_CODE&state=ebec7607-67b9-4cda-afe8-cb444d0387a0
```

Este parâmetro deverá ser utilizado para solicitar um token em nome do usuário autenticado.

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaVmozWWhKbFFqTFlwblJQYXRHUEJhZlpXNVU2a2NvZ0lXNmJ1Q1lYNTRzIn0.eyJleHAiOjE1ODU3NzMyNjUsImlhdCI6MTU4NTc3Mjk2NSwianRpIjoiYjVmMzVhNjctY2Y3MS00NGVjLWIxNjktZWRkODQ4ZmIzNDA5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4NTg1L2F1dGgvcmVhbG1zL3BqZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjMzM2OTI2MC0xNTQyLTQwZWQtYmI3YS1lM2NmYTkwNjVhMzciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwamUtdGptYS0xZyIsInNlc3Npb25fc3RhdGUiOiJmMWJiNzlhYS0wOWNlLTQzYzctOTNmOS1lZjI1YjIxN2EzYzEiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8iLCJodHRwOi8vMTkyLjE2OC4wLjE4OjgwODAvIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiUk9EUklHTyBTQU5UT1MgTUVORVpFUyIsInByZWZlcnJlZF91c2VybmFtZSI6IjAyMjg5Njc2MTk1IiwiZ2l2ZW5fbmFtZSI6IlJPRFJJR08gU0FOVE9TIE1FTkVaRVMiLCJlbWFpbCI6InJvZHJpZ28ubWVuZXplc0BjbmouanVzLmJyIn0.OUSGiBI3gg0nLr-HfBXEM4EyGKsgevI_d34eYxtGQqmi9TazvDXvyoE0g7Wb3qMIEdatTbCR96I_rMrSFSnNrIBaGxO0OeuI7QhMLQ7rVw-rajZ1Y9TihVvFqeuSvHSpglZQWXAlGWuoERHSvGveYbUlA5cVuTST5ad7sc6zTCp2__wHYennU2_uwh7IAfAcuixxjo8IoRnNIHrgXlj-2-qxDs58YjAgN6iRJBwR05_XLY35Aecwh3JRgYLuQVTi5Pt2rLYNDNVL8FM2kEZ-hxP8JmgOTMTEr5uASusL-1iOute7WWLpeLWRtuBXsjvdxk4lkS4EuM7o72cxP-ef9A",
  "expires_in": 300,
  "refresh_expires_in": 1800,
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjZWYyNTE0YS1hOTg1LTQyYjMtODcwNi02ODc2ZjE2NTcwYTMifQ.eyJleHAiOjE1ODU3NzQ3NjUsImlhdCI6MTU4NTc3Mjk2NSwianRpIjoiN2ZmOWFjNDQtNGVhOS00OGExLTkzNGUtMDZkZGRjMTUzYjk2IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4NTg1L2F1dGgvcmVhbG1zL3BqZSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODU4NS9hdXRoL3JlYWxtcy9wamUiLCJzdWIiOiJjMzM2OTI2MC0xNTQyLTQwZWQtYmI3YS1lM2NmYTkwNjVhMzciLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoicGplLXRqbWEtMWciLCJzZXNzaW9uX3N0YXRlIjoiZjFiYjc5YWEtMDljZS00M2M3LTkzZjktZWYyNWIyMTdhM2MxIiwic2NvcGUiOiJwcm9maWxlIGVtYWlsIn0._35tLv14TY7u0s6YVlTt-1jc34ZQ341bL-dWBwBhNig",
  "token_type": "bearer",
  "not-before-policy": 1580489665,
  "session_state": "f1bb79aa-09ce-43c7-93f9-ef25b217a3c1",
  "scope": "profile email"
}
```

### Utilizando o ACCESS\_TOKEN para chamar uma API protegida

Deve-se enviar o ACCESS\_TOKEN no cabeçalho Authorization, precedido do termo Bearer, conforme exemplo abaixo:

## Release notes

[Notas da versão](https://docs.pje.jus.br/servicos-negociais/servico-sso-pje-kc/notas-da-versao)
