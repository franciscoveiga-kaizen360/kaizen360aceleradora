# Workflow: Greenfield UI — Ferramenta 1 DOCS
## Diagnóstico de Momento e Crescimento

**Versão:** 1.0
**Data:** 2026-03-14
**Squad:** webdesign-agency-squad
**Deploy:** Vercel
**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Vercel Postgres · Framer Motion

---

## Visão Geral do Workflow

```
FASE 1 — Setup & Fundação         (Sprint 1 — 3 dias)
FASE 2 — Dados & Regras           (Sprint 2 — 2 dias)
FASE 3 — Quiz UI (Telas 1–4)      (Sprint 3 — 3 dias)
FASE 4 — Resultado & PDF          (Sprint 4 — 2 dias)
FASE 5 — Backend & Webhook        (Sprint 5 — 2 dias)
FASE 6 — Polish & Deploy          (Sprint 6 — 2 dias)
                                   TOTAL ≈ 14 dias
```

---

## FASE 1 — Setup & Fundação

### Epic E1: Scaffolding do Projeto

**Agente responsável:** `@frontend-developer` + `@devops-engineer`

#### Story E1-S1: Inicializar projeto Next.js
```
Como dev,
Quero um projeto Next.js 15 configurado com TS + Tailwind + ESLint,
Para ter a base de desenvolvimento padronizada.

Critérios de aceite:
- [ ] `npx create-next-app@latest` com App Router, TypeScript, Tailwind
- [ ] `src/` directory habilitado
- [ ] Path aliases configurados (@/components, @/lib, @/types)
- [ ] `.env.example` criado com todas as variáveis necessárias
- [ ] `vercel.json` configurado
```

**Estrutura de pastas a criar:**
```
src/
├── app/
│   ├── layout.tsx              # Root layout (dark mode, Space Grotesk)
│   ├── globals.css             # Design tokens DOCS
│   ├── page.tsx                # Redireciona para /diagnostico
│   ├── diagnostico/
│   │   └── page.tsx            # Quiz principal (Telas 1–4)
│   ├── resultado/
│   │   └── page.tsx            # Tela 5 — Resultado personalizado
│   └── api/
│       ├── submit/
│       │   └── route.ts        # POST — persiste + dispara webhook
│       └── pdf/
│           └── route.ts        # GET — gera mini guia PDF
├── components/
│   ├── ui/                     # Button, Input, Select, Progress, Card
│   ├── quiz/                   # Telas do quiz (Screen1–4)
│   ├── resultado/              # ResultCard, FocoBullet, DownloadButton
│   └── layout/                 # PageWrapper, Logo
├── lib/
│   ├── db.ts                   # Conexão Vercel Postgres
│   ├── webhook.ts              # Disparador de webhook CRM
│   ├── classification.ts       # Motor de regras da devolutiva
│   ├── pdf-generator.ts        # Geração do mini guia
│   └── constants.ts            # Enums de opções do quiz
├── types/
│   ├── quiz.ts                 # QuizAnswers, QuizStep, Profile
│   └── resultado.ts            # Resultado, Devolutiva, Foco
└── data/
    └── devolutivas.ts          # Todos os blocos de texto pré-escritos
```

#### Story E1-S2: Design System DOCS
```
Como usuário,
Quero uma interface dark mode premium com identidade DOCS,
Para perceber autoridade e profissionalismo.

Critérios de aceite:
- [ ] Cor primária: #E87722 (laranja DOCS)
- [ ] Background: #0A0A0A (preto quase absoluto)
- [ ] Surface: #111111 (cards), #1A1A1A (inputs)
- [ ] Fonte: Space Grotesk (Google Fonts via next/font)
- [ ] Design tokens em globals.css como CSS custom properties
- [ ] Tailwind config com cores e fontes customizadas
```

**Design Tokens (globals.css):**
```css
:root {
  --docs-orange: #E87722;
  --docs-orange-light: #FF8C3A;
  --docs-orange-muted: rgba(232, 119, 34, 0.15);
  --docs-bg: #0A0A0A;
  --docs-surface: #111111;
  --docs-surface-2: #1A1A1A;
  --docs-border: rgba(255,255,255,0.08);
  --docs-text: #F5F5F5;
  --docs-text-muted: #999999;
  --docs-text-subtle: #666666;
  --docs-radius: 12px;
  --docs-radius-sm: 8px;
  --docs-shadow: 0 4px 32px rgba(0,0,0,0.4);
}
```

