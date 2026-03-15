---
task: Client Reporting
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - progress_data: Dados de progresso do período
  - milestones: Status dos milestones
  - budget_status: Situação atual do budget
  - issues: Problemas identificados e status de resolução
Saida: |
  - client_report: Relatório formal de status para o cliente
  - status_presentation: Apresentação para reunião de status
  - action_items: Itens de ação com responsável e prazo
Checklist:
  - "[ ] Compilar dados de progresso do período"
  - "[ ] Destacar conquistas e entregas do período"
  - "[ ] Comunicar riscos e planos de mitigação"
  - "[ ] Atualizar previsão de conclusão"
  - "[ ] Definir próximos passos e decisões necessárias"
  - "[ ] Revisar com Head of Digital antes de enviar"
  - "[ ] Enviar relatório e confirmar recebimento"
---

# *client-reporting

Comunicação proativa e transparente com o cliente. Sem surpresas.

## Frequência

- **Semanal**: Relatório de status por email
- **Quinzenal**: Reunião de status (30-45min)
- **Mensal**: Relatório executivo completo

## Regra de Ouro

O cliente nunca deve descobrir um problema pelo próprio projeto.
Comunique proativamente — más notícias cedo são melhores que tarde.
