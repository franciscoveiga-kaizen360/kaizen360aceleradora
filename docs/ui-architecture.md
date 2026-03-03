# Docs Growth CRM — Frontend Architecture Document

> **Project:** Docs Growth CRM — Institutional/Sales Landing Page
> **Agent:** Aria (Architect) — Kaizen360 Aceleradora
> **Date:** March 2026 | **Version:** 1.0
> **Source:** docs/prd.md + docs/front-end-spec.md + docs/brief.md

---

## Template and Framework Selection

**Selected Framework:** Next.js 14 (App Router + Static Export)

**Rationale:**
- Static export (`output: 'export'`) produces a pure static site deployable to Vercel, Netlify, or any CDN — matching the PRD's JAMstack requirement
- App Router enables file-based routing for the 3 required pages (landing, Privacy Policy, Terms of Use) with zero configuration
- Built-in `next/image` handles WebP conversion, lazy loading, and `<picture>` fallback automatically — directly addressing NFR1 (LCP < 2.5s)
- Built-in `next/font` self-hosts Poppins with `font-display: swap` — eliminating external DNS lookup penalty
- React component model maps 1:1 to the Atomic Design component library defined in `docs/front-end-spec.md`
- First-class Vercel integration: zero-config CI/CD on push to `main`
- TypeScript support out of the box

**No starter template used.** Greenfield project initialized with `npx create-next-app@latest` with TypeScript, ESLint, and App Router options selected.

**Initialization command:**
```bash
npx create-next-app@latest docs-growth-crm \
  --typescript \
  --eslint \
  --app \
  --no-tailwind \
  --src-dir \
  --no-import-alias
```

### Change Log

| Date | Version | Description | Author |
|---|---|---|---|
| March 2026 | 1.0 | Initial Frontend Architecture — YOLO mode from PRD + UI Spec | Aria / Kaizen360 |

---

## Frontend Tech Stack

### Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
|---|---|---|---|---|
| Framework | Next.js | 14.x | React framework with static export, routing, image/font optimization | Vercel-native, SSG, built-in optimizations for NFRs |
| Language | TypeScript | 5.x | Static typing across all components, data, and utilities | Prevents runtime errors; required for AI agent execution quality |
| Styling | CSS Modules + CSS Custom Properties | Native | Scoped component styles + global design token system | Zero runtime overhead; no CSS-in-JS; full control over design tokens from `front-end-spec.md` |
| Animation | Framer Motion | 11.x | Scroll-triggered animations, micro-interactions, accordion transitions | React-native; respects `prefers-reduced-motion`; GPU-composited transforms only |
| Icons | Phosphor Icons (`@phosphor-icons/react`) | 2.x | SVG icon components for feature cards, pain cards, step items | Tree-shakeable; consistent 1.5px stroke weight; MIT license |
| Font | next/font/google (Poppins) | Next.js built-in | Self-hosted Poppins with `font-display: swap` | Eliminates Google Fonts DNS lookup; CLS prevention |
| Images | next/image | Next.js built-in | WebP conversion, lazy loading, `<picture>` with JPEG fallback, srcset | Directly addresses LCP < 2.5s (NFR1) |
| Form Handling | Formspree (API) | Latest | Contact form email delivery without backend | No server required; free tier sufficient for MVP |
| Analytics | Google Tag Manager + GA4 | Latest | Centralized tracking for all events; FB Pixel via GTM | Single GTM snippet manages all tags; cookie-gated |
| Testing | Vitest + React Testing Library | Latest | Unit and integration tests for components | Fast, Vite-based; works with Next.js without extra config |
| Linting | ESLint + eslint-config-next | Latest | Code quality; Next.js-specific rules | Pre-installed by create-next-app |
| Formatting | Prettier | 3.x | Consistent code formatting | Integrated with ESLint via eslint-config-prettier |
| Git Hooks | Husky + lint-staged | Latest | Pre-commit: lint + format check | Prevents broken code from reaching CI |
| Deployment | Vercel | — | Zero-config CI/CD; global CDN; HTTPS automatic | Same team as Next.js; optimal integration |

