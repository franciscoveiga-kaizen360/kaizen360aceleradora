# Story 4.2 — FAQ Section

**Epic:** 4 — Landing Page: Conversion Close & Compliance
**Status:** Completed

## Story
As a clinic manager with objections, I want to find answers to common questions in an FAQ, so that my purchase resistance is reduced before I book a demo.

## Acceptance Criteria
1. [x] Section title "Perguntas Frequentes" rendered as h2
2. [x] Exactly 6 accordion items with approved Q&A copy
3. [x] Accordion items expand/collapse on click; only one open at a time
4. [x] First item open by default; accordion keyboard navigable
5. [x] ARIA attributes applied: aria-expanded, aria-controls

## Tasks
- [x] Create src/data/faq.ts with 6 Q&A pairs
- [x] Create FaqAccordionItem molecule
- [x] Create FaqSection organism using useAccordion hook

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6

**File List:**
- src/data/faq.ts
- src/components/molecules/FaqAccordionItem/FaqAccordionItem.tsx
- src/components/molecules/FaqAccordionItem/FaqAccordionItem.module.css
- src/components/organisms/FaqSection/FaqSection.tsx
- src/components/organisms/FaqSection/FaqSection.module.css
