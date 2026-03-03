'use client'

import { useState, useEffect } from 'react'
import { INSTAGRAM_URL, DOCS_CONSULTORIA_URL } from '@/lib/constants'
import styles from './Footer.module.css'

export function Footer() {
  const [year, setYear] = useState(2026)
  useEffect(() => { setYear(new Date().getFullYear()) }, [])

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Top row: logos + links */}
        <div className={styles.top}>
          <div className={styles.brand}>
            {/* Logo placeholder — swap with <Image> when SVGs are delivered */}
            <div className={styles.logoPlaceholder} aria-label="Docs Growth CRM">
              <span className={styles.logoText}>Docs Growth CRM</span>
            </div>
            <p className={styles.tagline}>
              CRM com IA exclusivo para Radiologia Odontológica.
            </p>
          </div>

          <nav className={styles.links} aria-label="Links do rodapé">
            <a href="/politica-privacidade" className={styles.link}>
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className={styles.link}>
              Termos de Uso
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="Instagram da Docs Consultoria"
            >
              @docsconsultoria
            </a>
          </nav>

          <div className={styles.contact}>
            <address className={styles.address}>
              <a href="tel:+551199999999" className={styles.contactLink}>
                (11) 9 9999-9999
              </a>
              <a href="mailto:contato@docsconsultoria.com" className={styles.contactLink}>
                contato@docsconsultoria.com
              </a>
            </address>
          </div>
        </div>

        {/* Bottom row: copyright + powered by */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Docs Growth CRM. Todos os direitos reservados.
          </p>
          <a
            href={DOCS_CONSULTORIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.poweredBy}
            aria-label="Powered by Docs Consultoria"
          >
            ⚡ Powered by{' '}
            <strong>Docs Consultoria</strong>
          </a>
        </div>
      </div>
    </footer>
  )
}
