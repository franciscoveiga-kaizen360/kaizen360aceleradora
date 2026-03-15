---
task: Optimize Core Web Vitals
responsavel: "@seo-geo-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - lighthouse_report: Relatório de performance atual
  - cwv_data: Dados reais de CWV do Search Console
  - performance_issues: Problemas identificados pela Performance Engineer
Saida: |
  - cwv_optimization_plan: Plano de otimização por métrica
  - implemented_fixes: Correções implementadas documentadas
  - before_after_metrics: Métricas antes e depois
Checklist:
  - "[ ] Analisar LCP (alvo: < 2.5s)"
  - "[ ] Analisar CLS (alvo: < 0.1)"
  - "[ ] Analisar INP (alvo: < 200ms)"
  - "[ ] Priorizar correções por impacto no ranking"
  - "[ ] Implementar correções com Frontend Engineer"
  - "[ ] Monitorar melhora nos dados de campo"
  - "[ ] Documentar mudanças para o cliente"
---

# *optimize-core-web-vitals

CWV é fator de ranking desde 2021. Sites lentos perdem posição e clientes.

## Os 3 Core Web Vitals

| Métrica | Bom | Precisa Melhorar | Ruim |
|---------|-----|-----------------|------|
| LCP | ≤ 2.5s | 2.5-4s | > 4s |
| CLS | ≤ 0.1 | 0.1-0.25 | > 0.25 |
| INP | ≤ 200ms | 200-500ms | > 500ms |