---

## Project Structure

```plaintext
docs-growth-crm/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── platform-mockup.webp        # Hero section platform image
│   │   │   └── platform-mockup.jpg         # Fallback (handled by next/image)
│   │   ├── team/
│   │   │   ├── dr-fabio-guimaraes.webp
│   │   │   ├── francisco-junior.webp
│   │   │   └── leticia-botti.webp
│   │   ├── logos/
│   │   │   ├── docs-growth-crm.svg
│   │   │   └── docs-consultoria.svg
│   │   └── testimonials/
│   │       ├── clinic-01.webp              # Testimonial deponent photos
│   │       └── clinic-02.webp
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                      # Root layout: meta, GTM, fonts, global CSS
│   │   ├── page.tsx                        # Main landing page — composes all 10 sections
│   │   ├── politica-privacidade/
│   │   │   └── page.tsx                    # Privacy Policy standalone page
│   │   └── termos-de-uso/
│   │       └── page.tsx                    # Terms of Use standalone page
│   │
│   ├── components/
│   │   ├── atoms/                          # Base building blocks
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── Button.test.tsx
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.tsx
│   │   │   │   └── Badge.module.css
│   │   │   └── SocialProofItem/
│   │   │       ├── SocialProofItem.tsx
│   │   │       └── SocialProofItem.module.css
│   │   │
│   │   ├── molecules/                      # Composed from atoms
│   │   │   ├── PainPointCard/
│   │   │   │   ├── PainPointCard.tsx
│   │   │   │   └── PainPointCard.module.css
│   │   │   ├── FeatureCard/
│   │   │   │   ├── FeatureCard.tsx
│   │   │   │   └── FeatureCard.module.css
│   │   │   ├── PricingPlanCard/
│   │   │   │   ├── PricingPlanCard.tsx
│   │   │   │   └── PricingPlanCard.module.css
│   │   │   ├── TestimonialCard/
│   │   │   │   ├── TestimonialCard.tsx
│   │   │   │   └── TestimonialCard.module.css
│   │   │   ├── FaqAccordionItem/
│   │   │   │   ├── FaqAccordionItem.tsx
│   │   │   │   └── FaqAccordionItem.module.css
│   │   │   ├── StepItem/
│   │   │   │   ├── StepItem.tsx
│   │   │   │   └── StepItem.module.css
│   │   │   └── TeamMemberCard/
│   │   │       ├── TeamMemberCard.tsx
│   │   │       └── TeamMemberCard.module.css
│   │   │
│   │   ├── organisms/                      # Full page sections
│   │   │   ├── HeroSection/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── HeroSection.module.css
│   │   │   ├── ProblemSection/
│   │   │   ├── SolutionSection/
│   │   │   ├── AuthoritySection/
│   │   │   ├── HowItWorksSection/
│   │   │   ├── PricingSection/
│   │   │   ├── TestimonialsSection/
│   │   │   ├── FaqSection/
│   │   │   ├── FinalCtaSection/
│   │   │   ├── Footer/
│   │   │   ├── WhatsAppButton/             # Floating persistent button
│   │   │   ├── CookieBanner/              # LGPD consent banner
│   │   │   └── Navbar/                    # Optional sticky nav
│   │   │
│   │   └── templates/
│   │       ├── LandingPageTemplate/        # Assembles all 10 organisms in order
│   │       │   └── LandingPageTemplate.tsx
│   │       └── LegalPageTemplate/          # Layout for Privacy/Terms pages
│   │           └── LegalPageTemplate.tsx
│   │
│   ├── styles/
│   │   ├── globals.css                     # Reset, font-face (if self-hosted), body defaults
│   │   ├── tokens.css                      # All CSS custom properties (:root design tokens)
│   │   └── animations.css                  # @keyframes definitions (fadeUp, slideIn, pulse)
│   │
│   ├── data/                               # Static data — typed content arrays
│   │   ├── pricing.ts                      # Pricing tables (Essencial, Intermediário, Avançado)
│   │   ├── features.ts                     # 7 feature cards content
│   │   ├── painPoints.ts                   # 6 pain point cards content
│   │   ├── testimonials.ts                 # Testimonials array
│   │   ├── faq.ts                          # FAQ Q&A pairs
│   │   └── howItWorks.ts                   # 3-step content
│   │
│   ├── lib/
│   │   ├── analytics.ts                    # trackEvent(), trackLead() helpers
│   │   ├── consent.ts                      # Cookie consent: get/set localStorage
│   │   └── constants.ts                    # BOOKING_URL, WA_LINK, FORMSPREE_ID
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.ts           # IntersectionObserver for fade-up on enter
│   │   ├── useAccordion.ts                 # Accordion open/close state
│   │   └── useConsent.ts                   # Read/write cookie consent state
│   │
│   └── types/
│       ├── pricing.ts                      # PricingPlan, AccountTier types
│       ├── testimonial.ts                  # Testimonial type
│       └── common.ts                       # Shared types (Icon, CTAVariant, etc.)
│
├── next.config.js                          # output: 'export', images unoptimized for static
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
├── .husky/
│   └── pre-commit                          # lint-staged hook
├── vitest.config.ts
└── package.json
```

