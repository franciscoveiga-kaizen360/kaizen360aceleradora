'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { FeatureCard } from '@/components/molecules/FeatureCard/FeatureCard'
import { Button } from '@/components/atoms/Button/Button'
import { features } from '@/data/features'
import { BOOKING_URL } from '@/lib/constants'
import { trackLead } from '@/lib/analytics'
import styles from './SolutionSection.module.css'

export function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="solucao"
      className={[styles.section, isVisible ? styles.visible : ''].filter(Boolean).join(' ')}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="solution-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="solution-heading" className={styles.title}>
            Tudo que sua clínica precisa numa só plataforma
          </h2>
          <p className={styles.subtitle}>
            Do primeiro contato ao pós-atendimento — o Docs Growth CRM centraliza e
            automatiza toda a operação da sua clínica.
          </p>
        </header>

        <ul className={styles.grid} role="list">
          {features.map((feature) => (
            <li key={feature.id}>
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <Button
            variant="primary"
            href={BOOKING_URL}
            className="cta-demo"
            onClick={trackLead}
          >
            Ver a plataforma completa na demonstração
          </Button>
        </div>
      </div>
    </section>
  )
}
