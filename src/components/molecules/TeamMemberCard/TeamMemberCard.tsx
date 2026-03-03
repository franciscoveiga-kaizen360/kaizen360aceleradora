/* eslint-disable @next/next/no-img-element */
import styles from './TeamMemberCard.module.css'

interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  imagePath?: string // /images/team/dr-fabio-guimaraes.webp — swap when client delivers
  initials: string
}

export function TeamMemberCard({ name, role, bio, imagePath, initials }: TeamMemberCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.avatar} aria-hidden="true">
        {imagePath ? (
          <img src={imagePath} alt={`Foto de ${name}`} className={styles.photo} />
        ) : (
          <span className={styles.initials}>{initials}</span>
        )}
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.bio}>{bio}</p>
    </article>
  )
}
