'use client'

import { Button } from '@/components/atoms/Button/Button'
import { BOOKING_URL } from '@/lib/constants'
import { trackLead } from '@/lib/analytics'
import styles from './HeroSection.module.css'

const stats = [
  { value: '200+', label: 'Clínicas parceiras' },
  { value: '100%', label: 'NPS' },
  { value: '21 anos', label: 'de experiência' },
]

export function HeroSection() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-heading">
      {/* Atmospheric background layers */}
      <div className={styles.bgGradient} aria-hidden="true" />
      <div className={styles.bgMesh} aria-hidden="true" />
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />

      <div className={styles.container}>
        {/* ── Left column — Copy ── */}
        <div className={styles.content}>
          {/* Eyebrow */}
          <div className={`section-eyebrow ${styles.eyebrow}`}>
            <span aria-hidden="true">✦</span>
            Feito para Radiologia Odontológica
          </div>

          {/* Headline */}
          <h1 id="hero-heading" className={styles.headline}>
            Sua clínica merece uma{' '}
            <span className={`gradient-text ${styles.accentLine}`}>
              gestão inteligente.
            </span>
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
              className={`cta-demo ${styles.primaryBtn}`}
              onClick={trackLead}
              aria-label="Agendar demonstração gratuita do Docs Growth CRM"
            >
              Agendar Demonstração Gratuita
            </Button>
            <a href="#precos" className={styles.secondaryCta}>
              Ver Planos e Preços
              <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          </div>

          {/* Social proof stats */}
          <div className={styles.stats} role="list" aria-label="Números que comprovam nossa experiência">
            {stats.map((stat, i) => (
              <div key={stat.value} className={styles.statItem} role="listitem">
                <span className={`gradient-text ${styles.statValue}`}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                {i < stats.length - 1 && (
                  <span className={styles.statDivider} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          {/* Trust badge */}
          <p className={styles.trustBadge} aria-label="Powered by Docs Consultoria">
            <span className={styles.badgeDot} aria-hidden="true" />
            Powered by{' '}
            <strong>Docs Consultoria</strong>
            {' '}— 21 anos no mercado
          </p>
        </div>

        {/* ── Right column — Platform mockup ── */}
        <div
          className={`${styles.mockupWrapper} animate-float`}
          aria-label="Visualização da plataforma Docs Growth CRM"
          role="img"
        >
          {/* Glow behind mockup */}
          <div className={styles.mockupGlow} aria-hidden="true" />

          {/* App window frame */}
          <div className={styles.appWindow}>
            {/* Title bar */}
            <div className={styles.titleBar}>
              <div className={styles.titleBarDots} aria-hidden="true">
                <span className={styles.dot} style={{ background: '#FF5F57' }} />
                <span className={styles.dot} style={{ background: '#FEBC2E' }} />
                <span className={styles.dot} style={{ background: '#28C840' }} />
              </div>
              <span className={styles.titleBarLabel}>Docs Growth CRM</span>
              <span className={styles.titleBarBadge}>● Ao vivo</span>
            </div>

            {/* App layout */}
            <div className={styles.appLayout}>
              {/* Sidebar */}
              <nav className={styles.sidebar} aria-label="Navegação do CRM (simulação)">
                <div className={styles.sidebarLogo} aria-hidden="true">DG</div>
                {[
                  { icon: '⊞', label: 'Dashboard', active: true },
                  { icon: '◎', label: 'CRM' },
                  { icon: '💬', label: 'Omni' },
                  { icon: '🤖', label: 'IA' },
                  { icon: '📅', label: 'Agenda' },
                  { icon: '📊', label: 'Métricas' },
                ].map(({ icon, label, active }) => (
                  <div
                    key={label}
                    className={`${styles.sidebarIcon} ${active ? styles.sidebarIconActive : ''}`}
                    title={label}
                    aria-label={label}
                  >
                    {icon}
                  </div>
                ))}
              </nav>

              {/* Main content area */}
              <div className={styles.mainArea}>
                {/* Stats row */}
                <div className={styles.statsRow}>
                  {[
                    { label: 'Leads hoje', value: '47', delta: '+12%', color: '#22C55E' },
                    { label: 'Em atendimento', value: '23', delta: '+5%', color: '#E87722' },
                    { label: 'Fechados', value: '8', delta: '+3%', color: '#C9A84C' },
                  ].map(({ label, value, delta, color }) => (
                    <div key={label} className={styles.statCard}>
                      <span className={styles.statCardLabel}>{label}</span>
                      <span className={styles.statCardValue} style={{ color }}>{value}</span>
                      <span className={styles.statCardDelta}>{delta}</span>
                    </div>
                  ))}
                </div>

                {/* Kanban board */}
                <div className={styles.kanban}>
                  {[
                    {
                      col: 'Leads',
                      color: '#3B82F6',
                      count: 12,
                      cards: ['Dr. Marcos Lima', 'Clínica Sorridentes', 'Dr. Ana Paula'],
                    },
                    {
                      col: 'Qualificando',
                      color: '#E87722',
                      count: 7,
                      cards: ['Dr. Roberto Faria', 'OdontoMax SP'],
                    },
                    {
                      col: 'Proposta',
                      color: '#C9A84C',
                      count: 5,
                      cards: ['RadioClin BH', 'Dr. Carlos Mendes'],
                    },
                  ].map(({ col, color, count, cards }) => (
                    <div key={col} className={styles.kanbanCol}>
                      <div className={styles.kanbanHeader}>
                        <span className={styles.kanbanDot} style={{ background: color }} />
                        <span className={styles.kanbanTitle}>{col}</span>
                        <span className={styles.kanbanCount}>{count}</span>
                      </div>
                      {cards.map((name) => (
                        <div key={name} className={`${styles.kanbanCard} animate-shimmer`}>
                          <span className={styles.kanbanAvatar} aria-hidden="true">
                            {name[0]}
                          </span>
                          <span className={styles.kanbanName}>{name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* AI chat preview */}
                <div className={styles.aiChat}>
                  <div className={styles.aiChatHeader}>
                    <span className={styles.aiDot} aria-hidden="true" />
                    <span className={styles.aiLabel}>Agente IA — Online 24h</span>
                  </div>
                  <div className={styles.aiMessage}>
                    ✓ Follow-up enviado para 3 dentistas. Aguardando resposta.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification cards */}
          <div className={`${styles.floatCard1} animate-float`} style={{ animationDelay: '1s' }} aria-hidden="true">
            <span className={styles.floatIcon}>🎯</span>
            <div>
              <span className={styles.floatTitle}>Novo lead qualificado</span>
              <span className={styles.floatSub}>Dr. Marcos Lima · agora mesmo</span>
            </div>
          </div>
          <div className={`${styles.floatCard2} animate-float`} style={{ animationDelay: '2.5s' }} aria-hidden="true">
            <span className={styles.floatIcon}>🤖</span>
            <div>
              <span className={styles.floatTitle}>IA ativa 24h</span>
              <span className={styles.floatSub}>12 atendimentos automáticos hoje</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
