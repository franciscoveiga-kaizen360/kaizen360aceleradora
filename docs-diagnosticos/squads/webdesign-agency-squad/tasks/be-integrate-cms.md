---
task: Integrate CMS
responsavel: "@backend-developer"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - cms_choice: CMS escolhido (Sanity, Strapi, Contentful)
  - content_models: Modelos de conteúdo necessários
  - frontend_requirements: Requisitos de consumo do frontend
Saida: |
  - cms_setup: CMS configurado e funcional
  - content_models_created: Modelos de conteúdo criados
  - api_integration: API do CMS integrada ao frontend
  - preview_mode: Preview mode para conteúdo não publicado
Checklist:
  - "[ ] Configurar projeto no CMS escolhido"
  - "[ ] Criar todos os modelos de conteúdo"
  - "[ ] Configurar campos, validações e referências"
  - "[ ] Configurar webhooks para revalidação"
  - "[ ] Integrar API ao frontend (Next.js fetch)"
  - "[ ] Implementar preview mode"
  - "[ ] Documentar fluxo de publicação para o cliente"
---

# *integrate-cms

CMS headless que o cliente consegue usar sem precisar de desenvolvedor.

## CMS por Caso de Uso

| CMS | Melhor para |
|-----|-------------|
| Sanity | Sites complexos, studio customizável, real-time |
| Contentful | Empresas, multi-idioma, estrutura rígida |
| Strapi | Self-hosted, controle total, open source |
