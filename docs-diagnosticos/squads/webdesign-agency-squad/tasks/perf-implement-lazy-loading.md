---
task: Implement Lazy Loading
responsavel: "@performance-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - page_structure: Estrutura de páginas com inventário de recursos
  - asset_map: Mapa de assets por página e posição
  - performance_budget: Orçamento de carregamento inicial
Saida: |
  - lazy_loading_implementation: Lazy loading implementado em imagens e componentes
  - intersection_observer_config: Configuração do IntersectionObserver
  - fallbacks: Fallbacks e loading states para cada elemento
Checklist:
  - "[ ] Implementar loading='lazy' em todas as imagens fora da viewport"
  - "[ ] Implementar IntersectionObserver para conteúdo dinâmico"
  - "[ ] Lazy load de componentes React pesados (dynamic import)"
  - "[ ] Lazy load de scripts de terceiros (analytics, chat)"
  - "[ ] Implementar placeholders e skeleton loading"
  - "[ ] Testar que above-the-fold não usa lazy loading"
---

# *implement-lazy-loading

Carregar só o que o usuário vai ver. O resto espera.

## Regra

Imagens, vídeos e componentes **acima do fold** — carregar imediatamente.
Todo o resto — lazy load.

Usar `loading="lazy"` para imagens é grátis e suportado por 97%+ dos browsers.
