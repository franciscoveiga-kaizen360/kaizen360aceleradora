'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Button } from '@/components/atoms/Button/Button'
import { BOOKING_URL, WA_LINK } from '@/lib/constants'
import { trackLead, trackWhatsAppClick } from '@/lib/analytics'
import styles from './FinalCtaSection.module.css'

export function FinalCtaSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="cta-final"
      className={[styles.section, isVisible ? styles.visible : ''].filter(Boolean).join(' ')}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="final-cta-heading"
    >
      {/* Decorative border lines */}
      <div className={styles.borderTop} aria-hidden="true" />
      <div className={styles.borderBottom} aria-hidden="true" />

      <div className={styles.container}>
        <span className={`section-eyebrow ${styles.eyebrow}`}>
          <span aria-hidden="true">🚀</span>
          Comece agora
        </span>

        <h2 id="final-cta-heading" className={styles.title}>
          Pare de ser{' '}
          <span className={styles.accent}>empresidiário.</span>
          <br />
          Comece a ser empresário.
        </h2>

        <p className={styles.subtitle}>
          Agende sua demonstração gratuita e veja sua clínica operar no automático com IA.
        </p>

        <div className={styles.actions}>
          <Button
            variant="primary"
            href={BOOKING_URL}
            className={`cta-demo ${styles.primaryBtn}`}
            onClick={trackLead}
            aria-label="Quero minha demonstração gratuita do Docs Growth CRM"
          >
            Quero Minha Demonstração Gratuita
          </Button>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waLink}
            onClick={trackWhatsAppClick}
            aria-label="Falar pelo WhatsApp"
          >
            💬 Ou fale pelo WhatsApp agora
          </a>

          <p className={styles.guarantee}>
            Sem fidelidade. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  )
}
