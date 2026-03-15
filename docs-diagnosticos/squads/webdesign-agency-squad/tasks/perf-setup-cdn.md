---
task: Setup CDN
responsavel: "@performance-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - hosting_config: Configuração atual de hosting
  - asset_types: Tipos de assets a servir via CDN
  - geographic_distribution: Localização geográfica dos usuários
Saida: |
  - cdn_configuration: CDN configurado e ativo
  - cache_rules: Regras de cache por tipo de recurso
  - purge_strategy: Estratégia de invalidação de cache
Checklist:
  - "[ ] Configurar Cloudflare (ou similar) no domínio"
  - "[ ] Definir regras de cache por tipo de recurso"
  - "[ ] Configurar TTL adequado por tipo (assets estáticos: 1 ano)"
  - "[ ] Configurar cache-busting via hash de conteúdo"
  - "[ ] Configurar purge automático no deploy"
  - "[ ] Ativar Brotli/Gzip para compressão"
  - "[ ] Verificar headers de cache corretos"
---

# *setup-cdn

CDN distribui o conteúdo próximo ao usuário. Latência reduzida em qualquer país.

## Regras de Cache

```
# Imutáveis (hash no nome) — cache por 1 ano
/_next/static/*: max-age=31536000, immutable

# HTML — sem cache (sempre fresco)
/*.html: no-cache

# Assets com hash — longa duração
/images/*, /fonts/*: max-age=2592000 (30 dias)
```
