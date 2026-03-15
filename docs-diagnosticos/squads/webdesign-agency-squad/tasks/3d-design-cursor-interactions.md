---
task: Design Cursor Interactions
responsavel: "@3d-immersive-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - creative_direction: Direção criativa do projeto
  - interaction_map: Mapa de elementos interativos
  - performance_budget: Budget de performance (JS não-crítico)
Saida: |
  - custom_cursor_code: Código do cursor customizado
  - gyroscope_interactions: Interações baseadas em giroscópio (mobile)
  - scroll_parallax_3d: Parallax 3D baseado em posição do mouse
Checklist:
  - "[ ] Definir design do cursor customizado"
  - "[ ] Criar variantes de cursor por contexto (default, hover, drag)"
  - "[ ] Implementar cursor follower suave (lerp)"
  - "[ ] Adicionar estados especiais (sobre CTAs, imagens, links)"
  - "[ ] Implementar parallax de elementos 3D via mouse position"
  - "[ ] Adaptar para mobile (giroscópio como substituto)"
  - "[ ] Desativar em touch devices"
---

# *design-cursor-interactions

O cursor como elemento de design. Uma assinatura visual que diferencia.

## Técnica do Cursor Follower

```javascript
// Lerp (linear interpolation) para movimento suave
cursorX += (mouseX - cursorX) * 0.15
cursorY += (mouseY - cursorY) * 0.15
```

Velocidade do lerp define o "peso" do cursor: 0.05 = pesado, 0.3 = responsivo
