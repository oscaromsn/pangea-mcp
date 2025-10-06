---
title: "Padrões de API | Documentação PDPJ-Br"
source: "https://docs.pdpj.jus.br/desenvolvendo-para-a-pdpj/padroes-de-api"
author:
published:
created: 2025-09-30
description: "Orientação a recursos"
tags:
  - "clippings"
---
# Padrões de API | Documentação PDPJ-Br
Available at https://docs.pdpj.jus.br/desenvolvendo-para-a-pdpj/padroes-de-api


## Orientação a recursos

Uma API RESTful deve ser orientada a recursos. Em se tratando do ecossistema PDPJ, na maior parte das vezes, os recursos serão representados pelas entidades negociais do serviço.

As entidades que existem independentemente de seus relacionamentos (as chamadas entidades fortes) terão seus nomes na parte inicial da URL do serviço. Por exemplo: `/api/v1/processos/*`.

Por outro lado, as entidades cuja existência dependa do relacionamento com outras entidades (as chamadas entidades fracas), terão seus nomes informados após os das entidades que determinam sua existência. Exemplo: `/api/v1/processos/*documentos*`.

Evite criar APIs que espelhem integralmente a estrutura do banco de dados do sistema. A exposição das entidades por meio das URLs de serviço deve ser representada por uma granularidade negocial alta, utilizando, eventualmente, técnicas de desnormalização das tabelas do banco de dados e combinando informações relacionadas em recursos maiores. O consumidor do serviço não deve ser exposto aos detalhes da implementação interna.

Exemplos:

## Substantivos no plural

Como convenção, deve-se utilizar substantivos no plural nos nomes das entidades negociais. Para entidades com nomenclatura composta, deve-se separar os nomes com hífen.

Por exemplo: `/orgaos-julgadores/*`.

## Verbos HTTP

A API deve utilizar apenas os verbos HTTP para invocação dos serviços:

- GET: recupera uma ou mais representações de uma entidade.
- POST: cria uma nova entidade.
- PATCH: altera os atributos de uma entidade ou de um lote de entidades do mesmo tipo.
- PUT: substitui por completo os atributos de uma entidade ou de um lote de entidades do mesmo tipo.
- DELETE: remove uma determinada entidade ou um lote de entidades do mesmo tipo.

### Recurso

| **Recurso** | **GET** | **POST** | **PATCH** | **DELETE** |
| --- | --- | --- | --- | --- |
| */processos* | Lista todos os processos | Cria um processo | Altera processos em lote | Exclui todos os processos |
| */processos/1* | Retorna o processo de ID igual a 1 | ERRO! | Atualiza os atributos do processo de ID igual a 1 | Exclui o processo de ID igual a 1 |
| */processos/1/documentos* | Lista todos os documentos vinculados a processo de ID igual a 1 | Cria um documento vinculado ao processo de ID igual a 1 | Altera em lote todos os documentos vinculados ao processo de ID igual a 1 | Exclui em lote todos os documentos vinculados ao processo de ID igual a 1 |

O tipo de mídia JSON (*Content-Type: application/json*) é o padrão utilizado pelas APIs da PDPJ. Eventualmente, em casos de necessidades específicas, pode-se utilizar outros tipos.

## Verbos personalizados

Haverá situações em que utilização dos verbos HTTP não será suficiente para a composição das URLs de serviços. Nesses casos, devem ser utilizados verbos personalizados, separados do nome da entidade por *dois pontos*.

Exemplos:

```markdown
/processos:distribuir/ 
public void distribuirProcesso(ProcessoDTO dto)
```

```markdown
/processos/{id-processo}/partes:intimar
public void intimarPartes(int idProcesso)
```

## Versionamento

O número da versão deve constar na URL do serviço, após o nome do módulo. O versionamento deve ser formado pela letra *v*, seguido do *major number* da versão. A informação da versão deve ser precedida da palavra *api*. Exemplo: `/precatorios/*api/v1*/*`

