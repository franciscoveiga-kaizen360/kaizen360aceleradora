---
task: Implement Keyboard Navigation
responsavel: "@accessibility-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - page_structure: Estrutura de páginas com elementos interativos
  - interactive_elements: Mapa de todos os elementos que requerem interação
  - focus_management_needs: Situações que requerem gestão de foco
Saida: |
  - keyboard_navigation_code: Implementação de navegação por teclado
  - focus_indicators: Indicadores de foco visíveis e consistentes
  - skip_links: Skip links para navegação eficiente
Checklist:
  - "[ ] Adicionar skip link 'Pular para conteúdo' no início"
  - "[ ] Garantir ordem de foco lógica (tab order)"
  - "[ ] Implementar focus indicator visível em todos os elementos"
  - "[ ] Testar todos os componentes interativos com Tab"
  - "[ ] Implementar gestão de foco em modals e drawers"
  - "[ ] Verificar armadilhas de foco (focus trap intencional)"
  - "[ ] Testar com teclado real (sem mouse)"
---

# *implement-keyboard-nav

Todo usuário que usa teclado depende de foco gerenciado corretamente.

## Skip Link

```html
<a href="#main-content" class="sr-only focus:not-sr-only">
  Pular para o conteúdo principal
</a>
```

## Focus Visible

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```
