// FAQ data sourced from ESCOPO_SITE_DOCS_GROWTH_CRM.docx — SPIN Selling objection handling
export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'faq-radiologia',
    question: 'Funciona só para radiologia odontológica?',
    answer:
      'Foi desenvolvido especificamente para clínicas de radiologia odontológica, mas funciona para qualquer clínica odontológica. Nosso foco em radiologia garante que as funcionalidades atendam exatamente as suas necessidades — sem adaptações forçadas.',
  },
  {
    id: 'faq-tecnico',
    question: 'Preciso de conhecimento técnico para usar?',
    answer:
      'Não. Nossa equipe faz toda a implementação e treinamento. Em poucos dias sua clínica está operando com a plataforma. Você não precisa entender de tecnologia — só precisa querer crescer.',
  },
  {
    id: 'faq-implementacao',
    question: 'Quanto tempo leva a implementação?',
    answer:
      'O setup completo ocorre em poucos dias, incluindo configurações, integrações e treinamento da equipe. Você já sai da demonstração com um cronograma claro e uma equipe dedicada ao seu onboarding.',
  },
  {
    id: 'faq-cancelamento',
    question: 'Posso cancelar a qualquer momento?',
    answer:
      'Sim. Sem multas, sem fidelidade. Você fica porque quer, não porque está amarrado. Nossa confiança no produto é total — por isso não precisamos de contratos que te prendam.',
  },
  {
    id: 'faq-ia-equipe',
    question: 'A IA substitui minha equipe?',
    answer:
      'Não. A IA potencializa sua equipe, cuidando de tarefas repetitivas 24h enquanto seu time foca no que importa: atendimento de qualidade e relacionamento com pacientes e dentistas.',
  },
  {
    id: 'faq-preco',
    question: 'E se o preço não couber no meu orçamento?',
    answer:
      'O investimento mensal do plano Essencial é menor que o preço de 3 tomografias de 2 arcadas. O retorno vem no primeiro mês — com mais follow-up, menos faltas e mais dentistas indicando. Agende a demonstração e veja os números na prática.',
  },
]
