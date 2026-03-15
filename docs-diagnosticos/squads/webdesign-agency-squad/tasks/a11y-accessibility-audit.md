---
task: Accessibility Audit
responsavel: "@accessibility-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - website_url: URL para auditoria de acessibilidade
  - wcag_target_level: Nível WCAG alvo (AA ou AAA)
  - automated_scan_results: Resultados de scan automático (axe, WAVE)
Saida: |
  - a11y_audit_report: Relatório completo de acessibilidade
  - severity_rankings: Problemas rankeados por impacto (1-4)
  - remediation_plan: Plano de correção priorizado
Checklist:
  - "[ ] Rodar axe DevTools em todas as páginas"
  - "[ ] Rodar WAVE (Web Accessibility Evaluation Tool)"
  - "[ ] Testar navegação completa por teclado"
  - "[ ] Testar com NVDA (Windows) ou VoiceOver (Mac/iOS)"
  - "[ ] Verificar contraste em todos os textos"
  - "[ ] Verificar alternativas textuais para mídia"
  - "[ ] Verificar formulários e labels"
  - "[ ] Priorizar problemas por severity e impacto"
---

# *accessibility-audit

Acessibilidade não é checklist — é empatia com usuários reais.

## WCAG 2.2 por Princípio

- **Perceptível**: alternativas textuais, contraste, conteúdo adaptável
- **Operável**: teclado, sem convulsões, navegável
- **Compreensível**: legível, previsível, assistência à entrada
- **Robusto**: compatível com assistive technology atual e futura