---

## Component Standards

### Component Template

Every component follows this pattern — CSS Modules for styles, TypeScript interface for props, named export:

```typescript
// src/components/atoms/Button/Button.tsx
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'whatsapp'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
  href?: string           // renders <a> if provided
  onClick?: () => void
  fullWidth?: boolean
  className?: string
  'aria-label'?: string
}

export function Button({
  variant = 'primary',
  children,
  href,
  onClick,
  fullWidth = false,
  className,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ].join(' ')

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
```

```typescript
// src/components/organisms/HeroSection/HeroSection.tsx
import Image from 'next/image'
import { Button } from '@/components/atoms/Button/Button'
import { SocialProofItem } from '@/components/atoms/SocialProofItem/SocialProofItem'
import { BOOKING_URL } from '@/lib/constants'
import { trackLead } from '@/lib/analytics'
import styles from './HeroSection.module.css'

const SOCIAL_PROOF = [
  { stat: '+200', label: 'clínicas parceiras' },
  { stat: '100%', label: 'NPS' },
  { stat: '21 anos', label: 'de experiência' },
]

export function HeroSection() {
  return (
    <section id="hero" className={styles.section} aria-labelledby="hero-headline">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badges}>
            <span className={styles.badge}>Feito para Radiologia Odontológica</span>
            <span className={styles.badge}>Powered by Docs Consultoria</span>
          </div>

          <h1 id="hero-headline" className={styles.headline}>
            Sua clínica de radiologia merece uma gestão inteligente. Conheça o CRM com IA feito
            exclusivamente para você.
          </h1>

          <p className={styles.subheadline}>
            Atendimento omnichannel, pipeline de dentistas, agente de IA 24h e métricas em tempo
            real. Tudo numa só plataforma.
          </p>

          <div className={styles.ctas}>
            <Button
              href={BOOKING_URL}
              variant="primary"
              fullWidth
              onClick={trackLead}
              aria-label="Agendar demonstração gratuita do Docs Growth CRM"
              className="cta-demo"
            >
              Agendar Demonstração Gratuita
            </Button>
            <Button
              href="#pricing"
              variant="secondary"
              aria-label="Ver planos e preços"
            >
              Ver Planos e Preços
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/hero/platform-mockup.webp"
            alt="Interface do Docs Growth CRM mostrando dashboard de atendimento e pipeline de dentistas"
            width={640}
            height={480}
            priority
            className={styles.mockup}
          />
        </div>
      </div>

      <div className={styles.socialProof} aria-label="Prova social">
        {SOCIAL_PROOF.map((item) => (
          <SocialProofItem key={item.label} stat={item.stat} label={item.label} />
        ))}
      </div>
    </section>
  )
}
```

