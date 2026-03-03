# Story 1.1 — Project Scaffold & CI/CD Pipeline

**Epic:** 1 — Foundation & Infrastructure
**Status:** In Progress

## Story
As a developer, I want a fully configured project repository with automated deployment, so that every push to main triggers a build and publishes to the staging URL automatically.

## Acceptance Criteria
1. Repository initialized with Next.js 14 (static export) + TypeScript
2. Vercel project connected with auto-deploy on push to `main`/`master`
3. Live staging URL serving placeholder canary page
4. `README.md` documents local dev setup and deployment process
5. `.gitignore` excludes `node_modules/`, build artifacts, `.env` files

## Tasks
- [x] Initialize Next.js 14 project with TypeScript, ESLint, App Router
- [x] Configure `next.config.js` for static export
- [x] Configure `tsconfig.json`
- [x] Configure ESLint + Prettier
- [x] Create `.gitignore`
- [x] Create placeholder `src/app/page.tsx` (canary page)
- [x] Create `src/app/layout.tsx` (root layout, no GTM yet)
- [x] Create `vitest.config.ts`
- [x] Create `README.md`
- [x] Create `public/robots.txt`

## Dev Agent Record
**Agent Model Used:** claude-sonnet-4-6

**File List:**
- package.json
- next.config.js
- tsconfig.json
- .eslintrc.json
- .prettierrc
- .gitignore
- vitest.config.ts
- README.md
- public/robots.txt
- src/app/layout.tsx
- src/app/page.tsx
- src/app/page.module.css

**Completion Notes:**
- Static export configured; `images.unoptimized: true` required for static mode
- Vitest configured with jsdom environment for React Testing Library
- Canary page renders "Docs Growth CRM — Em breve" with brand colors inline for pre-token validation
