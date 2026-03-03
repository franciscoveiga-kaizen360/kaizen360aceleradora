import type { PainPoint } from '@/types/common'
import styles from './PainPointCard.module.css'

interface PainPointCardProps {
  painPoint: PainPoint
}

export function PainPointCard({ painPoint }: PainPointCardProps) {
  const { Icon, label, description } = painPoint

  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={32} weight="duotone" aria-hidden="true" />
      </div>
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}
