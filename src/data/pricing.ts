// Pricing data verified against ESCOPO_SITE_DOCS_GROWTH_CRM.docx
import type { PricingPlan, ImplementationFeeRow } from '@/types/pricing'

export const pricingPlans: PricingPlan[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    subtitle: 'CRM Completo',
    description: 'Para clínicas que querem organizar atendimento e gestão de leads.',
    tiers: [
      { accounts: '1 conta',   mensal: 'R$ 297/mês',    semestral: 'R$ 1.485',  anual: 'R$ 2.970'  },
      { accounts: '2 contas',  mensal: 'R$ 534/mês',    semestral: 'R$ 2.670',  anual: 'R$ 5.340'  },
      { accounts: '3 contas',  mensal: 'R$ 756/mês',    semestral: 'R$ 3.780',  anual: 'R$ 7.560'  },
      { accounts: '5 contas',  mensal: 'R$ 1.110/mês',  semestral: 'R$ 5.550',  anual: 'R$ 11.100' },
      { accounts: '7 contas',  mensal: 'R$ 1.379/mês',  semestral: 'R$ 6.895',  anual: 'R$ 13.790' },
    ],
  },
  {
    id: 'intermediario',
    name: 'Intermediário',
    subtitle: 'CRM + Automação de Atendimento',
    description: 'Para clínicas que querem automatizar atendimento e qualificação de leads.',
    badge: 'popular',
    tiers: [
      { accounts: '1 conta',   mensal: 'R$ 697/mês',    semestral: 'R$ 3.485',  anual: 'R$ 6.970'  },
      { accounts: '2 contas',  mensal: 'R$ 1.254/mês',  semestral: 'R$ 6.270',  anual: 'R$ 12.540' },
      { accounts: '3 contas',  mensal: 'R$ 1.776/mês',  semestral: 'R$ 8.880',  anual: 'R$ 17.760' },
      { accounts: '5 contas',  mensal: 'R$ 2.610/mês',  semestral: 'R$ 13.050', anual: 'R$ 26.100' },
      { accounts: '7 contas',  mensal: 'R$ 3.164/mês',  semestral: 'R$ 15.820', anual: 'R$ 31.640' },
    ],
  },
  {
    id: 'avancado',
    name: 'Avançado',
    subtitle: 'CRM + IA Completa',
    description:
      'Para clínicas que querem operação 100% automatizada com IA de atendimento, agendamento e follow-up.',
    badge: 'recommended',
    tiers: [
      { mensal: 'R$ 1.497/mês', semestral: 'R$ 7.485', anual: 'R$ 14.970' },
    ],
  },
]

export const implementationFees: ImplementationFeeRow[] = [
  { range: '1 a 2 contas',  value: 'R$ 997'   },
  { range: '3 a 5 contas',  value: 'R$ 1.497' },
  { range: '6 a 10 contas', value: 'R$ 1.997' },
]
