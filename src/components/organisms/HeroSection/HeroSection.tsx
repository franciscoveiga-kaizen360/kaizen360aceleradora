'use client'

import { Button } from '@/components/atoms/Button/Button'
import { Badge } from '@/components/atoms/Badge/Badge'
import { SocialProofItem } from '@/components/atoms/SocialProofItem/SocialProofItem'
import { BOOKING_URL } from '@/lib/constants'
import { trackLead } from '@/lib/analytics'
import styles from './HeroSection.module.css'

const socialProof = [
  { value: '200+', label: 'clínicas parceiras' },
  { value: '100%', label: 'NPS' },
  { value: '21 anos', label: 'de experiência' },
]

export function HeroSection() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badges */}
          <div className={styles.badges}>
            <Badge variant="default">Feito para Radiologia Odontológica</Badge>
            <Badge variant="default">Powered by Docs Consultoria</Badge>
          </div>

          {/* Headline */}
          <h1 id="hero-heading" className={styles.headline}>
            Sua clínica de radiologia merece uma{' '}
            <span className={styles.accent}>gestão inteligente.</span>{' '}
            Conheça o CRM com IA feito exclusivamente para você.
          </h1>

          {/* Sub-headline */}
          <p className={styles.subheadline}>
            Atendimento omnichannel, pipeline de dentistas, agente de IA 24h e métricas em
            tempo real. Tudo numa só plataforma.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <Button
              variant="primary"
              href={BOOKING_URL}
              className="cta-demo"
              onClick={trackLead}
              aria-label="Agendar demonstração gratuita do Docs Growth CRM"
            >
              Agendar Demonstração Gratuita
            </Button>
            <a href="#precos" className={styles.secondaryCta}>
              Ver Planos e Preços
            </a>
          </div>

          {/* Social proof */}
          <div className={styles.socialProof} aria-label="Números que comprovam nossa experiência">
            {socialProof.map((item, index) => (
              <div key={item.value} className={styles.proofGroup}>
                <SocialProofItem value={item.value} label={item.label} />
                {index < socialProof.length - 1 && (
                  <span className={styles.separator} aria-hidden="true">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mockup image — swap src with /images/hero/platform-mockup.webp when asset is delivered */}
        <div className={styles.mockupWrapper} aria-label="Visualização da plataforma Docs Growth CRM" role="img">
          <div className={styles.mockupFrame}>
            <div className={styles.mockupBar}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.mockupSidebar} />
              <div className={styles.mockupMain}>
                <div className={styles.mockupCard} />
                <div className={styles.mockupCard} />
                <div className={styles.mockupCardWide} />
              </div>
            </div>
          </div>
          <div className={styles.mockupGlow} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
