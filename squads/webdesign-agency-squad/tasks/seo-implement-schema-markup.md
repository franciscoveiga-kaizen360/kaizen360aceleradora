---
task: Implement Schema Markup
responsavel: "@seo-geo-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - page_types: Tipos de páginas do site
  - content_models: Modelos de conteúdo (produtos, artigos, serviços)
  - schema_strategy: Estratégia de schema por tipo de página
Saida: |
  - json_ld_schemas: JSON-LD implementado em todas as páginas relevantes
  - breadcrumbs: BreadcrumbList schema
  - faq_markup: FAQPage schema para conteúdo de FAQ
  - review_markup: AggregateRating para produtos/serviços
Checklist:
  - "[ ] Implementar Organization schema na home"
  - "[ ] Implementar WebSite com Sitelinks Searchbox"
  - "[ ] Implementar BreadcrumbList em todas as páginas"
  - "[ ] Implementar FAQPage nas páginas com FAQ"
  - "[ ] Implementar schemas de produto (e-commerce)"
  - "[ ] Validar todos os schemas no Rich Results Test"
  - "[ ] Monitorar rich snippets no Search Console"
---

# *implement-schema-markup

Schema markup = rich snippets = mais cliques com o mesmo ranking.

## Schema por Tipo de Site

| Site | Schemas Prioritários |
|------|---------------------|
| Institucional | Organization, WebSite, FAQ, BreadcrumbList |
| E-commerce | Product, Offer, AggregateRating, BreadcrumbList |
| Blog | Article, Author, BreadcrumbList, FAQ |
| SaaS | SoftwareApplication, FAQ, Review |
