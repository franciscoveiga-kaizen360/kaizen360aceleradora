# Docs Growth CRM — Product Requirements Document (PRD)

> **Project:** Docs Growth CRM — Institutional/Sales Website
> **Client:** Docs Consultoria e Gestão
> **Prepared by:** Morgan (PM Agent) — Kaizen360 Aceleradora
> **Date:** March 2026 | **Version:** 1.0
> **Source:** docs/brief.md + ESCOPO_SITE_DOCS_GROWTH_CRM.docx

---

## Goals and Background Context

### Goals

- Build a high-conversion, single-page sales website for the Docs Growth CRM platform
- Drive qualified clinic managers to schedule a free product demonstration
- Communicate platform value clearly to non-technical dental radiology clinic owners
- Present three subscription tiers with transparent pricing and clear upgrade path
- Establish Docs Consultoria's authority and trust as the niche expert with 21+ years of experience
- Achieve ≥ 5% demo booking conversion rate within 90 days of launch
- Deliver a performant, mobile-first site scoring ≥ 90 on Google PageSpeed (mobile)
- Comply with LGPD and integrate Facebook Pixel + GA4 for performance tracking

### Background Context

Docs Growth CRM is an AI-powered CRM platform (white-label from Logyca Tecnologia) commercialized by Docs Consultoria e Gestão — a company with 21+ years of experience and 200+ partner clinics in the dental radiology niche. The platform solves critical operational, financial, and commercial problems that prevent clinic managers from scaling: no CRM, manual processes, zero follow-up with referring dentists, and unpredictable revenue.

The website is the primary sales channel. It follows a hybrid model: transparent pricing displayed publicly, with the main CTA routing visitors to schedule a free demo with the Docs commercial team, who close the sale. The site must speak the language of clinic managers — not tech jargon — and leverage Docs Consultoria's proven authority signals (NPS 100%, 200+ clinics, 21 years, congress presence) to overcome purchase resistance.

### Change Log

| Date | Version | Description | Author |
|---|---|---|---|
| March 2026 | 1.0 | Initial PRD — generated from approved scope document | Morgan / Kaizen360 |

---

## Requirements

### Functional Requirements

**FR1:** The site must display a Hero section containing: headline ("Sua clínica de radiologia merece uma gestão inteligente. Conheça o CRM com IA feito exclusivamente para você."), sub-headline, primary CTA button ("Agendar Demonstração Gratuita" — orange), secondary CTA anchor link ("Ver Planos e Preços"), platform mockup image (notebook/mobile), authority badge "Feito para Radiologia Odontológica", and social proof bar (200+ clínicas / 100% NPS / 21 anos).

**FR2:** The site must display a Problem section with 6 pain point cards using icons and short copy sourced from the SPIN Selling research (scattered data, owner imprisoned in business, no dentist follow-up, non-standardized WhatsApp service, no CAC/metrics, "empresidiário" framing), closing with the transition phrase: "Se você se identificou com pelo menos 2 dessas situações, o Docs Growth CRM foi pra você."

**FR3:** The site must display a Solution section with 7 feature cards: (1) Atendimento Omnichannel, (2) CRM Completo e Visual, (3) Agente Autônomo de IA, (4) Construtor de Fluxos, (5) Agendamentos Inteligentes, (6) Disparos em Massa, (7) Social Media Suite — each with icon, title, and 2-3 line description.

**FR4:** The site must display an Authority section presenting Docs Consultoria's credentials: 200+ partner clinics, 21 years, 100% NPS, 12 Pillars Mentorship, CONABRO/ABRO congress presence, team photos (Dr. Fabio Guimarães, Francisco Júnior, Letícia Botti), and the seal "Só ensina quem faz!".

**FR5:** The site must display a How It Works section with a 3-step visual journey: (1) Agende sua demonstração gratuita, (2) Implementação guiada, (3) Sua clínica no piloto automático.

**FR6:** The site must display a Pricing section with 3 module cards:
- **Essencial:** Pricing table (1, 2, 3, 5, 7 accounts × Mensal / Semestral / Anual)
- **Intermediário:** Pricing table (1, 2, 3, 5, 7 accounts × Mensal / Semestral / Anual) — badge "Mais Popular"
- **Avançado:** Single tier pricing (Mensal / Semestral / Anual) — badge "Recomendado"
- Implementation fee table (1–2, 3–5, 6–10 accounts)
- "Agendar Demonstração Gratuita" CTA button per plan
- Bonus messaging: "Semestral: Pague 5, ganhe 1" and "Anual: Pague 10, ganhe 2"

