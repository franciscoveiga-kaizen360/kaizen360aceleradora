---
task: Create Dark Mode
responsavel: "@ui-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - design_system: Design system com tokens de cor
  - component_library: Biblioteca de componentes em light mode
  - theme_specs: Especificações de comportamento do dark mode
Saida: |
  - dark_mode_design: Dark mode completo para todas as telas
  - semantic_color_tokens: Tokens semânticos para troca de tema
  - theme_switching_specs: Specs para implementação do toggle de tema
Checklist:
  - "[ ] Criar paleta de cores para dark mode"
  - "[ ] Verificar contraste WCAG em dark mode"
  - "[ ] Adaptar cada componente para dark mode"
  - "[ ] Criar tokens semânticos (--color-bg, --color-text)"
  - "[ ] Especificar animação de transição entre temas"
  - "[ ] Especificar persistência da preferência (localStorage)"
  - "[ ] Respeitar prefers-color-scheme do sistema"
---

# *create-dark-mode

Dark mode é um tema completo, não inversão de cores.

## Princípios do Dark Mode

- **Não inverter**: #000 em light ≠ #fff em dark — usar escalas de cinza escuro
- **Elevação via luz**: superfícies mais altas são mais claras em dark mode
- **Saturação reduzida**: cores vibrantes cansam em fundo escuro — dessaturar levemente
- **Sombras invertidas**: sombras escuras viram glows sutis
