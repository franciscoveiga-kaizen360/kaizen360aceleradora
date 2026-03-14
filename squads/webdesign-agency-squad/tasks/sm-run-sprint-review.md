---
task: Run Sprint Review
responsavel: "@scrum-master"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - completed_sprint: Sprint concluído com todos os itens
  - delivered_items: Features entregues e validadas
  - stakeholder_list: Lista de participantes da review
Saida: |
  - sprint_review_report: Relatório da review com o que foi entregue
  - demo_recording: Gravação da demo (se aplicável)
  - velocity_metric: Velocidade do time no sprint
Checklist:
  - "[ ] Preparar demo das features entregues"
  - "[ ] Convidar stakeholders e cliente"
  - "[ ] Apresentar meta do sprint e resultado"
  - "[ ] Demonstrar todas as features em ambiente real"
  - "[ ] Coletar feedback dos stakeholders"
  - "[ ] Registrar itens não concluídos e motivo"
  - "[ ] Calcular velocidade do sprint"
  - "[ ] Documentar próximos passos"
---

# *run-sprint-review

Demonstra o que foi construído. Valida com stakeholders. Aprende.

## Estrutura da Review

1. Meta do sprint e resultado (5min)
2. Demo das features (15-20min)
3. Feedback dos stakeholders (10min)
4. Backlog e próximos passos (5min)
