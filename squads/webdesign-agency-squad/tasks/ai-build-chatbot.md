---
task: Build Chatbot
responsavel: "@ai-integration-specialist"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - conversation_flows: Fluxos de conversa mapeados
  - knowledge_base: Base de conhecimento do negócio
  - brand_voice: Tom de voz e personalidade da marca
Saida: |
  - chatbot_implementation: Chatbot funcional integrado ao site
  - training_data: Base de dados de treino/respostas
  - handoff_logic: Lógica de escalada para humano
Checklist:
  - "[ ] Mapear casos de uso principais do chatbot"
  - "[ ] Criar base de conhecimento estruturada"
  - "[ ] Configurar LLM (Claude API recomendada)"
  - "[ ] Implementar UI de chat no site"
  - "[ ] Configurar tom de voz e restrições"
  - "[ ] Implementar escalada para humano"
  - "[ ] Testar com cenários reais"
  - "[ ] Monitorar qualidade das respostas"
---

# *build-chatbot

Chatbot que resolve, não que frustra. IA com personalidade da marca.

## Stack Recomendada

```
Claude API (Anthropic) + Vercel AI SDK
```

Vercel AI SDK simplifica streaming, tool calling e integração com Next.js.

```typescript
import { streamText } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
```