## Formato das mensagens

O objetivo de se padronizar o formato das mensagens de resposta de uma API é facilitar seu uso por meio da previsibilidade. As mensagens de retorno devem incluir os seguintes atributos:

- **status**: é o estado da resposta. Os valores possíveis são:
	- *ok*: processamento bem sucedido.
	- *error*: houve problemas durante o processamento. Obrigatoriamente, acompanha uma lista de mensagens (*messages*).
	- *in-progress*: resposta a chamadas assíncronas. Deve ser acompanhada de URL para checar a situação do processamento.
- **code**: especifica o código HTTP do processamento. Códigos da família 2xx ou 3xx serão acompanhados do *status* *ok*, com exceção ao código 202 (Accepted), cujo *status* será *in-progress*. No caso de operações de *POST*, o código retornado deve ser 201 (CREATED). No caso de *status* igual a *error*, os códigos HTTP serão das famílias 4xx ou 5xx. Confira a lista completa dos códigos em [https://en.wikipedia.org/wiki/List\_of\_HTTP\_status\_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). Existem algumas razões para se especificar o código na mensagem, em vez de utilizar o código HTTP padrão da resposta:
	- É mais fácil e rápido para os consumidores acessarem o código diretamente na mensagem JSON.
	- Os códigos HTTP padrão não são totalmente confiáveis. Alguns proxies podem sobrepor os códigos originais, criando mensagens potencialmente inconsistentes.
	- Trata-se de uma boa prática de implementação, pois a API não fica dependente de configurações do ambiente computacional.
- **messages**: lista de mensagens referente ao processamento da requisição. Tipicamente, este atributo será preenchido em caso de erros.
- **result**: retorna o resultado do processamento

Alguns exemplos:

- Resultado de chamada hipotética ao serviço GET `_/orgaos-julgadores/_`:
```json
{
    "status": "ok",
    "code": "200",
    "messages": [],
    "result":
    [
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
- Resultado de chamada hipotética ao serviço de consulta ao cabeçalho de um determinado processo. Nesse caso, o retorno não é exatamente um objeto do tipo *processo*, portanto, deverá ser informado como *object*. + `GET _/processos:cabecalho/789_`:
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
- Resultado de uma chamada mal sucedida a um serviço de pesquisa em que o consultante não tenha autorização para visualizar um determinado processo.`GET _/processos/555_`:
```json
{
    "status": "error",
    "code": "403",
    "messages": [
        "Sem permissão para visualizar o processo"
    ],
    "result": {}
}
```
- Resultado de chamada a operação assíncrona de download dos autos de um determinado processo. Nesse caso, retorna um link para consulta à situação do processamento, contendo um número de protocolo.`GET _/processos:download/789_`:
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

Em algumas situações poderá ser necessário responder a requisição com informações de paginação dos resultados. Para estas situações devemos passar o objeto *page-info* com as seguintes informações no corpo da resposta, somando-se aos atributos anteriormente mencionados:

- *page-info*: Objeto contendo informações de paginação para fins de navegação;
	- *current*: Página atual
	- *last*: Última página
	- *size*: Tamanho da página
	- *count*: Quantidade de registros

Exemplo:

```json
{
    "status": "ok",
    "code": "200",
    "messages": [],
    "result":
    [
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
        "count": 20,
    }
}
```

## Filtros

Os filtros de consulta devem ser definidos em um parâmetro da requisição GET. São informados no padrão JSON ou *inline*, a partir do parâmetro de requisição *filter*.

Para as requisições no formato JSON, os filtros poder ser do tipo simples (*simpleFilter*) ou complexo (*filter*). Os filtros simples são utilizados para cláusulas básicas, em que não há necessidade de condições de pesquisa muito elaboradas. Utilizam o padrão de chave e valor, onde a chave é o atributo da entidade a ser pesquisada. Exemplo:

`/processos?simpleFilter={"numero":"00012345620182000000"}`

Os filtros de consultas complexas devem ser definidos em um parâmetro da requisição chamado *filter*. Podem ser informados no padrão JSON ou *inline* e precisam especificar o tipo de operação desejada. Os operadores possíveis são os seguintes:

- *eq* ou *`==`*: operador de igualdade
- *lt* ou *`<`*: verifica se o valor de um determinado atributo é menor que um valor informado
- *gt* ou *`>`*: verifica se o valor de um determinado atributo é maior que um valor informado
- *le* ou *`<=`*: verifica se o valor de um determinado atributo é menor ou igual a um valor informado
- *ge* ou *`>=`*: verifica se o valor de um determinado atributo é maior ou igual a um valor informado
- *in*: verifica se o valor de um determinado atributo corresponde a um ou mais itens de uma lista de valores informada
- *like*: verifica se um trecho de texto está contido no valor de um determinado atributo. Deverá ser utilizado *asterisco*, a fim de especificar se o texto informado deve corresponder à parte inicial, final ou se deve estar contido no conteúdo pesquisado. Exemplos: `pessoa.nome like Pedro*` (*nome* deve começar com *Pedro*) ou `pessoa.nome like \*Pedro` (*nome* deve terminar com *Pedro*) ou `pessoa.nome_ like *Pedro*` (*nome* deve conter o valor *Pedro*)
- *not*: operador de negação. Deve ser utilizado em conjunto com os operadores *in* (*not-in*), *like* (*not-like*) e *eq* (*ne* ou *`!=`*)

Exemplos:

- Busca um processo pelo número:

`/processos?filter={"numero ": {"eq": "00012345620182000000"}}`

`/processos?filter=numero eq 00012345620182000000`

- Busca processos que tenham pedidos de justiça gratuita e cujo CPF da parte seja igual a determinado valor:

`/processos?filter={"justica-gratuita": {"eq ": true}, "partes.cpf": {"eq": "99977766654"}}`

`/processos?filter=justica-gratuita eq true; partes.cpf eq 99977766654`

- Busca processos cujo nome da parte inicia-se com determinado valor:

`/processos?filter={"partes.nome":{"like": "FULANO*"}}`

`/processos?filter=partes.nome like FULANO*`

- Busca processos cujo nome da parte contenha um determinado valor (em qualquer parte do nome):

`/processos?filter={"partes.nome":{"like":"\*FULANO*"}}`

`/processos?filter=partes.nome like \*FULANO*`

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

Em determinadas situações, pode ser necessário retornar atributos específicos de uma entidade ou mesmo um resultado formado por atributos de diversas entidades. Nesses casos, deve-se utilizar o parâmetro *fields* para especificar os campos esperados (no formato JSON ou *inline*). Alguns exemplos:

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

- *size*: informa a quantidade máxima de registros por página;
- *page*: define o número da página a ser retornada pela consulta. Por exemplo: uma lista de 30 itens, com 10 itens por página. A primeira página seria requisitada com os parâmetros *size* = 10 e *page* = 1; na segunda, a requisição solicitaria *size* = 10 e *page* = 2; e na terceira paǵina, *size* = 10 e *page* = 3.

Alguns exemplos:

- Busca a segunda página da lista de documentos de uma determinado processo, limitada a 30 itens por página:

`/processos/1234/documentos?page={"size":30, "page":2}`

`/processos/1234/documentos?page=size:30,page:2`

- Busca a primeira página da lista de processos não arquivados, limitada a 20 itens por página:

`/processos?filter={"situacao": {"not-eq": "ARQ"}}&page={"size":20, "page":1}`

`/processos?filter=situacao not-eq ARQ&page=size:20,page:1`

## Autenticação

[Manual de referência do SSO](https://docs.pdpj.jus.br/servicos-estruturantes/autenticacao-sso)

## Referências

[O'Reilly - Restful web services](https://www.oreilly.com/library/view/restful-web-services/9780596809140/ch04.html)