**FR7:** The site must display a Testimonials section as a carousel with deponent photo, name, clinic name, city, and quote. Minimum 3 testimonials. If CRM-specific testimonials are unavailable, 12 Pillars Mentorship testimonials may be used pending client approval.

**FR8:** The site must display a FAQ section with accordion/expandable format containing the 6 approved Q&A pairs addressing: radiology specificity, technical knowledge required, implementation time, cancellation policy, AI vs. team, and pricing objection.

**FR9:** The site must display a Final CTA section with power-close copy ("Pare de ser empresidiário. Comece a ser empresário."), sub-headline, large primary CTA button ("Quero Minha Demonstração Gratuita"), and a secondary WhatsApp text link.

**FR10:** The site must display a Footer containing: Docs Growth CRM logo, Docs Consultoria logo, Privacy Policy link, Terms of Use link, phone/email contact, Instagram link (@docsconsultoria), and "Powered by Docs Consultoria" badge.

**FR11:** A floating WhatsApp button must be persistently visible on all sections, linking to `wa.me` deep link with a pre-filled message. Button must not obstruct primary CTAs.

**FR12:** All primary CTA buttons ("Agendar Demonstração Gratuita") must route to the configured demo booking tool (Calendly / Cal.com / Logyca link — TBD in Phase 1). The booking link must open in a new tab or modal.

**FR13:** Facebook Pixel must be integrated, firing `PageView` on load and `Lead` event on demo booking CTA click.

**FR14:** Google Analytics 4 must be integrated via Google Tag Manager, tracking: page views, scroll depth milestones (25%, 50%, 75%, 90%), CTA clicks (demo booking, WhatsApp, pricing anchor), and FAQ interactions.

**FR15:** A contact form must be present (footer or dedicated section) capturing name, clinic name, email, phone, and message, with delivery to a configured email address or CRM via form service (Formspree / EmailJS / equivalent).

**FR16:** A LGPD-compliant cookie consent banner must be displayed on first visit, with options to accept or decline analytics cookies.

**FR17:** Standalone pages for Privacy Policy and Terms of Use must be created, accessible from the Footer.

**FR18:** Smooth-scroll anchor navigation must be implemented for all section links. A sticky top navigation bar (optional) or prominent section anchors must aid non-linear browsing.

**FR19:** The site must be fully responsive and mobile-first, tested across minimum breakpoints: 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop).

**FR20:** SEO baseline must be implemented: unique `<title>` and `<meta description>` tags, Open Graph tags (og:title, og:description, og:image), Twitter Card meta, semantic HTML5 structure (h1–h3 hierarchy), and alt text on all images.

---

### Non-Functional Requirements

**NFR1:** Largest Contentful Paint (LCP) must be < 2.5 seconds on mobile (Google Core Web Vitals passing threshold).

**NFR2:** Cumulative Layout Shift (CLS) must be < 0.1 (Google Core Web Vitals passing threshold).

**NFR3:** First Input Delay (FID) / Interaction to Next Paint (INP) must be < 200ms.

**NFR4:** Google PageSpeed Insights score must be ≥ 90 on mobile and ≥ 95 on desktop.

**NFR5:** Primary interactive elements (buttons, links, form fields) must meet WCAG 2.1 AA compliance: minimum 4.5:1 contrast ratio, keyboard navigability, focus indicators visible.

**NFR6:** The site must be served over HTTPS with a valid SSL certificate.

**NFR7:** No server-side backend is required for MVP — static or JAMstack architecture preferred.

**NFR8:** The site must be functional with JavaScript disabled for all static content (progressive enhancement). CTAs may degrade gracefully.

**NFR9:** All third-party scripts (Pixel, GTM, analytics) must be loaded asynchronously and must not block rendering.

**NFR10:** LGPD compliance — analytics cookies must only fire after explicit user consent. Privacy Policy and Terms of Use must be accessible before form submission.

---

## User Interface Design Goals

### Overall UX Vision

A premium, dark-mode landing page that communicates authority and modernity while remaining immediately legible and conversion-focused. The visitor (a clinic manager with limited tech background) must understand the value proposition within 30 seconds, feel the pain of their current problems through empathetic copy, and feel confident clicking "Agendar Demonstração" because Docs Consultoria is clearly the expert.

