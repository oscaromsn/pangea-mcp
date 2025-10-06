---
title: "Regras de dominio | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Regras%20de%20dominio"
author:
published:
created: 2025-09-30
description: "Esse conteúdo foi migrado integralmente da antiga Wiki do PJe, e suas informações podem estar desatualizadas."
tags:
  - "clippings"
---
# Regras de dominio | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Regras%20de%20dominio


## Regras de domínio

## RD1

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipos de normas penais | "Lei", "Decreto lei", "Lei complementar", "lei delegada". | PJE\_UC001. |

## RD 2

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de dispositivo da normal. | "Artigo","Parágrafo","Inciso","Parte","Alínea" "item" e "Parte". | PJE\_UC001;   PJE\_UC002.   Funcionalidades:   Legislação penal - dispositivo da norma |

## RD3

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de prisão. | "Preventiva", "Temporária", "Flagrante", "Provisória", "Para deportação", "Para expulsão", "Definitiva". | Funcionalidades:   IPC do tipo prisão. |

## RD4

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Símbolo. | "Art."; "§"; "Parágrafo Único". | PJE\_UC001; Identificação do grau de jurisdição (1ª ou 2ª instância) em que a aplicação funcionará. Identificação do grau de jurisdição (1ª ou 2ª instância) em que a aplicação funcionará. PJE\_UC002. |

## RD5

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Multa x Pena privativa de liberdade. | "Isolada"; "Cumulativa"; "Alternativa". | PJE\_UC001;   PJE\_UC002. |

## RD6

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Combinações. | "Com agravante", "Combinado com", "Todos", "e", "Todos combinados". | PJE\_UC011. |

## RD7

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Pesquisar por. | As seguintes opções serão disponibilizadas: “Norma”, “Artigo”, ”Código”.   O campo deve ter característica de seleção única. | PJE\_UC011. |

## RD8

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de soltura. | “Relaxamento”, “Revogação da prisão”, “Final do prazo da temporária”, “Liberdade provisória”, “Fiança”, “Cumprimento integral da pena”. | Funcionalidades:   IPC do tipo soltura. |

## RD9

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de movimentação da soltura. | “Determinação da soltura”, “Informação da soltura”. | PJE\_UC018. |

## RD10

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de documento da movimentação. | “Petição inicial”, “Certidão”, “Decisão”, “Despacho”, “Sentença”. | PJE\_UC010. |

## RD11

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de movimentação da prisão. | “Decisão de decretação da prisão”, “Informação da prisão”. | PJE\_UC016. |

## RD12

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de documento. | “CNPJ”, “CPF”. | PJE\_UC019 |

## RD13

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Mostrar resultado que atenda a. | “Todas as expressões” (default), “Qualquer expressão”. | PJE\_UC001;   PJE\_UC019;   PJE\_UC031. |

## RD14

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação Ativo | “Ativo”, “Inativo”. | PJE\_UC001;   PJE\_UC002;   PJE\_UC003;   PJE\_UC005;   PJE\_UC006;   PJE\_UC007;   PJE\_UC031;   PJE\_UC071;   PJE\_UC073 Funcionalidades:   alertas   Tipo de procedimento de origem;   Legislação penal |

## RD15

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de medida de segurança. | “Internação de hospital de custódia”,”Tratamento ambulatorial”. | PJE\_UC023;   PJE\_UC034;   PJE\_UC035. |

## RD16

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Prazo mínimo para medida de segurança. | Ano: “1 ano" (default), "2 anos", "3 anos”   Ano: "1 mês" (default), "2 meses", "3 meses", "4 meses", "5 meses", "6 meses", "7 meses", "8 meses", "9 meses", "10 meses", "11 meses”. | PJE\_UC023;   PJE\_UC034;   PJE\_UC035. |

## RD17

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de extinção da   punibilidade. | “Anistia, graça ou indulto”, “Cumprimento da pena”, “Cumprimento da suspensão condicional do processo”, “Morte do agente”, “Pagamento integral do débito”   “Perdão judicial”, “Prescrição”, “Decadência”, “Perempção”, “Renúncia do queixoso ou perdão aceito”, “Retratação do agente”, “Retroatividade de lei”. | PJE\_UC024   PJE\_UC035. |

