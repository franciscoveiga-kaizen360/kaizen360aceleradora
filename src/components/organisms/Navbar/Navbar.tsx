'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/atoms/Button/Button'
import { BOOKING_URL } from '@/lib/constants'
import { trackLead } from '@/lib/analytics'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Preços', href: '#precos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header
      className={[styles.header, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}
      role="banner"
    >
      <nav className={styles.nav} aria-label="Navegação principal">
        {/* Logo */}
        <a href="#inicio" className={styles.logo} aria-label="Docs Growth CRM — Início">
          <span className={styles.logoMark}>D</span>
          <span className={styles.logoName}>Docs Growth CRM</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className={styles.cta}>
          <Button
            variant="primary"
            href={BOOKING_URL}
            className="cta-demo"
            onClick={trackLead}
            aria-label="Agendar demonstração"
          >
            Agendar Demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          type="button"
        >
          <span className={[styles.bar, menuOpen ? styles.barOpen1 : ''].filter(Boolean).join(' ')} />
          <span className={[styles.bar, menuOpen ? styles.barOpen2 : ''].filter(Boolean).join(' ')} />
          <span className={[styles.bar, menuOpen ? styles.barOpen3 : ''].filter(Boolean).join(' ')} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className={styles.mobileMenu} role="dialog" aria-label="Menu mobile">
          <ul className={styles.mobileLinks} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.mobileLink} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="primary"
            href={BOOKING_URL}
            className="cta-demo"
            onClick={() => { trackLead(); closeMenu() }}
            fullWidth
          >
            Agendar Demonstração Gratuita
          </Button>
        </div>
      )}
    </header>
  )
}
