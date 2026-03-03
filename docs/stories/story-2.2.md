# Story 2.2 — Problem Section

**Epic:** 2 — Landing Page: Top Sections (Hero → Solution)
**Status:** Completed

## Story
As a clinic manager reading the site, I want to see my specific operational problems described accurately, so that I feel understood and motivated to learn about the solution.

## Acceptance Criteria
1. [x] Section title "Sua clínica sofre com isso?" rendered as `h2`
2. [x] Exactly 6 pain point cards rendered, each with: icon, short bold label, and 1-line descriptive question
3. [x] Cards in responsive grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop)
4. [x] Transition phrase below cards: "Se você se identificou com pelo menos 2 dessas situações, o Docs Growth CRM foi feito pra você."
5. [x] All icons have descriptive `aria-label` or `title` for accessibility

## Tasks
- [x] Create src/data/painPoints.ts with 6 pain point entries
- [x] Create PainPointCard molecule
- [x] Create ProblemSection organism with CSS module

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6

**File List:**
- src/data/painPoints.ts
- src/components/molecules/PainPointCard/PainPointCard.tsx
- src/components/molecules/PainPointCard/PainPointCard.module.css
- src/components/organisms/ProblemSection/ProblemSection.tsx
- src/components/organisms/ProblemSection/ProblemSection.module.css

**Completion Notes:**
- Pain point copy sourced from SPIN Selling research in scope document
- Section has fade-up scroll animation via useScrollAnimation hook
