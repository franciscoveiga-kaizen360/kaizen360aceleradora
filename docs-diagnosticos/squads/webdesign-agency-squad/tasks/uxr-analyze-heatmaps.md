---
task: Analyze Heatmaps
responsavel: "@ux-researcher"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - heatmap_data: Dados de Hotjar ou similar (clique, scroll, atenção)
  - session_recordings: Gravações de sessão de usuários reais
  - analytics_data: Dados de GA4 (bounce rate, tempo, funil)
Saida: |
  - behavior_analysis: Análise de comportamento por página
  - ux_issues: Problemas de UX identificados nos dados
  - optimization_recommendations: Recomendações de otimização priorizadas
Checklist:
  - "[ ] Analisar heatmaps de clique por página"
  - "[ ] Analisar scroll maps (até onde os usuários chegam)"
  - "[ ] Assistir 10-20 session recordings selecionadas"
  - "[ ] Cruzar com dados de GA4 (bounce, conversão)"
  - "[ ] Identificar padrões de comportamento"
  - "[ ] Documentar problemas com evidência"
  - "[ ] Priorizar recomendações por impacto"
---

# *analyze-heatmaps

Dados quantitativos + qualitativos para entender o comportamento real dos usuários.

## O que procurar nos dados

- **Rage clicks**: usuários clicando em elementos não-clicáveis
- **Dead zones**: áreas que ninguém vê nem clica
- **Scroll depth**: onde a maioria abandona a página
- **Confusion indicators**: hesitação, volta para trás, repetição de ação
