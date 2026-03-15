---
task: Manage Backlog
responsavel: "@product-owner"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - feature_list: Lista completa de features e user stories
  - sprint_capacity: Capacidade do time por sprint (story points)
  - business_priorities: Prioridades de negócio atualizadas
  - team_feedback: Feedback técnico do time sobre complexidade
Saida: |
  - prioritized_backlog: Backlog ordenado por valor de negócio
  - sprint_scope: Escopo definido para o próximo sprint
  - effort_estimates: Estimativas de esforço por item
Checklist:
  - "[ ] Revisar e atualizar todos os itens do backlog"
  - "[ ] Coletar estimativas técnicas do time"
  - "[ ] Ordenar por valor de negócio / impacto"
  - "[ ] Definir itens para o próximo sprint"
  - "[ ] Validar capacidade vs escopo do sprint"
  - "[ ] Comunicar prioridades ao time"
---

# *manage-backlog

Mantém o backlog vivo, priorizado e pronto para o próximo sprint.

## Critérios de Priorização

1. **Valor de negócio** — impacto direto nos objetivos do cliente
2. **Risco** — itens de alto risco sobem na fila
3**Dependências** — itens bloqueadores têm prioridade
4. **Esforço** — quick wins vs grandes epics
