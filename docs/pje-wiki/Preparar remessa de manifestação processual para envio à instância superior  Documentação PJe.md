---
title: "Preparar remessa de manifestação processual para envio à instância superior | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Preparar%20remessa%20de%20manifesta%C3%A7%C3%A3o%20processual%20para%20envio%20%C3%A0%20inst%C3%A2ncia%20superior"
author:
published:
created: 2025-09-30
description: "Pré-requisitos para Funcionamento"
tags:
  - "clippings"
---
# Preparar remessa de manifestação processual para envio à instância superior | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Preparar%20remessa%20de%20manifesta%C3%A7%C3%A3o%20processual%20para%20envio%20%C3%A0%20inst%C3%A2ncia%20superior


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/#__docusaurus_skipToContent_fallback)

## Preparar remessa de manifestação processual para envio à instância superior

## Pré-requisitos para Funcionamento

Esta funcionalidade somente está disponível no PJe a partir da versão 1.6.0.  
A solução implementa os serviços definidos pelo modelo MNI (Modelo Nacional de Interoperabilidade), logo se faz necessário que no diretório `lib/endorsed` do servidor de aplicação tenha a seguinte biblioteca: `jbossws-native-saaj.jar`.  
É importante certificar-se se a configuração que diz respeito ao correto funcionamento dos webservices está de acordo com as instruções publicadas em **Instalação e configuração do servidor de aplicação**.

Se a aplicação PJe deseja preparar remessa para o STF, todos os tipos de documentos regulamentados pelo STF já estarão disponíveis na base de dados da respectiva aplicação PJe (1º ou 2º grau) por meio de carga específica de dados a partir da versão 1.6.0.  
Para conhecimento, os códigos de tipos de documentos homologados pelo STF estão disponíveis para consulta em **Resolução 490/2012 do STF**.

> **AVISO**: Remessa para STJ ainda não foi implementada no PJe, vide demanda **PJEII-3914**.

---

## Limitações

Os dados da aba "Expedientes" (exibidos na consulta de detalhes) do processo judicial em questão não fazem parte da remessa de manifestação processual ao STF, somente fazem parte os documentos vinculados aos expedientes. Assim como, as movimentações processuais também não fazem parte da remessa ao STF.

---

## Configuração da Remessa de Processos para STF

1. O administrador do sistema deverá acessar **Configuração → Sistema → Parâmetro** e verificar a existência dos parâmetros para remessa de processos para envio ao STF definidos em **Parâmetros - Remessa de processos ao STF**.
2. O administrador do sistema deverá criar um 'agrupamento de classes ou assuntos' cujo campo "código" deve ser igual a **STF** e o campo "Agrupamento" também deve ser igual a **STF**.
3. O administrador do sistema deverá ter configurado quais papéis deverão receber a permissão "Preparar remessa de manifestação processual para envio à instância superior" conforme orienta a regra **RN343**.
4. O administrador deverá acessar **Configuração → Sistema → Fluxo** para criação e configuração do subfluxo responsável pela remessa para o STF. Associar ao fluxo principal do PJe conforme necessidade.

---

## Configuração dos Nós

## Início

O nó inicial segue o padrão de todos os nós de início dos fluxos no PJe, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada.

### Transições

- **Preparar remessa de manifestação processual para envio à instância superior**.

---

## Remeter Manifestação Processual

O nó de decisão cuja responsabilidade é enviar a remessa de manifestação processual para a instância superior STF.  
Se a remessa for entregue com sucesso, o PJe receberá um número de recibo e protocolo.

---

## Arquivo de Configuração XML

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Remessa para STF">
    <swimlane name="Remessa Manifestação Processual"/>
    <swimlane name="Nó de Desvio - Remessa para STF"/>
    
    <start-state name="Início">
        <task name="Tarefa inicial" swimlane="Remessa Manifestação Processual"/>
        <transition to="Preparar remessa de manifestação processual para envio à instância superior"/>
    </start-state>
    
    <task-node name="Preparar remessa de manifestação processual para envio à instância superior">
        <task name="Preparar Manifestação Processual" swimlane="Remessa Manifestação Processual">
            <controller>
                <variable name="Processo_Fluxo_remessaCNJ_prepararRemessaManifestacaoProcessual" access="read,write"/>
            </controller>
        </task>
        <transition to="Remeter Manifestação Processual"/>
    </task-node>
    
    <decision name="Remeter Manifestação Processual" expression="#{remeterManifestacaoProcessualTaskPageAction.remeterManifestacaoProcessual() ? 'Término' : 'Acompanhar Manifestação Processual'}">
        <transition to="Acompanhar Manifestação Processual"/>
        <transition to="Término"/>
    </decision>

    <task-node name="Acompanhar Manifestação Processual">
        <task name="Acompanhar Manifestação Processual" swimlane="Remessa Manifestação Processual">
            <controller>
                <variable name="Processo_Fluxo_remessaCNJ_acompanharRemessaManifestacaoProcessual" access="read,write"/>
            </controller>
        </task>
        <transition to="Término"/>
        <transition to="Preparar remessa de manifestação processual para envio à instância superior"/>
    </task-node>

    <end-state name="Término"/>
</process-definition>
```

AVISO: Remessa para STJ ainda não foi implementada no PJe, vide demanda PJEII-3914.