---

## FASE 2 — Dados & Regras

### Epic E2: Motor de Classificação e Devolutivas

**Agente responsável:** `@backend-developer` + `@copywriter`

#### Story E2-S1: Tipos TypeScript do Quiz
```
Como desenvolvedor,
Quero todos os tipos do domínio bem definidos,
Para ter type safety em todo o fluxo.
```

**`src/types/quiz.ts`:**
```typescript
export type Perfil = 'dentista' | 'dono_gestor_radiologia'

export type TempoAtuacao =
  | 'menos_de_2_anos'
  | '2_a_5_anos'
  | 'mais_de_5_anos'

export type ObjetivoPrincipal =
  | 'crescer_e_faturar_mais'
  | 'organizar_rotina'
  | 'melhorar_comercial'
  | 'previsibilidade_qualidade_vida'

export type DorPrincipal =
  | 'atrair_clientes'
  | 'vender_melhor'
  | 'melhorar_preco_margem'
  | 'organizar_gestao'
  | 'melhorar_equipe'

export type MomentoMaturidade =
  | 'comecando_estruturar'
  | 'crescendo_desorganizacao'
  | 'operando_com_gargalos'
  | 'buscando_escala'

export interface QuizAnswers {
  nome: string
  whatsapp: string
  email?: string
  perfil: Perfil
  tempo_atuacao: TempoAtuacao
  objetivo_principal: ObjetivoPrincipal
  dor_principal: DorPrincipal
  momento_maturidade: MomentoMaturidade
  aceita_receber_material: boolean
}

export interface Resultado {
  resultado_resumo: string
  leitura_momento: string       // Bloco 1
  o_que_trava: string          // Bloco 2
  foco_1: string
  foco_2: string
  foco_3: string
  perfil: Perfil
}
```

#### Story E2-S2: Banco de Dados (Vercel Postgres)
```
Como sistema,
Quero persistir todas as respostas antes de disparar o webhook,
Para garantir que nenhum lead se perca mesmo se o webhook falhar.

Critérios de aceite:
- [ ] Tabela `diagnosticos` criada com migration SQL
- [ ] Schema inclui todos os 15 campos do payload
- [ ] `submitted_at` com timezone
- [ ] Índice em `whatsapp` para deduplicação futura
```

**Migration SQL:**
```sql
CREATE TABLE IF NOT EXISTS diagnosticos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  whatsapp VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  perfil VARCHAR(50) NOT NULL,
  tempo_atuacao VARCHAR(50) NOT NULL,
  objetivo_principal VARCHAR(100) NOT NULL,
  dor_principal VARCHAR(100) NOT NULL,
  momento_maturidade VARCHAR(100) NOT NULL,
  aceita_receber_material BOOLEAN NOT NULL DEFAULT false,
  resultado_resumo TEXT,
  foco_1 TEXT,
  foco_2 TEXT,
  foco_3 TEXT,
  origem VARCHAR(100) DEFAULT 'ativacao_base_docs_2026',
  webhook_enviado BOOLEAN DEFAULT false,
  webhook_status VARCHAR(20),
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_diagnosticos_whatsapp ON diagnosticos(whatsapp);
CREATE INDEX idx_diagnosticos_perfil ON diagnosticos(perfil);
CREATE INDEX idx_diagnosticos_submitted_at ON diagnosticos(submitted_at DESC);
```

#### Story E2-S3: Motor de Regras de Classificação
```
Como sistema,
Quero um motor de regras determinístico que combine
perfil + maturidade + dor + objetivo para gerar a devolutiva,
Para personalizar o resultado sem IA generativa.
```

**Lógica de prioridade dos vetores:**
```
Peso 1 (maior): perfil          — linguagem base (dentista vs. radiologia)
Peso 2:         momento_maturidade — onde está na jornada
Peso 3:         dor_principal    — o que trava
Peso 4 (menor): objetivo_principal — o que quer alcançar
```

