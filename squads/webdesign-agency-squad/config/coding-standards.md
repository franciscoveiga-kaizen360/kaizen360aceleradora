# Coding Standards — webdesign-agency-squad

## Princípios Gerais
- **Performance first**: cada linha de código impacta a experiência
- **Acessibilidade por padrão**: HTML semântico, ARIA quando necessário
- **Mobile-first**: estilos base para mobile, adaptar para desktop
- **Design tokens**: nunca hardcodar valores de design (cores, espaçamentos, tipografia)
- **Componentização**: UI dividida em componentes reutilizáveis e isolados

## HTML
- Usar HTML semântico (`<main>`, `<nav>`, `<article>`, `<section>`, `<aside>`)
- Todo `<img>` precisa de `alt` descritivo (ou `alt=""` para imagens decorativas)
- Hierarquia de headings: nunca pular níveis (h1 → h2 → h3)
- Formulários com `<label>` associado a cada `<input>`

## CSS / Tailwind
- Utilizar design tokens via CSS custom properties (`--color-primary`, `--space-4`)
- Tailwind: preferir classes utilitárias; criar componentes para padrões repetidos
- Evitar `!important` — resolver via especificidade
- Animações com `prefers-reduced-motion` como fallback obrigatório

## TypeScript / JavaScript
- TypeScript estrito (`strict: true` no tsconfig)
- Sem `any` — tipar explicitamente
- Funções puras quando possível
- Async/await em vez de `.then()` encadeados
- Imports: absolutos com alias (`@/components/`) em vez de relativos profundos

## React / Next.js
- Server Components por padrão; `"use client"` apenas quando necessário
- Lazy loading de componentes pesados com `next/dynamic`
- Imagens via `next/image` para otimização automática
- Fontes via `next/font` para eliminação de layout shift (CLS zero)
- Dados: fetch no servidor sempre que possível (RSC)

## Performance
- Bundle size: monitorar com `@next/bundle-analyzer`
- Imagens: WebP/AVIF, tamanhos responsivos com `srcset`
- Code splitting: uma rota = um chunk; dynamic imports para features pesadas
- Memoização: `useMemo`/`useCallback` com critério — não prematuramente

## Animações
- GSAP: registrar plugins no `useEffect`, limpar com `cleanup`
- Framer Motion: definir `variants` fora do componente para evitar re-renders
- Verificar `prefers-reduced-motion` antes de iniciar animações
- Performance: animar apenas `transform` e `opacity` (não layout properties)

## 3D / WebGL
- Three.js: dispor de `geometry`, `material` e `renderer` no cleanup
- Limitar draw calls: usar instanced meshes para objetos repetidos
- LOD (Level of Detail) para modelos 3D complexos
- Fallback estático para dispositivos sem suporte a WebGL

## Git
- Commits: `feat:`, `fix:`, `perf:`, `a11y:`, `style:`, `refactor:`
- Branches: `feature/nome-da-feature`, `fix/descricao-do-bug`
- PRs: descrição clara com contexto, screenshots/video para mudanças visuais
- Nunca commitar `.env`, credenciais ou assets binários grandes
