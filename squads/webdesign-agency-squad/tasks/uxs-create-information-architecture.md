---
task: Create Information Architecture
responsavel: "@ux-strategist"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - content_inventory: Inventário de conteúdo existente ou planejado
  - user_goals: Objetivos dos usuários por persona
  - business_goals: Objetivos de negócio que o site deve apoiar
Saida: |
  - sitemap: Mapa do site com todas as páginas e hierarquia
  - content_hierarchy: Hierarquia de conteúdo por página
  - navigation_structure: Estrutura de navegação principal e secundária
Checklist:
  - "[ ] Inventariar todo o conteúdo necessário"
  - "[ ] Agrupar conteúdo por categorias lógicas"
  - "[ ] Realizar card sorting com usuários (se possível)"
  - "[ ] Definir hierarquia de navegação"
  - "[ ] Criar sitemap visual"
  - "[ ] Validar com team tree testing"
  - "[ ] Revisar com PO e Creative Director"
---

# *create-information-architecture

Organiza o conteúdo para que os usuários encontrem o que precisam naturalmente.

## Princípios de IA

- **Menos é mais**: navegação com menos de 7 itens no menu principal
- **Nomenclatura do usuário**: usar os termos que os usuários usam, não jargão interno
- **Profundidade máxima**: evitar mais de 3 níveis de hierarquia
- **Content-first**: estrutura segue o conteúdo, não o contrário
