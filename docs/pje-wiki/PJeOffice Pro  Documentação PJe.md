---
title: "PJeOffice Pro | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/pjeoffice-pro"
author:
published:
created: 2025-09-30
description: "O PJeOffice é um software disponibilizado gratuitamente pelo Conselho Nacional de Justiça (CNJ) para acesso ao PJE via certificado digital e assinatura eletrônica de documentos. É destinado tanto ao público interno (servidores e Membros do Poder Judiciário) quanto ao público externo (advogados, procuradores, defensores públicos, membros do Ministério Público, peritos, tradutores, intérpretes, etc.)."
tags:
  - "clippings"
---
# PJeOffice Pro | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/pjeoffice-pro


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## PJeOffice Pro

O PJeOffice é um software disponibilizado gratuitamente pelo Conselho Nacional de Justiça (CNJ) para acesso ao PJE via certificado digital e assinatura eletrônica de documentos. É destinado tanto ao público interno (servidores e Membros do Poder Judiciário) quanto ao público externo (advogados, procuradores, defensores públicos, membros do Ministério Público, peritos, tradutores, intérpretes, etc.).

A ferramenta é atualmente desenvolvida no âmbito do CNJ em grupo de trabalho sob a coordenação do Tribunal Regional Federal da 3ª Região (TRF3).

## Direto ao assunto

### 1\. O que faz da versão PJeOffice Pro ser diferente da sua antecessora?

