---
task: Security Testing
responsavel: "@qa-cro-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - security_checklist: OWASP Top 10 checklist
  - authentication_flows: Fluxos de autenticação implementados
  - api_endpoints: Endpoints de API para teste
Saida: |
  - security_audit_report: Relatório de auditoria de segurança
  - vulnerability_list: Vulnerabilidades encontradas com severity
  - remediation_plan: Plano de correção por severity
Checklist:
  - "[ ] Testar OWASP Top 10 (injeção, XSS, CSRF, etc.)"
  - "[ ] Verificar headers de segurança (CSP, HSTS, X-Frame)"
  - "[ ] Testar autenticação e autorização"
  - "[ ] Verificar que dados sensíveis não aparecem em logs"
  - "[ ] Testar rate limiting nos endpoints críticos"
  - "[ ] Verificar HTTPS em todo o site"
  - "[ ] Testar inputs por vulnerabilidades de injeção"
  - "[ ] Verificar exposição de dados em APIs"
---

# *security-testing

Segurança não é feature, é responsabilidade. Um breach destrói confiança.

## OWASP Top 10 (2021)

1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQL, XSS)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Auth Failures
8. Software Integrity Failures
9. Logging Failures
10. SSRF