**Algoritmo em `src/lib/classification.ts`:**
```typescript
export function classificar(answers: QuizAnswers): Resultado {
  const key = `${answers.perfil}:${answers.momento_maturidade}:${answers.dor_principal}`
  const devolutiva = DEVOLUTIVAS[key] ?? DEVOLUTIVAS_FALLBACK[answers.perfil]
  const focos = gerarFocos(answers)

  return {
    resultado_resumo: devolutiva.resumo,
    leitura_momento: devolutiva.bloco1,
    o_que_trava: devolutiva.bloco2,
    foco_1: focos[0],
    foco_2: focos[1],
    foco_3: focos[2],
    perfil: answers.perfil
  }
}
```

#### Story E2-S4: Mapa Completo de Devolutivas
```
Como respondente,
Quero receber uma devolutiva específica para minha combinação de respostas,
Para sentir que o diagnóstico realmente me entende.

Critérios de aceite:
- [ ] Cobertura de 100% das combinações perfil × maturidade × dor
- [ ] 2 perfis × 4 maturidades × 5 dores = 40 combinações base
- [ ] Cada combinação tem: resumo + bloco1 + bloco2 + 3 focos
- [ ] Linguagem diferenciada: dentista (clínica) vs. radiologia (gestão/operação)
- [ ] Fallback para combinações edge-case
```

**Estrutura do mapa de devolutivas (`src/data/devolutivas.ts`):**
```typescript
// DENTISTA × COMEÇANDO A ESTRUTURAR × ATRAIR CLIENTES
"dentista:comecando_estruturar:atrair_clientes": {
  resumo: "Você está nos primeiros passos da estruturação e sua prioridade agora é construir uma base sólida de pacientes.",
  bloco1: "Seu diagnóstico revela um profissional que está construindo sua identidade no mercado. Com menos de estrutura definida, o potencial existe — mas precisa de direção clara para não desperdiçar energia em frentes que ainda não são prioritárias.",
  bloco2: "O que normalmente trava quem está nesse momento é tentar crescer sem ter definido quem atende, onde se posiciona e qual diferencial comunica. Sem isso, atrair pacientes vira uma corrida cara e cansativa.",
  focos: [
    "Defina seu posicionamento: qual tipo de paciente você quer atender e por quê escolheriam você",
    "Estruture um processo básico de indicação e reativação antes de investir em mídia",
    "Crie consistência no atendimento para que cada paciente vire uma fonte de novos pacientes"
  ]
},

// DENTISTA × COMEÇANDO A ESTRUTURAR × VENDER MELHOR
"dentista:comecando_estruturar:vender_melhor": {
  resumo: "Você está estruturando sua prática e precisa aprender a apresentar seu valor antes de crescer.",
  bloco1: "Seu momento indica um profissional que ainda está encontrando seu ritmo comercial. A dificuldade em vender nessa fase geralmente não é sobre técnica de vendas — é sobre clareza no que você entrega e confiança para comunicar isso.",
  bloco2: "O que trava quem está começando a estruturar e quer vender melhor é a falta de um processo: sem roteiro de consulta, sem follow-up, sem registro do que funcionou. Vender fica dependente de inspiração, não de método.",
  focos: [
    "Monte um roteiro simples de consulta: do diagnóstico à apresentação do plano de tratamento",
    "Crie o hábito de registrar objeções e o que funcionou para superar cada uma",
    "Pratique apresentar o valor do tratamento antes do preço, não depois"
  ]
},

// ... (todas as 40 combinações seguem o mesmo padrão)
// Veja docs/devolutivas-completo.md para o mapa completo
```

> **Nota para @copywriter:** O arquivo `docs/devolutivas-completo.md` deve conter as 40 combinações + fallbacks. Ver Epic E2-S4-COPY.

---

## FASE 3 — Quiz UI (Telas 1–4)

### Epic E3: Interface do Quiz

**Agente responsável:** `@frontend-developer` + `@ui-designer` + `@motion-designer`

#### Story E3-S1: Layout Base e Componentes UI

**Componentes a criar em `src/components/ui/`:**