## RD18

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Espécie da condição. | “Selecione" (default), "Multa", "Restritiva de direito”. | PJE\_UC027 |

## RD19

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de pessoa | **F** - Física   **J** - Jurídica   **A** - Autoridade | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo jus postulandi.   Casos de teste:   PJe-335. |

## RD20

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de multa. | “Dias-multa", "Valor”. | PJE\_UC027;   PJE\_UC039;   PJE\_UC040. |

## RD21

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Valor do dia-multa em frações do salário mínimo. | “0,3", "0,4", "0,5", "0,6"... "100”. | PJE\_UC027;   PJE\_UC040. |

## RD22

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação. | “Em cumprimento", "Não início cumprimento", "Não cumprido", "Cumprido”. | PJE\_UC027 |

## RD23

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Unidade monetária. | “Real", "Salário mínimo", "OTN", "ORTN", "UFIR", "URV”. | PJE\_UC027;   PJE\_UC039. |

## RD24

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Lembrete. | “Selecione" (default), "Diário", "Semanal", "Mensal", "Trimestral", "Anual", "Data definida”. | PJE\_UC027. |

## RD25

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Brasileiro? | “Sim”, “Não” | Funcionalidades:   Novo Processo   Novo processo incidental   Novo processo com Jus Postulandi |

## RD26

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivo de encerramento da transação penal. | “Selecione"(default), "Revogação", "Cumprimento da transação”. | PJE\_UC029. |

## RD27

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Prazo para suspensão? | “Ano”, “Mês”, “Dia”. | PJE\_UC031. |

## RD28

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Condição de campos (Genérico). | “Sim”, “Não”. | PJE\_UC002;   PJE\_UC031. |

## RD29

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação da Tarefa. | “Em andamento”, “Pendente”, “Concluído”. | PJE\_UC033. |

## RD30

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Efeito sobre a sentença em 1º grau. | “Mantida”, “Reformada”. | PJE\_UC003;   PJE\_UC032;   PJE\_UC034;   PJE\_UC035. |

## RD31

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivo do encerramento da suspensão. | “Revogação por causas facultativas”, “Revogação por causas obrigatórias”, "Outros". | PJE\_UC037. |

## RD32

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Delito. | “Por delito”, “Por crime agrupado”. | PJE\_UC037. |

## RD33

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Gênero da pena. | “Multa”, “Restritiva de direito”. | PJE\_UC039 |

## RD34

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Segredo de Justiça? | “Sim”, “Não”. | Funcionalidade:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo jus postulandi |

## RD35

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivo | “Lei 5.869/73 Art.155 I - Exigência do interesse público.”,   “Lei 5.869/73 Art.155 II - Casamento, filiação, separação, divórcio, alimentos e guarda de menores.”. | Funcionalidade:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo jus postulandi |

## RD36

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Justiça Gratuita? | “ Sim”, “Não”. | Funcionalidade:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo jus postulandi |

## RD37

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Pedido de liminar ou de antecipação de tutela? | “ Sim”, “Não”. | Funcionalidade:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo jus postulandi |

## RD38

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Possui algum outro documento   que o identifique? | “ Sim”, “Não”. | Funcionalidade:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo jus postulandi |

## RD39

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Documento utilizado falsamente | “Sim”, “Não” | Funcionalidade:   Novo Processo;   Cadastro de processo incidental;   Cadastro de processo jus postulandi |

## RD40

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Regime. | “Aberto”, “Semi-aberto”, “Fechado”. | PJE\_UC040;   PJE\_UC083. |

## RD41

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Uso do Dispositivo. | “Tipo penal”, “Norma de extensão” e “Nenhum dos tipos”. | PJE\_UC002   Funcionalidades   Legislação penal - Dispositivo da norma |

