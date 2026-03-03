import type { PricingPlan } from '@/types/pricing'
import { Badge } from '@/components/atoms/Badge/Badge'
import { Button } from '@/components/atoms/Button/Button'
import { BOOKING_URL } from '@/lib/constants'
import { trackLead } from '@/lib/analytics'
import styles from './PricingPlanCard.module.css'

interface PricingPlanCardProps {
  plan: PricingPlan
}

const BADGE_LABELS = {
  popular: 'Mais Popular',
  recommended: 'Recomendado',
} as const

export function PricingPlanCard({ plan }: PricingPlanCardProps) {
  const { name, subtitle, description, badge, tiers } = plan
  const isSingleTier = tiers.length === 1 && !tiers[0].accounts
  const isHighlighted = badge === 'popular'

  return (
    <article
      className={[styles.card, isHighlighted ? styles.highlighted : ''].filter(Boolean).join(' ')}
    >
      {/* Header */}
      <div className={styles.header}>
        {badge && (
          <Badge variant={badge === 'popular' ? 'popular' : 'recommended'}>
            {BADGE_LABELS[badge]}
          </Badge>
        )}
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Pricing table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {!isSingleTier && <th className={styles.th}>Contas</th>}
              <th className={styles.th}>Mensal</th>
              <th className={styles.th}>
                Semestral
                <span className={styles.bonus}> (5+1)</span>
              </th>
              <th className={styles.th}>
                Anual
                <span className={styles.bonus}> (10+2)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, index) => (
              <tr key={index} className={styles.row}>
                {!isSingleTier && <td className={styles.td}>{tier.accounts}</td>}
                <td className={styles.td}>{tier.mensal}</td>
                <td className={styles.td}>{tier.semestral}</td>
                <td className={[styles.td, styles.anual].join(' ')}>{tier.anual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bonus messaging */}
      <div className={styles.bonusNote}>
        <span>🎁 Semestral: pague 5 meses, ganhe 1</span>
        <span>🎁 Anual: pague 10 meses, ganhe 2</span>
      </div>

      {/* CTA */}
      <Button
        variant={isHighlighted ? 'primary' : 'secondary'}
        href={BOOKING_URL}
        className="cta-demo"
        onClick={trackLead}
        fullWidth
        aria-label={`Agendar demonstração gratuita — plano ${name}`}
      >
        Agendar Demonstração Gratuita
      </Button>
    </article>
  )
}
