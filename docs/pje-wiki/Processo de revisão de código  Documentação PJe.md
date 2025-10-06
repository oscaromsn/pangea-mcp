---
title: "Processo de revisão de código | Documentação PJe"
source: "https://docs.pje.jus.br/manuais-basicos/processo-de-revisao-de-codigo"
author:
published:
created: 2025-09-30
description: "Veja também mais informações neste link."
tags:
  - "clippings"
---
# Processo de revisão de código | Documentação PJe
Available at https://docs.pje.jus.br/manuais-basicos/processo-de-revisao-de-codigo


[Pular para o conteúdo principal](https://docs.pje.jus.br/manuais-basicos/#__docusaurus_skipToContent_fallback)

## Processo de revisão de código

## Antes de iniciar a revisão

- O revisor deve ler e compreender a demanda. Caso o pedido não esteja claro, o MR poderá ser fechado.
- Tratando-se de demanda categorizada como defeito, o revisor deve simular o defeito utilizando o branch master. Não ocorrendo, o revisor pode fechar o MR.
- O revisor deve atualizar o branch da demanda com o branch master e executar os scripts de migração (quando houver) utilizando o flyway. Caso ocorra conflitos ou falha na execução de algum script da demanda, o revisor poderá optar por corrigir ou fechar o MR.
- O MR deve ser fechado caso possua arquivos completamente modificados. Isso indica que o caractere de final de linha foi alterado.
- Caso o MR possua mais de um commit, o revisor será responsável por realizar o squash dos commits de forma que só haja um commit.

## Durante a revisão

### Classes

- Observar a responsabilidade das principais classes do sistema
	- Classes responsáveis por tratar as requisições do usuário: Classes com sufixo Home e Action.
	- Classes responsáveis por manipular entidades de negócio: Classes com sufixo Home, Manager e DAO.
	- Classes responsáveis por lidar regras de negócio que envolvam mais de uma entidade de negócio. Classes com sufixo Service.
	- Classes utilitárias: Classes com o sufixo Utils.
- Utilizar Javadoc para documentação.
- Deve-se utilizar um substantivo para o nome.
- Não devem ser criadas novas classes com o sufixo Home.

### Métodos

- Utilizar Javadoc para documentação.
- O nome deve expressar uma ação. Ex.: recuperaXPTO(), verificaXPTO(), validaXPTO(), listaXPTO().
- Verificar se os modificadores de acesso estão adequados à utilização do método.
- Verificar a nulidade dos argumentos antes de sua utilização.
- Verificar se o método está coeso.
- Deve-se evitar mais de um ponto de retorno.
- Métodos acessores (get/set) não devem ser utilizados dentro do escopo da classe. Utilizar a própria variável.

### Scripts

- Devem ser reexecutáveis.
- Instruções de DDL e DML devem estar em arquivos separados.
- Não devem conter IDs de registros.

### Arquivos xhtml

- Não devem conter estilos inline.