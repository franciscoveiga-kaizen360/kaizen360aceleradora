---
task: Build Design System
responsavel: "@ui-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - visual_identity: Identidade visual aprovada
  - component_inventory: Lista de componentes necessários
  - design_tokens: Tokens de design (cores, espaços, tipografia)
Saida: |
  - design_system: Design system completo no Figma
  - token_library: Biblioteca de tokens (cores, spacing, typography, shadows)
  - component_library_figma: Biblioteca de componentes no Figma
Checklist:
  - "[ ] Definir todos os design tokens no Figma"
  - "[ ] Criar componentes base (Button, Input, Card, Badge)"
  - "[ ] Criar componentes de navegação (Header, Nav, Footer)"
  - "[ ] Criar componentes de conteúdo (Hero, Section, Grid)"
  - "[ ] Documentar cada componente com props e variantes"
  - "[ ] Criar exemplos de uso e composição"
  - "[ ] Publicar como Figma Library"
---

# *build-design-system

Design system é o produto — o site é a consequência.

## Atomic Design

- **Tokens**: cor, tipografia, espaçamento, sombra, radius
- **Atoms**: Button, Input, Badge, Icon, Avatar
- **Molecules**: Card, Form Field, Alert, Tooltip
- **Organisms**: Header, Hero, Feature Section, Footer
- **Templates**: Page layouts com organismos montados
