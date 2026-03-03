/* eslint-disable @next/next/no-img-element */
import type { Testimonial } from '@/types/testimonial'
import styles from './TestimonialCard.module.css'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, clinicName, city, quote, avatarInitials, imagePath, isPlaceholder } = testimonial

  return (
    <article className={styles.card}>
      {isPlaceholder && (
        <span className={styles.stagingBadge} aria-label="Conteúdo de staging">
          [Depoimento a confirmar com cliente]
        </span>
      )}
      <blockquote className={styles.quote}>
        <span className={styles.quoteIcon} aria-hidden="true">&ldquo;</span>
        {quote}
      </blockquote>
      <footer className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">
          {imagePath ? (
            <img src={imagePath} alt="" className={styles.photo} />
          ) : (
            <span className={styles.initials}>{avatarInitials}</span>
          )}
        </div>
        <div className={styles.info}>
          <strong className={styles.name}>{name}</strong>
          <span className={styles.clinic}>{clinicName}</span>
          <span className={styles.city}>{city}</span>
        </div>
      </footer>
    </article>
  )
}
