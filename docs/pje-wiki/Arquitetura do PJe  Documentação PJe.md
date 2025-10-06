---
title: "Arquitetura do PJe | Documentação PJe"
source: "https://docs.pje.jus.br/manuais-basicos/arquitetura-pje"
author:
published:
created: 2025-09-30
description: "PJe 2.0"
tags:
  - "clippings"
---
# Arquitetura do PJe | Documentação PJe
Available at https://docs.pje.jus.br/manuais-basicos/arquitetura-pje


[Pular para o conteúdo principal](https://docs.pje.jus.br/manuais-basicos/#__docusaurus_skipToContent_fallback)

## Arquitetura do PJe

## PJe 2.0

### Apresentação

Nos anos de 2011 a 2012, houve grande e acelerada expansão do PJe, principalmente na Justiça do Trabalho, o que agravou problemas que afetaram principalmente o desempenho do sistema. No período, as equipes técnicas identificaram a necessidade de definir novo modelo arquitetural sustentável para o PJe, alicerçado com atributos de qualidade como testabilidade, manutenibilidade, escalabilidade e segurança. Além disso, o sistema precisava conter requisitos que facilitasse a sua utilização, ou seja, com design voltado principalmente para a facilidade de uso (usabilidade) e com desenho universal (acessibilidade).

Um dos problemas de desempenho detectado foi a baixa performance da aplicação, que vinha comprometendo diretamente o seu uso, afetando negativamente a satisfação e a produtividade do usuário. Outro problema dizia respeito à dificuldade de se testar o sistema, desde o nível negocial, que é o que atesta o correto funcionamento, até o nível técnico. Merece referência também o fato de o sistema ter sido construído com excessivo acoplamento entre os seus diversos módulos, prejudicando sobremaneira a sua manutenibilidade, já que não há uma clara divisão entre as camadas da arquitetura, além do fato de simples modificações realizadas em parte do sistema causarem impacto grande em outras.

Segundo estatísticas mais recentes, o total de demandas judiciais em tramitação chegou perto dos 100 milhões em 2014. Naquele ano, praticamente uma em cada duas ações judiciais (45%) ingressou na Justiça em meio virtual. Ao todo, 11,8 milhões de processos começaram a tramitar eletronicamente.

Se, por um lado, havia a necessidade de rever a arquitetura do PJe, por outro, diversos tribunais já o utilizavam como principal sistema de acompanhamento processual, tornando‐se complexa a evolução do sistema em plena operação. Além disso, apesar de o PJe ter sido desenvolvido com vistas a ser único em todo o Judiciário, as dificuldades enfrentadas no dia a dia das implantações levaram a intervenções que implicaram versões diferentes e com consequente prejuízo ao aproveitamento de inovações tecnológicas aproveitáveis a todos.

Avaliados os cenários, o Comitê Gestor Nacional do PJe decidiu pela construção de uma nova versão do PJe, com o envolvimento de todos os segmentos de Justiça. Nesse cenário, as versões atuais continuariam em produção sem qualquer manutenção evolutiva, apenas corretiva; as novas funcionalidades seriam implementadas apenas na nova versão, cujos módulos poderiam ser gradativamente ativados em paralelo à versão atual.

### Objetivos

- Revisar e definir um modelo arquitetural sustentável para o PJe em médio e longo prazo, com atributos de qualidade como testabilidade, manutenibilidade, escalabilidade e segurança;
- Unificar as versões implementadas nos diversos segmentos de Justiça;
- Garantir a continuidade do sistema até a implementação da nova versão pelos tribunais;
- Tornar o sistema mais amigável e acessível;
- Facilitar a construção e evolução colaborativa do sistema.

### Arquitetura - PJe 2

A nova arquitetura do PJe foi pensada para ser modular e permitir a substituição gradativa da implementação em JSF (PJe1) pela implementação em AngularJS (PJe2). Assim, atualmente cerca de 95% da versão 2.0 do PJe ainda é composta pela mesma arquitetura da versão do PJe1. O PJe 2 possui uma arquitetura baseada em serviços. Pensando nos erros identificados na arquitetura do PJe 1, o PJe 2 foi pensado em ser modular de maneira a minimizar efeitos adversos na dinâmica do processo de desenvolvimento, tal como o *efeito borboleta*, muito comum no processo de desenvolvimento do PJe 1.

No PJe 2 os serviços são expostos através de EJBs remotos. Fachadas REST dão acesso aos módulos negociais do sistema. Isso permite um acesso universal multiplataforma aos serviços (WEB, mobile, desktop).

![Imagem da arquitetura do PJe 2](https://docs.pje.jus.br/assets/images/arquitetura1-8bce4c9f5d805d6390a87e1323363c26.png)

### Separação em camadas

Seguindo o modelo MVC o PJe 2 utiliza o AngularJS nas camadas de visão e controle. O restante da aplicação faz uso de tecnologias Java.

![Imagem da ilustração de separação em camadas](https://docs.pje.jus.br/assets/images/arquitetura2-0c244b6712e6d3041304115be7644ef2.png)

### Problemas da arquitetura na prática

Alguns problemas começaram a ser notados mesmo na nova arquitetura proposta e implementada pelo CNJ. A modularização buscada até então não estava servindo de *baseline* para escalar o processo de desenvolvimento, de modo a desidratar o PJe 1.x e ao mesmo passo hidratar o PJe em seus módulos negociais.

As fachadas REST estavam começando a se tornar grandes *controllers* e repetiam muitas vezes códigos que estavam na controller da camada de visão angular. Verificou-se grande acoplamento entre o angular e sua fachada REST. Outro problema era a dificuldade em delimitar o escopo dos módulos negociais, desta maneira era difícil se identificar onde cada funcionalidade migrada do PJe 1 se encaixaria no PJe 2.

Tecnologias elencadas para o desenvolvimento da nova versão não permitiam uma escalabilidade horizontal, de modo que continuava sendo um monolito, não permitindo uma racionalização mais adequada dos recursos de infraestrutura. Os tribunais, por exemplo, continuariam tendo que fazer deploy de todo o monolito em uma mesma configuração de infraestrutura.

Outro fator problemático da primeira implementação do PJe 2 estava na burocracia de comunicação entre o PJe 1 e o PJe 2. Havia um excesso de lookups entre os serviços para resolver questões de autorização. Havia ainda serviços do PJe 2 que consultavam serviços do PJe 1 em suas camadas *DAO*, isso tudo tornava a interação entre as versões algo muito complexo e passível de erros de difícil identificação.

A camada angular estava obrigada a ser disponibilizada no mesmo deploy do PJe 2, o que, mais uma vez representava uma limitação na racionalização dos recursos de infra.

## PJe 2.1 - Uma nova proposta arquitetural

Tendo sentido na pele todos estes problemas, a equipe do CNJ começou uma grande discussão interna sobre os avanços e dificuldades que o PJe 2 nos trazia numa perspectiva de futuro. Apesar dos problemas citados a nova arquitetura também nos trouxe boas perspectivas a respeito da abordagem ao problema.

Algo notório é que sim, é possível migrar aos poucos os recursos do PJe 1 para uma nova arquitetura mais enxuta e com novas tecnologias. É indiscutível que o PJe precisa se renovar para abarcar o volume de processos e usuários que o sistema se propõe a atender, assim como não se discute que as tecnologias utilizadas na versão 1 não darão conta por muito mais tempo da demanda que nosso sistema recebe diariamente.

A arquitetura modular monolítica proposta inicialmente resolvia alguns problemas, mas ainda era permissiva com erros do passado. Os módulos não tinham escopos negociais bem definidos, o que permitiria que desenvolvedores acabassem por fugir ao escopo sempre que se vissem em alguma dificuldade para resolução de um problema. Esse tipo de abordagem ao código é o fator causador de diversos problemas enfrentados no PJe 1, as classes não possuem escopos bem definidos e, portanto, não é difícil notar, por exemplo, métodos de escopo do processo que fazem alterações a outras entidades do sistema, que nada têm a ver com aquele contexto negocial. Todo esse panorama nos direcionou a estratégia de desenvolvimento de um sistema baseado em microsserviços.

Um sistema modular, mas não monolítico. A ideia é que cada escopo negocial bem definido seja envolto em um microserviço. Por exemplo, poderíamos extrair toda a lógica negocial de audiências do PJe 1 e criar um serviço totalmente separado, com projeto separado, deploy separado e banco de dados separado.

Esse serviço seria implementado e o PJe 1 se tornaria um cliente desse serviço para realizar atividades, como, marcar uma audiência, consultar audiências e etc. Este tipo de abordagem permite que a implementação esteja focada naquele contexto negocial, facilitando o trabalho das equipes de negócio, desenvolvimento e testes.

Outro benefício está na racionalização dos recursos tecnológicos, permitido ao tribunal que reserve para o serviço somente a quantidade adequada de recursos computacionais para que o serviço se comporte de maneira saudável. O PJe passa, portanto a se comportar como um sistema mais moderno, dono de uma API REST composta por sua nuvem de serviços. Serviços estes que poderão ser disponibilizados para o público externo que deseje consumir os serviços através de aplicações mobile ou outros tipos de aplicações.

### A interação entre os serviços

Cada contexto negocial terá, portanto, seu microsserviço, mas como estes serviços se comunicaram entre si? Muitas vezes o serviço de sessão de julgamento produzirá uma informação dizendo que o processo foi julgado, e neste momento o serviço de processo judicial deverá lançar uma movimentação.

Este tipo de interação irá funcionar como uma coreografia, onde cada serviço sabe exatamente o que fazer conforme as informações surgem em seu ecossistema. As informações serão passadas aos serviços através de um serviço de filas de mensagens, sempre que um processo for julgado o sistema de sessão irá enviar ao serviço de fila uma mensagem com informações referentes aquele julgamento. Neste momento um serviço será responsável por consumir a fila e redirecionar as mensagens a outros serviços através de uma estratégia baseada no conceito de *webhooks*. Um ou vários serviços estarão inscritos para receberem as mensagens para um dado evento, o serviço de *webhooks* será responsável por inscrever os serviços e direcionar as mensagens. Quando o serviço de processo receber a mensagem via *webhook* ele deverá saber que é necessário lançar uma movimentação no processo, após isso ele também deverá notificar ao serviço de mensagem que uma nova movimentação foi lançada, de modo que os serviços que se interessam por movimentações ajam como devem agir.

É importante que todo esse ecossistema funcione como uma nuvem de serviços, de modo que seja possível que o tribunal crie, por exemplo duas instâncias do serviço de consulta processual, ou até mais caso a demanda deste serviço cresça. Para isso é necessário um mecanismo de descoberta de serviços. Cada vez que iniciamos um serviço ele deve se registrar como um serviço ativo, esperando requisições de clientes. Este tipo de mecanismo funciona como um DNS e permite distribuir as requisições de maneira mais racional utilizando, por exemplo, um algoritmo *round robin*.

### Um cliente para o PJe

Todos esses serviços precisam ser disponibilizados para o usuário, e para isso não usaremos mais o AngularJS, e sim o Angular que está em sua versão 4. A decisão de partir para a nova versão do Angular se motiva pelas grandes melhorias implementadas na versão, pela flexibilidade do TypeScript, pela rápida adoção da comunidade e pela baixa quantidade de código legado em angularJS no PJe 2.

O novo cliente angular estará totalmente separado e desacoplado dos serviços. Ele deverá se comportar como um cliente externo qualquer do sistema, utilizando-se da API de serviços do PJe.

Enquanto convive com o PJe 1, o nosso cliente Angular irá residir em um singelo iframe e talvez necessite se comunicar com a tela do PJe 1, como estarão em domínios separados a interação será efetivada através de mensagens entre janelas.

A nova versão do angular é baseada em componentes, o que nos permitirá criar um arcabouço de componentes que visem facilitar a implementação padronizada das telas do PJe, tendo como base a acessibilidade e experiência do usuário.

### Como tudo se conecta?

![Imagem ilustrando como tudo se conecta](https://docs.pje.jus.br/assets/images/arquitetura4-be7f69ea593c454a0ab99f1d88714856.png)

Descrevendo o diagrama acima temos o Angular 2+ como porta de entrada, cliente onde o usuário terá acesso aos vários serviços do PJe. O cliente angular irá acessar a API REST através de um serviço de borda, denominado " *Gateway* ". O *Gateway* nada mais é do que um serviço dentro da nossa nuvem de serviços, este conhece todos os outros e servirá de encaminhador das requisições do cliente.

Cada serviço, ao ser iniciado, se registra no " *Discovery* " informando que está disponível para aceitar as requisições. O *Discovery* também se encarrega de realizar load balancing entre os serviços registrados, desta maneira, se temos três instâncias de Processo, nesse serviço *Discovery* irá distribuir as requisições, de modo a não carregar uma mais que as outras.

O serviço OAuth2 se encarrega de controlar o acesso de usuários e serviços aos serviços da nuvem, sendo possível restringir o acesso a determinados serviços de acordo com as credenciais do usuário ou sistema.

Podemos perceber que cada microsserviço terá um contexto bem definido, inclusive sendo dono de seu próprio banco de dados, o qual poderá utilizar da tecnologia mais adequada para atender a proposta daquele serviço. Portanto não será mandatório que se use sempre um banco de dados relacional, por exemplo.

Os serviços irão ainda lançar seus logs para uma pilha ELK (Elastic, Logstash e Kibana). Os logs deverão observar não somente questões relacionadas a erros, mas também a sucesso das operações. Deste modo será possível avaliar a saúde dos serviços, se estão respondendo rápido, ou se estão muito lentos e com erros e precisam, portanto, de uma refatoração ou melhoria.

Como mencionado antes, os serviços funcionaram em modo de coreografia, onde cada serviço sabe bem o que fazer de acordo com o que acontece na nuvem. O *RabbitMQ* é um *Message Broker* que se responsabilizará por enfileirar as mensagens. Estas serão consumidas pelo serviço de *webhooks* que se encarregará de distribuir para os diversos serviços de nossa nuvem.

Sim, aquilo ali no topo é o PJe 1. Entenda o PJe 1 como um serviço também. Temos um serviço monolítico com muitas coisas que ainda não sabemos separar, portanto, inicialmente a versão legada servirá como um serviço sim, compondo a nova nuvem de serviços do PJe. A ideia é que a cada serviço “novo” criado o PJe legado se tornará um pouco menor. É importante dizer ainda, que o legado deverá se comportar como os outros serviços, escutando as filas do *RabbitMQ*, mandando mensagens para o *RabbitMQ* e autenticado através do serviço de autorização.

### Estruturando um módulo/microsserviço

Cada módulo, ou microsserviço, terá seu próprio domínio. Cada um deverá ser responsável por resolver um problema. A construção de módulo será iniciada pela equipe de negócio, que definirá um contexto bem definido para aquele pretenso serviço. Os requisitos negociais serão elicitados e a partir daí a equipe técnica começa a atuar.

A primeira tarefa da equipe técnica é definir a fachada REST, que irá prover as funcionalidades a serem acessadas pela camada de visão ou por outros módulos do PJe, ou ainda por outros sistemas externos.

Definidas as funcionalidades daquele novo serviço a equipe inicia a implementação do backend. Perceba que neste momento é possível que haja paralelismo entre a equipe que desenvolve o backend e a equipe que irá desenvolver o frontend. Inclusive é encorajador que se adote uma abordagem paralela. Equipes distintas trabalhando para frontend e backend evitarão acoplagem do serviço ao frontend, resultando em um serviço mais puros e enxutos que pode ser utilizado por outros sistemas, inclusive.

A dimensão de cada serviço pode ser variável. É importante que não sejam muito grandes nem muito pequenos. Um universo de muitos serviços pequenos pode tornar a coreografia dos serviços algo muito complexo de se manter, cada pequena alteração pode impactar em uma grande necessidade de reimplementação nos demais serviços. Os serviços também não devem ser grandes demais, um serviço muito grande representa algo que está tratando muitos problemas e acaba por se tornar um novo monolito.

O tamanho de um serviço é ideal quando, caso queiramos implementar todo o serviço, o tempo de codificação não passe de duas semanas. Certamente isso não é uma regra, mas uma notação a ser levada em consideração ao implementar novos serviços.

Cada microsserviço terá arquitetura simples, de modo a atender o seu contexto negocial. Dada a complexidade majorada de um determinado serviço, este pode ter um leve alteração arquitetural para atender a seu contexto. A abordagem de microsserviços permite um ambiente totalmente agnóstico de ponta a ponta, entretanto ter cada pedaço com uma tecnologia diferente torna a manutenção do sistema muito dependente de pessoas ou equipes específicas.

![Imagem ilustrando como estruturar módulo/microsserviço](https://docs.pje.jus.br/assets/images/arquitetura3-e1d469231db6ce610e3e944607a0262c.png)

### Tecnologias aplicadas

#### SpringBoot

O SpringBoot é uma solução criada pela Pivotal para entregar uma aplicação Spring de maneira rápida e que esteja pronta para produção, sem que haja necessidade de um monte de configurações como acontece muito em aplicações java para WEB. Com um simples `java -jar`, por exemplo, é possível iniciar uma aplicação java web com um tomcat embarcado, sem necessidade de executar deploy de um arquivo war. Esse tipo de solução colabora na escalabilidade horizontal e na entrega contínua.

#### SpringCloud

SpringCloud é o conjunto de ferramentas que possibilita um desenvolvimento rápido dos principais padrões de computação distribuída. O SpringCloud se integra aos serviços SpringBoot para prover um ambiente distribuído interligado utilizando suas bibliotecas para descoberta de serviços, roteamento, *circuit breakers*, e etc. Entre as bibliotecas disponibilizadas estão as que dão suporte à suite Netflix para computação em nuvem.

- Eureka
	- Serviço REST utilizado como *service register*. Cada serviço ao ser iniciado se registra no Eureka Server que será responsável por manter um catálogo de serviços ativos. Através deste catálogo é possível atribuir outros comportamentos ao sistema, como load balancing e *circuit break*;
- Zuul
	- Serviço de borda, que tem como principal função ser um ponto único de entrada, distribuindo as requisições entre as diversas instâncias de serviços que estão registrados em sua nuvem
- Hystrix
	- Faz o papel de monitorador dos serviços mantendo um conjunto de dados com informações a respeito da execução dos serviços. É seu papel também operar o *circuit break*;

#### Angular 6+

Tecnologia para a camada de apresentação, o Angular em sua nova versão traz diversas melhorias identificadas a partir do feedback da comunidade em relação a sua amplamente utilizada primeira versão. A nova versão traz inovação na forma como compor a aplicação frontend através de componentes. Há também uma grande flexibilidade trazida através da utilização da linguagem *TypeScript*. O Angular tem grande aceitação de comunidade e mostra importantes inovações relacionadas a performance das aplicações desenvolvidas na nova versão.

#### RabbitMQ

*Message broker* responsável por prover o meio através do qual os serviços irão compor a coreografia do sistema. O *RabbitMQ* suporta diversos protocolos de *mensageria*, é capaz de ser executado de maneira distribuída e é altamente escalável, tudo isso colabora para uma alta disponibilidade que um *broker* deve ter para manter a coreografia entre os serviços.

### Mais PJe 2.1 e menos PJe 1.x

A nova arquitetura do PJe 2 foi pensada para que a transição de tecnologia se desse de maneira gradual. Para isso é necessário que funcionalidades que hoje estão no PJe 1 sejam migradas para a nova arquitetura. Há que se notar, entretanto, que essa tarefa não é das mais triviais, ainda mais quando se fala de um sistema do porte do PJe.

Sua natureza caracterizada pela complexidade negocial evidencia que esse tipo de transição não será simples, e demandará um grande esforço das equipes técnicas do PJe.

A dificuldade se inicia pela dificuldade em enxergar os contextos negociais dentro do sistema. Passando por isso ainda temos o grande acoplamento entre as camadas na arquitetura atual do PJe 1. As classes representam muitos contextos de negócio ao mesmo tempo, resultando assim em um grande emaranhado de dependências entre as entidades do sistema.

O primeiro passo para "emagrecer" o PJe 1 está na identificação dos serviços de infraestrutura que estão no código da aplicação. Serviços como autenticação, log, armazenamento de binários, e outros. Estes serviços possuem contextos mais bem definidos, e por consequência possuem menos dependências e acoplamento ao código.

Os módulos negociais que estão atualmente dentro do PJe 1 passarão por um processo de reestruturação lógica dentro do próprio legado, para somente após esse passo se tornar um microsserviço com vida própria.

O processo de reestruturação lógica consiste no isolamento das classes que tenham relação com o domínio analisado. Na prática o que ocorrerá é a separação das classes em pacotes específicos daquele contexto negocial. Neste momento serão identificadas dependências e duplicidades. A partir dessa visão mais isolada poderemos também reconhecer melhor o que faz e o que não faz parte daquele contexto de negócio.

É neste momento que identificaremos também as dependências a nível de banco de dados. A separação lógica das classes servirá de base para que possamos isolar as tabelas e identificar suas constraints. Mapear as dependências entre as entidades nos dará a visão de quais entidades ou quais domínios possuem uma relação direta ou indireta com o domínio em análise, isso nos servirá, por exemplo, para identificar outras entidades que façam parte do contexto de negócio que estamos tentando destacar do PJe.

Após esse primeiro momento ocorrerá a construção do novo microsserviço que se preocupará apenas em atender aquele contexto bem definido identificado no passo anterior. O novo serviço terá seu próprio domínio, e por isso não terá que se preocupar com impactos em outros pontos do sistema.

Com o novo microsserviço pronto a próxima etapa é retirar aquele código do legado. Se a tarefa de separação lógica do domínio tiver sido bem executada esse passo não deverá ser problemático, tendo em vista que o domínio foi logicamente isolado, o que se deve fazer é remover as classes pertinentes. Caso seja necessário o legado deverá expor um serviço para receber eventos do novo módulo, de modo a tratar aquele evento e utilizá-lo de acordo com seu domínio de negócio.