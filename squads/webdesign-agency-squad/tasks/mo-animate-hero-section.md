---
task: Animate Hero Section
responsavel: "@motion-designer"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - hero_design: Design da hero section aprovado pelo UI Designer
  - brand_motion_language: Linguagem de movimento da marca
  - video_assets: Assets de vídeo (se aplicável)
Saida: |
  - hero_animation: Hero section animada e funcional
  - video_integration_specs: Specs de integração de vídeo (se aplicável)
  - fallback_static: Versão estática para prefers-reduced-motion e slow connections
Checklist:
  - "[ ] Definir sequência de entrada dos elementos"
  - "[ ] Criar stagger de entrada (headline → subtítulo → CTA)"
  - "[ ] Integrar vídeo de background (se aplicável)"
  - "[ ] Criar loop sutil para manter vida na hero"
  - "[ ] Garantir LCP < 2.5s (imagem/vídeo hero)"
  - "[ ] Criar fallback estático completo"
  - "[ ] Testar em mobile e conexões lentas"
---

# *animate-hero-section

A hero é a primeira impressão. A animação define o tom de toda a experiência.

## Sequência Típica de Entrada

1. Background (fade in ou video start)
2. Headline (slide up + fade, delay 100ms)
3. Subtítulo (slide up + fade, delay 200ms)
4. CTA buttons (fade in + scale, delay 350ms)
5. Trust signals ou scroll indicator (fade in, delay 500ms)
