import type { DevolutivaEntry } from '@/types/quiz'

export const DEVOLUTIVAS: Record<string, DevolutivaEntry> = {
  // ─────────────────────────────────────────────────────────────────────────
  // DENTISTA — COMECANDO_ESTRUTURAR
  // ─────────────────────────────────────────────────────────────────────────

  'dentista:comecando_estruturar:atrair_clientes': {
    resumo: 'Sua clínica está nascendo e a captação de pacientes é a prioridade imediata.',
    bloco1:
      'Você está na fase mais desafiadora e mais rica: transformar um consultório em uma clínica com fluxo constante. Nesse momento, cada paciente conquistado é aprendizado e cada indicação vale ouro. A base que você construir agora determinará o ritmo dos próximos cinco anos.',
    bloco2:
      'O principal freio nesta etapa é a invisibilidade — sem presença digital consistente e sem um sistema de indicações ativo, a clínica depende de esforço manual e sorte. Profissionais nesse estágio frequentemente subestimam o poder de transformar pacientes satisfeitos em promotores ativos.',
    focos: [
      'Monte um protocolo simples de pós-atendimento: mensagem de agradecimento + pedido de avaliação Google em até 24h após cada consulta',
      'Crie um perfil Google Meu Negócio completo (fotos reais, especialidades, horários) — isso gera visibilidade local sem custo',
      'Implemente um programa de indicação com benefício claro: desconto na próxima consulta para quem indicar um paciente que comparecer',
    ],
  },

  'dentista:comecando_estruturar:vender_melhor': {
    resumo: 'Você tem potencial de receita maior do que está convertendo em cada atendimento.',
    bloco1:
      'Clínicas em estruturação frequentemente colocam toda a energia no atendimento clínico e negligenciam o processo comercial dentro do consultório. O resultado: planos de tratamento aprovados pela metade, pacientes que somem após o orçamento e receita abaixo do potencial real.',
    bloco2:
      'O que trava a conversão nessa fase é a ausência de uma apresentação estruturada de orçamento. Quando o dentista fala o preço sem contexto, o paciente compara com o vizinho. Quando apresenta valor — o que muda na vida da pessoa — a decisão muda completamente.',
    focos: [
      'Crie um roteiro de apresentação de orçamento em 3 etapas: problema atual → impacto no sorriso/saúde → investimento + condições',
      'Ofereça sempre o parcelamento como primeira opção, não como alternativa — reduza a percepção de custo mensal',
      'Faça follow-up estruturado com pacientes que receberam orçamento e não agendaram: uma mensagem em 3 dias, outra em 7',
    ],
  },

  'dentista:comecando_estruturar:melhorar_preco_margem': {
    resumo: 'Sua clínica está crescendo em volume, mas a margem ainda não reflete o esforço.',
    bloco1:
      'No início da operação, é comum praticar preços baixos para conquistar pacientes. Essa estratégia tem um prazo de validade: ela atrai um perfil de paciente que não valoriza o serviço e cria um teto de crescimento que impede a clínica de respirar financeiramente.',
    bloco2:
      'A dificuldade em aumentar preços nessa fase vem do medo de perder os pacientes que já tem. Mas a realidade é que uma base pequena de pacientes que pagam bem é mais sustentável do que uma agenda lotada com margens negativas. A questão é como fazer a transição.',
    focos: [
      'Mapeie os 3 procedimentos com maior margem e invista em comunicação específica para atrair mais desses casos',
      'Implemente uma tabela de honorários com reajuste anual programado — comunique com 30 dias de antecedência e explique o valor entregue',
      'Crie um diferencial percebível (atendimento, ambiente, tecnologia) que justifique preço acima da média regional',
    ],
  },

  'dentista:comecando_estruturar:organizar_gestao': {
    resumo: 'A clínica cresce mas falta sistema — agenda, financeiro e processos ainda estão na cabeça.',
    bloco1:
      'Quando a clínica está começando, é normal que o dentista seja também o gestor, o recepcionista e o financeiro. O problema é que essa acumulação de funções cria um gargalo de pessoa: nada funciona quando você não está, e você nunca consegue sair.',
    bloco2:
      'O que trava a gestão nessa fase é a ausência de processos documentados. Sem checklists, sem scripts de atendimento, sem rotinas financeiras básicas, cada dia começa do zero. A clínica opera no improviso mesmo quando tem potencial para muito mais.',
    focos: [
      'Escolha um software de gestão odontológica (Clinicorp, iClinic, Dental Office) e migre 100% da agenda para ele em 30 dias',
      'Documente os 5 processos mais repetitivos da clínica em formato de checklist — isso permite delegar sem perder qualidade',
      'Implante uma rotina financeira semanal: revisão de faturamento, contas a pagar/receber e inadimplência toda segunda-feira',
    ],
  },

  'dentista:comecando_estruturar:melhorar_equipe': {
    resumo: 'Você tem equipe pequena, mas o nível de serviço ainda depende demais de você.',
    bloco1:
      'Na fase inicial, a equipe geralmente é mínima — uma auxiliar, talvez uma recepcionista. O desafio não é ter mais pessoas, mas fazer as pessoas certas entregarem um padrão de atendimento que não varie dependendo de quem está na clínica naquele dia.',
    bloco2:
      'O que trava o desenvolvimento da equipe nessa etapa é a falta de treinamento formal e de feedback estruturado. A pessoa aprende "na marra", erra por falta de orientação e o dentista resolve tudo na raça. Isso gera desgaste e impede que a clínica cresça além do que uma pessoa consegue sustentar.',
    focos: [
      'Crie um manual de onboarding simples: rotinas diárias, script de atendimento ao paciente e checklist de abertura/fechamento',
      'Implante uma reunião semanal de 15 minutos com a equipe para alinhar agenda, resolver problemas e reconhecer acertos',
      'Defina um indicador de qualidade de atendimento (avaliação Google, NPS informal) e compartilhe com a equipe mensalmente',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DENTISTA — CRESCENDO_DESORGANIZACAO
  // ─────────────────────────────────────────────────────────────────────────

  'dentista:crescendo_desorganizacao:atrair_clientes': {
    resumo: 'Sua clínica cresceu, mas a captação de pacientes ainda é irregular e imprevisível.',
    bloco1:
      'Você passou pela fase de sobrevivência e hoje tem uma base de pacientes. O problema é que o crescimento ainda depende de meses bons e meses ruins, sem uma máquina de aquisição que funcione de forma previsível. Nos meses bons você está sobrecarregado, nos meses ruins você se preocupa com o fluxo.',
    bloco2:
      'O que trava a captação nessa fase é a ausência de um funil de marketing estruturado. A clínica cresce por indicação e sorte, não por sistema. Sem conteúdo consistente, sem campanhas ativas e sem rastreamento de onde vêm os pacientes, é impossível escalar o que está funcionando.',
    focos: [
      'Implante um rastreamento simples de origem dos pacientes — pergunte no primeiro atendimento "como nos conheceu?" e registre no sistema',
      'Crie um calendário de conteúdo para Instagram com pelo menos 3 posts semanais: caso clínico, dica de saúde e bastidor da clínica',
      'Invista em tráfego pago local (Google Ads ou Meta Ads) com orçamento inicial de R$ 500/mês focado na especialidade mais lucrativa',
    ],
  },

  'dentista:crescendo_desorganizacao:vender_melhor': {
    resumo: 'A agenda está cheia, mas a taxa de aprovação de tratamentos ainda fica abaixo do potencial.',
    bloco1:
      'Com o crescimento da clínica, a pressão aumenta: mais pacientes, mais orçamentos, mais follow-ups. O problema é que a conversão não acompanhou o volume. Você e sua equipe estão ocupados, mas uma parcela significativa dos orçamentos apresentados some sem retorno.',
    bloco2:
      'O gargalo comercial nessa fase é a falta de um processo pós-orçamento. A pessoa sai da consulta com o papel na mão, recebe o preço pelo WhatsApp e desaparece. Sem um sistema de nutrição e acompanhamento estruturado, a clínica perde receita que já estava na mão.',
    focos: [
      'Mapeie todos os orçamentos abertos dos últimos 90 dias e crie um script de reativação por WhatsApp — "Olá, notamos que você ainda não agendou..."',
      'Treine a recepção para fazer o primeiro contato de follow-up em até 48h após orçamento apresentado, com pergunta aberta sobre dúvidas',
      'Crie uma proposta de tratamento visual (PDF ou apresentação) com antes/depois, benefícios e condições de pagamento detalhadas',
    ],
  },

  'dentista:crescendo_desorganizacao:melhorar_preco_margem': {
    resumo: 'O faturamento cresce, mas a rentabilidade não acompanha o volume de trabalho.',
    bloco1:
      'É o paradoxo do crescimento desorganizado: você trabalha mais, atende mais pacientes, mas no final do mês a margem está apertada. Os custos crescem junto com a receita, e muitas vezes mais rápido. A clínica está ficando maior sem ficar mais lucrativa.',
    bloco2:
      'O que trava a margem nessa fase é a mistura de procedimentos rentáveis e não-rentáveis sem consciência de qual é qual. Sem um DRE por procedimento, a clínica não sabe onde está ganhando e onde está perdendo. Decisões de precificação são feitas no feeling, não nos números.',
    focos: [
      'Faça um mapeamento de custo por procedimento (material, tempo, overhead) e identifique os 3 mais rentáveis e os 3 menos rentáveis',
      'Revise sua tabela de honorários com base nos custos reais — muitos dentistas não repassam o custo de mão de obra e overhead nos preços',
      'Priorize a agenda para os procedimentos de maior margem: otimize os horários e treine a recepção para ofertar primeiro os tratamentos mais rentáveis',
    ],
  },

  'dentista:crescendo_desorganizacao:organizar_gestao': {
    resumo: 'A clínica cresceu e hoje opera no caos — processos, equipe e finanças sem sistema.',
    bloco1:
      'Você chegou num ponto crítico: a clínica cresceu além da sua capacidade de gerenciar tudo na cabeça. Decisões são tomadas na correria, problemas se repetem porque não têm solução definitiva, e você sente que está apagando incêndio o dia todo em vez de construir algo sólido.',
    bloco2:
      'O caos na gestão nessa fase é consequência da velocidade do crescimento. A estrutura não acompanhou o volume. Processos informais que funcionavam com 2 pessoas quebram com 5. O que era agilidade vira inconsistência e o dentista fica preso no operacional.',
    focos: [
      'Mapeie os 5 problemas que mais se repetem na clínica e crie um processo definitivo para cada um — documente, treine a equipe e monitore',
      'Delegue a gestão da agenda e do atendimento telefônico completamente para a recepção, com roteiro claro e autonomia para decisões simples',
      'Implante uma reunião quinzenal de gestão com indicadores básicos: faturamento, novos pacientes, taxa de retorno e inadimplência',
    ],
  },

  'dentista:crescendo_desorganizacao:melhorar_equipe': {
    resumo: 'A equipe cresceu mas o padrão de atendimento ainda é inconsistente e depende de você.',
    bloco1:
      'Com o crescimento, você contratou mais pessoas, mas a clínica ficou mais difícil de gerenciar, não mais fácil. O atendimento varia conforme o dia e a pessoa, pacientes reclamam de coisas que não deveriam acontecer, e você passa mais tempo resolvendo conflitos do que clinicar.',
    bloco2:
      'O que trava o desenvolvimento da equipe nessa fase é a ausência de uma cultura clara e de um sistema de gestão de pessoas. Sem feedback regular, sem metas individuais e sem reconhecimento estruturado, os melhores profissionais ficam desmotivados e os piores permanecem sem consequência.',
    focos: [
      'Implante avaliações de desempenho trimestrais com critérios claros: pontualidade, qualidade, atendimento ao paciente e trabalho em equipe',
      'Crie um programa de reconhecimento simples: "colaborador do mês" com benefício tangível (folga, bônus, curso)',
      'Invista em treinamento técnico anual para cada membro da equipe — isso aumenta o engajamento e a qualidade do serviço simultaneamente',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DENTISTA — OPERANDO_COM_GARGALOS
  // ─────────────────────────────────────────────────────────────────────────

  'dentista:operando_com_gargalos:atrair_clientes': {
    resumo: 'A clínica opera bem, mas falta paciente certo para os horários e procedimentos mais rentáveis.',
    bloco1:
      'Você tem estrutura, equipe e processos. O gargalo agora é qualitativo: atrair o paciente com perfil ideal para os procedimentos de maior valor, nos horários de menor ocupação. A clínica está funcionando, mas não está funcionando no seu potencial máximo.',
    bloco2:
      'O que trava a captação nessa fase é a comunicação genérica. Quando a clínica se comunica para "todo mundo", atrai quem está buscando preço baixo. A sofisticação necessária agora é segmentar a comunicação por especialidade, público e momento de compra.',
    focos: [
      'Identifique sua especialidade mais lucrativa e crie uma campanha dedicada: landing page, conteúdo específico e tráfego pago segmentado',
      'Desenvolva um programa de reativação para pacientes inativos (sem consulta há mais de 6 meses) — eles já confiam em você',
      'Crie parcerias com profissionais complementares (ortodontistas, implantodontistas, médicos) para troca de indicações qualificadas',
    ],
  },

  'dentista:operando_com_gargalos:vender_melhor': {
    resumo: 'Orçamentos são apresentados bem, mas a taxa de fechamento nos tratamentos grandes ainda decepciona.',
    bloco1:
      'Você tem um bom processo clínico e sabe apresentar o tratamento. O problema está nos grandes casos: implantes, reabilitações, ortodontia. Nesses orçamentos de alto valor, o paciente pede tempo para pensar e muitas vezes não volta. A clínica perde receita significativa nessa etapa.',
    bloco2:
      'O gargalo em tratamentos de alto valor é a falta de um processo de suporte à decisão. O paciente vai para casa, discute com a família, procura preço na concorrência e se perde no caminho. Sem uma sequência estruturada de contato e apoio, a clínica perde para o "vou pensar".',
    focos: [
      'Crie um "kit de decisão" para tratamentos acima de R$3.000: apresentação visual, depoimentos de pacientes similares e FAQ de objeções',
      'Implante uma sequência de follow-up para grandes casos: contato em 48h, 7 dias e 15 dias com mensagens de valor, não de pressão',
      'Ofereça uma consulta de segundo contato gratuita para grandes tratamentos — reduz a insegurança e aumenta a taxa de conversão',
    ],
  },

  'dentista:operando_com_gargalos:melhorar_preco_margem': {
    resumo: 'A clínica opera com eficiência, mas a precificação ainda não captura todo o valor entregue.',
    bloco1:
      'Você tem uma clínica estruturada, com boa reputação e atendimento diferenciado. O problema é que os preços não refletem esse posicionamento. Você entrega premium e cobra médio — e isso cria uma dissonância que limita tanto a margem quanto o perfil de paciente que você atrai.',
    bloco2:
      'O que trava o ajuste de preço nessa fase é o medo de perder a base atual. Mas a realidade é que uma clínica bem posicionada pode reajustar preços sem perder os pacientes ideais — e muitas vezes a seleção natural que acontece depois é positiva para a rentabilidade e a qualidade de vida.',
    focos: [
      'Posicione seus honorários 20% acima da média regional e invista em comunicação que justifique esse diferencial (tecnologia, experiência, resultados)',
      'Crie um segmento "premium" para procedimentos selecionados, com atendimento diferenciado, agenda exclusiva e experiência aprimorada',
      'Revise o mix de procedimentos: reduza gradualmente os procedimentos de baixa margem e invista em capacitação nas especialidades mais rentáveis',
    ],
  },

  'dentista:operando_com_gargalos:organizar_gestao': {
    resumo: 'A clínica tem processos, mas gargalos operacionais travam a eficiência e a escalabilidade.',
    bloco1:
      'Sua clínica tem mais estrutura do que a média — processos documentados, equipe treinada, sistema de gestão. O gargalo agora são os pontos de fricção que se repetem: atrasos na agenda, falhas de comunicação entre equipes, retrabalho em procedimentos administrativos.',
    bloco2:
      'Gargalos operacionais nessa fase geralmente estão em dois lugares: handoff entre pessoas (a informação se perde na transição) e processos que funcionam bem individualmente mas travam quando somados. O sistema funciona bem nas partes, mas patina como conjunto.',
    focos: [
      'Mapeie o fluxo completo do paciente da marcação ao pós-tratamento e identifique os 3 pontos com mais falhas ou retrabalho',
      'Implante uma reunião de 10 minutos diária com a equipe operacional para alinhamento de agenda e antecipação de problemas',
      'Avalie a adoção de um software de gestão mais robusto com integração entre agenda, financeiro e prontuário eletrônico',
    ],
  },

  'dentista:operando_com_gargalos:melhorar_equipe': {
    resumo: 'A equipe é boa, mas não opera ainda com a autonomia e o padrão necessários para o próximo nível.',
    bloco1:
      'Você tem uma equipe razoável, com pessoas comprometidas. O desafio agora é elevar o padrão coletivo: transformar uma equipe que "segue instruções" em uma equipe que "pensa junto" e resolve problemas sem precisar de você em todo momento.',
    bloco2:
      'O que trava o desenvolvimento da equipe nessa fase é a ausência de liderança de meio. Sem um coordenador ou gerente operacional, o dentista continua sendo o ponto de resolução de tudo. A equipe tem potencial mas não tem o espaço de autoridade para crescer.',
    focos: [
      'Identifique o colaborador com mais potencial de liderança e desenvolva-o como coordenador de operações — delegue progressivamente decisões do dia a dia',
      'Crie um plano de desenvolvimento individual para cada membro da equipe com metas semestrais e recursos de capacitação definidos',
      'Implante um sistema de NPS interno: avalie trimestralmente a satisfação e o engajamento da equipe e tome ações concretas nos pontos críticos',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DENTISTA — BUSCANDO_ESCALA
  // ─────────────────────────────────────────────────────────────────────────

  'dentista:buscando_escala:atrair_clientes': {
    resumo: 'Para escalar, você precisa de uma máquina de captação que funcione sem depender de você.',
    bloco1:
      'Você está no momento mais estratégico da jornada: pronto para crescer de forma estruturada. Para isso, a captação precisa deixar de ser uma tarefa e virar um sistema — com funil documentado, automações ativas e métricas que permitem otimizar cada etapa do processo.',
    bloco2:
      'O que trava a escala na captação é a dependência da reputação pessoal do dentista. A clínica cresce enquanto você está presente e visível. Para escalar de verdade, a marca da clínica precisa ser maior do que a marca do profissional — isso exige investimento em branding institucional e marketing de performance.',
    focos: [
      'Contrate um gestor de tráfego especializado em saúde para criar e otimizar campanhas de performance no Google e Meta com meta de CAC definida',
      'Desenvolva a marca da clínica como entidade autônoma: identidade visual, site otimizado para SEO local e presença digital consistente',
      'Implante um CRM para rastrear todos os leads da geração ao atendimento, com métricas de conversão em cada etapa do funil',
    ],
  },

  'dentista:buscando_escala:vender_melhor': {
    resumo: 'Na escala, o processo comercial precisa funcionar sem depender do seu talento individual.',
    bloco1:
      'Para escalar uma clínica odontológica, o processo de venda precisa ser transferível. Hoje, você sabe apresentar um tratamento e converter — mas quando outro dentista ou a recepção precisa fazer isso, o resultado é diferente. A escala exige que o método de vendas seja um sistema, não um talento.',
    bloco2:
      'O gargalo comercial na escala é a personalização excessiva. Cada profissional vende de um jeito, com script diferente, resultados imprevisíveis. Sem um processo padronizado de apresentação de tratamento, aprovação de orçamento e follow-up, a clínica cresce mas a receita por paciente estagna.',
    focos: [
      'Documente o processo comercial completo: script de consulta, apresentação de orçamento, gestão de objeções e follow-up — treine toda a equipe',
      'Implante um CRM odontológico que rastreie taxa de conversão por profissional, por especialidade e por origem do paciente',
      'Crie um programa de bonificação para a equipe baseado em indicadores de conversão e satisfação do paciente, não apenas em produção',
    ],
  },

  'dentista:buscando_escala:melhorar_preco_margem': {
    resumo: 'Para escalar com saúde, a estrutura de custos e precificação precisa suportar o crescimento.',
    bloco1:
      'Escalar uma clínica odontológica com margens apertadas é uma armadilha. Você pode triplicar o faturamento e a margem continuar igual — ou piorar, porque os custos fixos crescem antes da receita. Para escalar com sustentabilidade, a estrutura financeira precisa ser ajustada antes, não depois.',
    bloco2:
      'O que trava a margem na escala é o crescimento dos custos fixos sem revisão da precificação. Quando a clínica cresce, aluga mais espaço, contrata mais gente e compra mais equipamento — mas o preço dos procedimentos permanece o mesmo. A matemática não fecha.',
    focos: [
      'Construa um modelo financeiro de escala: projete receita e custos para 2x e 3x o tamanho atual — identifique em que ponto a margem fica saudável',
      'Revise todos os contratos de fornecedores e laboratórios com poder de negociação de escala: volume maior = preço menor',
      'Crie pricing diferenciado por complexidade e urgência — procedimentos eletivos têm margem diferente de emergências e reabilitações complexas',
    ],
  },

  'dentista:buscando_escala:organizar_gestao': {
    resumo: 'Para escalar, a gestão precisa funcionar sem você no centro de cada decisão.',
    bloco1:
      'Você está pronto para crescer, mas a gestão atual ainda tem você como hub central. Isso é o teto da escala: uma clínica que depende do dentista-gestor para funcionar não consegue abrir unidade 2, contratar o sócio certo ou passar por uma crise sem travar.',
    bloco2:
      'O que impede a gestão de escalar é a falta de autonomia distribuída. Sem processos documentados, indicadores claros e uma estrutura de liderança que funcione sem você presente, a clínica cresce até o limite da sua energia pessoal — e para aí.',
    focos: [
      'Contrate ou promova um gerente de operações e delegue formalmente a gestão do dia a dia — defina KPIs e reuniões de acompanhamento',
      'Implante um dashboard de gestão semanal com os 8 indicadores-chave da clínica: faturamento, ocupação, conversão, inadimplência, NPS, custo por paciente',
      'Documente todos os processos críticos em forma de SOPs (procedimentos operacionais padrão) e revise-os trimestralmente',
    ],
  },

  'dentista:buscando_escala:melhorar_equipe': {
    resumo: 'Para escalar, você precisa de uma equipe que multiplique sua capacidade, não que a limite.',
    bloco1:
      'Equipe é o ativo mais crítico na escala de uma clínica. Para crescer de 1 para 3 unidades, ou de 5 para 15 profissionais, você precisa de uma cultura organizacional forte, líderes de equipe formados internamente e um sistema de capacitação contínua.',
    bloco2:
      'O gargalo de equipe na escala é a falta de uma jornada de desenvolvimento clara. Sem um plano de carreira definido, os melhores profissionais saem para abrir seu próprio negócio ou vão para concorrentes. Reter e desenvolver talentos é mais barato e mais estratégico do que contratar e treinar constantemente.',
    focos: [
      'Crie um plano de carreira formal para cada função da clínica, com níveis de senioridade, critérios de promoção e remuneração definida',
      'Implante uma academia interna de treinamento com vídeos de processo, materiais de referência e trilhas de capacitação por função',
      'Estabeleça um programa de participação nos resultados para a equipe — quando a clínica ganha, todos ganham proporcionalmente',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DONO_GESTOR_RADIOLOGIA — COMECANDO_ESTRUTURAR
  // ─────────────────────────────────────────────────────────────────────────

  'dono_gestor_radiologia:comecando_estruturar:atrair_clientes': {
    resumo: 'Sua clínica de radiologia está nascendo e atrair dentistas parceiros é a missão principal.',
    bloco1:
      'O modelo de negócio de uma clínica de radiologia depende de uma carteira de dentistas indicadores sólida. No início, construir essa carteira do zero é o trabalho mais importante — e mais demorado. Cada dentista conquistado é um canal de geração de exames com potencial recorrente.',
    bloco2:
      'O que trava a atração de dentistas nessa fase é a abordagem genérica. Ir de consultório em consultório com panfleto não funciona. O dentista não precisa de mais um fornecedor de exame — ele precisa de um parceiro que facilite sua vida clínica e traga qualidade que valorize seu trabalho.',
    focos: [
      'Mapeie os dentistas da sua região por especialidade e priorize os com maior demanda de exames: ortodontistas, implantodontistas e cirurgiões bucomaxilo',
      'Crie uma proposta de valor clara para dentistas: prazo de laudo, qualidade de imagem, suporte clínico e facilidade de agendamento — diferencie-se nesses pontos',
      'Visite pessoalmente os 20 dentistas prioritários com uma apresentação profissional e leve amostras de qualidade (laudo de demo, imagens de resolução)',
    ],
  },

  'dono_gestor_radiologia:comecando_estruturar:vender_melhor': {
    resumo: 'Você tem dentistas visitando, mas a conversão em indicações regulares ainda é baixa.',
    bloco1:
      'Ter dentistas conhecendo sua clínica é diferente de ter dentistas mandando pacientes de forma consistente. A venda numa clínica de radiologia é um processo de construção de confiança — o dentista só vira indicador regular quando tem certeza de que o exame vai sair no prazo, com qualidade e sem dor de cabeça.',
    bloco2:
      'O que trava a conversão de dentistas em indicadores regulares nessa fase é a falta de um processo de relacionamento pós-visita. O dentista vê sua clínica, manda um paciente experimental e esquece. Sem um acompanhamento ativo e uma experiência impecável na primeira indicação, a recompra não acontece.',
    focos: [
      'Implante um protocolo de primeira indicação: o dentista que enviar o primeiro paciente recebe feedback do laudo com comentário pessoal do radiologista',
      'Crie um sistema de follow-up quinzenal para dentistas em fase de teste: ligue, pergunte sobre a experiência e o que poderia melhorar',
      'Ofereça uma sessão de apresentação técnica gratuita para o dentista (Lunch & Learn): apresente tecnologia, capacidades e cases — isso constrói confiança técnica',
    ],
  },

  'dono_gestor_radiologia:comecando_estruturar:melhorar_preco_margem': {
    resumo: 'Os exames saem, mas a margem está apertada e o volume ainda não sustenta a operação.',
    bloco1:
      'No início de uma clínica de radiologia, é comum trabalhar com preços mais baixos para ganhar mercado. O problema é que essa estratégia precisa ser temporária e controlada — senão você constrói uma carteira de dentistas que esperará preço baixo para sempre e nunca vai migrar para um patamar de valor.',
    bloco2:
      'A margem numa clínica de radiologia nascente é pressionada pelos altos custos fixos: equipamento, radiologista, estrutura física. Para sair do vermelho, é preciso combinar aumento de volume (mais exames) com otimização do mix (mais exames de maior valor como TCFC e CBCT).',
    focos: [
      'Calcule o breakeven da sua operação: quantos exames por mês no mix atual cobrem todos os custos fixos — e quanto falta para chegar lá',
      'Priorize a atração de dentistas que demandam exames de maior ticket médio: implantodontistas (TCFC), ortodontistas (tele e lateral) e bucomaxilares',
      'Implante controle de custos por exame: material, tempo de equipamento e overhead — identifique os exames mais e menos rentáveis',
    ],
  },

  'dono_gestor_radiologia:comecando_estruturar:organizar_gestao': {
    resumo: 'A operação está rodando no improviso — processos, laudos e financeiro precisam de estrutura.',
    bloco1:
      'Uma clínica de radiologia sem processos formalizados é um risco clínico e operacional. O laudo tem que ser rastreável, o equipamento tem que ter manutenção registrada, o paciente tem que ter prontuário adequado. A gestão não é burocracia — é proteção e sustentabilidade.',
    bloco2:
      'O que trava a organização nessa fase é a mentalidade de "estamos começando, depois a gente organiza". Essa postergação cria um acúmulo de desorganização que depois é muito mais caro e doloroso de resolver. Organizar no início é investimento, não perda de tempo.',
    focos: [
      'Implante um software específico para clínica de radiologia (SOPRO, Carestream, ou similar) para gestão de exames, laudos e pacientes',
      'Crie um POP (Procedimento Operacional Padrão) para os 5 fluxos mais críticos: agendamento, realização do exame, emissão de laudo, entrega ao dentista e faturamento',
      'Defina responsáveis nominais para cada processo e faça revisão semanal de indicadores básicos: exames realizados, laudos emitidos e faturamento',
    ],
  },

  'dono_gestor_radiologia:comecando_estruturar:melhorar_equipe': {
    resumo: 'A equipe mínima está montada, mas o padrão técnico e de atendimento ainda é inconsistente.',
    bloco1:
      'Em radiologia odontológica, a qualidade da equipe é diretamente visível para o dentista: posicionamento do paciente, qualidade da imagem, velocidade do laudo. Uma equipe mal treinada gera imagens ruins e laudos atrasados — e perde o dentista para o concorrente na segunda indicação.',
    bloco2:
      'O que trava o desenvolvimento da equipe nessa fase é a falta de padrão documentado. Cada técnico trabalha como aprendeu, com pequenas variações que somadas geram inconsistência no produto final. O dentista não quer surpresas — ele quer o mesmo nível de qualidade em toda indicação.',
    focos: [
      'Crie um protocolo técnico por tipo de exame: configuração do equipamento, posicionamento do paciente e critérios de qualidade de imagem',
      'Implante um sistema de revisão de qualidade: todo laudo passa por checagem antes de ser enviado ao dentista nos primeiros 3 meses',
      'Invista em atualização técnica da equipe: cursos de posicionamento, uso do software de laudos e comunicação com o paciente',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DONO_GESTOR_RADIOLOGIA — CRESCENDO_DESORGANIZACAO
  // ─────────────────────────────────────────────────────────────────────────

  'dono_gestor_radiologia:crescendo_desorganizacao:atrair_clientes': {
    resumo: 'A carteira de dentistas cresceu, mas a captação ainda é reativa e sem sistema.',
    bloco1:
      'Você tem dentistas parceiros, mas a captação de novos ainda depende de visitas esporádicas, indicações por acaso e presença em eventos. Nos meses bons a agenda está cheia, nos meses ruins você não sabe o que mudou. A falta de previsibilidade é o sintoma de uma captação sem sistema.',
    bloco2:
      'O que trava a expansão da carteira nessa fase é a ausência de um processo comercial estruturado. Sem um CRM de dentistas, sem roteiro de visitas e sem métricas de conversão, a captação fica no feeling do gestor — funciona quando há energia e disposição, para quando a operação demanda atenção.',
    focos: [
      'Implante um CRM de dentistas indicadores (pode ser uma planilha avançada ou um CRM simples) com pipeline de prospecção, visita, primeira indicação e parceiro ativo',
      'Defina uma meta de visitas comerciais semanais: 5 dentistas novos por semana, com script padronizado e material de apresentação',
      'Crie um relatório mensal de carteira: dentistas ativos (>1 indicação/mês), em risco (<1 indicação em 2 meses) e inativos — e execute ações por segmento',
    ],
  },

  'dono_gestor_radiologia:crescendo_desorganizacao:vender_melhor': {
    resumo: 'A clínica cresce, mas a taxa de recompra dos dentistas indicadores ainda é abaixo do potencial.',
    bloco1:
      'Você tem dentistas mandando pacientes, mas a frequência é irregular. Alguns mandam 10 por mês, outros mandaram 2 no lançamento e somaram. A pergunta certa não é "como atrair mais dentistas?" — é "como fazer cada dentista indicar mais e com mais frequência?"',
    bloco2:
      'O gargalo de recompra nessa fase é a falta de relacionamento ativo pós-indicação. O dentista manda um paciente, o exame é feito, o laudo vai — e ninguém da clínica entra em contato até a próxima indicação. Sem nutrição de relacionamento, a concorrência rouba o dentista com uma visita e um brinde.',
    focos: [
      'Crie um protocolo de relacionamento mensal: e-mail com update técnico ou caso clínico interessante para cada dentista ativo',
      'Implante uma visita de cortesia trimestral para os top 20 dentistas indicadores — não para vender, mas para ouvir e fortalecer o vínculo',
      'Crie um programa de fidelidade para dentistas: a cada X pacientes indicados, acesso a um serviço exclusivo (relatório analítico, webinar técnico, atendimento prioritário)',
    ],
  },

  'dono_gestor_radiologia:crescendo_desorganizacao:melhorar_preco_margem': {
    resumo: 'O volume cresce mas a rentabilidade não acompanha — custos e preços precisam de revisão.',
    bloco1:
      'Crescimento sem controle financeiro cria uma ilusão perigosa: o faturamento sobe, mas a margem fica estável ou cai. Novos equipamentos, mais funcionários, mais material — e o lucro não cresce proporcionalmente. A clínica está ficando maior sem ficar mais rentável.',
    bloco2:
      'O que trava a margem nessa fase é a falta de controle de custo por exame e a ausência de uma estratégia de mix. Não é só sobre vender mais — é sobre vender mais dos exames que realmente pagam bem, e ter custos controlados em cada procedimento.',
    focos: [
      'Faça análise de lucratividade por tipo de exame: custo real (material + tempo de equipamento + overhead rateado) versus preço praticado',
      'Negocie contratos de volume com os top dentistas indicadores: garantia de volume mínimo em troca de condição comercial e serviços diferenciados',
      'Revise o quadro de funcionários por produtividade: número de exames por técnico por turno — identifique ociosidade e picos mal gerenciados',
    ],
  },

  'dono_gestor_radiologia:crescendo_desorganizacao:organizar_gestao': {
    resumo: 'A operação cresceu além da capacidade de controle — processos, laudos e equipe pedem sistema.',
    bloco1:
      'Você está no ponto de inflexão mais crítico do crescimento: a operação ficou grande demais para o modelo informal, mas ainda não tem a estrutura de uma empresa organizada. Laudos atrasando, equipamento sem manutenção registrada, financeiro no Excel — cada ponto de falha é um risco clínico e de negócio.',
    bloco2:
      'O caos na gestão de radiologia tem um custo muito específico: o dentista. Quando um laudo atrasa ou uma imagem sai com qualidade inferior, o dentista muda de fornecedor sem avisar. E quando 5 dentistas saem ao mesmo tempo, a crise financeira é imediata. A organização não é opcional — é sobrevivência.',
    focos: [
      'Faça um diagnóstico completo de processos: mapeie do agendamento à entrega do laudo e identifique os 3 principais pontos de falha',
      'Implante um sistema de gestão clínica específico para radiologia com rastreabilidade de exame, laudo e comunicação com dentista',
      'Contrate ou promova um coordenador de operações dedicado — a gestão não pode continuar centralizada no dono',
    ],
  },

  'dono_gestor_radiologia:crescendo_desorganizacao:melhorar_equipe': {
    resumo: 'A equipe cresceu mas o padrão técnico e o engajamento ainda são inconsistentes.',
    bloco1:
      'Com o crescimento, você contratou mais técnicos e auxiliares. O problema: o padrão de qualidade varia entre turnos e pessoas, o dentista percebe a diferença, e você passa mais tempo resolvendo reclamações do que desenvolvendo o negócio. A equipe é o produto em radiologia — quando ela falha, o negócio falha.',
    bloco2:
      'O que trava o desenvolvimento da equipe nessa fase é a ausência de critérios objetivos de qualidade e de um sistema de gestão de pessoas. Sem avaliação técnica periódica, sem feedback estruturado e sem plano de carreira, a clínica forma profissionais que vão embora quando encontram uma oportunidade melhor.',
    focos: [
      'Implante avaliação técnica trimestral por técnico: qualidade de posicionamento, taxa de reexame e velocidade de processamento',
      'Crie um protocolo de tutoria: cada técnico novo fica 30 dias sob supervisão de um técnico sênior antes de trabalhar de forma independente',
      'Defina faixas salariais por nível técnico e implante um plano de progressão claro — isso retém os melhores e motiva o restante',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DONO_GESTOR_RADIOLOGIA — OPERANDO_COM_GARGALOS
  // ─────────────────────────────────────────────────────────────────────────

  'dono_gestor_radiologia:operando_com_gargalos:atrair_clientes': {
    resumo: 'A clínica está estabelecida, mas a expansão da carteira de dentistas encontra teto.',
    bloco1:
      'Você já tem uma base sólida de dentistas parceiros e a operação funciona bem. O desafio agora é crescer a carteira sem sacrificar a qualidade do atendimento que fez a clínica chegar até aqui. O próximo nível de captação exige estratégias diferentes das que funcionaram no início.',
    bloco2:
      'O gargalo na captação nessa fase é a saturação do relacionamento pessoal. Você já visitou os dentistas mais acessíveis da região. Os próximos exigem uma abordagem mais sofisticada — credibilidade técnica, presença digital profissional e uma rede de influência dentro da comunidade odontológica.',
    focos: [
      'Invista em presença técnica: publique cases clínicos e artigos no LinkedIn e Instagram com linguagem para dentistas — isso constrói autoridade e gera indicações inboud',
      'Crie parcerias com faculdades e cursos de especialização odontológica da região — seja o fornecedor de exames preferencial para alunos e docentes',
      'Mapeie dentistas de alto volume de referência (aqueles que já indicam >20 pacientes/mês) e crie um programa de parceria premium exclusivo para eles',
    ],
  },

  'dono_gestor_radiologia:operando_com_gargalos:vender_melhor': {
    resumo: 'A taxa de recompra dos dentistas está boa, mas o ticket médio por dentista pode crescer mais.',
    bloco1:
      'Você tem dentistas parceiros regulares, mas muitos deles ainda indicam apenas os exames mais básicos. Há um potencial de upselling enorme — dentistas que mandam periapicais poderiam mandar TCFCs, dentistas que mandam tomografias simples poderiam usar serviços premium de laudo especializado.',
    bloco2:
      'O gargalo no aumento de ticket médio nessa fase é a falta de uma estratégia de upselling técnico. O dentista não sabe que você oferece TCFC de alta resolução ou laudo com medições para implantes porque ninguém nunca mostrou isso para ele. A venda está na educação.',
    focos: [
      'Mapeie o mix de exames por dentista e identifique oportunidades de upgrade — dentistas de implantodontia que ainda não usam TCFC são prioridade',
      'Crie materiais técnicos (PDF, vídeo curto) explicando as vantagens de cada tipo de exame para o planejamento clínico — compartilhe pelo WhatsApp',
      'Ofereça uma sessão técnica de 30 minutos para cada dentista-chave: demonstre na prática como a qualidade superior dos seus exames melhora o resultado clínico dele',
    ],
  },

  'dono_gestor_radiologia:operando_com_gargalos:melhorar_preco_margem': {
    resumo: 'A operação está madura, mas a precificação ainda não captura o valor técnico entregue.',
    bloco1:
      'Sua clínica entrega qualidade superior — equipamento de ponta, radiologista experiente, laudo detalhado, prazo cumprido. Mas os preços ainda estão na média do mercado, competindo com clínicas de padrão inferior. Isso é deixar dinheiro na mesa e subvalorar o que você construiu.',
    bloco2:
      'O que trava o reposicionamento de preço nessa fase é o receio de perder dentistas para concorrentes mais baratos. Mas a realidade é que os dentistas que mais valorizam qualidade — e que mais indicam — são os menos sensíveis ao preço. Reajuste seletivo com comunicação de valor é o caminho.',
    focos: [
      'Segmente sua carteira por sensibilidade a preço: identifique os dentistas que valorizam qualidade acima de tudo e ajuste preços para eles primeiro',
      'Crie uma linha premium de serviços com prazo garantido, laudo expandido e suporte de radiologista — e precifique de acordo com o valor entregue',
      'Apresente dados de ROI para o dentista: como um laudo de qualidade superior reduziu retrabalho e melhorou o resultado clínico — torne o preço irrelevante',
    ],
  },

  'dono_gestor_radiologia:operando_com_gargalos:organizar_gestao': {
    resumo: 'A operação tem estrutura, mas gargalos específicos travam a eficiência e a escalabilidade.',
    bloco1:
      'Você tem processos, sistema e equipe. Os gargalos agora são mais sutis: laudos que atrasam em pico de demanda, reexames por falha de posicionamento, atrasos na comunicação com dentistas, filas em horários específicos. Cada um desses pontos custa clientes e reputação.',
    bloco2:
      'Gargalos operacionais em radiologia frequentemente estão em transições: do agendamento à chegada do paciente, da realização do exame ao início do laudo, do laudo pronto à notificação ao dentista. A análise precisa ser no fluxo completo, não nos departamentos isolados.',
    focos: [
      'Implante um sistema de rastreamento de tempo por etapa do processo: do check-in do paciente ao envio do laudo — identifique onde o tempo é perdido',
      'Revise os horários de pico e crie uma política de agendamento inteligente: distribuição de exames pesados ao longo do dia para evitar filas e atrasos',
      'Implante um dashboard operacional em tempo real: exames em fila, laudos pendentes e tempo médio por etapa — visível para toda a equipe',
    ],
  },

  'dono_gestor_radiologia:operando_com_gargalos:melhorar_equipe': {
    resumo: 'A equipe é competente, mas ainda não opera com a autonomia necessária para o próximo nível.',
    bloco1:
      'Você tem técnicos bons e processos documentados, mas a operação ainda depende demais da sua presença para decisões que deveriam ser da equipe. O síndrome do fundador indispensável é o teto mais comum de crescimento em clínicas de radiologia estruturadas.',
    bloco2:
      'O que trava a autonomia da equipe nessa fase é a ausência de uma estrutura de liderança operacional. Sem um coordenador técnico com autoridade formal, cada problema volta para o dono. A equipe tem capacidade mas não tem o espaço de decisão para usá-la.',
    focos: [
      'Formalize a função de coordenador técnico: escolha o técnico mais experiente, defina escopo de autoridade e responsabilidades, treine para gestão de equipe',
      'Implante reuniões diárias de equipe lideradas pelo coordenador técnico, sem a presença do dono — relatório semanal de indicadores para você',
      'Crie um protocolo de resolução de problemas: critérios claros de quando a equipe decide sozinha e quando escala para a gestão',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DONO_GESTOR_RADIOLOGIA — BUSCANDO_ESCALA
  // ─────────────────────────────────────────────────────────────────────────

  'dono_gestor_radiologia:buscando_escala:atrair_clientes': {
    resumo: 'Para escalar, a captação de dentistas precisa virar um sistema replicável e previsível.',
    bloco1:
      'Você está no momento mais estratégico: pronto para escalar de 1 para múltiplas unidades, ou de 100 para 300 dentistas ativos. Para isso, a captação precisa ser um processo documentado, executável por um time comercial, com métricas de performance e otimização contínua.',
    bloco2:
      'O que trava a escala na captação é a dependência do relacionamento pessoal do dono. Você conhece os dentistas, eles confiam em você — mas isso não escala. Para crescer, a confiança precisa estar na marca e no processo, não na pessoa.',
    focos: [
      'Contrate ou forme um time comercial dedicado a dentistas: representantes com meta de carteira, script padronizado e CRM atualizado diariamente',
      'Invista em marketing B2B para dentistas: LinkedIn Ads, conteúdo técnico, webinars mensais e presença em congressos odontológicos regionais',
      'Desenvolva um programa de embaixadores: os 10 dentistas mais ativos recebem benefícios exclusivos em troca de indicações e depoimentos para captação de novos',
    ],
  },

  'dono_gestor_radiologia:buscando_escala:vender_melhor': {
    resumo: 'Na escala, o processo de venda para dentistas precisa funcionar sem depender de você.',
    bloco1:
      'Para escalar uma clínica de radiologia, o processo comercial com dentistas precisa ser transferível para um time. Hoje, você sabe como se relacionar com o dentista, entender a necessidade clínica e apresentar a solução certa — mas isso precisa virar um método que qualquer representante comercial execute com consistência.',
    bloco2:
      'O gargalo comercial na escala é a personalização não sistematizada. Cada relacionamento é único, o que é qualidade no início mas vira fragilidade na escala. Sem playbooks comerciais, sem scripts de situações específicas e sem métricas de conversão por etapa, o crescimento é limitado pelo talento individual.',
    focos: [
      'Construa um playbook comercial completo: personas de dentistas, jornada de compra, scripts por etapa, objeções e respostas, materiais de apoio',
      'Implante um CRM robusto (Pipedrive, HubSpot) com pipeline de dentistas, automações de follow-up e relatórios de conversão por representante',
      'Crie um programa de onboarding estruturado para novos dentistas: 90 dias de acompanhamento intensivo para garantir que virem parceiros regulares',
    ],
  },

  'dono_gestor_radiologia:buscando_escala:melhorar_preco_margem': {
    resumo: 'Para escalar com saúde, a estrutura financeira e de custos precisa suportar o crescimento.',
    bloco1:
      'Escalar uma clínica de radiologia sem controle financeiro robusto é um risco alto. Equipamentos custam caro, manutenção é contínua, radiologistas experientes têm salários altos. Para crescer de forma sustentável, cada nova unidade ou cada aumento de capacidade precisa de um modelo financeiro validado antes de acontecer.',
    bloco2:
      'O que trava a margem na escala em radiologia é o custo fixo alto dos equipamentos e da equipe técnica qualificada. Sem um volume mínimo garantido por unidade, a operação sangra. A estratégia financeira na escala precisa ser mais conservadora e mais rigorosa do que na operação estabelecida.',
    focos: [
      'Construa um modelo financeiro de cada unidade ou expansão antes de executar: projeção de volume, receita, custos fixos e variáveis, breakeven e ROI',
      'Negocie contratos de longo prazo com os top dentistas antes de expandir — volume garantido justifica investimento em capacidade',
      'Revise o modelo de precificação para escalabilidade: contratos de volume com dentistas grandes, pricing por pacote e tarifas diferenciadas por urgência',
    ],
  },

  'dono_gestor_radiologia:buscando_escala:organizar_gestao': {
    resumo: 'Para escalar, a gestão precisa funcionar sem você presente em cada unidade ou decisão.',
    bloco1:
      'Você está pronto para dar o próximo passo — segunda unidade, franquia, expansão regional. Mas a gestão atual ainda tem você como hub central. Para escalar, cada unidade precisa ter processos, indicadores e liderança que funcionem de forma autônoma, com você no papel de estrategista, não de operador.',
    bloco2:
      'O que impede a escala na gestão é a falta de sistemas de controle remoto. Sem dashboards em tempo real, sem SOPs completos e sem uma estrutura de gestão multi-unidade testada, abrir a segunda unidade cria o dobro de problema, não o dobro de receita.',
    focos: [
      'Implante um sistema de gestão multi-unidade com visibilidade consolidada de operações, financeiro e qualidade em tempo real',
      'Contrate um diretor de operações com experiência em multi-unidades para estruturar a expansão — não tente fazer isso sozinho',
      'Documente todos os processos críticos em SOPs replicáveis e testados: a segunda unidade deve conseguir operar com o manual, não com a sua presença',
    ],
  },

  'dono_gestor_radiologia:buscando_escala:melhorar_equipe': {
    resumo: 'Para escalar, você precisa de líderes formados internamente que multipliquem sua cultura.',
    bloco1:
      'A escala de uma clínica de radiologia é limitada pelo número de líderes técnicos e operacionais que você tem. Para abrir a segunda unidade, você precisa de um coordenador técnico formado. Para a terceira, de um gerente de operações. Desenvolver pessoas é o investimento mais crítico nessa fase.',
    bloco2:
      'O gargalo de escala em equipe é a falta de uma escola interna de liderança. Sem um programa estruturado de formação de coordenadores e gestores, você sempre dependerá de contratar alguém de fora — mais caro, mais lento e com maior risco de incompatibilidade cultural.',
    focos: [
      'Identifique os 3 colaboradores com maior potencial de liderança e crie um plano de desenvolvimento de 12 meses para cada um',
      'Invista na formação de radiologistas residentes ou parceiros técnicos — a dependência de um único radiologista é o maior risco de escala',
      'Construa um programa de cultura organizacional documentado: valores, comportamentos esperados, rituais de equipe — que cada nova unidade replique',
    ],
  },
}

export const FALLBACK_DENTISTA: DevolutivaEntry = {
  resumo: 'Seu momento pede clareza de prioridades e ação focada nos fundamentos de crescimento.',
  bloco1:
    'Cada clínica tem um momento único, com desafios específicos que dependem do contexto, da região e da especialidade. O que é certo é que crescimento sustentável em odontologia sempre passa pelos mesmos pilares: captação consistente, processo comercial eficiente e gestão que libera o dentista para clincar.',
  bloco2:
    'O que mais trava o crescimento de clínicas odontológicas não são recursos ou mercado — é a falta de foco. Tentar resolver tudo ao mesmo tempo garante que nada avança de verdade. A clareza de qual é o problema principal a resolver neste momento é o que separa quem cresce de quem estagna.',
  focos: [
    'Defina 1 objetivo principal para os próximos 90 dias e concentre 80% da energia da gestão nesse único ponto',
    'Mapeie os 3 processos mais críticos da clínica e documente-os em checklists simples que qualquer colaborador possa seguir',
    'Escolha 3 indicadores para acompanhar semanalmente: novos pacientes, taxa de aprovação de orçamentos e NPS dos pacientes atendidos',
  ],
}

export const FALLBACK_RADIOLOGIA: DevolutivaEntry = {
  resumo: 'Seu momento pede foco nos fundamentos que sustentam o crescimento de clínicas de radiologia.',
  bloco1:
    'Clínicas de radiologia odontológica crescem através de dois motores: qualidade técnica que retém dentistas e relacionamento comercial que expande a carteira. Quando esses dois motores funcionam bem e de forma coordenada, o crescimento é consistente e sustentável.',
  bloco2:
    'O que mais trava o crescimento em radiologia não é a falta de demanda — é a falta de sistema para capturá-la. Dentistas que poderiam ser parceiros regulares ficam indicando eventualmente porque ninguém fez o trabalho de transformar a primeira indicação em relacionamento estruturado.',
  focos: [
    'Segmente sua carteira atual em 3 grupos: parceiros ativos (>2 indicações/mês), potenciais (1-2/mês) e inativos (<1/mês) — e crie uma ação para cada',
    'Implante um protocolo de qualidade: todo laudo enviado ao dentista deve ter prazo cumprido e nota de qualidade de imagem acima do critério mínimo',
    'Defina 3 indicadores semanais para a operação: exames realizados, prazo médio de laudo e taxa de reexame — e compartilhe com a equipe',
  ],
}
