# Story 3.3 — Pricing Section

**Epic:** 3 — Landing Page: Authority & Offer Sections
**Status:** Completed

## Story
As a clinic manager ready to evaluate commitment, I want to see all plans and prices clearly, so that I can choose the right tier and book a demo.

## Acceptance Criteria
1. [ ] Section title "Escolha o plano ideal para sua clínica" rendered as `h2`
2. [ ] Three plan cards: Essencial, Intermediário (badge "Mais Popular"), Avançado (badge "Recomendado")
3. [ ] Each plan has module name, description, and pricing table (account tiers × billing periods)
4. [ ] Bonus messaging per plan: Semestral "Pague 5 meses, ganhe 1" / Anual "Pague 10 meses, ganhe 2"
5. [ ] Implementation fee table rendered with correct values (R$997 / R$1.497 / R$1.997)
6. [ ] Each plan card has "Agendar Demonstração Gratuita" CTA with class `.cta-demo`
7. [ ] Pricing values accurate per scope document (verified)
8. [ ] Fully responsive; tables scroll horizontally on mobile

## Tasks
- [x] Create src/types/pricing.ts
- [x] Create src/data/pricing.ts with verified values from scope
- [x] Create PricingPlanCard molecule
- [x] Create PricingSection organism

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6

**File List:**
- src/types/pricing.ts
- src/data/pricing.ts
- src/components/molecules/PricingPlanCard/PricingPlanCard.tsx
- src/components/molecules/PricingPlanCard/PricingPlanCard.module.css
- src/components/organisms/PricingSection/PricingSection.tsx
- src/components/organisms/PricingSection/PricingSection.module.css

**Completion Notes:**
- Pricing values verified against ESCOPO_SITE_DOCS_GROWTH_CRM.docx