## RD42

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Condição de apreciação do segredo de justiça do processo   (também utilizado para processos sem a condição de segredo   de justiça mas com pedido de sigilo de documentos associado) | **A** - Apreciar (Indica que um dado processo está pendente de apreciação),   **S** - Apreciado (Indica que um dado processo foi apreciado e foi deferido),   **N** -Negado (Indica que um dado processo foi apreciado e foi negado) | Funcionalidades:   Agrupador dos processos sigilosos não apreciados;   Opções de sigilo no detalhamento do processo. |

## RD43

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Causa da absolvição sumária. | “A existência manifesta de causa excludente da ilicitude do fato”,   “A existência manifesta de causa excludente da culpabilidade do agente, salvo inimputabilidade”,   “Que o fato narrado evidentemente não constitui crime”,   “Extinta a punibilidade do agente”. | PJE\_UC044 |

## RD44

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Sexo | "Selecione..."; "Masculino"; "Feminino". | Funcionalidades:   Cadastro de processo com Jus postulandi;   Cadastro de processo - aba "Partes" (Informações pessoais) |

## RD45

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivo da prisão | "Temporária", "Preventiva",   "Preventiva determinada ou mantida em decisão condenatória recorrível",   "Definitiva", "Para fins de deportação",   "Para fins de extradição", "Para fins de expulsão". | PJE\_UC059 |

## RD46

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação do envio. | "Aguardando envio" e "Enviado". | PJE\_UC068 |

## RD47

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Medidas cautelares diversas da prisão | “Art. 319, I - CPP comparecimento periódico em juízo, no prazo e nas condições fixadas pelo juiz, para informar e justificar atividades”,   “Art. 319, II - CPP proibição de acesso ou freqüência a determinados lugares quando, por circunstâncias relacionadas ao fato, deva o indiciado ou acusado permanecer distante desses locais para evitar o risco de novas infrações”,   “Art. 319, III - CPP proibição de manter contato com pessoa determinada quando, por circunstâncias relacionadas ao fato, deva o indiciado ou acusado dela permanecer distante”,   “Art. 319, IV - CPP proibição de ausentar-se da Comarca quando a permanência seja conveniente ou necessária para a investigação ou instrução”,   “Art. 319, V - CPP recolhimento domiciliar no período noturno e nos dias de folga quando o investigado ou acusado tenha residência e trabalho fixos”,   “Art. 319, VI - CPP suspensão do exercício de função pública ou de atividade de natureza econômica ou financeira quando houver justo receio de sua utilização para a prática de infrações penais”,   “Art. 319, VII - CPP internação provisória do acusado nas hipóteses de crimes praticados com violência ou grave ameaça, quando os peritos concluírem ser inimputável ou semi-imputável (art. 26 do Código Penal) e houver risco de reiteração”,   “Art. 319, VIII - CPP fiança, nas infrações que a admitem, para assegurar o comparecimento a atos do processo, evitar a obstrução do seu andamento ou em caso de resistência injustificada à ordem judicial”,   “Art. 319, IX - CPP monitoração eletrônica”,   “Art. 320 A - CPP proibição de ausentar-se do País será comunicada pelo juiz às autoridades encarregadas de fiscalizar as saídas do território nacional, intimando-se o indiciado ou acusado para entregar o passaporte, no prazo de 24 horas”. | PJE\_UC057 |

## RD48

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Frequência. | “Quinzenal”, “Mensal”, “Bimestral”, “Trimestral”, “Semestral” e “Anual”. | PJE\_UC057 |

## RD49

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Prazo para comparecimento periódico em juízo. | Ano: em branco, ou número igual ou superior a um.   Mês: em branco, ou número igual ou superior a um e inferior a doze.   Dia: em branco, ou número igual ou superior a um e inferior a trinta e dois. | PJE\_UC057 |

## RD50

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de local. | “Bares”, “Restaurantes”, “Estádios”. | PJE\_UC057 |

## RD51

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de autoridade que concedeu a fiança. | “Autoridade policial” ou “Autoridade judiciária”. | PJE\_UC057 |

