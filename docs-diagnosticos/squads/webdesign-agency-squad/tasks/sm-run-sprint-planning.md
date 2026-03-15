---
task: Run Sprint Planning
responsavel: "@scrum-master"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - prioritized_backlog: Backlog priorizado pelo PO
  - team_capacity: Capacidade do time no sprint (em story points)
  - sprint_goal: Meta do sprint definida com PO
Saida: |
  - sprint_backlog: Itens comprometidos para o sprint
  - task_assignments: Atribuição de tarefas por especialista
  - sprint_commitment: Comprometimento documentado do time
Checklist:
  - "[ ] Confirmar meta do sprint com PO"
  - "[ ] Revisar capacidade do time (ausências, feriados)"
  - "[ ] Selecionar itens do backlog até a capacidade"
  - "[ ] Quebrar stories em tarefas técnicas"
  - "[ ] Distribuir tarefas por especialidade"
  - "[ ] Confirmar comprometimento de cada membro"
  - "[ ] Registrar sprint backlog na ferramenta"
---

# *run-sprint-planning

Facilita o planejamento do sprint: meta, escopo e comprometimento do time.

## Duração

- Sprint de 1 semana: planning de até 2h
- Sprint de 2 semanas: planning de até 4h

## Anti-patterns a evitar

- Sobrecarregar o sprint com otimismo excessivo
- Stories sem critérios de aceitação claros no planning
- Ausência de buffer para bugs e imprevistos (reservar 20%)