```typescript
// Button.tsx — variantes: primary, ghost, outline
// Input.tsx — com máscara de WhatsApp
// RadioCard.tsx — card selecionável para opções do quiz
// ProgressBar.tsx — barra de progresso com step atual / total
// Badge.tsx — tag de perfil selecionado
```

#### Story E3-S2: Tela 1 — Abertura

```
Layout: centralizado vertical, full-height, sem header
Conteúdo:
  - Logo DOCS (SVG inline ou imagem)
  - Headline: "Descubra em qual momento você está"
  - Subheadline: "Responda 6 perguntas em 2 a 3 minutos e receba
    uma leitura personalizada do seu momento com orientações práticas."
  - Chips de credibilidade: "Grátis" · "2–3 min" · "Resultado na hora"
  - CTA Button: "Começar diagnóstico →"
  - Animação: fade-in escalonado dos elementos (Framer Motion)
```

#### Story E3-S3: Tela 2 — Identificação

```
Barra de progresso: 1/4
Campos:
  1. Nome completo (input texto, obrigatório)
  2. WhatsApp (input com máscara +55, obrigatório)
  3. E-mail (input, opcional — label: "Opcional, mas recomendado")
  4. Perfil (RadioCard × 2):
     - "Sou dentista"
     - "Sou dono(a) ou gestor(a) de clínica de radiologia"
Navegação: botão "Continuar" (desabilitado até preencher obrigatórios)
```

**Máscara WhatsApp:**
```typescript
// Formato display: (11) 99999-9999
// Valor interno: +5511999999999 (E.164)
// Validar: 10 ou 11 dígitos após código de país
```

#### Story E3-S4: Tela 3 — Momento Atual

```
Barra de progresso: 2/4
Pergunta 1: "Há quanto tempo você atua nessa área?"
RadioCards:
  - "Menos de 2 anos"
  - "De 2 a 5 anos"
  - "Mais de 5 anos"

Pergunta 2: "O que você mais quer melhorar hoje?"
RadioCards (4 opções):
  - "Crescer e faturar mais"
  - "Organizar melhor minha rotina ou operação"
  - "Melhorar comercial e conversão"
  - "Ter mais previsibilidade e qualidade de vida"

Pergunta 3: "Qual é sua maior dificuldade hoje?"
RadioCards (5 opções):
  - "Atrair mais pacientes ou clientes"
  - "Vender melhor"
  - "Melhorar preço e margem"
  - "Organizar gestão e processos"
  - "Melhorar equipe e atendimento"

Pergunta 4: "Hoje você sente que está em qual momento?"
RadioCards (4 opções):
  - "Começando a estruturar"
  - "Crescendo, mas com desorganização"
  - "Já operando, mas com gargalos"
  - "Buscando mais escala e previsibilidade"
```

#### Story E3-S5: Tela 4 — Confirmação

```
Barra de progresso: 3/4
Headline: "Quase lá! Confirme para receber sua leitura."
Resumo visual das respostas (cards compactos)
Pergunta: "Você quer receber sua leitura inicial com orientações práticas?"
Toggle/RadioCard: Sim / Não (pré-selecionado: Sim)
CTA: "Ver minha leitura agora →"
Ao clicar:
  1. Loading state no botão
  2. POST /api/submit
  3. Redireciona para /resultado?id={uuid}
```

#### Story E3-S6: Gerenciamento de Estado do Quiz

```typescript
// src/hooks/useQuiz.ts
// Estado global do quiz via React Context ou Zustand
// Persiste no sessionStorage para não perder ao navegar
// Valida cada step antes de avançar
```

---

## FASE 4 — Resultado & PDF

### Epic E4: Tela de Resultado e Mini Guia

**Agente responsável:** `@frontend-developer` + `@ui-designer` + `@copywriter`

#### Story E4-S1: Tela 5 — Resultado Personalizado

