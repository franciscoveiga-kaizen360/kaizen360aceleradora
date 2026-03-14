---
task: Design Scroll Animations
responsavel: "@motion-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - page_layouts: Layouts de todas as páginas
  - storytelling_goals: Narrativa visual que o scroll deve contar
  - performance_budget: Limite de impacto em CLS e performance
Saida: |
  - scroll_animation_specs: Especificações completas de scroll animations
  - gsap_scrolltrigger_code: Código GSAP ScrollTrigger
  - timing_guide: Guia de timing e triggers por seção
Checklist:
  - "[ ] Mapear seções que se beneficiam de scroll animation"
  - "[ ] Definir narrativa visual por seção"
  - "[ ] Criar especificações de reveal animations"
  - "[ ] Criar parallax para elementos de destaque"
  - "[ ] Garantir CLS = 0 (sem layout shift)"
  - "[ ] Testar performance em mobile mid-range"
  - "[ ] Entregar código GSAP ScrollTrigger"
---

# *design-scroll-animations

O scroll conta uma história. Cada seção revela algo novo no momento certo.

## Tipos de Scroll Animation

- **Reveal**: elementos entram na viewport com animação
- **Parallax**: camadas com velocidades diferentes criam profundidade
- **Scrub**: animação progride conforme o scroll (GSAP scrub:true)
- **Pinned**: seção fica fixa enquanto animação acontece (scrollytelling)
