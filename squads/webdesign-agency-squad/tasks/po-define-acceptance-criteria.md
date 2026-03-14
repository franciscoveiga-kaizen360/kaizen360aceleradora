---
task: Define Acceptance Criteria
responsavel: "@product-owner"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - user_stories: User stories a serem detalhadas
  - technical_constraints: Limitações técnicas identificadas
  - business_rules: Regras de negócio aplicáveis
Saida: |
  - acceptance_criteria: Critérios de aceitação por story
  - definition_of_done: DoD do squad
  - test_scenarios: Cenários de teste derivados
Checklist:
  - "[ ] Revisar cada user story com o time"
  - "[ ] Definir cenários de sucesso (happy path)"
  - "[ ] Definir cenários de erro e edge cases"
  - "[ ] Escrever critérios no formato Dado/Quando/Então"
  - "[ ] Validar com cliente e time técnico"
  - "[ ] Derivar cenários de teste para QA"
---

# *define-acceptance-criteria

Critérios claros que definem quando uma story está realmente pronta.

## Formato Padrão

```
Dado que [contexto/precondição],
Quando [ação do usuário],
Então [resultado esperado].
```

## Definition of Done

- [ ] Código revisado (PR aprovado)
- [ ] Testes unitários escritos e passando
- [ ] Critérios de aceitação verificados
- [ ] Design aprovado pelo Creative Director
- [ ] Acessibilidade verificada
- [ ] Performance dentro do orçamento
