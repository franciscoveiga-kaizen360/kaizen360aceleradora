---
task: Cross-Browser Testing
responsavel: "@qa-cro-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - browser_matrix: Matriz de browsers/versões alvo
  - test_cases: Casos de teste funcionais e visuais
  - deployed_url: URL do ambiente de staging
Saida: |
  - test_results: Resultados por browser com screenshots
  - bug_report: Bugs encontrados com prioridade e evidência
  - browser_compatibility_matrix: Matriz de compatibilidade documentada
Checklist:
  - "[ ] Testar em Chrome (última versão)"
  - "[ ] Testar em Firefox (última versão)"
  - "[ ] Testar em Safari (Mac + iOS)"
  - "[ ] Testar em Edge (última versão)"
  - "[ ] Testar em Chrome Android"
  - "[ ] Verificar que CSS funciona em todos"
  - "[ ] Verificar animações (GSAP/Framer Motion)"
  - "[ ] Verificar formulários e interações"
---

# *cross-browser-testing

Um bug no Safari pode invalidar toda a experiência para 20% dos usuários.

## Ferramentas

- **BrowserStack** — testes em browsers reais na nuvem
- **Playwright** — automação cross-browser
- **Can I Use** — verificar suporte antes de implementar