The visual experience should mirror the Docs Consultoria and Logyca Tecnologia sites: dark background, warm orange accents, clean typography — signaling that this is a serious, professional platform built by people who know the niche.

### Key Interaction Paradigms

- **Scroll-driven narrative:** One-page long scroll following the journey Problem → Solution → Proof → Offer → Action
- **Anchor navigation:** Section jumps from nav or CTA buttons for non-linear browsing
- **Card-based content:** Pain points, features, and pricing presented in scannable card grids
- **Accordion FAQ:** Expand/collapse for objection handling without visual overwhelm
- **Carousel testimonials:** Social proof without excessive vertical space
- **Sticky/floating CTA elements:** WhatsApp button always accessible; demo CTA in navbar (optional)

### Core Screens and Views

1. **Main Landing Page** (one-page, 10 sections with anchors)
2. **Demo Booking** (external tool — Calendly/Cal.com — opened in new tab or modal)
3. **Privacy Policy Page** (standalone, linked from footer)
4. **Terms of Use Page** (standalone, linked from footer)

### Accessibility

**WCAG 2.1 AA** — minimum requirement for interactive elements (buttons, links, form fields). Full AAA not required for MVP.

### Branding

- **Primary colors:** Orange `#E87722` (CTAs, highlights), Black/Dark `#1A1A2E` (backgrounds), White `#FFFFFF` (text on dark)
- **Secondary colors:** Gold (premium detail accents), Dark Gray (body text)
- **Style:** Dark mode dominant, modern, technological, premium
- **Typography:** Poppins (or similar modern geometric sans-serif)
- **Reference sites:** docsconsultoria.com and logycatecnologia.com.br
- **Logo assets:** Docs Growth CRM logo + Docs Consultoria logo (to be provided by client)
- **Seal assets:** "Feito para Radiologia Odontológica" badge, "Powered by Docs Consultoria" badge, "Só ensina quem faz!" seal

### Target Device and Platforms

**Web Responsive** — Mobile-first development. Primary traffic expected from mobile (clinic managers browsing on phones). Desktop must also be polished for demo/sales context.

---

## Technical Assumptions

### Repository Structure

**Monorepo** — Single repository containing all site files. No multi-package complexity needed for a static landing page.

### Service Architecture

**Static Site / JAMstack** — No backend server required for MVP. Options in preference order:
1. **Next.js** (static export) — preferred if team uses React, enables component reuse and future expansion
2. **Astro** — excellent for performance-first static sites with minimal JS
3. **Plain HTML5/CSS3/Vanilla JS** — acceptable if speed of delivery is priority and team prefers no framework

Hosting: **Vercel** (preferred — zero-config deployment, global CDN, free tier sufficient for MVP) or **Netlify** as alternative.

### Testing Requirements

**Manual QA + Automated Lighthouse** for MVP:
- Manual cross-browser testing: Chrome, Safari, Firefox, Edge (latest 2 versions)
- Manual device testing: iOS Safari (iPhone), Android Chrome
- Automated: Google PageSpeed Insights / Lighthouse CI (performance, accessibility, SEO scores)
- No unit/integration test suite required for a static landing page

### Additional Technical Assumptions and Requests

- **Demo booking tool:** Calendly or Cal.com embed preferred (link TBD — must be confirmed in Phase 1)
- **WhatsApp integration:** `wa.me` deep link with pre-filled message (no WhatsApp Business API required for MVP)
- **Form handling:** Formspree or EmailJS (no custom backend endpoint)
- **Cookie consent:** js-cookie + custom lightweight banner (no heavy GDPR library needed)
- **Image optimization:** WebP format preferred, with JPEG fallback; lazy loading on below-fold images
- **Font loading:** Self-hosted Poppins or Google Fonts with `font-display: swap`
- **Domain:** `docsgrowth.com.br` (preferred) — DNS/registration managed by client
- **Environment:** No `.env` secrets needed for static site; all third-party IDs (Pixel, GA4 Measurement ID) stored as build-time constants or GTM variables

---

## Epic List