## RD52

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de bem. | "Bens imóveis", "Veículos automotores", "Aeronaves", "Embarcações", "Outros meios de transporte",   "Pedras, metais preciosos, jóias, quadros, objetos de arte, objeto de coleção e antiguidade",   "Eletro-eletrônicos diversos", "Moeda em espécie", "Ativos financeiros, cheques e outros títulos de crédito",   "Objetos pessoais ou domésticos", "Armas e acessórios", "Munição", "Explosivos",   "Substâncias entorpecentes ou de uso proscrito", "Computadores, acessórios, insumos e outros produtos de informática",   "Alimentos, bebidas, medicamentos e outros produtos perecíveis", "Animais", "Documentos", "Material biológico",   "Produtos florestais", "Equipamentos de caça e pesca (exceto armas)", "Outros bens móveis". | PJE\_UC057 |

## RD53

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Medidas protetivas de urgência que obrigam o agressor. | "Art. 22, I - suspensão da posse ou restrição do porte de armas, com comunicação ao órgão competente, nos termos da Lei nº 10.826/2003;",   "Art. 22, II - afastamento do lar, domicílio ou local de convivência com a ofendida;",   "Art. 22, III, a) proibição de aproximação da ofendida, de seus familiares e das testemunhas, fixando o limite mínimo de distância entre estes e o agressor;",   "Art. 22, III, b) proibição de contato com a ofendida, seus familiares e testemunhas por qualquer meio de comunicação;",   "Art. 22, III, c) proibição de freqüentação de determinados lugares a fim de preservar a integridade física e psicológica da ofendida;",   "Art. 22, IV - restrição ou suspensão de visitas aos dependentes menores, ouvida a equipe de atendimento multidisciplinar ou serviço similar;",   "Art. 22, V - prestação de alimentos provisionais ou provisórios.",   "Art. 22, § 1º - Outras Medidas". |  |

## RD54

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Gênero da Pena. | “Multa”, “Privativa de liberdade”, “Restritiva de direito”. | PJE\_UC003   Funcionalidades:   Tipo de pena Casos de teste:   PJe-744; |

## RD55

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipos de Local. | “Bar”, “Restaurante”, “Estádio”, “Ginásio”, “Centros de compras”. | PJE\_UC069 |

## RD56

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Esfera. | “Estadual”, “Federal”. | PJE\_UC071 |

## RD57

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tribunal. | Lista dos tribunais que têm estabelecimentos prisionais   (integração com o sistema CNIEP – Cadastro nacional de inspeções em estabelecimentos prisionais). | PJE\_UC071 |

## RD58

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Grau de jurisdição. | “1º grau”, “2º grau”. | PJE\_UC071 |

## RD59

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Comarca. | Comarcas cadastradas para o tribunal RD057, e grau de jurisdição RD058 escolhido. | PJE\_UC071 |

## RD60

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Natureza do estabelecimento. | "Cadeia pública, casa de detenção ou similares", "Casa do albergado", "Colônia agrícola,   industrial ou similar", "Delegacia", "Hospital de custódia e tratamento psiquiátrico", "Penitenciária". | PJE\_UC071 |

## RD61

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Causa e efeito da ICR. | “Nenhum”, “Ativa”, “Inativa”, “Suspende”, “Nenhum”, “Inicia/reinicia controle”, “Encerra controle”, “Nenhum”,   “Inicia contagem do prazo”, “Suspende contagem do prazo”, “Interrompe contagem do prazo”, “Reinicia contagem do prazo”. | PJE\_UC073 |

## RD62

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Consumação. | “Consumado” e “Tentado”. | PJE\_UC011 |

## RD63

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de Agrupamento. | “Concurso formal” e “Crime continuado. | PJE\_UC011 |

## RD64

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Pesquisar por. | “Número da norma”, “Identificador do dispositivo” e “Texto do dispositivo”. | PJE\_UC011 |

## RD65

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Efeitos da ICR sobre a parte. | “Nenhum”, “Ativa”, “Inativa”, “Suspende”. | PJE\_UC072 |

## RD66

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Efeitos sobre o controle de pena/prisão. | “Nenhum”, “Inicia/reinicia controle”, “Encerra controle”. | PJE\_UC072 |

## RD67

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Efeitos da ICR sobre a prescrição. | “Nenhum”, “Inicia contagem do prazo”, “Suspende contagem do prazo”,   “Interrompe contagem do prazo”, “Reinicia contagem do prazo”. | PJE\_UC072 |

