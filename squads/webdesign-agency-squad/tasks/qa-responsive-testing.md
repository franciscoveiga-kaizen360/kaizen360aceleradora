---
task: Responsive Testing
responsavel: "@qa-cro-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - breakpoint_specs: Especificações de breakpoints do projeto
  - device_matrix: Dispositivos alvo (modelos específicos)
  - visual_designs: Designs em todos os breakpoints
Saida: |
  - responsive_test_results: Resultados de responsividade por dispositivo
  - visual_regression_report: Relatório de regressão visual
  - fixes_list: Lista de problemas de responsividade encontrados
Checklist:
  - "[ ] Testar em iPhone 14 (390px)"
  - "[ ] Testar em iPhone SE (375px)"
  - "[ ] Testar em iPad (768px)"
  - "[ ] Testar em tablet grande (1024px)"
  - "[ ] Testar em laptop (1280px)"
  - "[ ] Testar em desktop (1440px)"
  - "[ ] Testar em wide screen (1920px)"
  - "[ ] Verificar landscape em mobile"
  - "[ ] Comparar com designs aprovados"
---

# *responsive-testing

Mobile representa 60%+ do tráfego. Responsividade é prioridade, não extra.

## Ferramentas

- **Chrome DevTools** — emulação rápida de dispositivos
- **BrowserStack Real Devices** — dispositivos físicos reais
- **Percy/Chromatic** — visual regression automático
