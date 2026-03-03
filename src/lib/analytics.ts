// analytics.ts — GTM dataLayer helpers
// All analytics are fire-and-forget via GTM dataLayer push
// Tags (GA4, FB Pixel) are triggered from GTM based on events

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

function push(event: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(event)
}

/** Fire on every demo booking CTA click — triggers FB Lead pixel via GTM */
export function trackLead(): void {
  push({ event: 'demo_booking_click' })
}

/** Fire on scroll depth milestones */
export function trackScrollDepth(percent: 25 | 50 | 75 | 90): void {
  push({ event: 'scroll_depth', scroll_percent: percent })
}

/** Fire on WhatsApp button click */
export function trackWhatsAppClick(): void {
  push({ event: 'whatsapp_click' })
}

/** Fire on FAQ item open */
export function trackFaqOpen(question: string): void {
  push({ event: 'faq_open', faq_question: question })
}

/** Fire when cookie consent is accepted */
export function trackConsentAccepted(): void {
  push({ event: 'consent_accepted' })
}
