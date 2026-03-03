// All external URLs and IDs — never hardcode these in components

export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://calendly.com/docs-growth-crm/demo'

export const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5511999999999'

export const WA_MESSAGE = encodeURIComponent(
  'Olá! Quero saber mais sobre o Docs Growth CRM.'
)

export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export const INSTAGRAM_URL = 'https://instagram.com/docsconsultoria'

export const DOCS_CONSULTORIA_URL = 'https://docsconsultoria.com'

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? ''

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? ''

export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''

export const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`
