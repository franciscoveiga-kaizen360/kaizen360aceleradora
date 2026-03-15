# Source Tree — webdesign-agency-squad

## Estrutura de Projeto (Next.js)

```
projeto-cliente/
├── public/
│   ├── fonts/                  # Fontes locais (se não usar next/font)
│   ├── images/                 # Imagens estáticas (fallbacks, OG images)
│   └── icons/                  # Ícones SVG estáticos
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (marketing)/        # Route group — páginas públicas
│   │   │   ├── page.tsx        # Home
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   └── contact/
│   │   ├── (auth)/             # Route group — autenticação
│   │   ├── api/                # API Routes
│   │   ├── globals.css         # Estilos globais + design tokens
│   │   └── layout.tsx          # Root layout
│   │
│   ├── components/
│   │   ├── ui/                 # Componentes base (Button, Input, Card...)
│   │   ├── layout/             # Header, Footer, Navigation, Section
│   │   ├── sections/           # Seções de página (Hero, Features, CTA...)
│   │   ├── animations/         # Componentes de animação (GSAP, Framer)
│   │   └── 3d/                 # Componentes Three.js / Spline
│   │
│   ├── lib/
│   │   ├── utils.ts            # Funções utilitárias
│   │   ├── cn.ts               # clsx + tailwind-merge helper
│   │   └── constants.ts        # Constantes globais
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useMediaQuery.ts
│   │   └── useReducedMotion.ts
│   │
│   ├── styles/
│   │   ├── tokens.css          # Design tokens (CSS custom properties)
│   │   ├── typography.css      # Sistema tipográfico
│   │   └── animations.css      # Keyframes globais
│   │
│   ├── types/                  # TypeScript types e interfaces
│   ├── data/                   # Dados estáticos / mock data
│   └── content/                # MDX content (blog, docs)
│
├── design-system/
│   ├── tokens/                 # Design tokens (JSON / Style Dictionary)
│   ├── figma-tokens.json       # Tokens exportados do Figma
│   └── theme.ts                # Tema TypeScript para Tailwind
│
├── .env.local                  # Variáveis de ambiente locais
├── .env.example                # Template de variáveis (commitar)
├── next.config.ts              # Configuração Next.js
├── tailwind.config.ts          # Configuração Tailwind CSS
├── tsconfig.json               # Configuração TypeScript
└── package.json
```

## Convenções de Nomenclatura

- **Componentes**: PascalCase (`HeroSection.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useScrollProgress.ts`)
- **Utilitários**: camelCase (`formatDate.ts`)
- **Tipos**: PascalCase com sufixo `Type` ou `Props` (`ButtonProps`)
- **Constantes**: SCREAMING_SNAKE_CASE (`MAX_FILE_SIZE`)
- **CSS classes**: kebab-case (`hero-section`, `btn-primary`)
- **Arquivos de página**: `page.tsx` (Next.js App Router)

## Organização de Assets

- **Imagens rasterizadas**: `WebP` (principal) + `AVIF` (moderno) + `JPG` (fallback)
- **Ícones**: SVG inline ou via sprite sheet
- **Vídeos**: MP4 (H.264) + WebM (VP9/AV1) com poster image
- **Fontes**: WOFF2 (principal) + WOFF (fallback)
- **Modelos 3D**: GLTF/GLB comprimido com Draco
