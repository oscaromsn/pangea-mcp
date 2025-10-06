---
title: "Contagem Automática de Prazos | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Contagem%20autom%C3%A1tica%20de%20prazos"
author:
published:
created: 2025-09-30
description: "Para a contagem automática se concretizar, o processo deve ser enviado a um nó de estado (state) ou de tarefa (task-node) no qual seja definida como verdadeira (true) uma variável de processo de negócio chamada pje:aguardaPeticao."
tags:
  - "clippings"
---
# Contagem Automática de Prazos | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Contagem%20autom%C3%A1tica%20de%20prazos


## Contagem Automática de Prazos

Para a contagem automática se concretizar, o processo deve ser enviado a um nó de estado (`state`) ou de tarefa (`task-node`) no qual seja definida como verdadeira (`true`) uma variável de processo de negócio chamada `pje:aguardaPeticao`.

## Ação no Evento

Para entrar no nó com EL, use o seguinte código:

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.setVariable("pje:aguardaPeticao", "true")}
```

O nó em questão receberá uma sinalização (`signal`) para prosseguimento na primeira transição disponível quando o evento definido em `Parametros.EVENTO_PRECLUSAO_MANIFESTACAO` (`processoJudicialService:preclusaoManifestacao`) for disparado.

**Atenção:** O nó que cria a variável `pje:aguardaPeticao` deve ser responsável por apagá-la no evento de saída. No caso de um nó de tarefa, o evento "Finalizar tarefa" deve ser configurado para apagar a variável `AguardaPeticao`, conforme o exemplo:

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.deleteVariable("pje:aguardaEstouroPrazo")}
```