---
task: Write UX Copy
responsavel: "@copywriter"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - ui_designs: Designs de interface com todos os estados
  - user_flows: Fluxos de navegação e conversão
  - error_states: Estados de erro identificados
Saida: |
  - microcopy: Microcopy para todos os elementos de interface
  - error_messages: Mensagens de erro humanizadas e úteis
  - tooltips: Tooltips e textos de ajuda contextual
  - empty_states: Estados vazios com orientação
  - onboarding_copy: Textos de onboarding (se aplicável)
Checklist:
  - "[ ] Mapear todos os elementos de interface que precisam de copy"
  - "[ ] Escrever placeholder text para todos os inputs"
  - "[ ] Escrever mensagens de erro humanizadas"
  - "[ ] Escrever estados vazios com orientação"
  - "[ ] Escrever tooltips para elementos não-óbvios"
  - "[ ] Escrever confirmações de ação"
  - "[ ] Revisar consistência de tom"
---

# *write-ux-copy

UX writing é design invisível. Quando é bom, ninguém percebe. Quando é ruim, todos sentem.

## Regras de UX Copy

- **Erros**: diga o que aconteceu + o que fazer. Nunca culpe o usuário.
- **Confirmações**: confirme ações importantes sem exagero.
- **Placeholders**: hint de formato, não de valor (Ex: "DD/MM/AAAA", não "Sua data")
- **Empty states**: transforme vazio em oportunidade de ação.
