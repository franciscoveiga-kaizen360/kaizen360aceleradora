# Story 4.1 — Testimonials Section

**Epic:** 4 — Landing Page: Conversion Close & Compliance
**Status:** Completed

## Story
As a clinic manager looking for social proof, I want to read testimonials from real clinics, so that I trust the product has delivered results for peers.

## Acceptance Criteria
1. [x] Section title "O que dizem nossos parceiros" rendered as h2
2. [x] Testimonial carousel renders minimum 3 testimonials, each with: avatar placeholder, full name, clinic name, city, and quote
3. [x] Carousel has prev/next navigation controls and auto-advances (5-second interval, pauses on hover/touch)
4. [x] Carousel is accessible: keyboard navigable, aria-label on controls
5. [x] Placeholder testimonials render with staging notice until client delivers real ones

## Tasks
- [x] Create src/types/testimonial.ts
- [x] Create src/data/testimonials.ts with 3 placeholder entries
- [x] Create TestimonialCard molecule
- [x] Create TestimonialsSection organism with carousel logic

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6

**File List:**
- src/types/testimonial.ts
- src/data/testimonials.ts
- src/components/molecules/TestimonialCard/TestimonialCard.tsx
- src/components/molecules/TestimonialCard/TestimonialCard.module.css
- src/components/organisms/TestimonialsSection/TestimonialsSection.tsx
- src/components/organisms/TestimonialsSection/TestimonialsSection.module.css
