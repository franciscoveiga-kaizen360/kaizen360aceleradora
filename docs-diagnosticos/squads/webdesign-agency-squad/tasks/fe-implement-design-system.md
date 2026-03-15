---
task: Implement Design System
responsavel: "@frontend-developer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - figma_design_tokens: Tokens exportados do Figma (JSON)
  - component_library: Biblioteca de componentes do UI Designer
  - theme_specs: Especificações de temas (light, dark)
Saida: |
  - css_variables: CSS custom properties para todos os tokens
  - tailwind_config: tailwind.config.ts estendido com tokens
  - theme_provider: ThemeProvider React para switching de tema
  - dark_mode: Dark mode funcional com persistência
Checklist:
  - "[ ] Exportar tokens do Figma (Tokens Studio ou manual)"
  - "[ ] Criar CSS custom properties para todos os tokens"
  - "[ ] Estender tailwind.config.ts com tokens"
  - "[ ] Implementar ThemeProvider com Context"
  - "[ ] Implementar dark mode com prefers-color-scheme"
  - "[ ] Persistir preferência no localStorage"
  - "[ ] Testar switching sem flash (FOUC)"
---

# *implement-design-system

Design tokens implementados = consistência automática em todo o projeto.

## Estrutura de Tokens em CSS

```css
:root {
  --color-primary: #3B82F6;
  --color-bg: #FFFFFF;
  --color-text: #0F172A;
  --space-4: 1rem;
  --radius-md: 0.375rem;
}

[data-theme="dark"] {
  --color-bg: #0F172A;
  --color-text: #F8FAFC;
}
```