| # | Epic | Goal |
|---|---|---|
| 1 | Foundation & Infrastructure | Establish project scaffold, deployment pipeline, base design system (colors, typography, components), and analytics/tracking integrations |
| 2 | Landing Page — Top Sections (Hero → Solution) | Implement sections 1–3 (Hero, Problem, Solution) delivering the core narrative from attention-grab to feature showcase |
| 3 | Landing Page — Authority & Offer Sections (Authority → Pricing) | Implement sections 4–6 (Who We Are, How It Works, Pricing) completing the trust-building and conversion offer |
| 4 | Landing Page — Conversion Close & Compliance (Testimonials → Footer) | Implement sections 7–10 (Testimonials, FAQ, Final CTA, Footer), floating WhatsApp button, contact form, LGPD banner, and all remaining integrations |
| 5 | QA, Performance Optimization & Launch | Validate performance (Core Web Vitals ≥ 90 mobile), cross-browser/device QA, SEO audit, domain setup, and production launch |

---

## Epic 1 — Foundation & Infrastructure

**Goal:** Set up the project repository with chosen framework, configure CI/CD to Vercel/Netlify, establish the design system (CSS variables for brand colors, typography scale, reusable component tokens), integrate Google Tag Manager, Facebook Pixel, and GA4, and publish a "canary" deployment with a single placeholder page confirming the full pipeline works end-to-end.

### Story 1.1 — Project Scaffold & CI/CD Pipeline

As a developer,
I want a fully configured project repository with automated deployment,
so that every push to main triggers a build and publishes to the staging URL automatically.

**Acceptance Criteria:**
1. Repository initialized with chosen framework (Next.js static export, Astro, or plain HTML) and committed to `master` branch
2. Vercel (or Netlify) project connected to the repository with auto-deploy on push to `main`/`master`
3. A live staging URL is accessible (e.g., `docsgrowth.vercel.app`) serving the placeholder page
4. `README.md` documents local dev setup (`npm install` + `npm run dev`) and deployment process
5. `.gitignore` excludes `node_modules/`, build artifacts, and `.env` files

### Story 1.2 — Base Design System & Global Styles

As a developer,
I want a centralized design system with brand tokens,
so that all sections use consistent colors, typography, and spacing without duplication.

**Acceptance Criteria:**
1. CSS custom properties (or design tokens) defined for all brand colors: `--color-primary: #E87722`, `--color-bg: #1A1A2E`, `--color-white: #FFFFFF`, `--color-gold`, `--color-gray-dark`
2. Poppins font loaded (self-hosted or Google Fonts with `font-display: swap`) with typographic scale defined (h1–h4, body, caption)
3. Global reset/normalize CSS applied
4. Reusable component styles defined: `.btn-primary` (orange CTA), `.btn-secondary` (outline/ghost), `.card`, `.section-wrapper`, `.container` (max-width + padding)
5. Dark-mode background applied globally; all base text passes WCAG 2.1 AA contrast ratio (≥ 4.5:1)
6. Visual snapshot of design tokens documented (comment block or `design-system.md`)

### Story 1.3 — Analytics & Tracking Integration

As a marketing manager,
I want Facebook Pixel, GA4, and GTM integrated and firing correctly,
so that all visitor behavior and CTA interactions are tracked from day one.

**Acceptance Criteria:**
1. Google Tag Manager container installed in `<head>` and `<body>` of the page
2. GA4 Measurement ID configured as a GTM variable; `page_view` event fires on load (verified in GA4 DebugView)
3. Facebook Pixel fires `PageView` event on load (verified in Facebook Events Manager)
4. GTM trigger configured for `Lead` Pixel event on click of any element with class `.cta-demo` (to be applied to all demo booking buttons)
5. Cookie consent flag checked before firing analytics tags — tags fire only after user accepts cookies
6. No analytics scripts block page rendering (all loaded `async` or via GTM)

---

## Epic 2 — Landing Page: Top Sections (Hero → Solution)

**Goal:** Implement the first three sections of the landing page — Hero (attention), Problem (identification), and Solution (features) — delivering the full opening narrative that takes a visitor from first impression to understanding the platform's value in a single scroll.

### Story 2.1 — Hero Section

As a clinic manager visiting the site,
I want to see a compelling hero section immediately,
so that I understand what the product is and can take immediate action within 3 seconds.