## RD68

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Multiplicador. | Pode receber valores entre 1 e 3. | PJE\_UC039 |

## RD69

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Efeito da informação criminal relevante. | “Efeito sobre a parte no processo”, “Efeito sobre o controle de pena/prisão”,   “Efeito sobre a prescrição”. | PJE\_UC072 |

## RD70

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Classificação da falta. | “Leve”, “Média” e “Grave”. | PJE\_UC073 |

## RD71

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Detalhes da falta. | “Incitar ou participar de movimento para subverter a ordem ou a disciplina”, “Fuga”,   “Possuir, indevidamente, instrumento capaz de ofender a integridade física de outrem”,   “Provocar acidente de trabalho”, “Descumprir, no regime aberto, as condições impostas”,   “Inobservar os deveres previstos nos incisos II e V, do artigo 39, desta Lei”,   “Ter em sua posse, utilizar ou fornecer aparelho telefônico, de rádio ou similar, que permita   a comunicação com outros presos ou com o ambiente externo” e “Outros”. | PJE\_UC073 |

## RD72

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivo da Permissão de Saída. | “Falecimento ou doença grave do cônjuge, companheira, ascendente, descendente ou irmão”,   “Necessidade de tratamento médico”, “Outros”. | PJE\_UC074 |

## RD73

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Espécie de pena. | “Reclusão”, “Detenção” e “Prisão simples”. | PJE\_UC082;   PJE\_UC083. |

## RD74

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivo da remição da pena. | “Estudo”, “Trabalho”. | PJE\_UC078 |

## RD75

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Unidade de remição da pena. | “Dias”, “Horas. | PJE\_UC078 |

## RD76

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Condições facultativas. | "Não mudar de residência sem comunicação ao juiz e à autoridade incumbida da observação cautelar e de proteção”,   “Recolher-se à habitação em hora fixada”, “Não frequentar determinados lugares”, ”Outras”. | PJE\_UC079 |

## RD77

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivo da suspensão. | “Condenação irrecorrível a pena privativa de liberdade por crime cometido durante o livramento (CP art. 86, I)”,   “Condenação irrecorrível a pena privativa de liberdade por crime anterior ao livramento (CP art. 86, II)”,   “Descumprimento de quaisquer das obrigações (CP art. 87 1ª parte)”,   “Condenação irrecorrível a pena não privativa de liberdade (CP art. 87 2ª parte)”. | PJE\_UC081 |

## RD78

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Natureza da privação de liberdade. | Apreensão flagrante, Internação provisória(cautelar), Internação provisória determinada   ou mantida em sentença recorrível, Internação definitiva, Internação sansão, Semiliberdade provisória (cautelar),   Semiliberdade provisória determinada ou mantida em sentença recorrível Semiliberdade definitiva. | PJE\_INF\_UC001 |

## RD79

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivo do encerramento da Privação de Liberdade. | Conversão da privação de liberdade. | PJE\_INF\_UC001 |

## RD80

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de liberação. | Revogação da internação provisória, Revogação da semiliberdade, Revogação flagrante, Decorrente de sentença, Desinternação. | PJE\_INF\_UC002 |

## RD81

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de suspensão. | Remissão suspensiva, Não localização do adolescente. | PJE\_INF\_UC006 |

## RD82

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de Extinção. | “Cumprimento da medida”, “Morte do agente”, “Retroatividade da lei”, “Perda do objeto”,   “Implemento da idade de 21 anos”, “Pela realização de sua finalidade”,   “Pela aplicação de pena privativa de liberdade, a ser cumprida em regime fechado ou   semiaberto, em execução provisória ou definitiva”, “Pela condição de doença grave, que torne o   adolescente incapaz de submeter-se ao cumprimento da medida” e “Nas demais hipóteses previstas em lei”. | PJE\_INF\_UC011 |

## RD83

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivo do encerramento da suspensão. | “Localização do Adolescente”, “Outros”. | PJE\_INF\_UC007 |

