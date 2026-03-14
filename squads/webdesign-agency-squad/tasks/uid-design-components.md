---
task: Design Components
responsavel: "@ui-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - design_system: Design system aprovado
  - wireframes: Wireframes de todas as páginas
  - interaction_patterns: Padrões de interação do UX Strategist
Saida: |
  - ui_component_library: Biblioteca completa de componentes UI
  - variant_states: Todos os estados de cada componente (default, hover, active, disabled, error)
  - responsive_specs: Especificações responsivas por componente
Checklist:
  - "[ ] Criar todos os estados de cada componente"
  - "[ ] Garantir que cada componente usa apenas design tokens"
  - "[ ] Criar variantes (tamanho, cor, estilo)"
  - "[ ] Documentar uso e restrições"
  - "[ ] Testar composição em contexto real"
  - "[ ] Validar com Frontend Developer"
---

# *design-components

Cada componente é um tijolo do design system. Perfeito isolado, melhor combinado.

## Estados Obrigatórios

Todo componente interativo deve ter:
- **Default**: estado de repouso
- **Hover**: feedback visual ao passar o mouse
- **Active/Pressed**: feedback ao clicar
- **Focus**: visível para navegação por teclado (acessibilidade)
- **Disabled**: quando não disponível
- **Loading**: quando aguarda resposta
- **Error**: quando há problema
