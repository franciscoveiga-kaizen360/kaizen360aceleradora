---
task: Implement Screen Reader Support
responsavel: "@accessibility-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - html_structure: Estrutura HTML de todas as páginas
  - aria_requirements: Requisitos de ARIA identificados na auditoria
  - screen_reader_test_results: Resultados de testes com leitores de tela
Saida: |
  - aria_labels: ARIA labels e descriptions implementados
  - semantic_html: HTML semântico corrigido/implementado
  - live_regions: Live regions para conteúdo dinâmico
  - sr_only_content: Conteúdo auxiliar para leitores de tela
Checklist:
  - "[ ] Corrigir todos os problemas de HTML semântico"
  - "[ ] Adicionar aria-label em elementos sem texto visível"
  - "[ ] Implementar landmarks (main, nav, header, footer)"
  - "[ ] Implementar aria-live para atualizações dinâmicas"
  - "[ ] Adicionar aria-describedby para campos de formulário"
  - "[ ] Implementar aria-expanded para menus e accordions"
  - "[ ] Testar fluxos completos com NVDA e VoiceOver"
---

# *implement-screen-reader

HTML semântico correto resolve 80% dos problemas para leitores de tela.

## Hierarquia de Solução

1. **HTML nativo primeiro**: `<button>`, `<nav>`, `<main>` — sem ARIA
2. **ARIA quando necessário**: apenas para widgets customizados
3. **Nunca**: ARIA para mascarar HTML inadequado

"No ARIA is better than bad ARIA." — MDN Web Docs
