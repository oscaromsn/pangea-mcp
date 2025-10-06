---
title: "Acordo com o CNJ | Documentação PDPJ-Br"
source: "https://docs.pdpj.jus.br/desenvolvendo-para-a-pdpj/acordo-com-o-cnj"
author:
published:
created: 2025-09-30
description: "Assinatura de ACT"
tags:
  - "clippings"
---
# Acordo com o CNJ | Documentação PDPJ-Br
Available at https://docs.pdpj.jus.br/desenvolvendo-para-a-pdpj/acordo-com-o-cnj


## Assinatura de ACT

Para desenvolver novos módulos para a PDPJ-Br, antes de mais nada, o seu órgão ou instituição deve firmar um Acordo de Cooperação Técnica (ACT) com o CNJ, especificando o escopo geral da aplicação a ser desenvolvida.

A minuta de ACT deve ser enviado para [gerenciaexecutivapdpj@cnj.jus.br](https://docs.pdpj.jus.br/desenvolvendo-para-a-pdpj/), junto ao documento de apresentação negocial da solução e documento técnico indicando a aderência aos requisitos técnicos e de arquitetura da PDPJ-Br (*multi tennancy*, utilização do [SSO](https://docs.pdpj.jus.br/servicos-estruturantes/autenticacao-sso), integração ao [notificações](https://docs.pdpj.jus.br/servicos-estruturantes/notificacoes/informacoes-gerais), utilização de *Springboot*, *Postgres*, etc.).

Também deve ser enviada minuta de Canvas para elaboração de do plano de projeto.

## Execução do projeto

Firmado o ACT, é realizada uma reunião de *Kick off* do projeto entre o CNJ e o solicitante. O *Kick off* do projeto é um marco importante para a jornada que se seguirá. Sua programação, o tempo dedicado e o investimento devem ser proporcionais à relevância dos objetivos que motivaram o desenvolvimento do projeto.

Cabe salientar que todos os participantes, incluindo *Product Owner* ou Patrocinadores, e até mesmo algumas partes interessadas afetadas indiretamente pelo projeto, devem participar do evento. Os principais objetivos a serem conquistados são:

- Comunicação:
	- Propósito do projeto;
	- Objetivo;
	- Estruturação;
	- Metas, expectativas e desafios a serem enfrentados;
	- Atuação dos envolvidos em cada etapa do processo;
	- Canal principal de comunicação do projeto.
- Alinhar os papéis e responsabilidades;
- Integrar os envolvidos e iniciar a formação do espírito de equipe;
- Estimular o uso da criatividade para quebrar paradigmas e gerar inovações;
- Ressaltar fatores que podem ajudar na promoção do engajamento nos objetivos estratégicos do projeto em busca de reduzir antagonismos;
- Sensibilizar as partes interessadas para as necessidades e mudanças contínuas, como estratégia de competitividade e benefícios de determinada solução no órgão ou área;
- Definir a Matriz RACI;
- Estabelecer a Definição de Pronto (Definition of Done – DoD);
- Indicar qual o tipo de projeto (tradicional ou ágil);
- Definir o PO, Scrum Master/Gerente de projeto e pontos focais técnicos do projeto;
- Levantar premissas, restrições e riscos preliminares.

## Papéis

Nessa reunião inicial, os seguintes papeis serão definidos, de suma importância para o projeto:

- **Patrocinadores**: Garante recursos, resolve conflitos e viabiliza o projeto para que ele cumpra seus objetivos, ou seja, possui grande influência, e agrega valor e conhecimento acerca do negócio. Deve assegurar que os benefícios estão sendo entregues de acordo com o desenvolvimento do projeto. Geralmente é o demandante da aplicação.
- **Gerente do Projeto**: Gerencia as ações necessárias à realização dos projetos. Coordena e lidera a sua equipe para a entrega do produto do projeto dentro do escopo, prazo e custo estabelecido com os envolvidos.
- **Product Owner**: É o representante indicado pelo Patrocinador Demandante, responsável pelos aspectos funcionais da solução. Preferencialmente o PO é um profissional da área gestora que domina as regras do negócio, as necessidades e os problemas que o software que será desenvolvido deve solucionar.
- **Scrum Master**: Lidera as ações necessárias à realização de um ou mais projetos, implementando os valores e as práticas ágeis, orientando e liderando a equipe do projeto para garantir a entrega do produto do projeto de acordo com os requisitos estabelecidos no Canvas e no Backlog do Produto. Profissional indicado pelo CNJ.
- **Equipe do Projeto**: Quem efetivamente irá codificar a aplicação. Geralmente, uma equipe formada pelo Tribunal/órgão demandante.
- **Mentor Técnico**: Ponto focal da área técnica do CNJ responsável por fazer a ponte entre o SM/GP e as áreas internas do Conselho.

## Sustentação de novos módulos

A incorporação de soluções à PDPJ-Br pressupõe a formalização de plano de suporte, manutenção e evolução da solução disponibilizada, a ser elaborado pelo conjunto de participantes do projeto de desenvolvimento, com prazo de duração determinado conforme prognóstico de obsolescência da solução.

## Acessos: Git e Jira

Superadas as questões burocráticas, será fornecido pelo CNJ um repositório oficial para depósito do código fonte da aplicação (o CNJ utiliza como ferramenta de versionamento o *git*, e uma *interface web* para acesso aos projetos por meio do GitLab - [https://git.cnj.jus.br](https://git.cnj.jus.br/)), bem como será criado o projeto correspondente na ferramenta de controle de demandas Jira - [https://www.cnj.jus.br/jira](https://www.cnj.jus.br/jira).