```
Layout: scroll page, sem limite de altura
Seção 1 — Header do resultado:
  - Badge: "Seu diagnóstico" + perfil selecionado
  - Headline dinâmica baseada no resultado_resumo

Seção 2 — Leitura do Momento (Bloco 1):
  - Título: "Seu momento atual"
  - Parágrafo: leitura_momento

Seção 3 — O que trava (Bloco 2):
  - Título: "O que normalmente trava esse perfil"
  - Parágrafo: o_que_trava

Seção 4 — Três Focos Prioritários (Bloco 3):
  - Título: "Seus 3 focos prioritários agora"
  - Cards numerados: foco_1, foco_2, foco_3
  - Cada card: número em laranja + texto + ícone

Seção 5 — CTA do Mini Guia (Bloco 4):
  - Card destacado com background laranja
  - Título: "Guia Prático DOCS: Clareza e Próximos Passos"
  - Descrição: "Material gratuito com seu resumo personalizado e os próximos passos práticos."
  - Botão: "Baixar meu guia gratuito (PDF) ↓"
  - Animação: entrada em scroll (Framer Motion)

Seção 6 — Footer do resultado:
  - Texto: "Este diagnóstico foi criado pela DOCS Consultoria"
  - Link para contato/WhatsApp DOCS
```

#### Story E4-S2: Geração de PDF do Mini Guia

```
Abordagem: API Route que usa @react-pdf/renderer
Personalização por perfil e resultado

Estrutura do PDF (3 páginas):
  Página 1 — "Seu Resultado"
    - Logo DOCS
    - Nome do respondente
    - Data
    - resultado_resumo (headline)
    - leitura_momento (parágrafo)

  Página 2 — "Seus 3 Focos Prioritários"
    - foco_1, foco_2, foco_3 em cards
    - Contexto: o_que_trava

  Página 3 — "Próximas Perguntas"
    - 3 perguntas de reflexão prática (fixas por perfil)
    - Dentista: foco em clínica, pacientes, processo
    - Radiologia: foco em operação, equipe, crescimento
    - Espaço para anotações
    - Rodapé: DOCS Consultoria + contato

Rota: GET /api/pdf?id={uuid}
Response: application/pdf com Content-Disposition: attachment
```

---

## FASE 5 — Backend & Webhook

### Epic E5: API, Persistência e Integração CRM

**Agente responsável:** `@backend-developer`

#### Story E5-S1: API Route — POST /api/submit

```typescript
// Fluxo:
// 1. Validar payload (zod schema)
// 2. Rodar motor de classificação → gerar resultado
// 3. INSERT no banco (diagnosticos)
// 4. Disparar webhook assíncrono (não bloquear response)
// 5. Retornar { id, resultado }

// Validação obrigatória:
// - nome: string min(2)
// - whatsapp: regex E.164 ou formato BR
// - perfil: enum Perfil
// - todas as opções do quiz: enums validados
```

#### Story E5-S2: Webhook CRM

```typescript
// src/lib/webhook.ts
// POST para WEBHOOK_URL (env var)
// Payload: todos os 15 campos especificados no brief
// Retry: 3 tentativas com backoff exponencial
// Log: status no banco (webhook_enviado, webhook_status)
// Timeout: 10s por tentativa
// Modo graceful: falha no webhook não impede o usuário de ver o resultado
```

**Payload completo:**
```json
{
  "nome": "string",
  "whatsapp": "+55XXXXXXXXXXX",
  "email": "string|null",
  "perfil": "dentista|dono_gestor_radiologia",
  "tempo_atuacao": "string",
  "objetivo_principal": "string",
  "dor_principal": "string",
  "momento_maturidade": "string",
  "aceita_receber_material": true,
  "resultado_resumo": "string",
  "foco_1": "string",
  "foco_2": "string",
  "foco_3": "string",
  "origem": "ativacao_base_docs_2026",
  "submitted_at": "2026-03-14T00:00:00-03:00"
}
```

#### Story E5-S3: Variáveis de Ambiente

```bash
# .env.example
DATABASE_URL=               # Vercel Postgres connection string
WEBHOOK_URL=                # URL do endpoint CRM
WEBHOOK_SECRET=             # Bearer token para autenticação
NEXT_PUBLIC_APP_URL=        # URL pública do app
```

---

## FASE 6 — Polish & Deploy

### Epic E6: Qualidade, Performance e Deploy

**Agente responsável:** `@devops-engineer` + `@qa-cro-specialist` + `@performance-engineer`

#### Story E6-S1: Animações e Micro-interações

