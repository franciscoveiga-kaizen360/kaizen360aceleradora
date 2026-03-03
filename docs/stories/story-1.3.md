# Story 1.3 — Analytics & Tracking Integration

**Epic:** 1 — Foundation & Infrastructure
**Status:** Completed

## Story
As a marketing manager, I want Facebook Pixel, GA4, and GTM integrated and firing correctly, so that all visitor behavior and CTA interactions are tracked from day one.

## Acceptance Criteria
1. [x] GTM container installed in layout.tsx (afterInteractive strategy — non-blocking)
2. [x] GA4 configured as GTM variable — PageView event fires on load
3. [x] FB Pixel fires PageView on load (via GTM)
4. [x] GTM trigger for Lead event on `.cta-demo` class click (trackLead() helper)
5. [x] Cookie consent checked before firing analytics (useConsent + CookieBanner)
6. [x] No analytics scripts block rendering (Script strategy="afterInteractive")

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6

**File List:**
- src/app/layout.tsx (updated — GTM script added)
- src/lib/constants.ts
- src/lib/analytics.ts
- src/lib/consent.ts
- src/hooks/useConsent.ts
- src/hooks/useScrollAnimation.ts
- src/hooks/useAccordion.ts
- src/components/organisms/CookieBanner/CookieBanner.tsx
- src/components/organisms/CookieBanner/CookieBanner.module.css
- .env.example (updated — NEXT_PUBLIC_ vars added)

**Completion Notes:**
- GTM script loaded with `strategy="afterInteractive"` — zero render blocking
- Cookie consent persisted to localStorage; banner disappears after choice
- `trackLead()`, `trackScrollDepth()`, `trackWhatsAppClick()`, `trackFaqOpen()`, `trackConsentAccepted()` helpers all available
- CookieBanner fully responsive (stacks on mobile)
- LGPD-compliant: analytics only fire after `consent_accepted` GTM event
