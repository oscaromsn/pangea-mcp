---
title: Pangea/BNP | Documentação PDPJ-Br
source: https://docs.pdpj.jus.br/servicos-negociais/pangeabnp
author:
published:
created: 2025-09-30
description: O Pangea/BNP é um software desenvolvido pelo Tribunal Regional do Trabalho da 4ª Região (TRT4) para o Conselho Nacional de Justiça (CNJ) visando à pesquisa textual de precedentes qualificados oriundos do Banco Nacional de Precedentes (BNP).
tags:
  - clippings
modified: 2025-09-30T11:45:27-03:00
---
# Pangea/BNP | Documentação PDPJ-Br
Available at https://docs.pdpj.jus.br/servicos-negociais/pangeabnp

[Pular para o conteúdo principal](https://docs.pdpj.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

O **Pangea/BNP** é um software desenvolvido pelo Tribunal Regional do Trabalho da 4ª Região (TRT4) para o Conselho Nacional de Justiça (CNJ) visando à pesquisa textual de precedentes qualificados oriundos do Banco Nacional de Precedentes (BNP).

Este software trata-se de uma aplicação web e está dividido em três módulos:

- *Frontend*: responsável pela interface da aplicação (projeto **pangea-bnp**)
- *Backend*: responsável por realizar a busca em si dos precedentes, retornando os dados para o *frontend* (projeto **pangea-bnp-api**)
- *Jobs*: responsável por realizar a indexação dos precedentes do BNP (projeto **pangea-bnp-jobs**)

Tanto a comunicação realizada entre o *frontend* e o *backend* quanto a do *jobs* com o BNP ocorre através de interfaces API REST bem definidas.

![Arquitetura](https://docs.pdpj.jus.br/assets/images/arquitetura-ffdbb07b8eee1cc640a3baea285fe2d4.png)

## 1\. Frontend

O *frontend* da aplicação foi desenvolvido utilizando o framework **Angular** em sua versão 16. Além disso, bibliotecas de componentes visuais como o *Bootstrap* e o *Material Angular* foram utilizados para a construção da interface.

O projeto é composto por uma série de subdivisões dentro de sua pasta **src/app**, conforme descrito a seguir:

- *interceptors*: classes responsáveis por realizar a interceptação das requisições HTTP ao *backend*, acoplando a elas *headers* -padrão ou realizando tratamento de erros
- *models*: classes contendo os modelos de dados da aplicação, assim como os DTOs para a comunicação com o *backend*
- *modules*: módulos da aplicação, contendo os componentes visuais e seus comportamentos
- *services*: serviços para comunicação com *backend* e gerenciamento de estados
- *shared*: componentes e serviços compartilhados e utilizados em todo o sistema

Todas as dependências do projeto encontram-se descritas no arquivo **package.json**.

### Requisitos técnicos de ambiente

Para rodar o projeto, é necessário dispor de um ambiente em que estejam instalados:

- *Node.js*
- *npm package manager*

### O arquivo de configuração env.js:

Neste arquivo encontram-se as configurações do projeto, como as URL's de comunicação com o *backend*, por exemplo. Este arquivo pode ser alterado com as devidas rotas para o caso de o projeto ser rodado localmente. O valor do arquivo pode também ser setado através de *configmaps* para o caso de o ambiente ser rodado em containers *Kubernetes*.

![Arquivo env.js](https://docs.pdpj.jus.br/assets/images/envjs-58467ac1d9c33efa3ca88aac69533c2e.png)

### Rodando o projeto localmente

Para rodar o projeto localmente, pode-se executar os seguintes comandos, dentro da pasta raiz do projeto:

npm install ng serve

Para abrir o projeto no navegador, basta abrir o link [http://localhost:4200](http://localhost:4200/).

### Rodando o ambiente em container

O projeto contém um arquivo **Dockerfile** preparado para construir e rodar uma imagem em um ambiente de *containers*. Para isso, pode-se executar os seguintes comandos, dentro da pasta raiz do projeto:

docker build -t pangea-frontend-bnp. docker run -p 4200:80 -d pangea-frontend-bnp

Para abrir o projeto no navegador, basta abrir o link [http://localhost:4200](http://localhost:4200/).

## 2\. Backend

O *backend* da aplicação foi desenvolvido em Python com o uso do framework **Flask**.

O projeto utiliza-se de duas estruturas para o seu funcionamento:

- **Banco de dados *PostgreSQL***, utilizado para armazenar informações essenciais do sistema, como parâmetros que possibilitam flexibilidade na construção de filtros para o *frontend*.
- **OpenSearch**, que é uma ferramenta derivada do *ElasticSearch*, para a indexação e a pesquisa dos precedentes que foram populados pelo módulo de *Jobs* ao consultar a API de precedentes do BNP.

A principal responsabilidade do *backend* é a de fornecer **endpoints** para que o *frontend* consiga extrair a parametrização da interface (como filtros por tribunais e espécies) e realizar a pesquisa por precedentes propriamente dita.

A solução para a construções desses endpoints segue as diretrizes de APIs REST, sem expor detalhes da construção interna, priorizando a segurança e a agilidade nas consultas. A documentação da API é fornecida com o *Swagger*.

As APIs disponibilizadas são as listadas abaixo. A documentação *Swagger* das mesmas pode ser visualizado em **http://< URL do ambiente >/swagger/ui**.

![APIs](https://docs.pdpj.jus.br/assets/images/apis-a3c6ea07cc1a61546fd889e5ad82d05b.png)

### Requisitos técnicos de ambiente

Para rodar o projeto, é necessário dispor de um ambiente em que estejam instalados:

- *Python 3*
- *pip*

### Variáveis de ambiente

As configurações de acesso ao OpenSearch e PostgreSQL devem ser feitas por meio de variáveis de ambiente.

- **ConfigMap**: `APP_GLOBAL_PREFIX, OPENSEARCH, ELASTIC_HOST, ELASTIC_PORT, ELASTIC_SECURE, ELASTIC_INDEX_PRECEDENTES, ELASTIC_INDEX_STATS, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DATABASE`
- **Secrets**: `APP_SECRET_KEY, ELASTIC_USER, ELASTIC_PSWD, POSTGRES_USER, POSTGRES_PSWD`

Para o caso de ser rodado localmente, essas variáveis podem ser setadas dentro de um arquivo **config.ini** a ser criado dentro da pasta */app* do projeto.

### Rodando o projeto localmente

Para rodar o projeto localmente, deve-se primeiramente criar um ambiente virtual, na pasta raiz do projeto, e ativá-lo:

```
python3 -m venv.venv source.venv/bin/activate
```

A seguir, deve-se instalar todas as dependências do projeto:

```
pip install -r requirements.txt
```

Por fim, para rodar o ambiente, deve-se disparar o comando:

```
python3 wsgi.py
```

Por padrão, a API estará disponível na URL [http://localhost:5000/](http://localhost:5000/).

### Rodando o ambiente em container

O projeto contém um arquivo **Dockerfile** preparado para construir e rodar uma imagem em um ambiente de *containers*. Para isso, pode-se executar os seguintes comandos, dentro da pasta raiz do projeto:

docker build -t pangea-backend-bnp. docker run -p 5000:5000 -d pangea-backend-bnp

A API estará disponível na URL [http://localhost:5000/](http://localhost:5000/).

## 3\. Job

O *job* da aplicação foi desenvolvido em Python.

O projeto utiliza-se de três estruturas para o seu funcionamento:

- **BNP integração**, que é o webservice utilizado para obtenção dos precedentes que são enviados pelos Tribunais para o BNP.
- **Banco de dados *PostgreSQL***, utilizado para armazenar informações de padronizações para a indexação dos precedentes, como siglas de órgãos e de espécies dos precedentes.
- **OpenSearch**, que é uma solução derivada do *ElasticSearch*, utilizada para a indexação dos precedentes obtidos via API do BNP.

A principal responsabilidade do *job* é extrair os precedentes do BNP, transformando-os e indexando-os no *OpenSearch*, de modo a permitir a pesquisa textual padronizada pelo sistema Pangea/BNP.

### Requisitos técnicos de ambiente

Para rodar o projeto, é necessário dispor de um ambiente em que estejam instalados:

- *Python 3*
- *pip*

### Variáveis de ambiente

As configurações de acesso ao OpenSearch, PostgreSQL e API do BNP devem ser feitas por meio de variáveis de ambiente.

- **ConfigMap**: `BNP_API_URL, ELASTIC_HOST, ELASTIC_PORT, ELASTIC_SECURE, ELASTIC_INDEX_PRECEDENTES, ELASTIC_INDEX_STATS, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DATABASE`
- **Secrets**: `BNP_API_USER, BNP_API_PSWD, ELASTIC_USER, ELASTIC_PSWD, POSTGRES_USER, POSTGRES_PSWD`

Para o caso de ser rodado localmente, essas variáveis podem ser setadas dentro de um arquivo **config.ini** a ser criado na pasta raiz do projeto.

### Rodando o projeto localmente

Para rodar o projeto localmente, deve-se primeiramente criar um ambiente virtual, na pasta raiz do projeto, e ativá-lo:

```
python3 -m venv.venv source.venv/bin/activate
```

A seguir, deve-se instalar todas as dependências do projeto:

```
pip install -r requirements.txt
```

Por fim, para rodar o ambiente, deve-se disparar o comando:

```
python3 main.py
```

### Rodando o ambiente em container

O projeto contém um arquivo **Dockerfile** preparado para construir e rodar uma imagem em um ambiente de *containers*. Para isso, pode-se executar os seguintes comandos, dentro da pasta raiz do projeto:

```
docker build -t pangea-backend-job. docker run -d pangea-backend-job
```

## 4\. Perguntas Frequentes - FAQ

### Onde está disponível a documentação?

Portaria Nº 116 de 06/04/2022, com definição das informações que serão enviadas pelos tribunais: [https://atos.cnj.jus.br/atos/detalhar/4475](https://atos.cnj.jus.br/atos/detalhar/4475)
Documentação da API: [https://bnp-integracao.stg.cloud.pje.jus.br/swagger-ui/index.html](https://bnp-integracao.stg.cloud.pje.jus.br/swagger-ui/index.html)

### Como obter a lista com os Ids dos Órgãos?

O Corporativo é o sistema do CNJ que centraliza a estrutura de órgãos de todo o poder judiciário. É possível varrer toda a estrutura utilizando a API do **corporativo-proxy**.

Ambiente de staging: [https://gateway.stg.cloud.pje.jus.br/corporativo-proxy/swagger-ui.html#/Organizacional](https://gateway.stg.cloud.pje.jus.br/corporativo-proxy/swagger-ui.html#/Organizacional)
Ambiente de produção: [https://gateway.cloud.pje.jus.br/corporativo-proxy/swagger-ui.html#/Organizacional](https://gateway.cloud.pje.jus.br/corporativo-proxy/swagger-ui.html#/Organizacional)

Atenção, pode haver divergência de ID entre o mesmo órgão em ambiente de staging e em ambiente de produção.

A recomendação é que o tribunal faça um de-para da estrutura de órgãos do CNJ com a estrutura de órgãos interna do tribunal.
Link com vídeo mostrando como utilizar a API para varrer a estrutura de órgãos [Demonstração Organizacional](https://cnjjusbr-my.sharepoint.com/:v:/g/personal/leonardo_borges_cnj_jus_br/EWjztApDYIJOtAWuYu3oMmIB56EytUttRovkaET_gpETWA?e=2lZ4z3)
Outra opção é utilizar o arquivo de serventias do Módulo de Produtividade Mensal [https://dpj.cnj.jus.br/sgt/api/v1.0/serventias-mpm](https://dpj.cnj.jus.br/sgt/api/v1.0/serventias-mpm)

### Qual é a URL das **API's**?

Ambiente de homologação dos tribunais (integração): [https://bnp-integracao.stg.cloud.pje.jus.br/swagger-ui/index.html](https://bnp-integracao.stg.cloud.pje.jus.br/swagger-ui/index.html).
Ambiente de produção: [https://bnp-sempj.cloud.pje.jus.br/swagger-ui/index.html](https://bnp-sempj.cloud.pje.jus.br/swagger-ui/index.html).

### Como tirar dúvidas técnicas? E negociais?

As dúvidas técnicas podem ser encaminhadas para o e-mail [amanda.fonseca@cnj.jus.br](https://docs.pdpj.jus.br/servicos-negociais/) e [carlo.moura@cnj.jus.br](https://docs.pdpj.jus.br/servicos-negociais/) (gerentes do projeto).

- Os métodos do **Recurso Repetitivo** e **Repercussão Geral** não estão aceitando o parâmetro do idOrgao, sendo que os outros utilizam, como proceder?.

Recurso Repetitivo e Repercussão Geral não possuem parâmetro de idOrgao pois já está subentendido que correspondem a STJ/TST e STF, respectivamente.

### Como será feita a autenticação?

Como o BNP está integrado à PDPJ, basta utilizar seu serviço de autenticação SSO [[Serviço de Autenticação (SSO)  Documentação PDPJ-Br]]

A chamada ao serviço REST então acontece em dois passos:

1. Obtenção do token
1. Consumo da operação REST autenticada

URL do SSO de produção: [https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/token](https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/token)

### Erro ao utilizar umas das operações da API

Se for identificado algum erro nas operações da API, enviar o relato para [amanda.fonseca@cnj.jus.br](https://docs.pdpj.jus.br/servicos-negociais/) e [carlo.moura@cnj.jus.br](https://docs.pdpj.jus.br/servicos-negociais/) (gerentes do projeto), informando como reproduzir o problema, preferencialmente com a requisição em formato CURL, contendo URL, cabeçalhos e corpo (se for o caso).

### Lista de e-mails

Foi criado uma lista de e-mails para que o CNJ possa comunicar os tribunais sobre alterações/atualizações na API.
Segue link para inscrição [http://listas.cnj.jus.br/mailman/listinfo/l-bnp.integracao](http://listas.cnj.jus.br/mailman/listinfo/l-bnp.integracao).

### O que irá acontecer com o sistema antigo (BNPR)?

O sistema BNPR ficará no ar até que todos os dados existentes nele sejam migrados para a nova base do BNP. Essa atividade ainda não possui prazo para conclusão.
