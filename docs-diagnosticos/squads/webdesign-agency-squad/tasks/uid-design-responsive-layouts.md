---
task: Design Responsive Layouts
responsavel: "@ui-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - wireframes: Wireframes aprovados pelo cliente
  - design_system: Design system com componentes e tokens
  - breakpoints: Breakpoints definidos (mobile, tablet, desktop, wide)
Saida: |
  - responsive_designs: Designs completos em todos os breakpoints
  - mobile_tablet_desktop_specs: Especificações por breakpoint
  - layout_grid: Sistema de grid documentado
Checklist:
  - "[ ] Iniciar pelo mobile (375px)"
  - "[ ] Adaptar para tablet (768px)"
  - "[ ] Expandir para desktop (1280px)"
  - "[ ] Criar variante wide (1440px+)"
  - "[ ] Verificar hierarquia visual em cada breakpoint"
  - "[ ] Garantir que nenhum elemento quebre entre breakpoints"
  - "[ ] Documentar grid e spacing por breakpoint"
---

# *design-responsive-layouts

Mobile-first. Cada breakpoint é uma experiência pensada, não uma adaptação.

## Breakpoints Padrão

| Nome | Min-width | Uso |
|------|-----------|-----|
| Mobile | 375px | Base — design inicia aqui |
| Tablet | 768px | Adaptação para telas médias |
| Desktop | 1280px | Layout completo |
| Wide | 1440px | Expansão para telas grandes |