### Naming Conventions

| Element | Convention | Example |
|---|---|---|
| Component files | PascalCase | `HeroSection.tsx`, `PricingPlanCard.tsx` |
| CSS Module files | Match component name | `HeroSection.module.css` |
| Component exports | Named export (no default) | `export function HeroSection()` |
| Props interfaces | `{ComponentName}Props` | `ButtonProps`, `FeatureCardProps` |
| Data files | camelCase | `pricing.ts`, `painPoints.ts` |
| Data arrays | camelCase plural | `const features: Feature[]` |
| Hook files | camelCase with `use` prefix | `useScrollAnimation.ts` |
| CSS class names | camelCase (CSS Modules) | `styles.sectionTitle`, `styles.ctaWrapper` |
| Type files | camelCase singular | `testimonial.ts`, `pricing.ts` |
| Constants | SCREAMING_SNAKE_CASE | `BOOKING_URL`, `WA_LINK` |
| Page files | Next.js convention | `page.tsx` (lowercase, App Router) |
| Section IDs (anchors) | kebab-case | `id="hero"`, `id="pricing"`, `id="faq"` |

---

## State Management

This is a static landing page with **minimal state requirements**. No global state manager (Redux/Zustand) is needed. All state is local React state via `useState` and custom hooks.

### Store Structure

```plaintext
State is co-located with components — no centralized store.

Local state by component:
├── CookieBanner           → useConsent() hook (localStorage + useState)
├── FaqSection             → useAccordion() hook (openIndex: number | null)
├── TestimonialsSection    → useState(currentIndex: number) + auto-advance timer
├── Navbar (optional)      → useState(isMenuOpen: boolean) [mobile only]
└── ContactForm            → useState(formState: 'idle' | 'loading' | 'success' | 'error')

Shared state via React Context (if needed):
└── ConsentContext         → Provides consent status to analytics lib
                             Avoids prop drilling from CookieBanner → analytics.ts
```

### State Management Template

```typescript
// src/hooks/useConsent.ts
import { useState, useEffect } from 'react'

type ConsentStatus = 'pending' | 'accepted' | 'rejected'

const CONSENT_KEY = 'docs_growth_consent'

export function useConsent() {
  const [consent, setConsent] = useState<ConsentStatus>('pending')

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentStatus | null
    if (stored) setConsent(stored)
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
    // Enable analytics after acceptance
    window.dataLayer?.push({ event: 'consent_accepted' })
  }

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setConsent('rejected')
  }

  return { consent, accept, reject, isPending: consent === 'pending' }
}
```

```typescript
// src/hooks/useAccordion.ts
import { useState } from 'react'

export function useAccordion(defaultOpen: number | null = null) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const isOpen = (index: number) => openIndex === index

  return { toggle, isOpen }
}
```

```typescript
// src/hooks/useScrollAnimation.ts
import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  once?: boolean
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.15, once = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, isVisible }
}
```

---

## API Integration

This is a static site. The only external API call is the **contact form submission** to Formspree. All other integrations (GTM, Pixel, Calendly) work via script tags or URL links — no API client needed.

### Service Template

```typescript
// src/lib/analytics.ts
// All analytics are fire-and-forget — no return value needed

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    fbq?: (action: string, event: string, params?: object) => void
  }
}

export function trackLead(): void {
  // GTM dataLayer push — GTM fires FB Lead pixel via trigger
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'demo_booking_click' })
}

export function trackScroll(milestone: 25 | 50 | 75 | 90): void {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'scroll_depth', scroll_percent: milestone })
}
```

```typescript
// src/lib/formService.ts
const FORMSPREE_URL = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`

interface ContactFormData {
  name: string
  clinicName: string
  email: string
  phone: string
  message: string
}

type FormResult = { success: true } | { success: false; error: string }

