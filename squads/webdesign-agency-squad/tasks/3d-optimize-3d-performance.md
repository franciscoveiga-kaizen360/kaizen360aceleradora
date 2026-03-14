---
task: Optimize 3D Performance
responsavel: "@3d-immersive-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - 3d_scenes: Cenas 3D implementadas
  - performance_audit: Resultados da auditoria de performance
  - device_targets: Dispositivos alvo com specs de GPU
Saida: |
  - optimized_models: Modelos com poly count e textures otimizados
  - lod_strategy: Estratégia de LOD implementada
  - progressive_loading_code: Carregamento progressivo de cenas 3D
Checklist:
  - "[ ] Auditar FPS em mobile mid-range"
  - "[ ] Reduzir polygon count onde possível"
  - "[ ] Comprimir texturas (KTX2 com Basis)"
  - "[ ] Implementar LOD para modelos complexos"
  - "[ ] Lazy load cenas 3D fora da viewport"
  - "[ ] Desativar animações quando fora da viewport"
  - "[ ] Usar requestAnimationFrame eficientemente"
  - "[ ] Teste final em dispositivo físico real"
---

# *optimize-3d-performance

3D bonito e lento é 3D que ninguém vê. Performance é parte do design.

## Alvos de Performance

- **Desktop high-end**: 60fps constante
- **Desktop mid-range**: 60fps, máx 45fps
- **Mobile high-end**: 30fps constante
- **Mobile mid-range**: degradação graciosa para fallback estático
