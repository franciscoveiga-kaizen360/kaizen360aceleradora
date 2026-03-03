// consent.ts — LGPD cookie consent helpers

export type ConsentStatus = 'pending' | 'accepted' | 'rejected'

const CONSENT_KEY = 'docs_growth_consent'

export function getConsent(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending'
  return (localStorage.getItem(CONSENT_KEY) as ConsentStatus) ?? 'pending'
}

export function setConsent(status: 'accepted' | 'rejected'): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(CONSENT_KEY, status)
}

export function hasConsent(): boolean {
  return getConsent() !== 'pending'
}