export async function submitContactForm(data: ContactFormData): Promise<FormResult> {
  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Erro ao enviar. Tente novamente ou use o WhatsApp.' }
  }
}
```

### API Client Configuration

No HTTP client library (axios, ky) needed — native `fetch` is sufficient for the single API call. GTM handles all analytics without direct API calls.

```typescript
// src/lib/constants.ts
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://calendly.com/docs-growth-crm'

export const WA_LINK =
  `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` +
  `?text=${encodeURIComponent('Olá! Quero saber mais sobre o Docs Growth CRM.')}`

export const INSTAGRAM_URL = 'https://instagram.com/docsconsultoria'
```

---

## Routing

Next.js App Router handles all routing via the file system. Static export generates HTML for each route.

### Route Configuration

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import '@/styles/tokens.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Docs Growth CRM — CRM com IA para Radiologia Odontológica',
  description:
    'Atendimento omnichannel, pipeline de dentistas indicadores, agente de IA 24h e métricas em tempo real. CRM desenvolvido exclusivamente para clínicas de radiologia odontológica.',
  keywords: [
    'CRM radiologia odontológica',
    'gestão clínica radiologia',
    'software clínica odontológica',
    'CRM odontologia',
    'atendimento automático clínica',
    'IA para clínica odontológica',
    'agendamento inteligente radiologia',
  ],
  openGraph: {
    title: 'Docs Growth CRM — CRM com IA para Radiologia Odontológica',
    description: 'Atendimento omnichannel, pipeline de dentistas, IA 24h e métricas em tempo real.',
    url: 'https://docsgrowth.com.br',
    siteName: 'Docs Growth CRM',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        {/* GTM — loaded async, does not block render */}
        {GTM_ID && (
          <Script id="gtm-head" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body>
        {/* GTM noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
```

```typescript
// src/app/page.tsx — Main landing page
import { LandingPageTemplate } from '@/components/templates/LandingPageTemplate/LandingPageTemplate'

export default function HomePage() {
  return <LandingPageTemplate />
}
```

```typescript
// src/components/templates/LandingPageTemplate/LandingPageTemplate.tsx
// Assembles all 10 sections in correct order
import { HeroSection } from '@/components/organisms/HeroSection/HeroSection'
import { ProblemSection } from '@/components/organisms/ProblemSection/ProblemSection'
import { SolutionSection } from '@/components/organisms/SolutionSection/SolutionSection'
import { AuthoritySection } from '@/components/organisms/AuthoritySection/AuthoritySection'
import { HowItWorksSection } from '@/components/organisms/HowItWorksSection/HowItWorksSection'
import { PricingSection } from '@/components/organisms/PricingSection/PricingSection'
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection/TestimonialsSection'
import { FaqSection } from '@/components/organisms/FaqSection/FaqSection'
import { FinalCtaSection } from '@/components/organisms/FinalCtaSection/FinalCtaSection'
import { Footer } from '@/components/organisms/Footer/Footer'
import { WhatsAppButton } from '@/components/organisms/WhatsAppButton/WhatsAppButton'
import { CookieBanner } from '@/components/organisms/CookieBanner/CookieBanner'

export function LandingPageTemplate() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AuthoritySection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
      {/* Persistent floating elements */}
      <WhatsAppButton />
      <CookieBanner />
    </main>
  )
}
```

**Anchor navigation:** All section elements have `id` attributes matching the navigation targets:
`#hero` | `#problem` | `#solution` | `#authority` | `#how-it-works` | `#pricing` | `#testimonials` | `#faq` | `#cta`

Smooth scroll enabled globally via CSS: `html { scroll-behavior: smooth; }`

---

## Styling Guidelines

### Styling Approach

**CSS Modules + CSS Custom Properties** — the styling architecture for this project:

