---
task: Run Retrospective
responsavel: "@scrum-master"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - sprint_data: Dados do sprint (velocidade, bugs, atrasos)
  - team_feedback: Feedback anônimo do time
  - previous_action_items: Itens de ação da retrospectiva anterior
Saida: |
  - retrospective_report: Relatório com insights e aprendizados
  - action_items: Plano de ação com responsáveis e prazo
  - process_improvements: Melhorias de processo a implementar
Checklist:
  - "[ ] Criar espaço psicologicamente seguro"
  - "[ ] Revisar itens de ação da retro anterior"
  - "[ ] Coletar: o que foi bem / o que pode melhorar / ideias"
  - "[ ] Priorizar insights mais impactantes"
  - "[ ] Definir 2-3 ações concretas com responsável e prazo"
  - "[ ] Documentar e compartilhar com o time"
---

# *run-retrospective

Melhoria contínua do processo. O time aprende com cada sprint.

## Formatos Populares

**Start / Stop / Continue**: O que começar, parar e continuar fazendo?
**4Ls**: Liked / Learned / Lacked / Longed For
**Mad / Sad / Glad**: Como o time se sentiu no sprint?

## Regra

Máximo 3 action items — mais que isso não é executado.
