'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { PricingPlanCard } from '@/components/molecules/PricingPlanCard/PricingPlanCard'
import { pricingPlans, implementationFees } from '@/data/pricing'
import styles from './PricingSection.module.css'

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="precos"
      className={[styles.section, isVisible ? styles.visible : ''].filter(Boolean).join(' ')}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="pricing-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="pricing-heading" className={styles.title}>
            Escolha o plano ideal para sua clínica
          </h2>
          <p className={styles.subtitle}>
            Preços transparentes, sem surpresas. Quanto mais você cresce, mais você economiza.
          </p>
        </header>

        {/* Plan cards */}
        <div className={styles.plansGrid}>
          {pricingPlans.map((plan) => (
            <PricingPlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Implementation fee table */}
        <div className={styles.implFee}>
          <h3 className={styles.implFeeTitle}>
            Taxa de Implementação + Treinamento{' '}
            <span className={styles.implFeeNote}>(pagamento único)</span>
          </h3>
          <div className={styles.implFeeTableWrapper}>
            <table className={styles.implFeeTable}>
              <thead>
                <tr>
                  <th className={styles.implTh}>Faixa de contas</th>
                  <th className={styles.implTh}>Valor</th>
                </tr>
              </thead>
              <tbody>
                {implementationFees.map((fee) => (
                  <tr key={fee.range} className={styles.implRow}>
                    <td className={styles.implTd}>{fee.range}</td>
                    <td className={[styles.implTd, styles.implValue].join(' ')}>{fee.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.implFeeSubNote}>
            Inclui configuração completa da plataforma, integrações e treinamento da equipe.
          </p>
        </div>
      </div>
    </section>
  )
}
