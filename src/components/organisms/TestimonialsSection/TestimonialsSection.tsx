'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { TestimonialCard } from '@/components/molecules/TestimonialCard/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import styles from './TestimonialsSection.module.css'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const { ref, isVisible } = useScrollAnimation()
  const total = testimonials.length

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <section
      id="depoimentos"
      className={[styles.section, isVisible ? styles.visible : ''].filter(Boolean).join(' ')}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="testimonials-heading" className={styles.title}>
            O que dizem nossos parceiros
          </h2>
          <p className={styles.subtitle}>
            Clínicas que transformaram sua gestão com o Docs Growth CRM.
          </p>
        </header>

        <div
          className={styles.carousel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onKeyDown={handleKeyDown}
          role="region"
          aria-label="Carrossel de depoimentos"
          aria-roledescription="carousel"
          tabIndex={0}
        >
          <div
            className={styles.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={styles.slide}
                aria-hidden={index !== current}
                aria-roledescription="slide"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            className={[styles.navBtn, styles.navPrev].join(' ')}
            onClick={prev}
            aria-label="Depoimento anterior"
            type="button"
          >
            ‹
          </button>
          <button
            className={[styles.navBtn, styles.navNext].join(' ')}
            onClick={next}
            aria-label="Próximo depoimento"
            type="button"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots} role="tablist" aria-label="Selecionar depoimento">
          {testimonials.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === current}
              aria-label={`Depoimento ${index + 1}`}
              className={[styles.dot, index === current ? styles.dotActive : ''].filter(Boolean).join(' ')}
              onClick={() => setCurrent(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