A solução PJeOffice Pro foi enriquecida com funções de escritório, melhorias de usabilidade, eficiência, estabilidade e segurança. Um descritivo completo com todas as funcionalidades oferecidas pela solução que a diferencia da versão anterior pode ser acessado 👉 [aqui](https://pjeoffice.trf3.jus.br/pjeoffice-pro/docs/index.html). Confira você mesmo! 👍

### 2\. O PJeOffice Pro funciona em todas as instâncias do PJe do país sem exigir quaisquer atualizações dos respectivos frontends/backends?

Sim! A versão PJeOffice Pro foi escrita com esforço para assegurar total compatibilidade com todas as instâncias do sistema PJe do país e demais soluções que atualmente fazem uso do PJeOffice em produção hoje. Em outras palavras, todas as funcionalidades que estavam disponíveis na versão atual passaram por aprimoramentos significativos e estão disponibilizadas na versão Pro também.

### 3\. Há melhorias a serem aplicadas nos componentes de frontends/backends do país?

Sim! Para aprimorar a flexibilidade e segurança da plataforma PJe no contexto do assinador, foi implementada uma nova API de integração em JavaScript que acomoda os mais recentes protocolos de comunicação entre navegadores e servidores HTTP(s) nas interações entre o componente de frontend/backend e a solução de assinatura. Portanto, embora a versão Pro do assinador possa ser imediatamente utilizada sem necessidade de atualizações imediatas dos componentes de frontend/backend, é fundamental destacar que tais componentes deverão ser atualizados para incorporar essas melhorias. Um período será fornecido para permitir a adaptação e a integração eficaz da nova API em ambiente de produção.

### 4\. Quais subtipos de versões do PJeOffice Pro existem?

Os subtipos de versões do assinador estão ligados aos escopos de uso específicos, quais sejam:

#### User:

Um subtipo *user* é sufixado com a letra ' **u** ' (exemplo: v2.5.9 **u**) e corresponde à versão do assinador que deve ser utilizada pelos **u** suários finais. Este subtipo possui alguns requisitos de segurança *dependentes do backend*, ou seja, embora o PJeOffice Pro seja compatível com todas as instâncias de PJe do país, alcançará sua segurança máxima apenas em backends *atualizados*. O uso efetivo do assinador PJeOffice Pro por todos os tribunais do país juntamente com a aplicação das atualizações de segurança nos seus respectivos componentes de frontends/backends, permitirão uma atualização automática do assinador de modo a tornar os seus requisitos de segurança completamente *independentes* do backend.

O download deste subtipo pode ser realizado na [página do projeto](https://pjeoffice.trf3.jus.br/pjeoffice-pro/docs/index.html?index=downloads)

#### Dev:

Um subtipo *dev* é sufixado com a letra ' **d** ' (exemplo: v2.5.9 **d**) e corresponde à versão do assinador mais adequada ao desenvolvedor de software. Este subtipo é capaz de alternar, a critério do programador, dinamicamente o seu comportamento de modo que o desenvolvedor possa compreender e testar o seu funcionamento no cenário de frontend/backend atualizados e no cenário de frontend/backend desatualizados. Além disso o subtipo *dev* acompanha uma bancada de depuração que permite visualizar as requisições que chegam ao assinador e que saem dele - um cenário prático para testes e identificação de bugs.

O download deste subtipo pode ser realizado [aqui](https://pjeoffice.trf3.jus.br/pjeoffice-pro/development/).

### 5\. Onde posso encontrar a documentação da API de integração mencionada nas perguntas anteriores?

A versão de subtipo *dev* acompanha a documentação integral da API javascript de integração enriquecida com **exemplos interativos e completos de uso** que guiarão os desenvolvedores de software de cada Tribunal a atualizarem os seus respectivos frontends/backends a fim de contribuir na segurança do mecanismo de assinatura da plataforma PJe.

A documentação pode ser lida no *Guia do Desenvolvedor*, acessível a partir do menu *PJe (bandeja do windows) > Sobre > Guia do Desenvolvedor* conforme figura que segue:

![Guia do Desenvolvedor - PJeOffice Pro](https://pjeoffice.trf3.jus.br/pjeoffice-pro/development/guia.png)

### 6\. É possível utilizar o assinador PJeOffice Pro para atender demandas por assinaturas em aplicações não relacionadas ao PJe?

A solução PJeOffice Pro foi escrita de modo a possibilitar sua utilização por qualquer aplicação. Atualmente, porém, está limitada ao atendimento de qualquer solução desde que hospedada em domínios **\*.jus.br**, **\*.mp.br**, **\*.gov.br**, **\*.def.br**

Contacte o CNJ para maiores detalhes.

### 7\. Já li toda a documentação mas estou com algumas dúvidas. Onde posso receber novas orientações?

Um canal de comunicação que pode ser utilizado é o [RocketChat](https://rocketchat.cloud.pje.jus.br/channel/PJeOffice-Pro). Demandas/issues relacionadas ao assinador devem ser criadas pelo [Jira](https://cnj.jus.br/jira). Adicionalmente, sugestões, elogios, críticas ou dúvidas podem ser enviadas para o e-mail **[pjeoffice@trf3.jus.br](https://docs.pje.jus.br/servicos-negociais/)**.

### 8\. Já realizei a integração com o assinador segundo a nova API Javascript. Posso entender que os trabalhos foram concluídos?

Não! A conclusão dos trabalhos se concretiza com a disponibilização de um endpoint a ser publicado pelo backend e que será automaticamente consumido pelo assinador. O endpoint deve ser disponibilizado no caminho **/pjeofficepro** segundo padrão de URI que segue:

`https://domínio-do-pje/contexto-raiz-do-pje/pjeofficepro`

Este endpoint **/pjeofficepro** deverá retornar a string literal ‘1’ (sem aspas e plaint/text). De maneira geral ele sinalizará ao assinador que os trabalhos de integração com a nova API foram concluídos de forma a instruí-lo a rejeitar a forma de comunicação obsoleta antes existente para aquele domínio específico.

Vale destacar que o endpoint **/pjeofficepro** supracitado será consumido apenas durante o período de transição do assinador PJeOffice para o PJeOffice Pro, ou seja, o fim absoluto do suporte ao assinador PJeOffice atualmente em produção com sua “declaração de descontinuidade” permitirá a exclusão deste endpoint em definitivo.