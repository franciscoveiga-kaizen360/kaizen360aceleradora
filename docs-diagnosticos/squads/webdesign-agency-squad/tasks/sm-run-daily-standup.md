---
task: Run Daily Standup
responsavel: "@scrum-master"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - team_updates: Atualizações de cada membro do time
  - blockers: Impedimentos identificados
  - sprint_progress: Estado atual do sprint board
Saida: |
  - updated_board: Sprint board atualizado
  - resolved_blockers: Ações para resolver impedimentos
  - daily_summary: Sumário do dia com riscos identificados
Checklist:
  - "[ ] Iniciar exatamente no horário combinado"
  - "[ ] Cada membro responde: fez / vai fazer / impedimentos"
  - "[ ] Identificar todos os impedimentos"
  - "[ ] Registrar impedimentos para resolução"
  - "[ ] Atualizar sprint board"
  - "[ ] Encerrar em 15 minutos máximo"
  - "[ ] Resolver impedimentos fora da daily"
---

# *run-daily-standup

Daily de 15 minutos máximo. Foco em sincronização, não em relatório.

## 3 Perguntas

1. O que fiz ontem que contribuiu para a meta do sprint?
2. O que vou fazer hoje?
3. Há algum impedimento no meu caminho?

## Regra de Ouro

Se a conversa vai além de 15min, marcar reunião separada com os envolvidos.