- **CSS Modules:** Each component has a co-located `.module.css` file. Class names are locally scoped — no global namespace collisions. Imported as `import styles from './Component.module.css'` and applied as `className={styles.element}`.
- **CSS Custom Properties (Design Tokens):** All brand values (colors, spacing, typography) are defined in `src/styles/tokens.css` as `:root` custom properties. CSS Modules reference them as `var(--token-name)`. This creates a single source of truth for the design system.
- **No Tailwind, no CSS-in-JS:** Eliminates runtime style injection overhead. Tailwind would require a custom theme matching the design system — more config than value for a bespoke dark-mode brand.

**Global CSS load order in `layout.tsx`:**
1. `globals.css` — Reset, body defaults, `scroll-behavior`
2. `tokens.css` — All design tokens as `:root` custom properties
3. Component CSS Modules — Loaded automatically by Next.js per component

### Global Theme Variables

```css
/* src/styles/tokens.css */

:root {
  /* ─── Colors ─────────────────────────────── */
  --color-primary:        #E87722;  /* Orange — CTAs, highlights */
  --color-bg:             #1A1A2E;  /* Dark navy — page background */
  --color-surface:        #242440;  /* Card backgrounds */
  --color-surface-alt:    #2E2E50;  /* Hover states, input backgrounds */
  --color-white:          #FFFFFF;  /* Primary text on dark */
  --color-gold:           #C9A84C;  /* Premium accents, Recomendado badge */
  --color-muted:          #9CA3AF;  /* Secondary text, descriptions */
  --color-border:         #3D3D60;  /* Card borders, dividers */
  --color-success:        #22C55E;  /* Form success */
  --color-warning:        #F59E0B;  /* Cookie banner notice */
  --color-error:          #EF4444;  /* Form errors */
  --color-whatsapp:       #25D366;  /* WhatsApp button */

  /* ─── Typography ──────────────────────────── */
  --font-family:          'Poppins', system-ui, sans-serif;

  --font-size-h1:         3.5rem;   /* 56px desktop */
  --font-size-h2:         2.5rem;   /* 40px desktop */
  --font-size-h3:         1.75rem;  /* 28px desktop */
  --font-size-h4:         1.25rem;  /* 20px desktop */
  --font-size-body-lg:    1.125rem; /* 18px */
  --font-size-body:       1rem;     /* 16px */
  --font-size-small:      0.875rem; /* 14px */
  --font-size-caption:    0.75rem;  /* 12px */

  --font-weight-regular:  400;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;

  --line-height-tight:    1.1;
  --line-height-heading:  1.2;
  --line-height-body:     1.6;

  /* ─── Spacing ─────────────────────────────── */
  --space-1:   0.25rem;  /* 4px */
  --space-2:   0.5rem;   /* 8px */
  --space-3:   0.75rem;  /* 12px */
  --space-4:   1rem;     /* 16px */
  --space-6:   1.5rem;   /* 24px */
  --space-8:   2rem;     /* 32px */
  --space-12:  3rem;     /* 48px */
  --space-16:  4rem;     /* 64px */
  --space-24:  6rem;     /* 96px */
  --space-32:  8rem;     /* 128px */

  /* ─── Layout ──────────────────────────────── */
  --max-width:            80rem;    /* 1280px */
  --section-padding-x:    var(--space-4);
  --section-padding-y:    var(--space-12);

  /* ─── Border Radius ───────────────────────── */
  --radius-sm:   0.25rem;  /* 4px */
  --radius-md:   0.5rem;   /* 8px */
  --radius-lg:   1rem;     /* 16px */
  --radius-xl:   1.5rem;   /* 24px */
  --radius-full: 9999px;   /* Pills, circles */

  /* ─── Shadows ─────────────────────────────── */
  --shadow-card:   0 2px 16px rgba(0, 0, 0, 0.3);
  --shadow-hover:  0 8px 32px rgba(232, 119, 34, 0.2);
  --shadow-float:  0 4px 24px rgba(0, 0, 0, 0.4);

  /* ─── Transitions ─────────────────────────── */
  --transition-fast:   150ms ease-out;
  --transition-base:   200ms ease-in-out;
  --transition-slow:   300ms ease-in-out;
  --transition-xslow:  500ms ease-out;

  /* ─── Z-index scale ───────────────────────── */
  --z-base:       1;
  --z-dropdown:   100;
  --z-sticky:     200;
  --z-float:      999;    /* WhatsApp button */
  --z-overlay:    1000;   /* Cookie banner */
  --z-modal:      2000;
}

/* ─── Responsive font sizes ─────────────────── */
@media (max-width: 767px) {
  :root {
    --font-size-h1:      2.25rem;  /* 36px mobile */
    --font-size-h2:      1.75rem;  /* 28px mobile */
    --font-size-h3:      1.375rem; /* 22px mobile */
    --font-size-body-lg: 1rem;     /* 16px mobile */
    --section-padding-x: var(--space-4);
    --section-padding-y: var(--space-8);
  }
}

@media (min-width: 1024px) {
  :root {
    --section-padding-x: var(--space-16);
  }
}
```

