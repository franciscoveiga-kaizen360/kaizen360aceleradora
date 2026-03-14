---
task: Integrate Services
responsavel: "@backend-developer"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - integration_list: Lista de serviços a integrar (pagamento, CRM, email)
  - api_credentials: Credenciais das APIs (em .env, nunca hardcoded)
  - business_requirements: Regras de negócio para cada integração
Saida: |
  - payment_integration: Integração de pagamento (Stripe/PagSeguro)
  - crm_sync: Sincronização com CRM do cliente
  - email_marketing_setup: Email marketing integrado
  - webhooks: Webhooks configurados para eventos
Checklist:
  - "[ ] Mapear todas as integrações necessárias"
  - "[ ] Implementar em ambiente de sandbox/teste primeiro"
  - "[ ] Usar variáveis de ambiente para todas as credenciais"
  - "[ ] Implementar tratamento de erro robusto"
  - "[ ] Configurar webhooks com validação de assinatura"
  - "[ ] Testar fluxo completo end-to-end"
  - "[ ] Documentar fluxo de cada integração"
---

# *integrate-services

Cada integração é um ponto de falha potencial. Implementar com tratamento de erro robusto.

## Integrações Comuns

| Serviço | SDK | Uso |
|---------|-----|-----|
| Stripe | stripe-node | Pagamento e assinaturas |
| Resend | resend | Email transacional |
| HubSpot | @hubspot/api-client | CRM e leads |
| Zapier | Webhooks | Automações no-code |
