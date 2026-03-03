export interface AccountTierRow {
  accounts?: string // "1 conta", "2 contas" — omitted for single-tier plans
  mensal: string // "R$ 297/mês"
  semestral: string // "R$ 1.485"
  anual: string // "R$ 2.970"
}

export interface PricingPlan {
  id: string
  name: string
  subtitle: string
  description: string
  badge?: 'popular' | 'recommended'
  tiers: AccountTierRow[]
}

export interface ImplementationFeeRow {
  range: string
  value: string
}
