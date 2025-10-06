---
title: "Registro Manual de Ciência de Expedientes | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Registro%20manual%20de%20ci%C3%AAncia%20de%20expedientes"
author:
published:
created: 2025-09-30
description: "Esta tarefa permite que usuários autorizados registrem manualmente a ciência de expedientes por meio de uma tarefa no fluxo. A escolha do local para inserção dessa tarefa em fluxos fica a critério do administrador do negócio."
tags:
  - "clippings"
---
# Registro Manual de Ciência de Expedientes | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Registro%20manual%20de%20ci%C3%AAncia%20de%20expedientes


## Registro Manual de Ciência de Expedientes

Esta tarefa permite que usuários autorizados registrem manualmente a ciência de expedientes por meio de uma tarefa no fluxo. A escolha do local para inserção dessa tarefa em fluxos fica a critério do administrador do negócio.

## Configuração do Nó de Tarefa

Para configurar o nó de tarefa responsável pelo "registro manual de ciência de expedientes", siga as orientações abaixo:

1. Criar um nó de tarefa com o nome desejado e atribuí-lo a uma raia conforme a escolha do administrador.
2. Adicionar obrigatoriamente a variável `WEB-INF_xhtml_flx_exped_registroCiencia` (também documentada em Variáveis do PJe) com o label desejado. Esta variável deve ser de **Escrita** e do tipo **Frame**. A referida variável corresponde a uma janela cujo comportamento é definido na regra **RI260**.
	- Este frame também utiliza uma variável de tarefa denominada `pje:fluxo:registrociencia:idsexpedientes` para armazenar os identificadores dos expedientes manipulados no frame.
3. Adicionar as transições de entrada (que chegam ao nó) e de saída (que saem do nó) desejadas para o nó de tarefa em questão.

## Eventos

- **Criar Tarefa:** O evento **"Criar tarefa"** deve conter uma ação marcada como reexecutável, e essa ação deve incluir a expressão definida em "Identificar os meios de comunicação sem ciência registrada."