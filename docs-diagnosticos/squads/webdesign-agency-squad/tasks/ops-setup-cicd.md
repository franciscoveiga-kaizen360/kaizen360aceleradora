---
task: Setup CI/CD
responsavel: "@devops-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - tech_stack: Stack técnica do projeto
  - deployment_targets: Ambientes de deploy (staging, produção)
  - testing_pipeline: Testes que devem ser executados no CI
Saida: |
  - github_actions_config: Workflows GitHub Actions configurados
  - build_pipeline: Pipeline de build com lint + test + deploy
  - automated_tests_ci: Testes automatizados rodando no CI
Checklist:
  - "[ ] Criar workflow de CI (lint + type-check + tests)"
  - "[ ] Criar workflow de deploy para staging (PRs)"
  - "[ ] Criar workflow de deploy para produção (main)"
  - "[ ] Configurar secrets no GitHub"
  - "[ ] Implementar cache de node_modules"
  - "[ ] Configurar notificações de falha"
  - "[ ] Testar pipeline completo end-to-end"
---

# *setup-cicd

Nenhum código vai para produção sem passar pelo CI. Sempre.

## Estrutura de Workflows

```yaml
# .github/workflows/ci.yml
on: [push, pull_request]
jobs:
  ci:
    steps:
      - lint
      - type-check
      - test
      - build

# .github/workflows/deploy.yml
on:
  push:
    branches: [main]
jobs:
  deploy:
    needs: ci
    steps:
      - deploy to production
```
