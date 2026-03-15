---
task: Build AI Search
responsavel: "@ai-integration-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - content_index: Conteúdo do site para indexação
  - search_requirements: Requisitos de busca (produtos, artigos, páginas)
  - ux_specs: Especificações de UX da busca
Saida: |
  - semantic_search: Busca semântica com embeddings
  - vector_embeddings: Embeddings gerados e indexados
  - search_ui_integration: Interface de busca integrada ao site
Checklist:
  - "[ ] Gerar embeddings do conteúdo"
  - "[ ] Configurar vector database (Pinecone, pgvector)"
  - "[ ] Implementar busca semântica"
  - "[ ] Criar UI de busca com typeahead"
  - "[ ] Implementar ranking por relevância"
  - "[ ] Adicionar analytics de busca"
  - "[ ] Testar com queries reais dos usuários"
---

# *build-ai-search

Busca semântica que entende intenção, não apenas palavras exatas.

## Stack Recomendada

```
OpenAI Embeddings (text-embedding-3-small) + pgvector (PostgreSQL)
```

pgvector no PostgreSQL evita a necessidade de um banco vector separado.
