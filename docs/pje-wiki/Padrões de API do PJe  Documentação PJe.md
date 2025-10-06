---
title: "Padrões de API do PJe | Documentação PJe"
source: "https://docs.pje.jus.br/manuais-basicos/padroes-de-api-do-pje"
author:
published:
created: 2025-09-30
description: "Orientação a recursos"
tags:
  - "clippings"
---
# Padrões de API do PJe | Documentação PJe
Available at https://docs.pje.jus.br/manuais-basicos/padroes-de-api-do-pje


[Pular para o conteúdo principal](https://docs.pje.jus.br/manuais-basicos/#__docusaurus_skipToContent_fallback)

## Padrões de API do PJe

## Orientação a recursos

Uma API Restful deve ser orientada a recursos. Em se tratando do ecossistema PJe, na maior parte das vezes, os recursos serão representados pelas entidades negociais do serviço.

As entidades que existem independentemente de seus relacionamentos (as chamadas entidades fortes) terão seus nomes na parte inicial da URL do serviço. Por exemplo: /api/v1/processos/\*.

Por outro lado, as entidades cuja existência dependa do relacionamento com outras entidades (as chamadas entidades fracas), terão seus nomes informados após os das entidades que determinam sua existência. Exemplo: /api/v1/processos/documentos.

Evite criar APIs que espelhem integralmente a estrutura do banco de dados do sistema. A exposição das entidades por meio das URLs de serviço deve ser representada por uma granularidade negocial alta, utilizando, eventualmente, técnicas de desnormalização das tabelas do banco de dados e combinando informações relacionadas em recursos maiores. O consumidor do serviço não deve ser exposto aos detalhes da implementação interna. Exemplos:

```jsx
/processos/{id-processo}/processos-documentos
```
```jsx
/processos/{id-processo}/documentos
```

## Substantivos no plural

Como convenção, deve-se utilizar substantivos no plural nos nomes das entidades negociais. Para entidades com nomenclatura composta, deve-se separar os nomes com hífen. Por exemplo: /orgaos-julgadores/\*.

## Verbos HTTP

A API deve utilizar apenas os verbos HTTP para invocação dos serviços:

- GET: recupera uma ou mais representações de uma entidade.
- POST: cria uma nova entidade.
- PUT: altera os atributos de uma entidade ou de um lote de entidades do mesmo tipo.
- DELETE: remove uma determinada entidade ou um lote de entidades do mesmo tipo.

| Recurso | GET | POST | PUT | DELETE |
| --- | --- | --- | --- | --- |
| /processos | Lista todos os processos | Cria um processo | Altera processos em lote | Exclui todos os processos |
| /processos/1 | Retorna o processo de ID igual a 1 | ERRO! | Atualiza os atributos do processo de ID igual a 1 | Exclui o processo de ID igual a 1 |
| /processos/1/documentos | Lista todos os documentos vinculados a processo de ID igual a 1 | Cria um documento vinculado ao processo de ID igual a 1 | Altera em lote todos os documentos vinculados ao processo de ID igual a 1 | Exclui em lote todos os documentos vinculados ao processo de ID igual a 1 |

O tipo de mídia JSON `Content-Type: application/json` é o padrão utilizado pela API do PJe. Eventualmente, em casos de necessidades específicas, pode-se utilizar outros tipos.

## Verbos personalizados

Haverá situações em que utilização dos verbos HTTP não será suficiente para a composição das URLs de serviços. Nesses casos, devem ser utilizados verbos personalizados, separados do nome da entidade por dois pontos.

Exemplos:

```jsx
public void distribuirProcesso(ProcessoDTO dto)
/processos:distribuir/
```
```jsx
public void intimarPartes(int idProcesso)
/processos/{id-processo}/partes:intimar
```

### Nomenclatura dos serviços nos módulos

O PJe é um sistema modularizado. Em se tratando da especificação da API, a URL do serviço deve elucidar a qual módulo ele está vinculado. Quando o módulo for o próprio PJe, deve-se utilizar o nome pje-legacy. Alguns exemplos:

#### Lista de audiências pautadas no módulo audiência ainda no pje-legacy

```jsx
/pje-legacy/audiencias/api/v1/
```

#### Recupera os dados de uma audiência específica no módulo audiência ainda no pje-legacy

```jsx
/pje-legacy/audiencias/api/v1/{id-audiencia}
```

#### Lista os avisos de comunicação distribuídos para um determinado oficial de justiça do módulo central de mandado

```jsx
/centrais-mandados/api/v1/oficiais-justica/{id-oficial-justica}/avisos-comunicacao
```

#### Lista os processos pautados para uma determinada sessão do módulo colegiado

```jsx
/colegiados/api/v1/sessoes/{id-sessao}/processos
```

## Versionamento

O número da versão deve constar na URL do serviço, após o nome do módulo. O versionamento deve ser formado pela letra v, seguido do major number da versão. A informação da versão deve ser precedida da palavra api. Exemplo: `/precatorios/api/v1/*`

## Formato das mensagens

O objetivo de se padronizar o formato das mensagens de resposta de uma API é facilitar seu uso por meio da previsibilidade. As mensagens de retorno do PJe devem incluir os seguintes atributos:

- **status**: é o estado da resposta. Os valores possíveis são:
	- *ok*: processamento bem sucedido.
	- *error*: houve problemas durante o processamento. Obrigatoriamente, acompanha uma lista de mensagens (*messages*).
	- *in-progress*: resposta a chamadas assíncronas. Deve ser acompanhada de URL para checar a situação do processamento.
- **code**: especifica o código HTTP do processamento. Códigos da família 2xx ou 3xx serão acompanhados do *status ok*, com exceção ao código 202 (Accepted), cujo status será *in-progress*. No caso de status igual a *error*, os códigos HTTP serão das famílias 4xx ou 5xx. Confira a lista completa dos códigos em [https://en.wikipedia.org/wiki/List\_of\_HTTP\_status\_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). Existem algumas razões para se especificar o código na mensagem, em vez de utilizar o código HTTP padrão da resposta:
	- É mais fácil e rápido para os consumidores acessarem o código diretamente na mensagem JSON.
	- Os códigos HTTP padrão não são totalmente confiáveis. Alguns proxies podem sobrepor os códigos originais, criando mensagens potencialmente inconsistentes.
	- Trata-se de uma boa prática de implementação, pois a API não fica dependente de configurações do ambiente computacional.
- **messages**: lista de mensagens referente ao processamento da requisição. Tipicamente, este atributo será preenchido em caso de erros.
- **result**: retorna o resultado do processamento

Alguns exemplos:

- Resultado de chamada hipotética ao serviço `GET /orgaos-julgadores/`:
```json
{
  "status": "ok",
  "code": "200",
  "messages": [],
  "result": [
    {
      "id": "1",
      "nome": "GAB. DESEMB. FULANO DE TAL",
      "ativo": "true"
    },
    {
      "id": "2",
      "nome": "GAB. DESEMB. CICRANO DE TAL",
      "ativo": "true"
    }
  ]
}
```
- Resultado de chamada hipotética ao serviço de consulta ao cabeçalho de um determinado processo. Nesse caso, o retorno não é exatamente um objeto do tipo *processo*, portanto, deverá ser informado como `object`.`GET /processos:cabecalho/789`:
```json
{
    "status": "ok",
    "code": "200",
    "messages": [],
    "result":
    {
        "id": 789,
        "numero": "0001234-56.2018.2.00.0000",
        "classe": 10,
        "assuntos": [12, 34],
        "partes": "FULANO x CICRANO",
        "valor-da-causa": 34.678,90,
        "segredo-de-justica": false,
        "justica-gratuita": false,
        "pedido-de-liminar": "false"
    }
}
```
- Resultado de uma chamada mal sucedida a um serviço de pesquisa em que o consultante não tenha autorização para visualizar um determinado processo. `GET /processos/555`:
```json
{
  "status": "error",
  "code": "403",
  "messages": ["Sem permissão para visualizar o processo"],
  "result": {}
}
```
- Resultado de chamada a operação assíncrona de download dos autos de um determinado processo. Nesse caso, retorna um link para consulta à situação do processamento, contendo um número de protocolo. `GET /processos:download/789`:
```json
{
  "status": "in-progress",
  "code": "202",
  "messages": [],
  "result": {
    "link": "/processos:download:status/123456789"
  }
}
```

Em algumas situações poderá ser necessário responder a requisição com informações de paginação dos resultados. Para estas situações devemos passar o objeto page-info com as seguintes informações no corpo da resposta, somando-se aos atributos anteriormente mencionados:

- **page-info**: Objeto contendo informações de paginação para fins de navegação;
	- **current**: Página atual
	- **last**: Última página
	- **size**: Tamanho da página
	- **count**: Quantidade de registros

Exemplo:

```json
{
  "status": "ok",
  "code": "200",
  "messages": [],
  "result": [
    {
      "id": "1",
      "nome": "GAB. DESEMB. FULANO DE TAL",
      "ativo": "true"
    },
    {
      "id": "2",
      "nome": "GAB. DESEMB. CICRANO DE TAL",
      "ativo": "true"
    }
  ],
  "page-info": {
    "current": 1,
    "last": 10,
    "size": 2,
    "count": 20
  }
}
```

## Filtros

Os filtros de consulta devem ser definidos em um parâmetro da requisição GET. São informados no padrão JSON ou *inline*, a partir do parâmetro de requisição *filter*.

Para as requisições no formato JSON, os filtros poder ser do tipo simples (*simpleFilter*) ou complexo (*filter*). Os filtros simples são utilizados para cláusulas básicas, em que não há necessidade de condições de pesquisa muito elaboradas. Utilizam o padrão de chave e valor, onde a chave é o atributo da entidade a ser pesquisada. Exemplo:

`/processos?simpleFilter={"numero":"00012345620182000000"}`

Os filtros de consultas complexas devem ser definidos em um parâmetro da requisição chamado filter. Podem ser informados no padrão JSON ou inline e precisam especificar o tipo de operação desejada. Os operadores possíveis são os seguintes:

- **eq ou ==**: operador de igualdade;
- **lt ou <**: verifica se o valor de um determinado atributo é menor que um valor informado;
- **gt ou >**: verifica se o valor de um determinado atributo é maior que um valor informado;
- **le ou <=**: verifica se o valor de um determinado atributo é menor ou igual a um valor informado;
- **ge ou >=**: verifica se o valor de um determinado atributo é maior ou igual a um valor informado;
- **in**: verifica se o valor de um determinado atributo corresponde a um ou mais itens de uma lista de valores informada;
- **like**: verifica se um trecho de texto está contido no valor de um determinado atributo. Deverá ser utilizado asterisco, a fim de especificar se o texto informado deve corresponder à parte inicial, final ou se deve estar contido no conteúdo pesquisado. Exemplos: pessoa.nome like Pedro\* (nome deve começar com Pedro) ou pessoa.nome like \*Pedro (nome deve terminar com Pedro) ou pessoa.nome\_ like *Pedro* (nome deve conter o valor Pedro);
- **not**: operador de negação. Deve ser utilizado em conjunto com os operadores in (not-in), like (not-like) e eq (ne ou!=).

Exemplos:

- Busca um processo pelo número:`/processos?filter={"numero ": {"eq": "00012345620182000000"}}`

`/processos?filter=numero eq 00012345620182000000`

- Busca processos que tenham pedidos de justiça gratuita e cujo CPF da parte seja igual a determinado valor:

`/processos?filter={"justica-gratuita": {"eq ": true}, "partes.cpf": {"eq": "99977766654"}}`

`/processos?filter=justica-gratuita eq true; partes.cpf eq 99977766654`

- Busca processos cujo nome da parte inicia-se com determinado valor:

`/processos?filter={"partes.nome":{"like": "FULANO*"}}`

`/processos?filter=partes.nome like FULANO*`

- Busca processos cujo nome da parte contenha um determinado valor (em qualquer parte do nome):

`/processos?filter={"partes.nome":{"like":"*FULANO*"}}`

`/processos?filter=partes.nome like *FULANO*`

- Busca processos pelos códigos de determinadas classes processuais:

`/processos?filter={"classe.codigo":{"in": [20,30,40]}}`

`/processos?filter=classe.codigo in 20,30,40`

- Busca processos com data de distribuição entre duas datas:

`/processos?filter={"data-da-distribuicao":[{"ge": "2015-01-01"}, {"le": "2015-12-31"}]}`

`/processos?filter= data-da-distribuicao ge 2015-01-01; data-da-distribuicao le 2015-12-31`

- Busca processos de um determinado órgão julgador e que não estejam arquivados:

`/processos?filter={"orgao-julgador.id":{"eq":"12"}, "situacao":{"not-eq": "ARQ"}}`

`/processos?filter=orgao-julgador.id eq 12; situacao not-eq ARQ`

## Campos

Em determinadas situações, pode ser necessário retornar atributos específicos de uma entidade ou mesmo um resultado formado por atributos de diversas entidades. Nesses casos, deve-se utilizar o parâmetro fields para especificar os campos esperados (no formato JSON ou inline). Alguns exemplos:

- Busca números de processos que não estejam em segredo de justiça e que tenha valor maior que R$ 100.000,00:

`/processos?fields=["numero"]&filter={"segredo-de-justica": {"eq": false}, "valor-da-causa": {"gt": 100000}}`

`/processos?fields=numero&filter=segredo-de-justica eq false; valor-da-causa gt 100000`

- Busca os atributos número, nome da classe e data de distribuição de processos com data de distribuição entre um período de datas:

`/processos?fields=["numero", "classe.nome", "data-distribuicao"] & filter={"data-distribuicao": {"ge": "2015-01-01", "le": "2015-12-31"}}`

`/processos?fields=numero, classe.nome, data-distribuicao&filter=data-distribuicao ge 2015-01-01; data-distribuicao le 2015-12-31`

## Ordenação

A ordenação do resultado da pesquisa é outra necessidade frequente dos consumidores de APIs. No PJe, a ordenação é definida pelo parâmetro *order*. Exemplos:

- Busca processos não arquivados, ordenados pela data de distribuição:

`/processos?filter={"situacao": {"not-eq": "ARQ"}} &order={"data-da-distribuicao":"asc"}`

`/processos?filter=situacao not-eq ARQ&order=data-da-distribuicao asc`

- Busca documentos de um determinado processo, ordenados pela data de juntada:

`/processos/123/documentos?order={"data-de-juntada":"desc"}`

`/processos/123/documentos?order=data-de-juntada desc`

## Paginação

O principal objetivo da paginação é evitar o processamento, transmissão e exibição integral de lista de valores extensas, evitando, dessa forma, sobrecarga computacional e de tráfego de dados, desnecessariamente. No caso de omissão desse parâmetro na requisição, sugere-se limitar a quantidade de registros retornados, por meio de um valor padrão previamente configurado no serviço.

Na API do PJe, a paginação é garantida por dois parâmetros da requisição:

- **size**: informa a quantidade máxima de registros por página;
- **page**: define o número da página a ser retornada pela consulta. Por exemplo: uma lista de 30 itens, com 10 itens por página. A primeira página seria requisitada com os parâmetros size = 10 e page = 1; na segunda, a requisição solicitaria size = 10 e page = 2; e na terceira paǵina, size = 10 e page = 3.

Alguns exemplos:

- Busca a segunda página da lista de documentos de uma determinado processo, limitada a 30 itens por página:

`/processos/1234/documentos?page={"size":30, "page":2}`

`/processos/1234/documentos?page=size:30,page:2`

- Busca a primeira página da lista de processos não arquivados, limitada a 20 itens por página:

`/processos?filter={"situacao": {"not-eq": "ARQ"}}&page={"size":20, "page":1}`

`/processos?filter=situacao not-eq ARQ&page=size:20,page:1`

## Autenticação

[Manual de referência do SSO - PJe-JC](https://docs.pje.jus.br/servicos-negociais/servico-sso-pje-kc)

## Mensageria

Os serviços do PJe obedecem ao padrão de coreografia. Na coreografia cada microsserviço possui inteligência própria, sem necessidade de um serviço orquestrador. As ações de cada microsserviço são sensibilizadas através de um barramento de eventos. Cada serviço interage com esse barramento enviando eventos, que podem sensibilizar outros serviços, ou recebendo eventos que interessem a serviço. Este tipo de abordagem é responsável por trazer um alto nível de coesão e um baixo nível de acoplamento aos microsserviços.

Na nova arquitetura do PJe a interação entre os microsserviços através de eventos é viabilizada através de um barramento de mensagens, provido pela ferramenta RabbitMQ. Utilizando a estratégia de tópicos as mensagens são publicadas pelos serviços em uma exchange. Ao publicar uma mensagem à exchange, o serviço deverá também informar uma routing key que serve aos outros serviços de maneira a identificar o contexto daquele evento. Será através da routing key que os serviços poderão decidir se têm interesse ou não por aquele determinado evento. De acordo com a routing key as mensagens serão direcionadas as filas de cada serviço interessado, para que possam ser consumidas pelos mesmos.

***Interação com o barramento de mensagens***

![Imagem ilustrativa da interação com o barramento de mensagens](https://docs.pje.jus.br/assets/images/diagrama_rabbit-3e07321b5817afd452e0cac617b03839.png)

Para que isso tudo funcione temos que definir alguns padrões de publicação desses eventos no gerenciador de filas. A exchange será uma só,portanto todos os serviços deverão publicar para uma exchange de nome “pje-exchange”. A routing key deverá ter o seguinte formato:

`<JTR>.<GRAU>.<ID-SERVICO>.<MODELO>.<VERBO>`

Onde:

- **JTR**: identificação do Órgão Judiciário composto por 3 dígitos numéricos. Ex.: 200;
- **GRAU**: Número do grau de justiça. Ex.: 2;
- **ID-SERVICO**: Id do serviço que publicou a mensagem. Ex.: pje-legacy;
- **MODELO**: Entidade ou modelo afetado. Ex.: processo-judicial;
- **VERBO**: Verbo que indica a ação executada utilizando os verbos definidos pelo HTTP. Ex.: PUT.

Exemplo:

`200.2.pje-legacy.ProcessoJudicial.POST`

### O que é um evento/mensagem?

Um evento pode ser definido como uma notificação produzida por um microsserviço. Essa notificação será recebida pelos microsserviços subscritos que, de acordo com sua regra negocial, decidirão se a informação contida na notificação irá ou não produzir uma mudança em seu domínio de dados. Os eventos serão enviados ao RabbitMQ no formato JSON obedecendo ao seguinte padrão:

```json
{
  "uuid": "",
  "appName": "",
  "appVersion": "",
  "routingKey": "",
  "timestamp": "",
  "payload-hash": "",
  "payload": {},
  "links": [
    {
      "rel": "self",
      "link": ""
    },
    {
      "rel": "",
      "link": ""
    }
  ]
}
```

## Referências

- [O'Reilly - Restful web services](https://www.oreilly.com/library/view/restful-web-services/9780596809140/ch04.html)
- [RabbitMQ](https://www.rabbitmq.com/)