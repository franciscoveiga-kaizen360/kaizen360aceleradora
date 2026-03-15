---
task: Risk Management
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - project_plan: Plano do projeto
  - team_inputs: Riscos identificados por cada especialista
  - external_factors: Fatores externos (cliente, mercado, tecnologia)
Saida: |
  - risk_register: Registro completo de riscos com probabilidade e impacto
  - mitigation_plan: Plano de mitigação por risco
  - contingency_actions: Ações de contingência para riscos críticos
Checklist:
  - "[ ] Fazer brainstorming de riscos com o time"
  - "[ ] Classificar por probabilidade e impacto"
  - "[ ] Priorizar riscos críticos (alta prob + alto impacto)"
  - "[ ] Definir ação de mitigação para cada risco"
  - "[ ] Definir plano B para riscos críticos"
  - "[ ] Revisar risk register semanalmente"
---

# *risk-management

Identifica, avalia e mitiga riscos antes que se tornem problemas.

## Matriz de Riscos

| | Baixo Impacto | Alto Impacto |
|---|---|---|
| **Alta Probabilidade** | Mitigar | Crítico — ação imediata |
| **Baixa Probabilidade** | Monitorar | Plano de contingência |

## Riscos Comuns em Projetos Web

- Escopo crescente (scope creep) sem budget adicional
- Feedback tardio do cliente causando retrabalho
- Dependência de terceiros (APIs, integrações)
- Mudança de tecnologia no meio do projeto
