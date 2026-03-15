---
task: Manage Resources
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - project_plan: Plano do projeto com fases e necessidades
  - team_availability: Disponibilidade de cada especialista
  - skill_requirements: Competências necessárias por fase
Saida: |
  - resource_allocation: Alocação de cada especialista por fase
  - capacity_plan: Plano de capacidade do time
  - hiring_needs: Necessidades de contratação ou freelancer
Checklist:
  - "[ ] Mapear necessidades de cada fase do projeto"
  - "[ ] Verificar disponibilidade dos especialistas"
  - "[ ] Identificar gargalos e sobrecarga"
  - "[ ] Balancear carga de trabalho"
  - "[ ] Identificar necessidade de reforço externo"
  - "[ ] Comunicar alocação ao time"
---

# *manage-resources

Garante que as pessoas certas estejam disponíveis no momento certo.

## Regra de Alocação

Nenhum especialista deve estar alocado em mais de 2 projetos simultaneamente.
Máximo 80% de alocação — 20% para emergências e aprendizado.
