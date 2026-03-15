---
task: Build Components
responsavel: "@frontend-developer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - design_system: Design system com especificações de componentes
  - component_specs: Specs de componentes do UI Designer
  - responsive_layouts: Layouts responsivos em todos os breakpoints
Saida: |
  - react_component_library: Biblioteca de componentes React
  - storybook: Storybook com todos os componentes documentados
  - unit_tests: Testes unitários para componentes críticos
Checklist:
  - "[ ] Criar componentes base (Button, Input, Card, Badge)"
  - "[ ] Criar componentes de layout (Container, Grid, Section)"
  - "[ ] Criar componentes de navegação (Header, Nav, MobileMenu)"
  - "[ ] Criar componentes de conteúdo (Hero, FeatureCard, Testimonial)"
  - "[ ] Implementar todos os estados de cada componente"
  - "[ ] Garantir acessibilidade (ARIA, keyboard nav)"
  - "[ ] Documentar no Storybook"
  - "[ ] Escrever testes unitários"
---

# *build-components

Componentes bem construídos são o investimento que se paga em cada nova página.

## Princípios

- **Composition over inheritance**: componentes pequenos e combináveis
- **Props explícitas**: sem props mágicas ou globals implícitos
- **Acessibilidade built-in**: ARIA e keyboard desde o início
- **Responsividade nativa**: mobile-first com Tailwind breakpoints
