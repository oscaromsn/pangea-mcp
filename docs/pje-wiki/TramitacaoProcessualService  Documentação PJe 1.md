---
title: "TramitacaoProcessualService | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Classes/Classe%20TramitacaoProcessualService"
author:
published:
created: 2025-09-30
description: "| Método                                                                                               | Descrição                                                                                                                         |"
tags:
  - "clippings"
---
# TramitacaoProcessualService | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Classes/Classe%20TramitacaoProcessualService


## TramitacaoProcessualService

| Método | Descrição |
| --- | --- |
| `void apagaVariavel(String nome)` | Apaga a variável de fluxo com o nome dado. |
| `void apagaVariavelTarefa(String nome)` | Apaga a variável de tarefa com o nome dado. |
| `void gravaVariavel(String nome, Object value)` | Grava um determinado valor da variável com o nome dado no fluxo atual de tramitação, sobrescrevendo seu valor, se já existente. |
| `void gravaVariavelTarefa(String nome, Object value)` | Grava um determinado valor da variável com o nome dado na tarefa atual, sobrescrevendo seu valor, se já existente. |
| `ProcessoTrf recuperaProcesso()` | Recupera o processo judicial da instância de fluxo atual. |
| `ProcessoTrf recuperaProcesso(Integer idProcesso)` | Recupera o processo judicial que tem o identificador dado. |
| `Object recuperaVariavel(String nome)` | Recupera o valor de uma variável dada pretensamente existente no fluxo atual de tramitação do processo. |
| `Object recuperaVariavelTarefa(String nome)` | Recupera o valor de uma variável existente da tarefa atual do fluxo de tramitação do processo. |
| `boolean sigiloso()` | Indica se um processo judicial atual está marcado como sigiloso no sistema. |
| `boolean sigiloso(Integer idProcesso)` | Indica se um processo judicial com o identificador dado está marcado como sigiloso no sistema. |
| `boolean temAssunto(Integer codigoAssunto)` | Indica se o processo judicial atual tem entre seus assuntos ativos, aquele cujo código é o indicado. |
| `boolean temAssunto(Integer idProcesso, Integer codigoAssunto)` | Indica se o processo com o identificador dado tem, entre seus assuntos ativos, aquele cujo código é o indicado. |
| `boolean temAssuntoDoGrupo(Integer idProcesso, String idGrupo)` | Indica se o processo indicado tem, entre seus assuntos, algum dos assuntos contidos no grupo com o identificador dado. |
| `boolean temAssuntoDoGrupo(String idGrupo)` | Indica se o processo tem, entre seus assuntos, algum dos assuntos contidos no grupo com o identificador dado. |
| `boolean temMovimento(Integer codigoMovimento)` | Indica se o processo atual tem, entre seus movimentos, o movimento do código indicado. |
| `boolean temMovimento(Integer codigoMovimento, int limitePesquisa)` | Indica se o processo atual tem, entre seus movimentos, o movimento do código indicado. |
| `boolean temMovimento(Integer idProcesso, Integer codigoMovimento)` | Indica se o processo indicado tem, entre seus movimentos, o movimento do código indicado. |
| `boolean temMovimento(Integer idProcesso, Integer codigoMovimento, int limitePesquisa)` | Indica se o processo indicado tem, entre seus movimentos, o movimento do código indicado. |
| `boolean temMovimento(Integer idProcesso, Integer codigoMovimento, int limitePesquisa, String... )` | Indica se o processo indicado tem, entre seus movimentos, o movimento do código indicado. |
| `boolean temMovimento(Integer codigoMovimento, int limitePesquisa, String... complementos)` | Indica se o processo atual tem, entre seus movimentos, o movimento do código indicado. |
| `boolean temMovimentoDoGrupo(Integer idProcesso, String idGrupo)` | Indica se o processo atual teve lançado algum movimento do grupo identificado. |
| `boolean temMovimentoDoGrupo(Integer idProcesso, String idGrupo, int limitePesquisa)` | Indica se o processo atual teve, entre as (limitePesquisa) últimas movimentações, algum dos movimentos do grupo identificado. |
| `boolean temMovimentoDoGrupo(String idGrupo)` | Indica se o processo atual teve lançado algum movimento do grupo identificado. |
| `boolean temMovimentoDoGrupo(String idGrupo, int limitePesquisa)` | Indica se o processo atual teve, entre as (limitePesquisa) últimas movimentações, algum dos movimentos do grupo identificado. |
| `boolean temUrgencia()` | Indica se um processo judicial atual teve pedido de apreciação urgente solicitado e ainda não apreciado. |
| `boolean temUrgencia(Integer idProcesso)` | Indica se um processo judicial com o identificador dado teve pedido de apreciação urgente solicitado e ainda não apreciado. |

