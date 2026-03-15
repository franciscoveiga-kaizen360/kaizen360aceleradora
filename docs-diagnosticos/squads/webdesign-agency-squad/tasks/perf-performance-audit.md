---
task: Performance Audit
responsavel: "@performance-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - website_url: URL para auditoria
  - performance_goals: Alvos de LCP, CLS, INP
  - device_targets: Dispositivos alvo (mobile, desktop)
Saida: |
  - lighthouse_report: Relatório Lighthouse completo
  - cwv_baseline: Baseline de Core Web Vitals antes de otimizações
  - optimization_roadmap: Roadmap de otimizações priorizadas por impacto
Checklist:
  - "[ ] Rodar Lighthouse em mobile (throttled 4G)"
  - "[ ] Rodar Lighthouse em desktop"
  - "[ ] Testar com WebPageTest (real devices)"
  - "[ ] Analisar waterfall de carregamento"
  - "[ ] Identificar render-blocking resources"
  - "[ ] Identificar imagens não otimizadas"
  - "[ ] Calcular custo de cada JS bundle"
  - "[ ] Priorizar otimizações por impacto"
---

# *performance-audit

Medir antes de otimizar. Dados guiam decisões, não intuição.

## Ferramentas de Auditoria

```bash
# Lighthouse CLI
npx lighthouse https://example.com --view

# WebPageTest API
npx webpagetest test https://example.com --key YOUR_KEY

# Bundle analyzer
ANALYZE=true npm run build
```
