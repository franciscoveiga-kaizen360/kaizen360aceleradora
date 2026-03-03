'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { PainPointCard } from '@/components/molecules/PainPointCard/PainPointCard'
import { painPoints } from '@/data/painPoints'
import styles from './ProblemSection.module.css'

export function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="problemas"
      className={[styles.section, isVisible ? styles.visible : ''].filter(Boolean).join(' ')}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="problem-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="problem-heading" className={styles.title}>
            Sua clínica sofre com isso?
          </h2>
          <p className={styles.subtitle}>
            Esses são os problemas que impedem clínicas de radiologia odontológica de crescer.
          </p>
        </header>

        <ul className={styles.grid} role="list">
          {painPoints.map((painPoint) => (
            <li key={painPoint.id}>
              <PainPointCard painPoint={painPoint} />
            </li>
          ))}
        </ul>

        <p className={styles.transition}>
          Se você se identificou com pelo menos 2 dessas situações,{' '}
          <strong>o Docs Growth CRM foi feito pra você.</strong>
        </p>
      </div>
    </section>
  )
}
