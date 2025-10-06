---
title: "Transição de Desistência | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Transi%C3%A7%C3%A3o%20de%20desist%C3%AAncia"
author:
published:
created: 2025-09-30
description: "A transição de desistência permite que, em um nó de tarefa, o usuário opte por desistir da execução da tarefa. Nesta situação, o preenchimento dos campos do formulário se torna desnecessário. Assim, é essencial configurar a transição para que o sistema reconheça que a execução do formulário não será a padrão, ou seja, os campos não precisarão ser preenchidos. Com essa configuração, o configurador de fluxos pode indicar transições possíveis de uso sem que o usuário final precise completar o formulário exibido."
tags:
  - "clippings"
---
# Transição de Desistência | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Transi%C3%A7%C3%A3o%20de%20desist%C3%AAncia


## Transição de Desistência

A transição de desistência permite que, em um nó de tarefa, o usuário opte por desistir da execução da tarefa. Nesta situação, o preenchimento dos campos do formulário se torna desnecessário. Assim, é essencial configurar a transição para que o sistema reconheça que a execução do formulário não será a padrão, ou seja, os campos não precisarão ser preenchidos. Com essa configuração, o configurador de fluxos pode indicar transições possíveis de uso sem que o usuário final precise completar o formulário exibido.

Por exemplo, em telas que utilizam o editor sem assinatura, que possuem um evento de tarefa vinculado que exige a movimentação, o usuário é obrigado a selecionar esse evento, assim como o tipo de documento da tela. Na desistência, não há necessidade de selecionar o movimento nem o tipo de documento.

Essa configuração foi objeto da pendência **PJEII-15414**.

## Como Configurar a Transição de Desistência

Para utilizar essa funcionalidade, é necessário configurar, no nó de tarefa, um evento "Criar tarefa" ou "Iniciar tarefa" com a seguinte expressão:

```java
#{tramitacaoProcessualService.gravaVariavelTarefa('pje:fluxo:transicao:dispensaRequeridos','Nome da transição que dispensa os campos')}
```

Onde `"Nome da transição que dispensa os campos"` é o nome da transição configurada que o usuário poderá usar para desistir do preenchimento do formulário.

Caso queira aplicar a funcionalidade em mais de uma transição, é possível configurar um único evento com a seguinte expressão:

```java
#{tramitacaoProcessualService.gravaVariavelTarefa('pje:fluxo:transicao:dispensaRequeridos','Nome da transição 1, Nome da transição 2')}
```