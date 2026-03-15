---
task: Setup SSL
responsavel: "@devops-engineer"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - domains: Lista de domínios e subdomínios do projeto
  - ssl_provider: Provedor de SSL (Let's Encrypt, Cloudflare, hosting)
  - security_requirements: Requisitos de segurança (HSTS, headers)
Saida: |
  - ssl_certificates: Certificados SSL instalados e funcionando
  - https_redirect: Redirect HTTP → HTTPS configurado
  - hsts_config: HSTS configurado com preload
  - security_headers: Headers de segurança configurados
Checklist:
  - "[ ] Instalar certificado SSL (automático no Vercel/Netlify)"
  - "[ ] Configurar redirect 301 de HTTP para HTTPS"
  - "[ ] Configurar HSTS com max-age=31536000"
  - "[ ] Configurar Content-Security-Policy"
  - "[ ] Configurar X-Frame-Options: DENY"
  - "[ ] Configurar X-Content-Type-Options: nosniff"
  - "[ ] Testar com SSL Labs (alvo: A+)"
---

# *setup-ssl

HTTPS é obrigatório. Sem ele, Chrome marca como inseguro e SEO penaliza.

## Headers de Segurança Essenciais

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=()
```
