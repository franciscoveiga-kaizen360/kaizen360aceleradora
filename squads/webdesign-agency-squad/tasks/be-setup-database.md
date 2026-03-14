---
task: Setup Database
responsavel: "@backend-developer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - data_models: Modelos de dados da API
  - performance_requirements: Requisitos de performance de consulta
  - scale_estimates: Estimativas de volume de dados
Saida: |
  - database_schema: Schema do banco de dados
  - migrations: Migrations versionadas
  - seed_data: Dados de seed para desenvolvimento
  - connection_config: Configuração de conexão por ambiente
Checklist:
  - "[ ] Escolher banco de dados (PostgreSQL recomendado)"
  - "[ ] Criar schema com tipos corretos"
  - "[ ] Adicionar índices para campos de busca frequente"
  - "[ ] Configurar foreign keys e constraints"
  - "[ ] Criar migrations com Prisma/Drizzle"
  - "[ ] Criar seed data para desenvolvimento"
  - "[ ] Configurar connection pool"
  - "[ ] Configurar por ambiente (dev, staging, prod)"
---

# *setup-database

Schema sólido desde o início. Migrations versionadas para todos os ambientes.

## Stack Recomendada

```
PostgreSQL + Prisma ORM
```

Prisma oferece type-safety automática, migrations declarativas e
geração de queries type-safe para TypeScript.
