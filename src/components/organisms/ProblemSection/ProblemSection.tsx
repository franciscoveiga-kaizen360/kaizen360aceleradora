'use client'

import { useRevealItems, useScrollAnimation } from '@/hooks/useScrollAnimation'
import { PainPointCard } from '@/components/molecules/PainPointCard/PainPointCard'
import { painPoints } from '@/data/painPoints'
import styles from './ProblemSection.module.css'

export function ProblemSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.05 })
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })
  const { setRef, visibleItems } = useRevealItems(painPoints.length)

  return (
    <section
      id="problemas"
      className={styles.section}
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-labelledby="problem-heading"
    >
      <div className={styles.container}>
        <header
          className={`${styles.header} reveal${headerVisible ? ' is-visible' : ''}`}
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className={`section-eyebrow ${styles.eyebrow}`}>
            <span aria-hidden="true">⚠</span>
            Diagnóstico
          </span>
          <h2 id="problem-heading" className={styles.title}>
            Sua clínica sofre com isso?
          </h2>
          <p className={styles.subtitle}>
            Esses são os problemas que impedem clínicas de radiologia odontológica de crescer.
          </p>
        </header>

        <ul className={styles.grid} role="list">
          {painPoints.map((painPoint, index) => (
            <li
              key={painPoint.id}
              ref={setRef(index)}
              className={`reveal reveal--scale${visibleItems.has(index) ? ' is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <PainPointCard painPoint={painPoint} />
            </li>
          ))}
        </ul>

        <p
          className={`${styles.transition} reveal${sectionVisible ? ' is-visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          Se você se identificou com pelo menos 2 dessas situações,{' '}
          <strong>o Docs Growth CRM foi feito pra você.</strong>
        </p>
      </div>
    </section>
  )
}
