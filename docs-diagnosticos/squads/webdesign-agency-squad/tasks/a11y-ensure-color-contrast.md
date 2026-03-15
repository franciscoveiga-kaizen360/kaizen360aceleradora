---
task: Ensure Color Contrast
responsavel: "@accessibility-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - design_system: Design system com paleta de cores
  - color_tokens: Tokens de cor (light e dark mode)
  - wcag_contrast_requirements: Requisitos WCAG (AA: 4.5:1 normal, 3:1 large)
Saida: |
  - contrast_audit: Auditoria completa de contraste
  - updated_color_tokens: Tokens de cor atualizados para conformidade
  - compliant_palette: Paleta de cores WCAG-compliant
Checklist:
  - "[ ] Verificar contraste de todo texto normal (mínimo 4.5:1 AA)"
  - "[ ] Verificar contraste de texto grande (mínimo 3:1 AA)"
  - "[ ] Verificar contraste de componentes UI (mínimo 3:1)"
  - "[ ] Verificar dark mode separadamente"
  - "[ ] Verificar estados de foco"
  - "[ ] Atualizar tokens que não passam"
  - "[ ] Documentar razão de conformidade"
---

# *ensure-color-contrast

Contraste insuficiente torna o conteúdo ilegível para ~8% da população (daltonismo + baixa visão).

## Requisitos WCAG 2.2

| Texto | Nível AA | Nível AAA |
|-------|----------|-----------|
| Normal (< 18pt) | 4.5:1 | 7:1 |
| Grande (≥ 18pt ou ≥ 14pt bold) | 3:1 | 4.5:1 |
| UI Components | 3:1 | - |
