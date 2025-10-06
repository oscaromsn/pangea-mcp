---
title: "Movimentação, Despacho e Assinatura em Lote | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Movimenta%C3%A7%C3%A3o,%20despacho%20e%20assinatura%20em%20lote"
author:
published:
created: 2025-09-30
description: "Para utilizar as funcionalidades de movimentação, despacho e assinatura em lote, algumas configurações são necessárias. Segue o roteiro do que deve ser feito:"
tags:
  - "clippings"
---
# Movimentação, Despacho e Assinatura em Lote | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Movimenta%C3%A7%C3%A3o,%20despacho%20e%20assinatura%20em%20lote


## Movimentação, Despacho e Assinatura em Lote

Para utilizar as funcionalidades de movimentação, despacho e assinatura em lote, algumas configurações são necessárias. Segue o roteiro do que deve ser feito:

## Movimentar em Lote

A partir da versão 2.x, a opção de movimentar em lote passou a ser uma funcionalidade padrão das tarefas, não sendo mais necessário configurar uma tarefa para habilitar esta funcionalidade. No entanto, para que um processo possa ser movimentado para a transição de fluxo escolhida, é necessário que as informações obrigatórias da tarefa estejam preenchidas ou que a saída possua uma identificação de dispensa requerida.

## Minutar em Lote

1. Definir as tarefas que poderão utilizar a minuta em lote, considerando como critério as que digam respeito à criação de minutas de despachos, expedientes de secretaria e decisões.
2. Alterar a tarefa para incluir a variável, conforme segue:
	- **Variável:**`MinutarEmLote`
	- **Label:** Minutar em lote
	- **Escrita:** SIM
	- **Obrigatório:** NÃO
	- **Tipo:** Habilitar minutar em lote
3. Pressionar o botão “Gravar”.
4. Realizar os itens 2 e 3 para as demais tarefas do fluxo.
5. Pressionar o botão “Publicar”.

Para que a minuta em lote seja exibida adequadamente, é necessário que:

- Haja registro de aplicabilidade (`Menu configuração » Tabelas Judiciais » Movimentações » Aplicabilidade`);
- Nas movimentações de Magistrado e em suas movimentações filhas do tipo "não-folhas", deverão ser informadas as respectivas aplicabilidades. Para tanto, vá ao menu de movimentações processuais (`Menu configuração » Tabelas Judiciais » Movimentações » Movimentações processuais`), selecione, por exemplo, a movimentação Magistrado (código 1), vá à aba Aplicabilidade e inclua uma aplicabilidade. Esse procedimento deve ser feito para a movimentação de Magistrado e em suas movimentações filhas do tipo "não-folhas".

## Assinar em Lote

1. Definir as tarefas que poderão utilizar a assinatura em lote, considerando como critério as que digam respeito à assinatura de minutas de despachos, expedientes de secretaria e decisões.
2. Alterar a tarefa para incluir a variável, conforme segue:
	- **Variável:**`AssinaturaEmLote`
	- **Label:** Assinar em lote
	- **Escrita:** SIM
	- **Obrigatório:** NÃO
	- **Tipo:** Habilitar assinatura em lote
3. Pressionar o botão “Gravar”.
4. Realizar os itens 2 e 3 para as demais tarefas do fluxo.
5. Pressionar o botão “Publicar”.