'use client'

import { useConsent } from '@/hooks/useConsent'
import styles from './CookieBanner.module.css'

export function CookieBanner() {
  const { isPending, accept, reject } = useConsent()

  if (!isPending) return null

  return (
    <div role="dialog" aria-label="Aviso de cookies" className={styles.banner}>
      <p className={styles.text}>
        Usamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao continuar,
        você concorda com nossa{' '}
        <a href="/politica-privacidade" className={styles.link}>
          Política de Privacidade
        </a>
        .
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.accept} onClick={accept}>
          Aceitar
        </button>
        <button type="button" className={styles.reject} onClick={reject}>
          Recusar
        </button>
      </div>
    </div>
  )
}
