'use client'

import { useRevealItems, useScrollAnimation } from '@/hooks/useScrollAnimation'
import { FeatureCard } from '@/components/molecules/FeatureCard/FeatureCard'
import { Button } from '@/components/atoms/Button/Button'
import { features } from '@/data/features'
import { BOOKING_URL } from '@/lib/constants'
import { trackLead } from '@/lib/analytics'
import styles from './SolutionSection.module.css'

export function SolutionSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })
  const { setRef, visibleItems } = useRevealItems(features.length)
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section
      id="solucao"
      className={styles.section}
      aria-labelledby="solution-heading"
    >
      <div className={styles.container}>
        <header
          className={`${styles.header} reveal${headerVisible ? ' is-visible' : ''}`}
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className={`section-eyebrow ${styles.eyebrow}`}>
            <span aria-hidden="true">◈</span>
            A Plataforma
          </span>
          <h2 id="solution-heading" className={styles.title}>
            Tudo que sua clínica precisa numa só plataforma
          </h2>
          <p className={styles.subtitle}>
            Do primeiro contato ao pós-atendimento — o Docs Growth CRM centraliza e
            automatiza toda a operação da sua clínica.
          </p>
        </header>

        <ul className={styles.grid} role="list">
          {features.map((feature, index) => (
            <li
              key={feature.id}
              ref={setRef(index)}
              className={`reveal reveal--scale${visibleItems.has(index) ? ' is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>

        <div
          className={`${styles.cta} reveal${ctaVisible ? ' is-visible' : ''}`}
          ref={ctaRef as React.RefObject<HTMLDivElement>}
        >
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
