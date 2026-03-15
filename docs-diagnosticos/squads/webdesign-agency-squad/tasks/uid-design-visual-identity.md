---
task: Design Visual Identity
responsavel: "@ui-designer"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - brand_strategy: Estratégia de marca com posicionamento
  - creative_brief: Brief criativo do projeto
  - references: Referências e mood board aprovados
Saida: |
  - visual_identity: Sistema de identidade visual completo
  - color_palette: Paleta de cores primária, secundária e semântica
  - typography_system: Sistema tipográfico com scale e pesos
  - iconography: Diretrizes e estilo de iconografia
Checklist:
  - "[ ] Definir paleta de cores com tokens semânticos"
  - "[ ] Verificar contraste WCAG para todas as combinações"
  - "[ ] Selecionar tipografia principal e secundária"
  - "[ ] Criar type scale (xs ao 5xl)"
  - "[ ] Definir estilo de iconografia"
  - "[ ] Criar exemplos de aplicação"
  - "[ ] Aprovar com Creative Director"
---

# *design-visual-identity

Identidade visual que diferencia, comunica e conecta emocionalmente.

## Sistema de Cores

```
Primária:    #______ (ação, CTAs, destaques)
Secundária:  #______ (apoio, variação)
Neutros:     Escala de 11 tons (#000 ao #fff)
Semântica:   Success / Warning / Error / Info
```

## Type Scale (Tailwind)

xs(12) → sm(14) → base(16) → lg(18) → xl(20) → 2xl(24) → 3xl(30) → 4xl(36) → 5xl(48) → 6xl(60)
