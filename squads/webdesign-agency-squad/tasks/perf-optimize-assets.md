---
task: Optimize Assets
responsavel: "@performance-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - asset_inventory: Inventário de imagens, vídeos e fontes
  - size_budget: Orçamento de tamanho por tipo de asset
  - format_requirements: Formatos suportados pelos browsers alvo
Saida: |
  - webp_avif_assets: Assets convertidos para WebP/AVIF
  - compression_config: Configuração de compressão no pipeline
  - image_optimization_pipeline: Pipeline automatizado de otimização
Checklist:
  - "[ ] Inventariar todos os assets do projeto"
  - "[ ] Converter imagens para WebP (suporte: 97%+)"
  - "[ ] Gerar variante AVIF para browsers modernos"
  - "[ ] Implementar srcset com múltiplos tamanhos"
  - "[ ] Comprimir SVGs com SVGO"
  - "[ ] Otimizar fontes (apenas pesos/subsets usados)"
  - "[ ] Comprimir vídeos com FFmpeg"
  - "[ ] Configurar pipeline automático (CI)"
---

# *optimize-assets

Imagens são geralmente 50-70% do peso de uma página. Otimizá-las é o maior ganho.

## Metas de Tamanho

| Tipo | Máximo |
|------|--------|
| Hero image | < 200KB (WebP) |
| Thumbnail/card | < 50KB (WebP) |
| Logo SVG | < 10KB |
| Fonte (woff2) | < 30KB por variante |
| Vídeo background | < 5MB |
