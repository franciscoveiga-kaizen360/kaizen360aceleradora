---
task: Create Project Plan
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - project_scope: Escopo aprovado do projeto
  - team_capacity: Capacidade disponível de cada especialista
  - budget: Orçamento total aprovado
  - deadlines: Datas de entrega acordadas com cliente
Saida: |
  - project_plan: Plano completo com fases, milestones e tarefas
  - gantt_chart: Cronograma visual (Gantt)
  - budget_allocation: Alocação de budget por fase e especialista
Checklist:
  - "[ ] Quebrar projeto em fases e milestones"
  - "[ ] Estimar duração de cada fase com o time"
  - "[ ] Identificar dependências entre tarefas"
  - "[ ] Calcular caminho crítico"
  - "[ ] Alocar recursos por fase"
  - "[ ] Distribuir budget por categoria"
  - "[ ] Incluir buffer de 15-20% para imprevistos"
  - "[ ] Validar com todos os especialistas"
  - "[ ] Aprovar com cliente e Head of Digital"
---

# *create-project-plan

Plano mestre do projeto: o que, quem, quando e quanto.

## Fases Típicas de um Projeto Web

1. Discovery & Strategy (1-2 semanas)
2. Brand & UX Research (1-2 semanas)
3. UX Design & Wireframes (1-2 semanas)
4. UI Design & Design System (2-3 semanas)
5. Desenvolvimento Frontend (3-6 semanas)
6. Backend & Integrações (2-4 semanas)
7. QA, Performance & A11y (1-2 semanas)
8. Lançamento & Monitoramento (1 semana)
