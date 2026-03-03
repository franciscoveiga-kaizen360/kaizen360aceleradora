'use client'

import { useState, useEffect } from 'react'
import { type ConsentStatus, getConsent, setConsent } from '@/lib/consent'
import { trackConsentAccepted } from '@/lib/analytics'

export function useConsent() {
  const [consent, setConsentState] = useState<ConsentStatus>('pending')

  useEffect(() => {
    setConsentState(getConsent())
  }, [])

  const accept = () => {
    setConsent('accepted')
    setConsentState('accepted')
    trackConsentAccepted()
  }

  const reject = () => {
    setConsent('rejected')
    setConsentState('rejected')
  }

  return {
    consent,
    accept,
    reject,
    isPending: consent === 'pending',
    isAccepted: consent === 'accepted',
  }
}
