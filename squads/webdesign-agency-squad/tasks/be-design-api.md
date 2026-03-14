---
task: Design API
responsavel: "@backend-developer"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - functional_requirements: Requisitos funcionais do sistema
  - data_models: Modelos de dados necessários
  - integration_needs: Integrações externas necessárias
Saida: |
  - api_spec_openapi: Especificação OpenAPI 3.0
  - graphql_schema: Schema GraphQL (se aplicável)
  - endpoint_documentation: Documentação de todos os endpoints
Checklist:
  - "[ ] Mapear todos os recursos necessários"
  - "[ ] Definir convenções de nomenclatura (REST ou GraphQL)"
  - "[ ] Criar especificação OpenAPI/GraphQL"
  - "[ ] Definir autenticação e autorização por endpoint"
  - "[ ] Definir rate limiting e paginação"
  - "[ ] Definir tratamento de erros padronizado"
  - "[ ] Revisar com Frontend Developer"
---

# *design-api

API bem projetada antes de codificada. Contract-first development.

## Convenções REST

```
GET    /api/resources         # Listar
POST   /api/resources         # Criar
GET    /api/resources/:id     # Buscar
PATCH  /api/resources/:id     # Atualizar parcialmente
DELETE /api/resources/:id     # Remover
```

## Padrão de Resposta

```json
{
  "data": {},
  "meta": { "page": 1, "total": 100 },
  "error": null
}
```
