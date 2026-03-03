'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { FORMSPREE_URL } from '@/lib/constants'
import styles from './ContactSection.module.css'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const { ref, isVisible } = useScrollAnimation()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contato"
      className={[styles.section, isVisible ? styles.visible : ''].filter(Boolean).join(' ')}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="contact-heading" className={styles.title}>
            Prefere mandar uma mensagem?
          </h2>
          <p className={styles.subtitle}>
            Fale com nossa equipe — respondemos em até 24 horas úteis.
          </p>
        </header>

        {status === 'success' ? (
          <div className={styles.successMessage} role="alert">
            <span className={styles.successIcon}>✅</span>
            <div>
              <strong>Mensagem enviada com sucesso!</strong>
              <p>Nossa equipe entrará em contato em breve.</p>
            </div>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  Nome <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Seu nome completo"
                  autoComplete="name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-clinic" className={styles.label}>
                  Nome da clínica
                </label>
                <input
                  id="contact-clinic"
                  name="clinic"
                  type="text"
                  className={styles.input}
                  placeholder="Clínica de Radiologia XYZ"
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  E-mail <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className={styles.input}
                  placeholder="seu@email.com"
                  autoComplete="email"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-phone" className={styles.label}>
                  Telefone / WhatsApp
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className={styles.input}
                  placeholder="(11) 9 9999-9999"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className={styles.textarea}
                placeholder="Como podemos ajudar sua clínica?"
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMessage} role="alert">
                Erro ao enviar. Tente novamente ou use o WhatsApp.
              </p>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'submitting'}
              aria-busy={status === 'submitting'}
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
