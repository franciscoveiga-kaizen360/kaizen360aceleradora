---
task: Configure Hosting
responsavel: "@devops-engineer"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - hosting_requirements: Requisitos de performance, disponibilidade e custo
  - budget: Orçamento mensal para hosting
  - performance_needs: Necessidades de performance (CDN, edge, serverless)
Saida: |
  - hosting_config: Hosting configurado e funcional
  - domain_setup: Domínio configurado com DNS
  - environment_variables: Variáveis de ambiente por ambiente
Checklist:
  - "[ ] Configurar projeto no Vercel (ou hosting escolhido)"
  - "[ ] Conectar repositório GitHub"
  - "[ ] Configurar domínio personalizado"
  - "[ ] Configurar variáveis de ambiente (prod e staging)"
  - "[ ] Testar deploy automático"
  - "[ ] Verificar HTTPS automático"
  - "[ ] Configurar redirects e rewrite rules"
---

# *configure-hosting

Hosting certo = performance global + deploy sem stress.

## Recomendação por Projeto

| Tipo | Hosting | Por quê |
|------|---------|---------|
| Next.js | **Vercel** | Criador do Next.js, edge network, preview deployments |
| Static | **Netlify** ou **Cloudflare Pages** | Simples, rápido, free tier generoso |
| Full-stack | **AWS** ou **Railway** | Controle total, backend incluso |
