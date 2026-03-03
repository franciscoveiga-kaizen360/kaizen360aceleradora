# Docs Growth CRM — Website

Landing page institucional/comercial do **Docs Growth CRM** — CRM com IA para clínicas de radiologia odontológica.

Desenvolvido por [Kaizen360 Aceleradora](https://kaizen360.com.br) para [Docs Consultoria e Gestão](https://docsconsultoria.com).

---

## Stack

- **Framework:** Next.js 14 (App Router + Static Export)
- **Language:** TypeScript 5
- **Styling:** CSS Modules + CSS Custom Properties
- **Animation:** Framer Motion 11
- **Icons:** Phosphor Icons
- **Hosting:** Vercel
- **Testing:** Vitest + React Testing Library

---

## Setup local

```bash
# 1. Instalar dependências
npm install

# 2. Criar arquivo de variáveis de ambiente
cp .env.example .env.local
# Preencher valores no .env.local

# 3. Iniciar servidor de desenvolvimento
npm run dev
# Site disponível em http://localhost:3000
```

---

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_GTM_ID` | ID do container Google Tag Manager (ex: GTM-XXXXXXX) |
| `NEXT_PUBLIC_FB_PIXEL_ID` | ID do Facebook Pixel |
| `NEXT_PUBLIC_FORMSPREE_ID` | ID do formulário Formspree |
| `NEXT_PUBLIC_BOOKING_URL` | URL de agendamento de demonstração (Calendly/Cal.com) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp no formato internacional sem + (ex: 5511999999999) |

---

## Scripts

```bash
npm run dev          # Servidor de desenvolvimento (http://localhost:3000)
npm run build        # Build estático → /out
npm run lint         # ESLint
npm run lint:fix     # ESLint com auto-fix
npm run format       # Prettier
npm run test         # Vitest (watch mode)
npm run test:run     # Vitest (CI mode)
npm run type-check   # TypeScript check
```

---

## Deploy

O projeto está configurado para deploy automático no **Vercel**:

1. Conecte o repositório no painel Vercel
2. Configure as variáveis de ambiente no painel Vercel
3. Qualquer push para `main`/`master` dispara um deploy automático
4. O comando de build é `npm run build` e o diretório de output é `out/`

---

## Documentação do projeto

| Arquivo | Conteúdo |
|---|---|
| `docs/brief.md` | Project Brief — visão geral, stakeholders, escopo |
| `docs/prd.md` | PRD — requisitos funcionais, épicos, histórias |
| `docs/front-end-spec.md` | UI/UX Spec — personas, fluxos, design system |
| `docs/ui-architecture.md` | Frontend Architecture — stack, estrutura, padrões |

---

*Docs Growth CRM — Feito por quem entende de Radiologia Odontológica.*