## RD84

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Fundamento da improcedência. | “Estar provada a inexistência do fato”, “Não haver prova da existência do fato”,   “Não constituir o fato ato infracional”, “Não existir prova de ter o adolescente concorrido para o ato infracional”. | PJE\_INF\_UC012 |

## RD85

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Efeito sobre Sentença de 1º Grau. | Mantida e Reformada. | PJE\_INF\_UC018 |

## RD86

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Fundamentos da improcedência (Art 189 ECA) de sentença de insância superior DIS. | “Estar provada a inexistência do fato”, “ Não haver prova da existência do fato”,   “Não constituir o fato ato infracional”, “Não existir prova de ter o adolescente concorrido para o ato infracional”. | PJE\_INF\_UC017 |

## RD87

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de distribuição. | "Automática"; "Por competência exclusiva"; "Incidental"; "Por dependência"; "Por prevenção"; "Por sorteio". | Funcionalidades:   Informações de distribuição. |

## RD88

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Cronologia | "Crescente"; "Decrescente". | Funcionalidades:   Cadastro de processo (aba "Processo") |

## RD89

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de Associação | "Desmembramento"; "Dependência"; "Prevenção". | Funcionalidades:   Associar processo (aba "Formulário")   Casos de teste:   PJe-593 |

## RD90

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Criticidade | "Informação"; "Alerta"; "Crítico". | Funcionalidades:   Alertas |

## RD91

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de inscrição | "Advogado"; "Estagiário"; "Suplementar". | Funcionalidades:   Cadastro de processo (aba "Documentos de identificação") |

## RD92

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tempo em anos?   Tempo em meses?   Tempo em dias?   Tempo em horas?   Valor?   Quantidade de dias-multa?   Tipo do bem?   Descrição do bem?   Descrição do local? | "Sim"; "Não". | Funcionalidades:   Tipo de pena   Casos de teste:   PJe-751 |

## RD93

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de Origem | Selecione... (valor default) | Funcionalidades:   Órgão do procedimento de origem   Casos de teste:   PJe-798 |

## RD94

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação | \[Todos\] (valor default) | Funcionalidades:   Órgão do procedimento de origem   Casos de teste:   PJe-798 |

## RD95

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de meio de comunicação | Diário eletrônico; (P - Comunicação por diário eletrônico)   Central de mandados; (M - Comunicação por oficial de justiça)   Enviar via sistema; (E - Comunicação por meio eletrônico na forma da Lei n. 11.419/2006)   Correios; (C - Comunicação por correspondência)   Carta; (L - Comunicação por carta rogatória, de ordem ou precatória)   Edital; (D - Comunicação por edital)   Pessoalmente; (S)   Telefone (T). | Funcionalidades:   Tarefa preparar comunicação   Orientações de fluxos:   Fluxo de preparar ato de comunicação |

## RD96

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de prazo | anos; (A)   meses; (M)   dias; (D - mais comumente utilizado)   horas; (H)   minutos; (N)   sem prazo; (S - não há prazo para resposta)   data certa (C - o prazo de resposta é um momento certo) | Funcionalidades: |

## RD97

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação cadastral de pessoa física na Receita Federal do Brasil (RFB). | REGULAR;   CANCELADA POR ENCERRAMENTO DE ESPÓLIO;   SUSPENSA;   CANCELADA POR ÓBITO SEM ESPÓLIO;   PENDENTE DE REGULARIZAÇÃO;   CANCELADA POR MULTIPLICIDADE;   NULA;   CANCELADA DE OFÍCIO. | Funcionalidade(s):   Preparar remessa para o 2º grau. |

## RD98

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Instância de tramitação | APLICACAO\_1\_GRAU (1);   APLICACAO\_2\_GRAU (2);   APLICACAO\_3\_GRAU (3) | Funcionalidades: |

## RD99

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de conexão | Dependência (DP)   Desmembramento (DM)   Prevenção (PR)   Vinculação indireta (AS) | Funcionalidades:   processos associados |

