---
task: Configure Monitoring
responsavel: "@devops-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - uptime_requirements: SLA de uptime (99.9% = max 8.7h downtime/ano)
  - alerting_needs: Quem alertar e como (email, Slack, PagerDuty)
  - monitoring_tools: Ferramentas disponíveis
Saida: |
  - monitoring_dashboard: Dashboard de saúde da aplicação
  - alert_rules: Regras de alerta configuradas
  - incident_runbook: Runbook de resposta a incidentes
Checklist:
  - "[ ] Configurar monitoramento de uptime (UptimeRobot ou similar)"
  - "[ ] Configurar alertas de downtime imediato"
  - "[ ] Configurar monitoramento de performance (Sentry)"
  - "[ ] Configurar alertas de error rate"
  - "[ ] Criar dashboard de saúde"
  - "[ ] Documentar procedimento de resposta a incidente"
  - "[ ] Testar alertas"
---

# *configure-monitoring

Saber que o site caiu antes do cliente — sempre.

## Stack de Monitoramento

- **UptimeRobot** (free) — verificação de uptime a cada 5min
- **Sentry** — erros em tempo real com stack trace
- **Vercel Analytics** — performance e erros integrados
- **BetterUptime** — status page público para transparência
