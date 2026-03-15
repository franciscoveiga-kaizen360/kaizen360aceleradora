---
task: Validate Delivery
responsavel: "@product-owner"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - delivered_features: Features entregues no sprint
  - acceptance_criteria: Critérios de aceitação definidos
  - client_feedback: Feedback do cliente na review
Saida: |
  - validation_report: Relatório de validação com status por item
  - approved_items: Lista de itens aprovados
  - change_requests: Solicitações de mudança identificadas
Checklist:
  - "[ ] Testar cada feature contra critérios de aceitação"
  - "[ ] Documentar itens aprovados"
  - "[ ] Documentar itens que precisam de ajuste"
  - "[ ] Coletar feedback do cliente na sprint review"
  - "[ ] Criar change requests para ajustes necessários"
  - "[ ] Atualizar backlog com novas descobertas"
---

# *validate-delivery

Valida que as entregas realmente atendem aos critérios de aceitação e ao cliente.

## Regra

Um item só é "Done" quando o PO validou contra os critérios de aceitação.
A aprovação do time técnico não substitui a validação do PO.
