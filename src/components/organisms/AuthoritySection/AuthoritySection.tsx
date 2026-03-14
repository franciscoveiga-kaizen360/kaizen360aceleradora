'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { TeamMemberCard } from '@/components/molecules/TeamMemberCard/TeamMemberCard'
import styles from './AuthoritySection.module.css'

const stats = [
  { value: '+200', label: 'clínicas parceiras' },
  { value: '+21 anos', label: 'de experiência' },
  { value: '100%', label: 'NPS' },
  { value: '12 Pilares', label: 'Mentoria — turmas esgotadas' },
]

const team = [
  {
    name: 'Dr. Fabio Guimarães',
    role: 'Fundador & Mentor',
    bio: 'Especialista em gestão de clínicas de radiologia odontológica com mais de duas décadas formando líderes no setor.',
    initials: 'FG',
    imagePath: undefined, // swap with /images/team/dr-fabio-guimaraes.webp
  },
  {
    name: 'Francisco Júnior',
    role: 'CEO & Estrategista',
    bio: 'Responsável pela expansão e operações da Docs Consultoria, conectando tecnologia e gestão clínica.',
    initials: 'FJ',
    imagePath: undefined,
  },
  {
    name: 'Letícia Botti',
    role: 'Diretora Comercial',
    bio: 'À frente das parcerias e do crescimento do ecossistema de mais de 200 clínicas parceiras.',
    initials: 'LB',
    imagePath: undefined,
  },
]

export function AuthoritySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="sobre"
      className={[styles.section, isVisible ? styles.visible : ''].filter(Boolean).join(' ')}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="authority-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={`section-eyebrow ${styles.eyebrow}`}>
            <span aria-hidden="true">🏛</span>
            Nossa Autoridade
          </span>
          <h2 id="authority-heading" className={styles.title}>
            Criado por quem entende de{' '}
            <span className={styles.accent}>Radiologia Odontológica</span>
          </h2>
          <p className={styles.subtitle}>
            A Docs Consultoria tem 21 anos de história, +200 clínicas parceiras e NPS 100%. Quando dizemos que entendemos o seu mercado, é porque vivemos ele todos os dias.
          </p>
        </header>

        {/* Stats bar */}
        <div className={styles.statsGrid} aria-label="Números da Docs Consultoria">
          {stats.map((stat) => (
            <div key={stat.value} className={styles.statCard}>
              <strong className={styles.statValue}>{stat.value}</strong>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Congress presence */}
        <div className={styles.congresso}>
          <span className={styles.congressoLabel}>Presença confirmada nos principais congressos:</span>
          <div className={styles.congressoBadges}>
            <span className={styles.congressoBadge}>CONABRO</span>
            <span className={styles.congressoBadge}>ABRO</span>
          </div>
        </div>

        {/* Team */}
        <div className={styles.team}>
          {team.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>

        {/* Seal */}
        <div className={styles.seal} aria-label='Selo: "Só ensina quem faz!"'>
          <div className={styles.sealInner}>
            <span className={styles.sealIcon}>🏆</span>
            <strong className={styles.sealText}>Só ensina quem faz!</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
