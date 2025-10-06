---
title: "Cumprimento de decisão | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Cumprimento%20de%20decis%C3%A3o"
author:
published:
created: 2025-09-30
description: "Início"
tags:
  - "clippings"
---
# Cumprimento de decisão | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Cumprimento%20de%20decis%C3%A3o


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/#__docusaurus_skipToContent_fallback)

## Cumprimento de decisão

## Início

O nó inicial segue o padrão de todos os nós de início dos fluxos no PJe, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada. Através da opção "Atribuir a", deve-se vincular a tarefa a uma raia que contenha papéis e localizações os quais se deseja que tenham acesso à tarefa criada. A primeira tarefa nesse fluxo é a de avaliação do que foi determinado pelo magistrado.

### Avaliar determinações do magistrado

O primeiro nó de tarefa desse fluxo, denominado "Avaliar determinações do magistrado", é representado por uma tela já preparada no sistema para esse fim. É a tarefa onde o servidor construirá visualiza a decisão do magistrado a fim de encaminhá-la ao cumprimento.

#### Variáveis

- Processo\_Fluxo\_visualizarDecisao

Para configurar o nó de tarefa "Avaliar determinações do magistrado", deve-se criar um nó de tarefa, vinculado ao fluxo, que contenha a variável "Processo\_Fluxo\_visualizarDecisao" como sendo de "Escrita" e do tipo "Frame".

- cumpridec\_haintimacoes

Para permitir que se realize intimações a partir da decisão do magistrado, deve-se acrescentar a variável "cumpridec\_haintimacoes" como sendo de "Escrita" e cujo valor é obrigatório do tipo "Checkbox", de forma que acima da decisão visualizada, o servidor terá a opção de selecionar o cumprimento de intimações para encaminhamento no fluxo para a tarefa correta.

- cumpridec\_haoutrasprovidencias

Para permitir que o fluxo de cumprimento de decisões possa ser executado mais de uma vez, já que sua ocorrência pode ser cíclica em determinados casos (citar casos, deve-se configurar a variável "cumpridec\_haoutrasprovidencias" como sendo de escrita e cujo valor é obrigatório de forma que enquanto o servidor ainda tiver providências a adotar relativas às determinações do magistrado, ele continuará dentro do fluxo de cumprimento executando uma de suas opções.

#### Transições de saída

- Testa existência de providências ou intimações

A transição de saída padrão desse nó vai para o nó de decisão que verificará os valores das variáveis de checkbox criadas. Essa transição deve ser criada com a opção "Ocultar" desmarcada.

#### Eventos

- Finalizar tarefa

O evento "Finalizar tarefa" deve ser configurado contendo as seguintes ações:

1. Ação 1, contendo a expressão
```java
#{org.jboss.seam.bpm.processInstance.contextInstance.setVariable('cumpridec:haintimacoes',
      org.jboss.seam.bpm.taskInstance.getVariable('sim_nao:cumpridec_haintimacoes'))}
```

A ação 1 faz com que fique gravado como variável de fluxo o valor da variável de tarefa que guardara a informação registrada pelo servidor de que há ou não intimações a cumprir. Dessa forma, o valor marcado poderá ser recuperado futuramente no fluxo.

1. Ação 2, contendo a expressão
```java
#{org.jboss.seam.bpm.processInstance.contextInstance.setVariable('cumpridec:haoutrasprovidencias', 
    org.jboss.seam.bpm.taskInstance.getVariable('sim_nao:cumpridec_haoutrasprovidencias'))}
```

A ação 2 faz com que fique gravado como variável de fluxo o valor da variável de tarefa que guardara a informação registrada pelo servidor de que há ou não outras providências a cumprir. Dessa forma, o valor marcado poderá ser recuperado futuramente no fluxo.

### Testa existência de providências ou intimações

Esse nó de decisão é responsável por encaminhar o processo para finalização no caso de já terem sido cumpridas todas as determinações do magistrado, ou para retorno para cumprimento no caso de existirem outras providências a cumprir ou alguma intimação pendente a realizar.

Ele deve ser criado contendo a seguinte expressão:

```java
#{(org.jboss.seam.bpm.processInstance.contextInstance.getVariable('cumpridec:haintimacoes') or 
    org.jboss.seam.bpm.processInstance.contextInstance.getVariable('cumpridec:haoutrasprovidencias')) ? 'Separação em cumprimento de ato judicial' : 'Término'}
```

#### Transições de saída

- Separação em cumprimento de ato judicial Deve-se criar uma transição para o o nó de separação responsável por executar em paralelo as diversas possibilidades do fluxo. Essa transição deve ser criada com a opção "Ocultar" desmarcada.

### Separação em cumprimento de ato judicial

Esse nó de separação é responsável por encaminhar o processo para execução de atividades paralelas. Os nós de decisão de verificação de intimações e de outras providências encaminharão o processo no fluxo de acordo com o selecionado previamente.

#### Transições de saída

- Há intimações pendentes de criação?

Deve-se criar uma transição para o o nó de decisão responsável por verificar se há intimações pendentes com vistas a encaminhar para o subprocesso correto.

- Há outras providências determinadas?

Deve-se criar uma transição para o o nó de decisão responsável por verificar se há outras providências para cumprimento, encaminhando o processo para o(s) caminho(s) correto(s).

### Redistribuir processo

Para configurar o nó de tarefa Redistribuir processo, deve-se criar um nó de tarefa, vinculado ao fluxo, que contenha a variável "Processo\_Fluxo\_abaRedistribuicaoProcesso" como sendo de "Escrita" e do tipo "Página". Deve-se vincular o nó de tarefa a uma raia que contenha papéis e localizações os quais se deseja que tenham acesso à tarefa criada.