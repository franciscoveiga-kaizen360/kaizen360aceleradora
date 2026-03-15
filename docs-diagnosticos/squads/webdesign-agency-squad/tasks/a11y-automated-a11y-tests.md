---
task: Automated A11y Tests
responsavel: "@accessibility-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - test_suite: Suite de testes atual do projeto
  - wcag_criteria: Critérios WCAG a cobrir automaticamente
  - ci_pipeline: Pipeline de CI/CD configurado
Saida: |
  - automated_test_suite: Suite de testes de acessibilidade
  - ci_integration: Integração com GitHub Actions
  - accessibility_report: Relatório automático por PR
Checklist:
  - "[ ] Instalar axe-core e jest-axe"
  - "[ ] Criar testes de acessibilidade por componente"
  - "[ ] Integrar com Playwright para testes E2E de a11y"
  - "[ ] Configurar no GitHub Actions (falhar PR se a11y quebrar)"
  - "[ ] Configurar relatório de a11y automático"
  - "[ ] Definir baseline de issues aceitáveis"
---

# *automated-a11y-tests

Testes automáticos capturam ~30% dos problemas. O restante requer teste manual.

## Setup com jest-axe

```typescript
import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

it('deve ser acessível', async () => {
  const { container } = render(<MeuComponente />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```
