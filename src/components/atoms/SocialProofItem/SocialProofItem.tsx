import styles from './SocialProofItem.module.css'

interface SocialProofItemProps {
  value: string
  label: string
}

export function SocialProofItem({ value, label }: SocialProofItemProps) {
  return (
    <div className={styles.item}>
      <strong className={styles.value}>{value}</strong>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