```
Transições entre telas: slide horizontal suave (Framer Motion)
RadioCard selecionado: borda laranja + glow sutil
Barra de progresso: animação de preenchimento
Tela de resultado: scroll reveal escalonado
Botão CTA: pulse animation no idle state
Loading state: skeleton ou spinner laranja
```

#### Story E6-S2: Mobile First e Responsividade

```
Breakpoints: sm (375px) → md (768px) → lg (1024px)
Testes obrigatórios: iPhone SE, iPhone 14, Pixel 7, iPad
Área de toque: mínimo 44px para todos os interativos
Sem scroll horizontal em nenhum viewport
RadioCards em grid 1col mobile, 2col tablet
```

#### Story E6-S3: Deploy Vercel

```
- vercel.json com configurações de headers de segurança
- Vercel Postgres provisionado (free tier OK para MVP)
- Variáveis de ambiente configuradas no dashboard Vercel
- Preview deployments habilitados por PR
- Domain customizado (opcional): diagnostico.docs.com.br
```

#### Story E6-S4: Critérios de Aceite Finais

```
- [ ] Diagnóstico completo em ≤ 3 minutos
- [ ] Score Lighthouse Mobile: Performance ≥ 85, A11y ≥ 90
- [ ] Nome e WhatsApp chegam no banco e no webhook
- [ ] Resultado muda conforme as respostas
- [ ] PDF gerado sem erro para todos os perfis
- [ ] Webhook dispara com payload correto
- [ ] Zero layout shift em mobile
- [ ] Funciona offline após carregamento inicial (cache básico)
```

---

## Ordem de Execução Recomendada

```
DIA 1-2:  E1-S1 (Setup Next.js) + E1-S2 (Design System)
DIA 3:    E2-S1 (Types) + E2-S2 (DB Schema) + E2-S3 (Classification engine)
DIA 4:    E2-S4 (Devolutivas — @copywriter escreve todos os textos)
DIA 5-6:  E3-S1 (UI components) + E3-S2 (Tela 1) + E3-S3 (Tela 2)
DIA 7:    E3-S4 (Tela 3) + E3-S5 (Tela 4) + E3-S6 (State management)
DIA 8-9:  E4-S1 (Tela 5 resultado) + E4-S2 (PDF generation)
DIA 10-11: E5-S1 (API submit) + E5-S2 (Webhook) + E5-S3 (Env vars)
DIA 12-13: E6-S1 (Animações) + E6-S2 (Mobile) + E6-S3 (Deploy)
DIA 14:   E6-S4 (QA final + go-live)
```

---

## Mapa de Agentes × Tarefas

| Agente | Responsabilidade |
|--------|-----------------|
| `@frontend-developer` | Setup Next.js, componentes UI, telas do quiz, estado global |
| `@ui-designer` | Design system DOCS, RadioCards, layout resultado |
| `@motion-designer` | Transições entre telas, scroll reveal, micro-interações |
| `@backend-developer` | API routes, banco de dados, webhook, PDF |
| `@copywriter` | 40 combinações de devolutivas + textos das 3 perguntas de reflexão |
| `@qa-cro-specialist` | Testes mobile, cross-browser, funil de conversão |
| `@devops-engineer` | Vercel deploy, env vars, CI/CD, headers de segurança |
| `@performance-engineer` | Lighthouse, otimização de assets, lazy loading |

---

## Dependências npm a Instalar

```bash
# Core (já no create-next-app)
next@15, react@19, typescript, tailwindcss

# Formulários e validação
zod                        # Validação de schema
react-hook-form            # Gerenciamento de formulários

# Banco de dados
@vercel/postgres           # Vercel Postgres client

# PDF
@react-pdf/renderer        # Geração de PDF no servidor

# Animações
framer-motion              # Transições e micro-interações

# Utilitários
clsx                       # Condicional classnames
tailwind-merge             # Merge de classes Tailwind
libphonenumber-js          # Validação e formatação de telefone

# Dev
@types/node, eslint, prettier
```

---

*Workflow criado por Orion (AIOS Master) — 2026-03-14*
*Baseado em: docs/project-brief.md + Brief_Ferramenta_1_Diagnostico_Momento_Crescimento_DOCS.pdf*