---

## Testing Requirements

### Component Test Template

```typescript
// src/components/atoms/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Agendar Demonstração</Button>)
    expect(screen.getByRole('button', { name: /Agendar Demonstração/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders as anchor tag when href is provided', () => {
    render(<Button href="https://calendly.com">Agendar</Button>)
    const link = screen.getByRole('link', { name: /Agendar/i })
    expect(link).toHaveAttribute('href', 'https://calendly.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies primary variant class by default', () => {
    render(<Button>Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('primary')
  })

  it('applies fullWidth class when prop is set', () => {
    render(<Button fullWidth>Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('fullWidth')
  })

  it('is keyboard accessible', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Test</Button>)
    const button = screen.getByRole('button')
    button.focus()
    expect(button).toHaveFocus()
  })
})
```

### Testing Best Practices

1. **Unit Tests:** Test individual atoms and molecules in isolation — mock external dependencies (constants, analytics lib)
2. **Integration Tests:** Test organism sections with their data — e.g., `PricingSection` renders all 3 plan cards with correct prices
3. **Accessibility Tests:** Use `@testing-library/jest-dom` assertions (`toHaveRole`, `toHaveAttribute('aria-expanded')`) for ARIA compliance
4. **No E2E for MVP:** Playwright/Cypress E2E deferred to post-launch. Manual QA covers critical flows (see Epic 5, Story 5.2)
5. **Coverage goal:** 70% line coverage on atoms and molecules. Organisms tested for key render assertions only.
6. **Test structure:** Arrange-Act-Assert. Group by component behavior, not implementation detail.
7. **Mock external dependencies:** `vi.mock('@/lib/constants')` for URLs; `vi.mock('@/lib/analytics')` for tracking functions

---

## Environment Configuration

```bash
# .env.local (development) — never committed to git
# .env.production (set in Vercel dashboard)

# Google Tag Manager Container ID (e.g., GTM-XXXXXXX)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Facebook Pixel ID
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXXXX

# Formspree Form ID (from formspree.io dashboard)
NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxxxxx

# Demo booking URL (Calendly or Cal.com)
NEXT_PUBLIC_BOOKING_URL=https://calendly.com/docs-growth-crm/demo

# WhatsApp number in international format (no + or spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

**Next.js static export note:** All env vars used at runtime must be prefixed `NEXT_PUBLIC_`. They are inlined at build time. Never put secrets (API keys with write access) in `NEXT_PUBLIC_` vars — only public IDs.

**`next.config.js` for static export:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Static HTML export
  images: {
    unoptimized: true,       // Required for static export (no Next.js image server)
  },
  trailingSlash: true,       // Generates /politica-privacidade/index.html
}

module.exports = nextConfig
```

---

## Frontend Developer Standards

### Critical Coding Rules

