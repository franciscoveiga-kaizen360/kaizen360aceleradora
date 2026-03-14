---
task: Configure Backups
responsavel: "@devops-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - data_inventory: Inventário de dados críticos a proteger
  - rto_rpo_requirements: RTO (tempo de recuperação) e RPO (perda máxima de dados)
  - storage_budget: Budget para armazenamento de backups
Saida: |
  - backup_schedule: Agenda de backups automáticos
  - restore_procedures: Procedimentos testados de restauração
  - rollback_automation: Rollback automático de deploy configurado
Checklist:
  - "[ ] Configurar backup diário do banco de dados"
  - "[ ] Armazenar backups em bucket separado (S3, R2)"
  - "[ ] Reter últimos 30 dias de backups"
  - "[ ] Testar restauração (pelo menos uma vez por mês)"
  - "[ ] Configurar rollback de deploy no Vercel/hosting"
  - "[ ] Documentar procedimento de disaster recovery"
  - "[ ] Configurar alerta de falha de backup"
---

# *configure-backups

Backup que nunca foi testado não é backup — é esperança.

## Regra 3-2-1

- **3** cópias dos dados
- **2** em mídias diferentes
- **1** offsite (cloud separada ou região diferente)

## RTO/RPO Típicos para Sites Web

- **RPO**: máximo 24h de perda de dados (backup diário)
- **RTO**: site de volta em até 1h após incidente
