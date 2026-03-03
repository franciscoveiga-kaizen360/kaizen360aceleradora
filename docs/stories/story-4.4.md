# Story 4.4 — Floating WhatsApp Button, Contact Form & LGPD Banner

**Epic:** 4 — Landing Page: Conversion Close & Compliance
**Status:** Completed

## Story
As a visitor on any section of the page, I want persistent access to WhatsApp and a simple way to comply with privacy requirements, so that I can contact the team at any moment and my data consent is respected.

## Acceptance Criteria
1. [x] Floating WhatsApp button fixed bottom-right, visible on all sections, links to wa.me deep link
2. [x] Button does not overlap primary CTAs on mobile
3. [x] Contact form with Name, Clinic, Email, Phone, Message fields submits via Formspree
4. [x] Form validates required fields (Name, Email) client-side; shows success/error message
5. [x] LGPD cookie consent banner on first visit (already implemented in Epic 1 — CookieBanner)
6. [x] Consent triggers/blocks analytics fire (already implemented — useConsent + trackConsentAccepted)
7. [x] Banner dismissed and persisted in localStorage (already implemented)
8. [x] Banner does not appear on return visits (already implemented)

## Tasks
- [x] Create WhatsAppButton organism (floating fixed element)
- [x] Create ContactSection organism with Formspree form
- [x] Note: LGPD banner already complete from Story 1.3

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6

**File List:**
- src/components/organisms/WhatsAppButton/WhatsAppButton.tsx
- src/components/organisms/WhatsAppButton/WhatsAppButton.module.css
- src/components/organisms/ContactSection/ContactSection.tsx
- src/components/organisms/ContactSection/ContactSection.module.css
