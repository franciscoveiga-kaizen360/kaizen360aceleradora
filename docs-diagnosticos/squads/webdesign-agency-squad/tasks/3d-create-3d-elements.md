---
task: Create 3D Elements
responsavel: "@3d-immersive-designer"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - creative_brief: Brief criativo com direção estética
  - brand_assets: Assets de marca (cores, formas, logo)
  - performance_budget: Budget de performance para 3D
Saida: |
  - 3d_models: Modelos 3D otimizados para web
  - spline_scenes: Cenas Spline prontas para embed
  - optimized_assets_gltf: Assets GLTF/GLB comprimidos com Draco
Checklist:
  - "[ ] Definir papel dos elementos 3D na narrativa"
  - "[ ] Criar/adquirir modelos 3D adequados"
  - "[ ] Otimizar polygon count para web"
  - "[ ] Comprimir com Draco (GLTF)"
  - "[ ] Criar cena Spline com interatividade"
  - "[ ] Testar tamanho de arquivo (< 2MB por modelo)"
  - "[ ] Criar fallback estático"
---

# *create-3d-elements

Elementos 3D que elevam o site ao nível de premiações internacionais.

## Budget de Performance 3D

| Complexidade | Poly Count | File Size | Uso |
|-------------|------------|-----------|-----|
| Hero 3D | < 50k | < 2MB | Um elemento central |
| Decorativo | < 10k | < 500KB | Elementos de apoio |
| Produto 3D | < 100k | < 5MB | Com LOD progressivo |
