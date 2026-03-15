---
task: Optimize Performance
responsavel: "@frontend-developer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - performance_audit: Relatório de auditoria do Performance Engineer
  - optimization_targets: Alvos de LCP, CLS, INP definidos
  - codebase: Codebase atual para otimização
Saida: |
  - optimized_bundle: Bundle otimizado com code splitting
  - lighthouse_score: Score Lighthouse 90+ em todas as métricas
  - performance_report: Relatório antes/depois das otimizações
Checklist:
  - "[ ] Analisar bundle com @next/bundle-analyzer"
  - "[ ] Implementar dynamic imports para componentes pesados"
  - "[ ] Converter imagens para next/image"
  - "[ ] Implementar next/font para zero CLS de fonte"
  - "[ ] Remover dependências não utilizadas"
  - "[ ] Prefetch de rotas críticas"
  - "[ ] Verificar re-renders desnecessários (React DevTools)"
  - "[ ] Rodar Lighthouse e documentar scores"
---

# *optimize-performance

Performance é responsabilidade do frontend. Todo byte importa.

## Comandos de Análise

```bash
# Analisar bundle
ANALYZE=true npm run build

# Lighthouse CI
npx lhci autorun

# Check de dependências não usadas
npx depcheck
```