## Detalhamento dos métodos

### recuperaVariavel

Object recuperaVariavel(String nome)

Recupera o valor de uma variável dada pretensamente existente no fluxo atual de tramitação do processo.

Parameters:

nome - o nome da variável que se pretende recuperar

Returns:

o valor da variável, se existente, ou null

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual ou seu fluxo de tramitação atual

### gravaVariavel

void gravaVariavel(String nome, Object value)

Grava um determinado valor da variável com o nome dado no fluxo atual de tramitação, sobrescrevendo seu valor, se já existente.

Parameters:

nome - o nome da variável a ser gravada value - o valor a ser gravado

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual ou seu fluxo de tramitação atual

### recuperaVariavelTarefa

Object recuperaVariavelTarefa(String nome)

Recupera o valor de uma variável existente da tarefa atual do fluxo de tramitação do processo.

Parameters:

nome - o nome da variável que se pretende recuperar

Returns:

o valor da variável, se existente na tarefa, ou null

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual, seu fluxo de tramitação atual ou sua tarefa atual

### gravaVariavelTarefa

void gravaVariavelTarefa(String nome, Object value)

Grava um determinado valor da variável com o nome dado na tarefa atual, sobrescrevendo seu valor, se já existente.

Parameters:

nome - o nome da variável a ser gravada value - o valor a ser gravado

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual, seu fluxo de tramitação ou a tarefa à qual a variável será vinculada

### apagaVariavel

void apagaVariavel(String nome)

Apaga a variável de fluxo com o nome dado.

Parameters:

nome - o nome da variável a ser apagada do fluxo

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual ou seu fluxo de tramitação atual

### apagaVariavelTarefa

void apagaVariavelTarefa(String nome)

Apaga a variável de tarefa com o nome dado.

Parameters:

nome - o nome da variável a ser apagada

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual, seu fluxo de tramitação ou a tarefa da qual a variável deve ser apagada

### recuperaProcesso

#### ProcessoTrf recuperaProcesso(Integer idProcesso)

Recupera o processo judicial que tem o identificador dado.

Parameters:

idProcesso - o identificador interno do processo judicial a ser recuperado.

Returns:

o processo judicial que tem o identificador dado, ou null, se ele não existir

#### ProcessoTrf recuperaProcesso()

Recupera o processo judicial da instância de fluxo atual.

Returns:

o processo judicial que tem o identificador dado, ou null, se ele não existir

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual

### temUrgencia

boolean temUrgencia(Integer idProcesso)

Indica se um processo judicial com o identificador dado teve pedido de apreciação urgente solicitado e ainda não apreciado.

Parameters:

idProcesso - o identificador interno do processo judicial

Returns:

true, se há pedido de apreciação urgente solicitado e ainda não apreciado

Throws:

IllegalArgumentException, - caso o identificador dado não pertença a um processo judicial existente na instalação

### sigiloso

#### boolean sigiloso()

Indica se um processo judicial atual está marcado como sigiloso no sistema.

Returns:

true, se o processo judicial está marcado como sigiloso

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual

#### boolean sigiloso(Integer idProcesso)

Indica se um processo judicial com o identificador dado está marcado como sigiloso no sistema.

Parameters:

idProcesso - o identificador interno do processo judicial

Returns:

true, se o processo judicial está marcado como sigiloso

Throws:

IllegalArgumentException, - caso o identificador dado não pertença a um processo judicial existente na instalação

### temAssunto

boolean temAssunto(Integer codigoAssunto)

Indica se o processo judicial atual tem entre seus assuntos ativos, aquele cujo código é o indicado.

Parameters:

codigoAssunto - o código do assunto na instalação, que, ordinariamente, será o código nacional do assunto no SGT, conforme Resolução CNJ 65

Returns:

true, se o processo tem, entre seus assuntos, aquele com o código indicado.

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual

#### boolean temAssunto(Integer idProcesso, Integer codigoAssunto)

Indica se o processo com o identificador dado tem, entre seus assuntos ativos, aquele cujo código é o indicado.