**Acceptance Criteria:**
1. Hero section renders with headline: "Sua clínica de radiologia merece uma gestão inteligente. Conheça o CRM com IA feito exclusivamente para você."
2. Sub-headline rendered: "Atendimento omnichannel, pipeline de dentistas, agente de IA 24h e métricas em tempo real. Tudo numa só plataforma."
3. Primary CTA button ("Agendar Demonstração Gratuita") visible above the fold, styled with `#E87722`, class `.cta-demo` applied
4. Secondary CTA anchor link ("Ver Planos e Preços") scrolls smoothly to pricing section
5. Platform mockup image (notebook/mobile) rendered with `loading="lazy"` and descriptive `alt` text; uses WebP with JPEG fallback
6. Badges rendered: "Feito para Radiologia Odontológica" + "Powered by Docs Consultoria"
7. Social proof bar renders: "200+ clínicas" | "100% NPS" | "21 anos de experiência"
8. Section is fully responsive: CTA and headline remain legible on 375px mobile without horizontal scroll

### Story 2.2 — Problem Section

As a clinic manager reading the site,
I want to see my specific operational problems described accurately,
so that I feel understood and motivated to learn about the solution.

**Acceptance Criteria:**
1. Section title "Sua clínica sofre com isso?" rendered as an `h2`
2. Exactly 6 pain point cards rendered, each with: icon (SVG or icon font), short bold label, and 1-line descriptive question matching the approved copy
3. Cards display in responsive grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
4. Transition phrase rendered below cards: "Se você se identificou com pelo menos 2 dessas situações, o Docs Growth CRM foi feito pra você."
5. All icons have descriptive `aria-label` or `title` for accessibility

### Story 2.3 — Solution / Features Section

As a clinic manager reading the site,
I want to see all platform features presented clearly,
so that I understand what the product does before evaluating pricing.

**Acceptance Criteria:**
1. Section title "Tudo que sua clínica precisa numa só plataforma" rendered as an `h2`
2. Exactly 7 feature cards rendered, each with: icon, feature name (bold), and 2–3 line description matching approved copy for: Omnichannel, CRM, AI Agent, Flow Builder, Smart Scheduling, Mass Messaging, Social Media Suite
3. Feature cards display in responsive grid: 1 column (mobile), 2 columns (tablet), 3–4 columns (desktop)
4. "Agente Autônomo de IA" card visually highlighted or badged as a differentiator ("Diferencial exclusivo")
5. All icons have accessible labels

---

## Epic 3 — Landing Page: Authority & Offer Sections (Authority → Pricing)

**Goal:** Implement sections 4–6 (Who We Are, How It Works, Pricing), completing the trust-building sequence and presenting the subscription offer in full — giving visitors everything they need to commit to booking a demo.

### Story 3.1 — Authority / Who We Are Section

As a clinic manager evaluating the product,
I want to learn about the company behind Docs Growth CRM,
so that I trust the vendor has real expertise in my niche.

**Acceptance Criteria:**
1. Section title "Criado por quem entende de Radiologia Odontológica" rendered as `h2`
2. Stats rendered prominently: "+200 clínicas parceiras", "+21 anos de experiência", "100% NPS", "Mentoria 12 Pilares — turmas esgotadas"
3. Congress presence rendered: CONABRO + ABRO mentioned
4. Team photo cards rendered for Dr. Fabio Guimarães, Francisco Júnior, and Letícia Botti (image placeholders used if photos not yet delivered; `alt` text includes name and role)
5. "Só ensina quem faz!" seal rendered visually
6. Section is responsive; team photo cards stack vertically on mobile

### Story 3.2 — How It Works Section

As a clinic manager concerned about complexity,
I want to see a simplified onboarding journey,
so that I believe implementation is easy and fast.

**Acceptance Criteria:**
1. Section title "Em 3 passos, sua clínica opera no automático" rendered as `h2`
2. Three numbered steps rendered with icons, step number, bold title, and 2-line description: (1) Agende sua demonstração, (2) Implementação guiada, (3) Piloto automático
3. Visual connector (arrow, line, or numbered progression) between steps on desktop; stacked list on mobile
4. No CTA in this section (intentional — defer to Pricing section immediately below)

### Story 3.3 — Pricing Section

As a clinic manager ready to evaluate commitment,
I want to see all plans and prices clearly,
so that I can choose the right tier and book a demo.

**Acceptance Criteria:**
1. Section title "Escolha o plano ideal para sua clínica" rendered as `h2`
2. Three plan cards rendered: Essencial, Intermediário (badge "Mais Popular" — highlighted), Avançado (badge "Recomendado")
3. Each plan description renders: module name, sub-description, and full pricing table with correct values for all account tiers × billing periods (Mensal / Semestral / Anual)
4. Bonus messaging rendered per plan: "Semestral: Pague 5 meses, ganhe 1" and "Anual: Pague 10 meses, ganhe 2" with savings highlighted
5. Implementation fee table rendered separately below plans with correct values per account range (R$997 / R$1.497 / R$1.997)
6. Each plan card has a "Agendar Demonstração Gratuita" CTA button with class `.cta-demo`; Intermediário button uses `#E87722`; others use secondary style
7. All pricing values are accurate per approved scope document (verified against source)
8. Pricing section is fully responsive; tables scroll horizontally on mobile without breaking layout

