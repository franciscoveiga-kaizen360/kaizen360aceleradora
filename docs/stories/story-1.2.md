# Story 1.2 — Base Design System & Global Styles

**Epic:** 1 — Foundation & Infrastructure
**Status:** Completed

## Story
As a developer, I want a centralized design system with brand tokens, so that all sections use consistent colors, typography, and spacing without duplication.

## Acceptance Criteria
1. [x] CSS custom properties for all brand colors defined in tokens.css
2. [x] Poppins font loaded via next/font with `font-display: swap`
3. [x] Global reset/normalize CSS applied in globals.css
4. [x] Reusable component styles defined: `.btn-primary`, `.container`, `.sr-only`
5. [x] Dark-mode background applied globally; all base text passes WCAG 2.1 AA
6. [x] Button atom with all variants (primary, secondary, whatsapp) + tests passing

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6

**File List:**
- src/styles/globals.css
- src/styles/tokens.css
- src/styles/animations.css
- src/components/atoms/Button/Button.tsx
- src/components/atoms/Button/Button.module.css
- src/components/atoms/Button/Button.test.tsx

**Completion Notes:**
- 50+ CSS custom properties covering colors, typography, spacing, radius, shadows, z-index, transitions
- Responsive token overrides at 3 breakpoints (767px, 768-1023px, 1024px+)
- `@keyframes` for all 5 animation types defined in animations.css
- `prefers-reduced-motion` respected globally
- Button variants: primary, secondary, whatsapp — all keyboard accessible
