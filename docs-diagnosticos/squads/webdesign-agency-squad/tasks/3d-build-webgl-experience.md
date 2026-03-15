---
task: Build WebGL Experience
responsavel: "@3d-immersive-designer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - 3d_assets: Assets 3D otimizados (GLTF/GLB)
  - interaction_specs: Especificações de interatividade
  - performance_targets: Metas de FPS e carregamento
Saida: |
  - threejs_scene: Cena Three.js completa e otimizada
  - webgl_shaders: Shaders GLSL customizados (se aplicável)
  - interaction_handlers: Handlers de mouse, scroll e touch
Checklist:
  - "[ ] Configurar Three.js com renderer otimizado"
  - "[ ] Carregar assets com LoadingManager e progress"
  - "[ ] Implementar iluminação e materiais"
  - "[ ] Adicionar interações (mouse, scroll, touch)"
  - "[ ] Implementar raycasting para interações com objetos"
  - "[ ] Otimizar: instanced mesh, frustum culling"
  - "[ ] Testar para 60fps em desktop e 30fps em mobile"
  - "[ ] Implementar fallback para WebGL não suportado"
---

# *build-webgl-experience

Experiência WebGL que funciona e performa. Nível Awwwards sem sacrificar usuários.

## Checklist de Performance Three.js

- `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` — nunca acima de 2
- Dispose de geometrias, materiais e texturas quando não usados
- Use `BufferGeometry` — nunca `Geometry` legado
- LOD (Level of Detail) para objetos complexos
- Evite criação de objetos em cada frame (GC pressure)
