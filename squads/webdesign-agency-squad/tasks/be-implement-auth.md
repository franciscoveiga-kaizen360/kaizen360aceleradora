---
task: Implement Auth
responsavel: "@backend-developer"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - auth_requirements: Requisitos de autenticação (email, OAuth, magic link)
  - user_roles: Papéis e permissões de usuário
  - security_standards: Padrões de segurança requeridos
Saida: |
  - auth_system: Sistema de autenticação completo
  - jwt_config: Configuração JWT com refresh tokens
  - oauth_integration: OAuth com providers (Google, GitHub)
  - session_management: Gestão de sessão segura
Checklist:
  - "[ ] Definir estratégia de auth (JWT, session, OAuth)"
  - "[ ] Implementar registro e login com email"
  - "[ ] Implementar OAuth (Google no mínimo)"
  - "[ ] Configurar tokens JWT com expiração curta + refresh"
  - "[ ] Implementar logout e invalidação de token"
  - "[ ] Configurar RBAC (roles e permissões)"
  - "[ ] Implementar rate limiting em endpoints de auth"
  - "[ ] Testar todos os fluxos de auth"
---

# *implement-auth

Auth segura não é opcional. Cada endpoint protegido é uma camada de confiança.

## Stack Recomendada

```
NextAuth.js v5 (Auth.js)
```

Suporte nativo a 50+ OAuth providers, session management,
e integração perfeita com Next.js App Router.
