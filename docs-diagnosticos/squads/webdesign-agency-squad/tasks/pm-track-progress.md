---
task: Track Progress
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - sprint_data: Dados do sprint atual (velocidade, burndown)
  - milestones: Status de cada milestone do projeto
  - budget_spent: Budget consumido até o momento
Saida: |
  - progress_report: Relatório de progresso detalhado
  - variance_analysis: Análise de desvios vs plano
  - updated_forecast: Previsão atualizada de conclusão e custo
Checklist:
  - "[ ] Coletar dados de progresso de todos os especialistas"
  - "[ ] Atualizar burndown do sprint"
  - "[ ] Verificar status de cada milestone"
  - "[ ] Calcular budget consumido vs planejado"
  - "[ ] Identificar desvios e riscos"
  - "[ ] Atualizar forecast de conclusão"
  - "[ ] Preparar relatório para cliente/liderança"
---

# *track-progress

Monitora saúde do projeto: prazo, budget e qualidade.

## Semáforo de Status

- 🟢 **Verde**: No prazo, no budget, sem riscos críticos
- 🟡 **Amarelo**: Desvio < 10% ou risco identificado e mitigado
- 🔴 **Vermelho**: Desvio > 10% ou risco crítico sem mitigação