---

## Epic 4 — Landing Page: Conversion Close & Compliance

**Goal:** Complete the landing page with sections 7–10 (Testimonials, FAQ, Final CTA, Footer), add the persistent floating WhatsApp button, contact form, LGPD cookie consent banner, and Privacy Policy / Terms of Use pages — making the site fully compliant and conversion-complete.

### Story 4.1 — Testimonials Section

As a clinic manager looking for social proof,
I want to read testimonials from real clinics,
so that I trust the product has delivered results for peers.

**Acceptance Criteria:**
1. Section title "O que dizem nossos parceiros" rendered as `h2`
2. Testimonial carousel renders minimum 3 testimonials, each with: deponent photo (or avatar placeholder), full name, clinic name, city, and quote text
3. Carousel has prev/next navigation controls and auto-advances (5-second interval, pauses on hover/touch)
4. Carousel is accessible: keyboard navigable, `aria-label` on controls
5. If CRM-specific testimonials not yet available, placeholder cards render with "[Depoimento a confirmar com cliente]" message visible only in staging, not production

### Story 4.2 — FAQ Section

As a clinic manager with objections,
I want to find answers to common questions in an FAQ,
so that my purchase resistance is reduced before I book a demo.

**Acceptance Criteria:**
1. Section title "Perguntas Frequentes" rendered as `h2`
2. Exactly 6 accordion items rendered with correct Q&A pairs per approved copy (radiology specificity, no tech knowledge needed, implementation time, cancellation policy, AI vs. team, pricing objection)
3. Accordion items expand/collapse on click; only one item open at a time (exclusive expand)
4. First item open by default on desktop; all closed by default on mobile
5. Accordion is keyboard navigable (`Enter`/`Space` to toggle); ARIA attributes (`aria-expanded`, `aria-controls`) applied

### Story 4.3 — Final CTA Section & Footer

As a visitor who has scrolled to the bottom,
I want a final compelling call-to-action and easy access to legal/contact info,
so that I either book a demo or find what I need before leaving.

**Acceptance Criteria:**
1. Final CTA section title "Pare de ser empresidiário. Comece a ser empresário." rendered in large type
2. Sub-title "Agende sua demonstração gratuita e veja sua clínica operar no automático." rendered
3. Large primary CTA button ("Quero Minha Demonstração Gratuita") with class `.cta-demo` rendered
4. Secondary WhatsApp text link rendered below primary button
5. Footer renders: Docs Growth CRM logo, Docs Consultoria logo, Privacy Policy link, Terms of Use link, phone, email, Instagram link (@docsconsultoria), "Powered by Docs Consultoria" badge
6. Privacy Policy and Terms of Use link to their respective standalone pages (stub pages with placeholder content accepted for MVP)
7. Footer is responsive; logos and links stack cleanly on mobile

### Story 4.4 — Floating WhatsApp Button, Contact Form & LGPD Banner

As a visitor on any section of the page,
I want persistent access to WhatsApp and a simple way to comply with privacy requirements,
so that I can contact the team at any moment and my data consent is respected.

**Acceptance Criteria:**
1. Floating WhatsApp button renders as fixed-position element (bottom-right corner) visible on all sections at all scroll depths; links to `wa.me` deep link with pre-filled message
2. WhatsApp button does not overlap primary CTAs on mobile; positioned to avoid content obstruction
3. Contact form renders (in footer area or as a dedicated sub-section) with fields: Name, Clinic Name, Email, Phone, Message; Submit button sends data via configured form service (Formspree or EmailJS)
4. Form validates required fields (Name, Email) client-side before submission; shows success/error message after submit
5. LGPD cookie consent banner renders on first visit at bottom of screen with: notice text, "Aceitar" and "Recusar" buttons
6. If user clicks "Aceitar," analytics cookies (Pixel, GA4) fire and banner dismisses; consent persisted in localStorage
7. If user clicks "Recusar," analytics tags do not fire; banner dismisses; consent persisted in localStorage
8. Banner does not appear on return visits (consent already stored)

