---
task: Run Usability Tests
responsavel: "@ux-researcher"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - prototype: Protótipo ou produto a ser testado
  - test_scenarios: Cenários e tarefas para os participantes
  - participant_list: Participantes recrutados (5-8 usuários)
Saida: |
  - usability_report: Relatório de usabilidade com severity ratings
  - severity_rankings: Problemas rankeados por impacto
  - recommended_fixes: Correções recomendadas priorizadas
Checklist:
  - "[ ] Preparar protótipo/ambiente de teste"
  - "[ ] Criar roteiro de tarefas realistas"
  - "[ ] Recrutar 5-8 usuários do perfil correto"
  - "[ ] Conduzir sessões (30-45min cada)"
  - "[ ] Observar sem interferir — deixar o usuário falar"
  - "[ ] Anotar comportamentos e verbalizações"
  - "[ ] Classificar problemas por severidade (1-4)"
  - "[ ] Recomendar correções priorizadas"
---

# *run-usability-tests

Valida a usabilidade com usuários reais antes de investir em desenvolvimento.

## Escala de Severidade (Nielsen)

- **4 — Catastrófico**: impede o uso — corrigir antes de lançar
- **3 — Major**: dificulta muito — corrigir com urgência
- **2 — Minor**: causa fricção — corrigir se houver tempo
- **1 — Cosmético**: incomoda levemente — opcional
