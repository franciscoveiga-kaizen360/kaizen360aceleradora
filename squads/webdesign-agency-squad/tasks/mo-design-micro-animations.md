---
task: Design Micro Animations
responsavel: "@motion-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - ui_components: Componentes UI do design system
  - interaction_specs: Especificações de interação do UX Strategist
  - brand_personality: Personalidade da marca (suave, energético, elegante...)
Saida: |
  - animation_specs: Especificações detalhadas de cada micro-animação
  - lottie_files: Arquivos Lottie para animações de ícones e estados
  - figma_prototype_animations: Protótipo Figma com animações
Checklist:
  - "[ ] Mapear todos os elementos interativos"
  - "[ ] Definir linguagem de movimento (easing, duração)"
  - "[ ] Criar animações de hover para botões e cards"
  - "[ ] Criar feedback de loading e sucesso"
  - "[ ] Criar animações de entrada de elementos"
  - "[ ] Especificar todas as durações e easings"
  - "[ ] Criar fallback sem animação (prefers-reduced-motion)"
---

# *design-micro-animations

Micro-animações que guiam, confirmam e encantam — sempre com propósito.

## Linguagem de Movimento

| Tipo | Duração | Easing | Uso |
|------|---------|--------|-----|
| Hover | 150-200ms | ease-out | Feedback rápido |
| Click/Tap | 100ms | ease-in | Resposta imediata |
| Entrada | 300-400ms | ease-out | Elementos novos |
| Modal | 250ms | cubic-bezier | Overlay |
| Loading | loop | linear | Feedback de espera |