---

## Epic 5 — QA, Performance Optimization & Launch

**Goal:** Validate that the complete site meets all performance, accessibility, and cross-browser requirements; conduct final content review with the client; configure the production domain; and execute launch — delivering a fully tested, live production website.

### Story 5.1 — Performance Optimization & Core Web Vitals

As a developer responsible for delivery quality,
I want the site to pass Core Web Vitals and achieve PageSpeed ≥ 90 (mobile),
so that the site ranks well on Google and loads fast for clinic managers on mobile networks.

**Acceptance Criteria:**
1. Google PageSpeed Insights score ≥ 90 on mobile for the production URL
2. LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile (Core Web Vitals all green)
3. All images served in WebP format with JPEG fallback; hero image preloaded with `<link rel="preload">`
4. All below-fold images use `loading="lazy"`
5. Third-party scripts (GTM, Pixel) confirmed to load `async` and not block render
6. Poppins font loaded with `font-display: swap`; font files are self-hosted or preconnected

### Story 5.2 — Cross-Browser & Device QA

As a QA engineer,
I want to verify the site renders correctly across all target browsers and devices,
so that no clinic manager encounters a broken experience.

**Acceptance Criteria:**
1. Site tested and visually verified on: Chrome (latest), Safari (latest), Firefox (latest), Edge (latest)
2. Site tested on iOS Safari (iPhone 12 or newer viewport) and Android Chrome
3. All 10 sections render without layout breaks at breakpoints: 375px, 768px, 1024px, 1440px
4. All pricing tables scroll horizontally on mobile without clipping
5. Floating WhatsApp button does not overlap any CTA or nav element across all breakpoints
6. Carousel, accordion, and smooth-scroll anchor navigation functional on all tested browsers
7. QA checklist completed and signed off — all critical bugs resolved before launch

### Story 5.3 — SEO Audit, Domain Setup & Production Launch

As a project owner,
I want the site live on the production domain with correct SEO configuration,
so that the site is findable on Google and the launch is clean.

**Acceptance Criteria:**
1. `<title>` tag set to "Docs Growth CRM — CRM com IA para Radiologia Odontológica"
2. `<meta name="description">` set with target keywords (CRM radiologia odontológica, gestão clínica radiologia, etc.)
3. Open Graph tags set: `og:title`, `og:description`, `og:image` (1200×630 branded image), `og:url`
4. `robots.txt` and `sitemap.xml` present and correct
5. All images have descriptive `alt` text; no broken image links
6. Production domain (`docsgrowth.com.br` or `growth.docsconsultoria.com`) DNS configured and pointing to hosting provider
7. HTTPS active with valid SSL certificate on production domain
8. Demo booking link (Calendly/Cal.com) live, tested end-to-end — booking flows correctly to Docs team calendar
9. Facebook Pixel Events Manager confirms `PageView` + `Lead` events firing on production
10. GA4 DebugView confirms events firing on production
11. Final content review completed and approved by Docs Consultoria before go-live

---

## Checklist Results Report

> *(To be completed after PRD is reviewed and approved — PM checklist will be run and results recorded here)*

---

## Next Steps

### UX Expert Prompt

> **@ux-design-expert** — Review `docs/prd.md` for the Docs Growth CRM landing page. Using the UI Design Goals section (dark mode, orange `#E87722` + `#1A1A2E` + white palette, Poppins typography, premium tech aesthetic), create a detailed front-end design specification covering: visual layout per section, component specifications (card styles, button variants, carousel, accordion, pricing table), responsive behavior rules, and a design token manifest. Reference sites: docsconsultoria.com and logycatecnologia.com.br.

### Architect Prompt

> **@architect** — Review `docs/prd.md` for the Docs Growth CRM website. Using the Technical Assumptions section (static/JAMstack, Next.js or Astro, Vercel hosting, no backend), produce a front-end architecture document covering: recommended framework decision with rationale, project folder structure, component architecture, integration patterns (GTM/Pixel/GA4, Formspree, Calendly embed, WhatsApp deep link), CI/CD pipeline configuration, and deployment strategy. Ensure all FR and NFR requirements are addressable by the proposed architecture.

---

*Docs Growth CRM — Feito por quem entende de Radiologia Odontológica.*
*PRD generated by Morgan (pm agent) from docs/brief.md | Kaizen360 Aceleradora | March 2026*
