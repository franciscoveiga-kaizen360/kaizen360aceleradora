'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { StepItem } from '@/components/molecules/StepItem/StepItem'
import { howItWorksSteps } from '@/data/howItWorks'
import styles from './HowItWorksSection.module.css'

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="como-funciona"
      className={[styles.section, isVisible ? styles.visible : ''].filter(Boolean).join(' ')}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="how-it-works-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={`section-eyebrow ${styles.eyebrow}`}>
            <span aria-hidden="true">⟳</span>
            Como funciona
          </span>
          <h2 id="how-it-works-heading" className={styles.title}>
            Em 3 passos, sua clínica opera no automático
          </h2>
          <p className={styles.subtitle}>
            Implementação simples, rápida e com suporte total da nossa equipe.
          </p>
        </header>

        <div className={styles.steps} role="list">
          {howItWorksSteps.map((step, index) => (
            <div key={step.id} className={styles.stepWrapper} role="listitem">
              <StepItem step={step} />
              {index < howItWorksSteps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
