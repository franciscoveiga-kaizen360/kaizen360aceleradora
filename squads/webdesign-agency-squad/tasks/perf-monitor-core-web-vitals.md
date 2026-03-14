---
task: Monitor Core Web Vitals
responsavel: "@performance-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - monitoring_tools: Ferramentas de monitoramento disponíveis
  - alert_thresholds: Limites para alertas (LCP, CLS, INP)
  - reporting_cadence: Frequência de relatórios de performance
Saida: |
  - monitoring_dashboard: Dashboard de CWV em produção
  - alert_config: Alertas configurados para degradação
  - performance_reports: Relatórios de performance agendados
Checklist:
  - "[ ] Configurar Google Search Console CWV report"
  - "[ ] Implementar web-vitals.js no frontend"
  - "[ ] Enviar métricas para analytics (GA4 ou custom)"
  - "[ ] Configurar alertas de degradação"
  - "[ ] Criar dashboard de monitoramento"
  - "[ ] Agendar relatório mensal de performance"
---

# *monitor-core-web-vitals

Performance em produção ≠ performance em dev. Monitorar com dados reais de campo.

## web-vitals.js

```typescript
import { onLCP, onINP, onCLS } from 'web-vitals'

onLCP(metric => sendToAnalytics(metric))
onINP(metric => sendToAnalytics(metric))
onCLS(metric => sendToAnalytics(metric))
```

Dados reais dos usuários (CrUX) são o que o Google usa para ranking.
