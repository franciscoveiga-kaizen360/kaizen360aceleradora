---
task: Setup Staging
responsavel: "@devops-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - production_config: Configuração do ambiente de produção
  - staging_requirements: Requisitos do ambiente de staging
  - team_workflow: Workflow do time para usar staging
Saida: |
  - staging_environment: Ambiente de staging funcional
  - preview_deployments: Preview deployments por PR configurados
  - branch_deploy_config: Deploy automático por branch
Checklist:
  - "[ ] Criar ambiente staging separado da produção"
  - "[ ] Configurar banco de dados de staging"
  - "[ ] Configurar variáveis de ambiente de staging"
  - "[ ] Habilitar preview deployments por PR (Vercel)"
  - "[ ] Configurar URL fixa para staging"
  - "[ ] Documentar acesso ao staging para o cliente"
  - "[ ] Testar parity entre staging e produção"
---

# *setup-staging

Staging é onde descobrimos problemas. Produção é onde entregamos soluções.

## Preview Deployments

No Vercel, cada PR gera automaticamente uma URL única:
`projeto-branch-name.vercel.app`

Isso permite revisão visual antes de qualquer merge para main.
