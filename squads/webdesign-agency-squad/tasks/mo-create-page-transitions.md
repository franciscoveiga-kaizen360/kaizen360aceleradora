---
task: Create Page Transitions
responsavel: "@motion-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - page_structure: Estrutura e hierarquia das páginas
  - brand_motion_language: Linguagem de movimento da marca
  - performance_budget: Orçamento de performance (não impactar LCP)
Saida: |
  - transition_specs: Especificações de transição entre páginas
  - gsap_code: Código GSAP das transições
  - framer_motion_variants: Variantes Framer Motion para React
Checklist:
  - "[ ] Definir tipo de transição (fade, slide, clip, morph)"
  - "[ ] Criar transição de saída da página atual"
  - "[ ] Criar transição de entrada da nova página"
  - "[ ] Garantir que não bloqueia o carregamento"
  - "[ ] Testar em dispositivos lentos"
  - "[ ] Criar fallback instant para prefers-reduced-motion"
  - "[ ] Entregar código GSAP e Framer Motion"
---

# *create-page-transitions

Transições que fazem o site parecer uma experiência contínua, não páginas separadas.

## Tipos de Transição

- **Fade**: elegante, universal — seguro para qualquer projeto
- **Slide**: direcional — reforça hierarquia de navegação
- **Clip/Mask**: dramático — para sites de portfolio e premium
- **Shared element**: um elemento transita entre páginas — nível Awwwards
