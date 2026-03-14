---
task: Create Product Brief
responsavel: "@product-owner"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - client_interview: Transcrição ou notas da entrevista com cliente
  - business_goals: Objetivos de negócio documentados
  - target_audience: Definição do público-alvo
  - budget: Orçamento aprovado
Saida: |
  - product_brief: Documento de brief completo e estruturado
  - user_stories: Histórias de usuário priorizadas
  - feature_list: Lista de features com prioridade (MoSCoW)
Checklist:
  - "[ ] Conduzir entrevista estruturada com cliente"
  - "[ ] Documentar objetivos de negócio mensuráveis"
  - "[ ] Mapear público-alvo e necessidades"
  - "[ ] Listar features desejadas"
  - "[ ] Priorizar com método MoSCoW"
  - "[ ] Escrever user stories no formato padrão"
  - "[ ] Validar brief com cliente"
---

# *create-product-brief

Transforma necessidades do cliente em requisitos claros, priorizados e acionáveis.

## Formato de User Story

```
Como [tipo de usuário],
Quero [funcionalidade],
Para [benefício/objetivo].

Critério de aceitação:
- [ ] Dado [contexto], quando [ação], então [resultado]
```

## MoSCoW

- **Must have** — obrigatório para lançamento
- **Should have** — importante, mas não crítico
- **Could have** — desejável se houver tempo/budget
- **Won't have** — fora do escopo desta versão