**Universal Rules:**
1. **Never use `default export` for components** — use named exports only. Enables better tree-shaking and refactoring.
2. **Never use inline styles** — all styles go in CSS Module files. No `style={{ color: 'red' }}`.
3. **Never hardcode brand values** — always use CSS tokens (`var(--color-primary)`), never `#E87722` in CSS files.
4. **Never hardcode URLs or phone numbers** — import from `@/lib/constants`. URLs may change before launch.
5. **Always specify `alt` text on `<Image>`** — descriptive, not empty (unless purely decorative image with `alt=""`).
6. **Always add `aria-label` to icon-only buttons** — the WhatsApp float button, carousel controls, accordion chevrons.
7. **Respect `prefers-reduced-motion`** — `useScrollAnimation` handles this; do not add CSS animations without checking this hook.

**Next.js Specific:**
8. **Use `next/image` for all images** — never bare `<img>` tags. Handles WebP, lazy loading, and prevents CLS.
9. **Use `next/font` for Poppins** — never a bare `<link>` to Google Fonts in the HTML. Prevents layout shift.
10. **Use `next/link` for internal navigation** — `/politica-privacidade` link in footer must use `<Link>`, not `<a>`.
11. **Never add `'use client'` to page files** — only add to leaf components that require browser APIs (`useState`, `useEffect`, event handlers). Keep pages as Server Components.
12. **No `useEffect` for data fetching** — all data is static (imported from `src/data/`). Never fetch in components.

**Performance Rules:**
13. **Add `priority` prop to hero image only** — `<Image priority>` preloads the image. Only the LCP element (hero mockup) should have this.
14. **Add `loading="lazy"` to all below-fold images** — `next/image` does this by default when `priority` is absent.
15. **Wrap animation components in `motion.div` only** — don't apply Framer Motion to every element. Use `useScrollAnimation` hook for scroll-triggered enter animations on section wrappers.

### Quick Reference

**Common Commands:**

```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build static export to /out directory
npm run start        # Preview the built output locally
npm run lint         # Run ESLint
npm run test         # Run Vitest in watch mode
npm run test:run     # Run Vitest once (CI mode)
npm run type-check   # Run tsc --noEmit
```

**Key Import Patterns:**

```typescript
// Components (always named export)
import { Button } from '@/components/atoms/Button/Button'
import { HeroSection } from '@/components/organisms/HeroSection/HeroSection'

// CSS Modules
import styles from './MyComponent.module.css'

// Design data
import { features } from '@/data/features'
import { pricingPlans } from '@/data/pricing'

// Constants and utilities
import { BOOKING_URL, WA_LINK } from '@/lib/constants'
import { trackLead } from '@/lib/analytics'

// Hooks
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useAccordion } from '@/hooks/useAccordion'

// Next.js built-ins
import Image from 'next/image'
import Link from 'next/link'
```

**Section ID Reference (anchor targets):**

| Section | HTML ID | Anchor Link |
|---|---|---|
| Hero | `id="hero"` | `href="#hero"` |
| Problem | `id="problem"` | `href="#problem"` |
| Solution | `id="solution"` | `href="#solution"` |
| Authority | `id="authority"` | `href="#authority"` |
| How It Works | `id="how-it-works"` | `href="#how-it-works"` |
| Pricing | `id="pricing"` | `href="#pricing"` |
| Testimonials | `id="testimonials"` | `href="#testimonials"` |
| FAQ | `id="faq"` | `href="#faq"` |
| Final CTA | `id="cta"` | `href="#cta"` |

**Pricing Data Structure:**

```typescript
// src/data/pricing.ts
export interface AccountTier {
  accounts: number | string  // e.g. 1, 2, 3, 5, 7 or '1 conta'
  monthly: string            // e.g. 'R$ 297/mês'
  semiannual: string         // e.g. 'R$ 1.485'
  annual: string             // e.g. 'R$ 2.970'
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  variant: 'standard' | 'featured' | 'recommended'
  badge?: string
  tiers: AccountTier[]
}

export interface ImplementationFee {
  range: string
  price: string
}
```

---

*Docs Growth CRM — Feito por quem entende de Radiologia Odontológica.*
*Frontend Architecture Document generated by Aria (architect) | Kaizen360 Aceleradora | March 2026*
