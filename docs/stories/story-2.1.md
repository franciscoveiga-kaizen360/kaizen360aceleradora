# Story 2.1 — Hero Section

**Epic:** 2 — Landing Page: Top Sections (Hero → Solution)
**Status:** Completed

## Story
As a clinic manager visiting the site, I want to see a compelling hero section immediately, so that I understand what the product is and can take immediate action within 3 seconds.

## Acceptance Criteria
1. [x] Hero section renders headline: "Sua clínica de radiologia merece uma gestão inteligente. Conheça o CRM com IA feito exclusivamente para você."
2. [x] Sub-headline rendered: "Atendimento omnichannel, pipeline de dentistas, agente de IA 24h e métricas em tempo real. Tudo numa só plataforma."
3. [x] Primary CTA ("Agendar Demonstração Gratuita") visible above fold, styled orange (#E87722), class `.cta-demo` applied
4. [x] Secondary CTA ("Ver Planos e Preços") anchor scrolls smoothly to #precos section
5. [x] Platform mockup placeholder rendered with descriptive alt text; ready for WebP asset swap
6. [x] Badges rendered: "Feito para Radiologia Odontológica" + "Powered by Docs Consultoria"
7. [x] Social proof bar renders: "200+ clínicas" | "100% NPS" | "21 anos de experiência"
8. [x] Fully responsive: CTA and headline legible on 375px mobile without horizontal scroll

## Tasks
- [x] Create Badge atom (variants: default, highlight)
- [x] Create SocialProofItem atom
- [x] Create HeroSection organism with CSS module
- [x] Update page.tsx to render HeroSection

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6

**File List:**
- src/types/common.ts
- src/components/atoms/Badge/Badge.tsx
- src/components/atoms/Badge/Badge.module.css
- src/components/atoms/Badge/Badge.test.tsx
- src/components/atoms/SocialProofItem/SocialProofItem.tsx
- src/components/atoms/SocialProofItem/SocialProofItem.module.css
- src/components/organisms/HeroSection/HeroSection.tsx
- src/components/organisms/HeroSection/HeroSection.module.css

**Completion Notes:**
- Platform mockup uses CSS-styled placeholder; swap with /images/hero/platform-mockup.webp when client delivers asset
- Secondary CTA uses plain `<a href="#precos">` to avoid Button's default target="_blank"
- Social proof bar uses SocialProofItem atom with separator pipe
