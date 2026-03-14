'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useAccordion } from '@/hooks/useAccordion'
import { FaqAccordionItem } from '@/components/molecules/FaqAccordionItem/FaqAccordionItem'
import { faqItems } from '@/data/faq'
import styles from './FaqSection.module.css'

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation()
  // First item open by default (index 0)
  const { toggle, isOpen } = useAccordion(0)

  return (
    <section
      id="faq"
      className={[styles.section, isVisible ? styles.visible : ''].filter(Boolean).join(' ')}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="faq-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={`section-eyebrow ${styles.eyebrow}`}>
            <span aria-hidden="true">?</span>
            Dúvidas frequentes
          </span>
          <h2 id="faq-heading" className={styles.title}>
            Perguntas Frequentes
          </h2>
          <p className={styles.subtitle}>
            Tire suas dúvidas antes de agendar a demonstração.
          </p>
        </header>

        <div className={styles.accordion}>
          {faqItems.map((item, index) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={isOpen(index)}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
