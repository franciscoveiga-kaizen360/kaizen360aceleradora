---
task: Setup Project
responsavel: "@frontend-developer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - tech_stack: Stack técnica definida (Next.js, TypeScript, Tailwind)
  - design_system: Design system em Figma
  - project_requirements: Requisitos técnicos do projeto
Saida: |
  - project_scaffold: Projeto configurado e rodando
  - ci_config: GitHub Actions configurado
  - coding_standards_doc: Padrões de código documentados
Checklist:
  - "[ ] Criar projeto Next.js com TypeScript"
  - "[ ] Configurar Tailwind CSS com design tokens"
  - "[ ] Configurar ESLint + Prettier"
  - "[ ] Configurar Husky + lint-staged"
  - "[ ] Configurar alias de imports (@/components)"
  - "[ ] Criar estrutura de pastas (src/app, components, lib, hooks)"
  - "[ ] Configurar variáveis de ambiente (.env.example)"
  - "[ ] Configurar GitHub Actions (lint + build)"
  - "[ ] Commit inicial e push"
---

# *setup-project

Fundação sólida. Configuração certa desde o início evita dívida técnica.

## Comando de Setup

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

## Estrutura Inicial

```
src/
├── app/          # Next.js App Router
├── components/   # UI components
├── lib/          # Utilities
├── hooks/        # Custom hooks
└── types/        # TypeScript types
```
