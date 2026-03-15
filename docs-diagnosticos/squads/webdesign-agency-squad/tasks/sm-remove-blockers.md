---
task: Remove Blockers
responsavel: "@scrum-master"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - identified_blockers: Lista de impedimentos identificados
  - team_dependencies: Dependências entre membros do time
  - external_constraints: Restrições externas (cliente, fornecedores)
Saida: |
  - resolved_blockers: Impedimentos resolvidos com ação tomada
  - escalation_log: Itens escalados para liderança
  - mitigation_actions: Ações de mitigação para impedimentos em curso
Checklist:
  - "[ ] Documentar todos os impedimentos"
  - "[ ] Classificar por urgência e impacto"
  - "[ ] Resolver impedimentos internos imediatamente"
  - "[ ] Escalar impedimentos externos para liderança"
  - "[ ] Acompanhar resolução diariamente"
  - "[ ] Confirmar que o time foi desbloqueado"
---

# *remove-blockers

Elimina impedimentos para que o time flua. SLA de 24h para resolução.

## Tipos de Impedimentos

- **Técnicos**: falta de acesso, ambiente quebrado, dependência de API
- **De processo**: falta de decisão, aprovação pendente, reunião necessária
- **Externos**: cliente não respondeu, fornecedor atrasado, budget não aprovado

## SLA

Impedimento identificado → ação tomada em até **24 horas**.
