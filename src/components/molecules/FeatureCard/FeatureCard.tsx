import type { Feature } from '@/types/common'
import { Badge } from '@/components/atoms/Badge/Badge'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  feature: Feature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { Icon, name, description, highlight } = feature

  return (
    <article className={[styles.card, highlight ? styles.highlighted : ''].filter(Boolean).join(' ')}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <Icon size={28} weight="duotone" aria-hidden="true" />
        </div>
        {highlight && (
          <Badge variant="highlight" className={styles.badge}>
            Diferencial exclusivo
          </Badge>
        )}
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}
