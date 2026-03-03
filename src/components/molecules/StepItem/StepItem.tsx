import type { Step } from '@/data/howItWorks'
import styles from './StepItem.module.css'

interface StepItemProps {
  step: Step
}

export function StepItem({ step }: StepItemProps) {
  const { Icon, step: stepNumber, title, description } = step

  return (
    <article className={styles.item}>
      <div className={styles.iconWrapper}>
        <span className={styles.stepNumber} aria-hidden="true">
          {stepNumber}
        </span>
        <div className={styles.iconCircle}>
          <Icon size={32} weight="duotone" aria-hidden="true" />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}
