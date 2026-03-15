---
task: Setup A/B Testing
responsavel: "@qa-cro-specialist"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - hypothesis: Hipótese a testar com embasamento
  - variants: Variantes a comparar (controle vs tratamento)
  - success_metrics: Métricas de sucesso do teste
  - traffic_split: Divisão de tráfego entre variantes
Saida: |
  - ab_test_config: Configuração do teste A/B na ferramenta
  - tracking_implementation: Rastreamento de eventos implementado
  - results_dashboard: Dashboard de resultados em tempo real
Checklist:
  - "[ ] Formular hipótese com base em dados (não achismo)"
  - "[ ] Calcular tamanho de amostra necessário"
  - "[ ] Configurar variantes na ferramenta"
  - "[ ] Implementar rastreamento de evento de conversão"
  - "[ ] Verificar que variantes são carregadas corretamente"
  - "[ ] Definir duração mínima (até significância estatística)"
  - "[ ] Configurar alertas de problemas"
---

# *setup-ab-testing

Sem dados, é apenas uma opinião. A/B testing transforma opinião em evidência.

## Significância Estatística

Mínimo 95% de confiança antes de declarar vencedor.
Use calculadora: [abtestguide.com/calc](https://abtestguide.com/calc)

## Regra de Ouro

Testar **uma variável por vez**. Múltiplas mudanças impossibilitam saber o que funcionou.