Parameters:

idProcesso - o identificador do processo judicial a ser pesquisado codigoAssunto - o código do assunto na instalação, que, ordinariamente, será o código nacional do assunto no SGT, conforme Resolução CNJ 65

Returns:

true, se o processo tem, entre seus assuntos, aquele com o código indicado.

### temAssuntoDoGrupo

#### boolean temAssuntoDoGrupo(String idGrupo)

Indica se o processo tem, entre seus assuntos, algum dos assuntos contidos no grupo com o identificador dado.

Parameters:

idGrupo - o identificador do grupo

Returns:

true, se o processo tem, entre seus assuntos, ao menos um que faz parte do grupo indicado

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual

#### boolean temAssuntoDoGrupo(Integer idProcesso, String idGrupo)

Indica se o processo indicado tem, entre seus assuntos, algum dos assuntos contidos no grupo com o identificador dado.

Parameters:

idProcesso - o identificador do processo idGrupo - o identificador do grupo

Returns:

true, se o processo tem, entre seus assuntos, ao menos um que faz parte do grupo indicado

Throws:

IllegalArgumentException, - caso o identificador dado não pertença a um processo judicial existente na instalação

### temMovimento

#### boolean temMovimento(Integer codigoMovimento)

Indica se o processo atual tem, entre seus movimentos, o movimento do código indicado.

Parameters:

codigoMovimento - o código do movimento a ser pesquisado

Returns:

true, se o movimento tiver sido lançado no processo

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual IllegalArgumentException, - caso o código do movimento não exista na instalação

#### boolean temMovimento(Integer idProcesso, Integer codigoMovimento)

Indica se o processo indicado tem, entre seus movimentos, o movimento do código indicado.

Parameters:

idProcesso - o identificador do processo judicial codigoMovimento - o código do movimento a ser pesquisado

Returns:

true, se o movimento tiver sido lançado no processo

Throws:

IllegalArgumentException, - caso o processo judicial ou o código do movimento não exista na instalação

#### boolean temMovimento(Integer codigoMovimento, int limitePesquisa)

Indica se o processo atual tem, entre seus movimentos, o movimento do código indicado. A pesquisa será feita até o número de movimentos indicado no parâmetro "limitePesquisa", que poderá ser 0 (zero) para o caso de se pretender avaliar todas as movimentações já ocorridas no processo.

Parameters:

codigoMovimento - o código do movimento a ser pesquisado limitePesquisa - indicação de que a pesquisa deve se restringir aos últimos movimentos, limitados ao número indicado no limite, podendo esse número ser 0 caso se pretenda verificar todos os movimentos do processo

Returns:

true, se o movimento tiver sido lançado no processo nas últimas (limitePesquisa) movimentações

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual IllegalArgumentException, - caso o código do movimento não exista na instalação

#### boolean temMovimento(Integer idProcesso, Integer codigoMovimento, int limitePesquisa)

Indica se o processo indicado tem, entre seus movimentos, o movimento do código indicado. A pesquisa será feita até o número de movimentos indicado no parâmetro "limitePesquisa", que poderá ser 0 (zero) para o caso de se pretender avaliar todas as movimentações já ocorridas no processo.

Parameters:

idProcesso - o identificador do processo judicial codigoMovimento - o código do movimento a ser pesquisado limitePesquisa - indicação de que a pesquisa deve se restringir aos últimos movimentos, limitados ao número indicado no limite, podendo esse número ser 0 caso se pretenda verificar todos os movimentos do processo

Returns:

true, se o movimento tiver sido lançado no processo indicados nas últimas (limitePesquisa) movimentações

Throws:

IllegalArgumentException, - caso o processo judicial ou o código do movimento não exista na instalação

#### boolean temMovimento(Integer codigoMovimento, int limitePesquisa, String... complementos)

Indica se o processo atual tem, entre seus movimentos, o movimento do código indicado. A pesquisa será feita até o número de movimentos indicado no parâmetro "limitePesquisa", que poderá ser 0 (zero) para o caso de se pretender avaliar todas as movimentações já ocorridas no processo. A pesquisa também poderá reclamar que a movimentação pesquisada seja especializada pelo complemento da movimentação. A lista de complementos exigida deverá ser indicada por meio de Strings no formato codigoComplemento:valorComplemento. O sistema trata o código do complemento como inteiro e o seu valor como inteiro, caso do tipo de complemento seja um domínio, ou como String, caso seja complemento livre.

