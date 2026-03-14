---
task: Implement Animations
responsavel: "@frontend-developer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - animation_specs: Specs completas do Motion Designer
  - gsap_code: Código GSAP fornecido pelo Motion Designer
  - framer_motion_variants: Variantes Framer Motion
Saida: |
  - implemented_animations: Todas as animações funcionando em produção
  - performance_tested_code: Código testado para performance
  - fallbacks: Fallbacks para prefers-reduced-motion
Checklist:
  - "[ ] Instalar GSAP e Framer Motion"
  - "[ ] Implementar micro-animações de componentes"
  - "[ ] Implementar transições de página"
  - "[ ] Implementar scroll animations com GSAP ScrollTrigger"
  - "[ ] Implementar hero section animation"
  - "[ ] Verificar prefers-reduced-motion em cada animação"
  - "[ ] Testar performance (sem jank em 60fps)"
  - "[ ] Cleanup de event listeners e GSAP contexts"
---

# *implement-animations

Transformar specs de animação em código de produção performático.

## Padrão de Cleanup GSAP

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    // suas animações aqui
  }, containerRef)

  return () => ctx.revert() // cleanup automático
}, [])
```
