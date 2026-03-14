---
task: Setup Analytics
responsavel: "@qa-cro-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - tracking_requirements: Eventos e conversões a rastrear
  - ga4_config: Configuração de GA4 necessária
  - event_taxonomy: Taxonomia de eventos personalizada
Saida: |
  - ga4_setup: GA4 configurado com eventos customizados
  - hotjar_config: Hotjar com heatmaps e recordings
  - custom_events: Eventos customizados implementados
  - measurement_plan: Plano de medição documentado
Checklist:
  - "[ ] Criar propriedade GA4 e instalar"
  - "[ ] Configurar conversões (macro e micro)"
  - "[ ] Implementar eventos customizados por tipo de site"
  - "[ ] Configurar Hotjar com heatmaps e recordings"
  - "[ ] Configurar Enhanced Ecommerce (se e-commerce)"
  - "[ ] Testar todos os eventos com GA4 DebugView"
  - "[ ] Documentar measurement plan"
  - "[ ] Criar dashboard base no GA4"
---

# *setup-analytics

Dados sem análise são ruído. Configurar antes de lançar, analisar após lançamento.

## Eventos Essenciais por Tipo de Site

| Site | Eventos Críticos |
|------|-----------------|
| Institucional | page_view, form_submit, cta_click, scroll_depth |
| E-commerce | view_item, add_to_cart, begin_checkout, purchase |
| SaaS | sign_up, trial_start, feature_use, upgrade |
| Landing Page | page_view, cta_click, form_submit |
