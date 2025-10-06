---
title: "Orientações para o desenvolvimento de fluxos | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Orienta%C3%A7%C3%B5es%20para%20o%20desenvolvimento%20de%20fluxos"
author:
published:
created: 2025-09-30
description: "Esse conteúdo foi migrado integralmente da antiga Wiki do PJe, e suas informações podem estar desatualizadas."
tags:
  - "clippings"
---
# Orientações para o desenvolvimento de fluxos | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Orienta%C3%A7%C3%B5es%20para%20o%20desenvolvimento%20de%20fluxos


## Orientações para desenvolvimento de fluxos

No desenvolvimento de fluxos, as expressões de linguagem são utilizadas com base em classes presentes no PJe. Esta seção destina-se a listar fluxos e subfluxos mais comuns, além de classes e métodos que são utilizados, de forma a facilitar a construção dos fluxos por parte dos tribunais. Algumas expressões prontas que são utilizadas com mais frequência podem ser encontradas aqui.

- Classes
	- [Classe TramitacaoProcessualService](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Classes/Classe%20TramitacaoProcessualService)
- Fluxos e subfluxos principais
	- [Cumprimento de decisão](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Cumprimento%20da%20decis%C3%A3o)
	- [Preparar ato de comunicação](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Preparar%20ato%20da%20comunica%C3%A7%C3%A3o)
	- [Preparação do ato judicial](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Prepara%C3%A7%C3%A3o%20do%20ato%20judicial)
	- [Preparar remessa para o 2º grau](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Preparar%20remessa%20para%20o%202%C2%BA%20grau)
	- [Preparar remessa de manifestação processual para envio à instância superior](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Preparar%20remessa%20de%20manifesta%C3%A7%C3%A3o%20processual%20para%20envio%20%C3%A0%20inst%C3%A2ncia%20superior)
- Fluxos da tramitação do processo criminal
	- [Ação Penal Procedimento Ordinário](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/A%C3%A7%C3%A3o%20Penal%20Procedimento%20Ordin%C3%A1rio)
	- [Recebimento de Denúncia](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Recebimento%20de%20Den%C3%BAncia)
	- [Cumprimento de decisão do criminal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Cumprimento%20da%20decis%C3%A3o%20do%20criminal)
	- [Recurso do Processo Criminal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Recurso%20do%20Processo%20Criminal)
	- [Objeto de Cumprimento de PRDs](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Objeto%20de%20Cumprimento%20de%20PRDs)
	- [Medidas Cautelares](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Medidas%20Cautelares)
	- [Inquérito](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Inqu%C3%A9rito)
	- [Auto de prisão em flagrante](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Auto%20de%20pris%C3%A3o%20em%20flagrante)
	- [Iniciar execução da Pena](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Iniciar%20execu%C3%A7%C3%A3o%20da%20Pena)
	- [Agendar Crumpimento em Execução PPL](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Agendar%20Crumpimento%20em%20Execu%C3%A7%C3%A3o%20PPL)
	- [Transação/Suspensão](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Suspens%C3%A3o)
- Fluxos da tramitação dos processos do CNJ
	- [Fluxo comum do CNJ](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Fluxo%20comum%20do%20CNJ)
	- [Ato ordinatório de secretaria](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Ato%20ordinat%C3%B3rio%20de%20secretaria)
	- [Cumprimento de ato normativo ou de decisão](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Cumprimento%20de%20ato%20normativo%20ou%20de%20decis%C3%A3o)
	- [Digitalização](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Digitaliza%C3%A7%C3%A3o)
	- [Preparar ato de comunicação](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Preparar%20ato%20de%20comunica%C3%A7%C3%A3o)
	- [Controle de prazos](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Controle%20de%20prazos)
	- [Preparar ato de comunicação com controle de prazos](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Preparar%20ato%20de%20comunica%C3%A7%C3%A3o%20com%20controle%20de%20prazos)
	- [Contole de emissão e recebimento de ARs](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Controle%20de%20emiss%C3%A3o%20e%20recebimento%20de%20ARs)
	- [Cumprimento de decisão](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Cumprimento%20de%20decis%C3%A3o)
	- [Decisão colegiada](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Decis%C3%A3o%20colegiada)
	- [Fluxo de decisão colegiada em gabinete](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Fluxo%20de%20decis%C3%A3o%20colegiada%20em%20gabinete)
	- [Preparar ato judicial](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Preparar%20ato%20judicial)
	- [Preparação de ofício](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Prepara%C3%A7%C3%A3o%20de%20of%C3%ADcio)
	- [Recebimento de PAD](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Recebimento%20de%20PAD)
- Alterações em fluxos para se obter funcionalidades específicas
	- [Movimentação, despacho e assinatura em lote](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Movimenta%C3%A7%C3%A3o,%20despacho%20e%20assinatura%20em%20lote)
	- [Reclassificar tipo de documento](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Reclassificar%20tipo%20de%20documento)
	- [Contagem automática de prazos](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Contagem%20autom%C3%A1tica%20de%20prazos)
	- [Registro manual de ciência de expedientes](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Registro%20manual%20de%20ci%C3%AAncia%20de%20expedientes)
	- [Transição de desistência (transições passíveis de utilização sem que se seja necessário ao usuário final completar o formulário atualmente exibido)](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Transi%C3%A7%C3%A3o%20de%20desist%C3%AAncia)
- [Expressões utilizadas na criação de fluxos](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Express%C3%B5es%20utilizadas%20na%20cria%C3%A7%C3%A3o%20de%20fluxos)
- [Variáveis utilizadas na criação de fluxos](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Altera%C3%A7%C3%B5es%20em%20fluxos%20para%20se%20obter%20funcionalidades%20espec%C3%ADficas/Vari%C3%A1veis%20utilizadas%20na%20cria%C3%A7%C3%A3o%20de%20fluxos)