## RD100

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Tipo de uso (tipo de documento) | Texto (P)   Documento (D ou Upload)   Todos (T)   Expediente (E - não existe mais a partir da versão 1.6.0) | Funcionalidades:   Configuração de tipo de documento;   Funcionalidades que utilizam o uso como filtro, como por exemplo,   a tarefa de preparar comunicação do PAC. |

## RD101

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Pesquisar por: | Órgão Julgador Magistrado | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RD102

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Resultado | R("Recebido")   M("Mudou-se")   E("Endereço insuficiente")   N("Não existe o número ")   D("Desconhecido")   C("Recusado")   P("Não procurado")   A("Ausente")   F("Falecido")   O("Outros ") | Funcionalidades:   Registro de intimação para expedientes físicos. |

## RD103

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Condição de apreciação do segredo de justiça/sigilo da solicitação | **C** - Concedido (Indica que um dado pedido foi concedido),   **R** - Revogado (Indica que um dado pedido foi negado) | Funcionalidades:   Agrupador dos processos sigilosos não apreciados;   Opções de sigilo no detalhamento do processo |

## RD104

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação do processo | **D** - Distribuído,   **E** - Em elaboração,   **V** - Verificado | Funcionalidades: |

## RD105

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação cadastral de pessoa jurídica na Receita Federal do Brasil (RFB). | NULA;   ATIVA;   SUSPENSA;   INAPTA;   BAIXADA | Funcionalidade(s):   Preparar remessa para o 2º grau. |

## RD106

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação de um documento em um processo judicial. | Validado;   Não validado;   Excluído;   Inativo. | Funcionalidade(s):   Preparar remessa para o 2º grau. |

## RD107

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Prioridade de processo | **\-** Deficiente físico;   **\-** Doença terminal;   **\-** Idoso(a);   **\-** Réu preso | Funcionalidade(s):Cadastro de partes no protocolo de processos |

## RD108

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação das audiências | **M** ("designada", "9")   **C** ("cancelada", "11")   **R** ("redesignada", "10")   **F** ("realizada", "13")   **N** ("não-realizada", "14")   **D** ("convertida em diligência", "15")   **P** ("Pesquisada", "x") | Funcionalidade(s):   Marcação de Audiências |

## RD109

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação do processo judicial | **AN** - Anotação   **AJ** - Aguardando julgamento   **EJ** - Em julgamento   **JG** - Julgado   **PR** - Preferência   **PV** - Pedido de vista   **SO** - Pedido de sustentação oral   **AD** - Adiado para próxima sessão   **RJ** - Retirado de julgamento   **DD** - Destacado para discussão | Funcionalidades:   Painel do secretário da sessão.   Sessão de julgamento. |

## RD110

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Motivos de redistribuição | **C** - Alteração da competência do órgão   **D** - Desaforamento   **E** - Reunião de execuções   **I** - Impedimento   **J** - Determinação judicial   **M** - Erro material   **P** - Prevenção   **R** - Incompetência   **S** - Suspeição   **U** - Criação de unidade judiciária   **X** - Extinção de unidade judiciária   **W** - Recusa de prevenção / dependência(Motivos de Redistribuição de 2º Grau)   **A** - Afastamento do relator   **K** - Em razão de posse do relator em cargo diretivo do tribunal   **N** - Impedimento do relator   **O** - Suspeição do relator   **T** - Afastamento temporário do titular   **Z** - Sucessão | Funcionalidades: Redistribuição. |

## RD111

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação dos expedientes da central de mandados | **A** - Mandados pendentes de distribuição   **C** - Mandados cujas diligências foram concluídas   **R** - Mandados pendentes de redistribuição | Funcionalidades:   Distribuição e redistribuição de mandados |

## RD112

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Situação da parte | **A** - Ativa   **I** - Inativa   **B** - Baixada   **S** - Suspensa | Funcionalidades:   Retificação de autuação por meio do menu;   Retificação de autuação por meio de uma tarefa |

## RD113

| Campo | Dominínio | itens relacionados |
| --- | --- | --- |
| Etapas da audiência | **I** - Inicial   **M** - Marcação   **C** - Cancelamento   **R** - Realização   **L** - Remarcação   **D** - Conversão em diligência | Funcionalidades:   Tarefas de audiência |