Parameters:

codigoMovimento - o código do movimento a ser pesquisado limitePesquisa - indicação de que a pesquisa deve se restringir aos últimos movimentos, limitados ao número indicado no limite, podendo esse número ser 0 caso se pretenda verificar todos os movimentos do processo complementos - lista de complementos, no formato "codigoComplemento(int):valorComplemento" que devem necessariamente estar presentes para que o resultado seja verdadeiro

Returns:

true, se o movimento tiver sido lançado no processo e com os complementos indicados nas últimas (limitePesquisa) movimentações

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual IllegalArgumentException, - caso o código do movimento não exista na instalação

#### boolean temMovimento(Integer idProcesso, Integer codigoMovimento, int limitePesquisa, String... complementos)

Indica se o processo indicado tem, entre seus movimentos, o movimento do código indicado. A pesquisa será feita até o número de movimentos indicado no parâmetro "limitePesquisa", que poderá ser 0 (zero) para o caso de se pretender avaliar todas as movimentações já ocorridas no processo. A pesquisa também poderá reclamar que a movimentação pesquisada seja especializada pelo complemento da movimentação. A lista de complementos exigida deverá ser indicada por meio de Strings no formato codigoComplemento:valorComplemento. O sistema trata o código do complemento como inteiro e o seu valor como inteiro, caso do tipo de complemento seja um domínio, ou como String, caso seja complemento livre.

Parameters:

idProcesso - o identificador do processo judicial codigoMovimento - o código do movimento a ser pesquisado limitePesquisa - indicação de que a pesquisa deve se restringir aos últimos movimentos, limitados ao número indicado no limite, podendo esse número ser 0 caso se pretenda verificar todos os movimentos do processo complementos - lista de complementos, no formato "codigoComplemento(int):valorComplemento" que devem necessariamente estar presentes para que o resultado seja verdadeiro

Returns:

true, se o movimento tiver sido lançado no processo e com os complementos indicados nas últimas (limitePesquisa) movimentações

Throws:

IllegalArgumentException, - caso o processo judicial ou o código do movimento não exista na instalação

### temMovimentoDoGrupo

#### boolean temMovimentoDoGrupo(String idGrupo)

Indica se o processo atual teve lançado algum movimento do grupo identificado.

Parameters:

idGrupo - o identificador do grupo de movimentações

Returns:

true, se o processo tem algum dos movimentos do grupo

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual IllegalArgumentException, - caso o código do grupo não exista na instalação

#### boolean temMovimentoDoGrupo(Integer idProcesso, String idGrupo)

Indica se o processo atual teve lançado algum movimento do grupo identificado.

Parameters:

idProcesso - o identificador do processo idGrupo - o identificador do grupo de movimentações

Returns:

true, se o processo tem algum dos movimentos do grupo

Throws:

IllegalArgumentException, - caso o processo judicial ou o código do grupo não exista na instalação

#### boolean temMovimentoDoGrupo(String idGrupo, int limitePesquisa)

Indica se o processo atual teve, entre as (limitePesquisa) últimas movimentações, algum dos movimentos pertencentes ao grupo identificado.

Parameters:

idGrupo - o identificador do grupo de movimentações limitePesquisa - indicação de que a pesquisa deve se restringir aos últimos movimentos, limitados ao número indicado no limite, podendo esse número ser 0 caso se pretenda verificar todos os movimentos do processo

Returns:

true, se algum dos últimos movimentos pertence ao grupo indicado

Throws:

IllegalStateException - caso a chamada tenha sido feita sem que, contextualmente, seja possível identificar o processo judicial atual IllegalArgumentException, - caso o código do grupo não exista na instalação

#### boolean temMovimentoDoGrupo(Integer idProcesso, String idGrupo, int limitePesquisa)

Indica se o processo atual teve, entre as (limitePesquisa) últimas movimentações, algum dos movimentos pertencentes ao grupo identificado.

Parameters:

idProcesso - o identificador do processo judicial idGrupo - o identificador do grupo de movimentações limitePesquisa - indicação de que a pesquisa deve se restringir aos últimos movimentos, limitados ao número indicado no limite, podendo esse número ser 0 caso se pretenda verificar todos os movimentos do processo

Returns:

true, se algum dos últimos movimentos pertence ao grupo indicado

Throws:

IllegalArgumentException, - caso o processo judicial ou o código do grupo não exista na instalação