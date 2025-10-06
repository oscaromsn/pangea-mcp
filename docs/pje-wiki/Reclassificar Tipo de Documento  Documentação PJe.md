---
title: "Reclassificar Tipo de Documento | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Reclassificar%20tipo%20de%20documento"
author:
published:
created: 2025-09-30
description: "A tarefa \"Reclassificar tipo de documento\" deve ser configurada em fluxos onde se deseja utilizar a funcionalidade."
tags:
  - "clippings"
---
# Reclassificar Tipo de Documento | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Reclassificar%20tipo%20de%20documento


## Reclassificar Tipo de Documento

A tarefa "Reclassificar tipo de documento" deve ser configurada em fluxos onde se deseja utilizar a funcionalidade.

Para configurar o nó de tarefa "Reclassificar tipo de documento", siga as orientações abaixo:

- Criar um nó de tarefa com nome sugerido **"Reclassificar tipo de documento"**, que deve ser atribuído a uma Raia de acordo com o critério do usuário.
- Adicionar obrigatoriamente a variável `Processo_Fluxo_documento_reclassificar` com o label sugerido **"Reclassificar tipo de documento"**. Esta variável deve ser de **Escrita** e do tipo **Frame**.
- Adicionar as transições de entrada (que chegam ao nó) e de saída (que saem do nó) desejadas para o nó de tarefa "Reclassificar tipo de documento".
- Para as transições de entrada, recomendamos o seguinte exemplo: dada a tarefa **"Verificar outras providências"**, crie uma transição para a tarefa **"Reclassificar tipo de documento"**. Dessa forma, a tarefa "Reclassificar tipo de documento" pode ser provocada.
- Para as transições de saída, é necessário definir uma transição padrão, que é feita por meio da criação de um evento do tipo **"Criar tarefa"**. Os eventos do nó de tarefa "Reclassificar tipo de documento" serão explicados a seguir.

## Eventos

### Criar Tarefa

O evento **"Criar tarefa"** da tarefa "Reclassificar tipo de documento" deve conter uma ação marcada como reexecutável, vinculando a transição padrão de saída desejada. Essa vinculação é feita através de linguagem de expressão.