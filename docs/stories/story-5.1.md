# Story 5.1 — Performance Optimization & Core Web Vitals

**Epic:** 5 — QA, Performance Optimization & Launch
**Status:** In Progress

## Story
As a developer responsible for delivery quality, I want the site to pass Core Web Vitals and achieve PageSpeed >= 90 (mobile), so that the site ranks well on Google and loads fast for clinic managers on mobile networks.

## Acceptance Criteria
1. [ ] Google PageSpeed Insights score >= 90 on mobile for production URL
2. [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile (Core Web Vitals all green)
3. [ ] All images served in WebP with JPEG fallback; hero image preloaded
4. [ ] All below-fold images use loading="lazy"
5. [ ] Third-party scripts (GTM, Pixel) confirmed async, not blocking render
6. [ ] Poppins font loaded with font-display: swap

## Dev Notes
- font-display: swap already configured via next/font (Story 1.1)
- GTM loads with strategy="afterInteractive" (Story 1.3)
- Images: next/image with unoptimized for static export handles WebP conversion
- Requires manual Lighthouse run on production URL after deploy

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6
