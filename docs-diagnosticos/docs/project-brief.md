# Project Brief — Ferramenta 1: Diagnóstico de Momento e Crescimento DOCS

**Versão:** 1.0
**Data:** 2026-03-14
**Cliente:** DOCS Consultoria (Dr. Fábio)
**Responsável:** Squad webdesign-agency
**Status:** Aprovado para desenvolvimento

---

## 1. Visão Geral do Produto

### Problema
A DOCS possui uma base parada de contatos que em algum momento conheceram o Dr. Fábio ou a DOCS. Essa base está inativa, sem segmentação e sem dados estruturados para ações de prospecção inteligente.

### Solução
Uma ferramenta de diagnóstico interativo (quiz de 5 telas) que ativa a base, entrega valor imediato ao respondente e gera dados estruturados para o CRM — sem cara de venda, sem IA generativa em tempo real.

### Proposta de Valor
> "Em 3 minutos, descubra em qual momento você está e receba um guia prático com seus próximos passos."

---

## 2. Objetivos de Negócio

| # | Objetivo | Critério de Sucesso |
|---|----------|---------------------|
| 1 | Reativar base parada | Taxa de conclusão ≥ 60% |
| 2 | Segmentar dentistas vs. radiologia | 100% dos envios classificados |
| 3 | Enriquecer CRM com dados de momento | Webhook disparado em 100% dos envios |
| 4 | Entregar valor percebido imediato | Mini guia gerado sem erro em 100% dos casos |
| 5 | Capturar permissão para próximo contato | Campo `aceita_receber_material` registrado |

---

## 3. Público-Alvo

### Perfil A — Dentista
- Profissional que atende pacientes e usa radiologia odontológica
- Dores: atrair mais pacientes, melhorar preço/margem, organizar rotina
- Canal de entrada: WhatsApp (mobile-first)

### Perfil B — Dono/Gestor de Clínica de Radiologia Odontológica
- Gestor ou proprietário de clínica especializada em radiologia
- Dores: previsibilidade, gestão do crescimento, organização de processos
- Canal de entrada: WhatsApp (mobile-first)

---

## 4. Fluxo da Experiência (5 Telas)

```
[Tela 1 - Abertura]
  → Nome do diagnóstico + promessa + tempo estimado (2–3 min) + botão "Começar"

[Tela 2 - Identificação]
  → Nome completo (obrigatório)
  → WhatsApp com máscara (obrigatório)
  → E-mail (opcional)
  → Perfil: Dentista / Dono(a) ou Gestor(a) de Radiologia

[Tela 3 - Momento Atual]
  → Há quanto tempo atua na área? (< 2 anos / 2–5 anos / +5 anos)
  → O que mais quer melhorar hoje? (4 opções)
  → Qual sua maior dificuldade hoje? (5 opções)
  → Em qual momento você sente que está? (4 opções de maturidade)

[Tela 4 - Confirmação]
  → "Você quer receber sua leitura inicial com orientações práticas?" (Sim / Não)
  → Ao enviar: persiste no banco + dispara webhook

[Tela 5 - Resultado]
  → Leitura personalizada (Bloco 1–3)
  → 3 focos prioritários
  → Botão para baixar Mini Guia em PDF
```

---

## 5. Perguntas e Opções de Resposta

### Bloco Identificação
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Nome completo | Texto livre | Sim |
| WhatsApp | Texto com máscara | Sim |
| E-mail | Texto | Não |

### Bloco Perfil
| Pergunta | Opções |
|----------|--------|
| Qual dessas opções melhor descreve você hoje? | Dentista / Dono(a) ou Gestor(a) de Clínica de Radiologia Odontológica |

### Bloco Momento
| Pergunta | Opções |
|----------|--------|
| Há quanto tempo você atua nessa área? | Menos de 2 anos / 2 a 5 anos / Mais de 5 anos |
| O que você mais quer melhorar hoje? | Crescer e faturar mais / Organizar melhor minha rotina ou operação / Melhorar comercial e conversão / Ter mais previsibilidade e qualidade de vida |

### Bloco Dor
| Pergunta | Opções |
|----------|--------|
| Qual é sua maior dificuldade hoje? | Atrair mais pacientes ou clientes / Vender melhor / Melhorar preço e margem / Organizar gestão e processos / Melhorar equipe e atendimento |

### Bloco Maturidade
| Pergunta | Opções |
|----------|--------|
| Hoje você sente que está em qual momento? | Começando a estruturar / Crescendo, mas com desorganização / Já operando, mas com gargalos / Buscando mais escala e previsibilidade |

---

## 6. Lógica de Classificação e Devolutiva

### Algoritmo de Montagem
```
resultado = f(perfil + momento_maturidade + dor_principal + objetivo_principal)
```

**Passo 1:** Definir perfil → `dentista` ou `dono_gestor_radiologia`
**Passo 2:** Identificar objetivo principal (pergunta "O que mais quer melhorar")
**Passo 3:** Identificar dor principal (pergunta "Maior dificuldade")
**Passo 4:** Identificar momento de maturidade percebida
**Passo 5:** Montar devolutiva combinando os 4 vetores

### Estrutura da Devolutiva (4 Blocos)

| Bloco | Conteúdo |
|-------|----------|
| **Bloco 1 — Leitura do momento** | Parágrafo curto explicando o que o conjunto de respostas mostra |
| **Bloco 2 — O que trava esse perfil** | Leitura objetiva conectando perfil + dor principal |
| **Bloco 3 — Três focos prioritários** | 3 bullets simples e práticos |
| **Bloco 4 — Material complementar** | Botão para baixar o Mini Guia PDF |

### Exemplos de Devolutiva

**Dentista — Crescendo com desorganização + dor: preço/margem:**
> "Seu momento indica crescimento com gargalos de organização e margem. Hoje, seu foco precisa estar em definir prioridades claras, melhorar consistência comercial e tomar decisões financeiras com mais segurança."

**Dono/Gestor de Radiologia — mesma combinação:**
> "Seu momento indica operação com potencial, mas ainda com gargalos de previsibilidade. Hoje, seu foco precisa estar em clareza de prioridades, organização dos processos e fortalecimento da gestão do crescimento."

---

## 7. Mini Guia PDF — "Guia Prático DOCS: Clareza e Próximos Passos"

**Nome único** para ambos os perfis, texto interno adaptado ao resultado.

| Página | Conteúdo |
|--------|----------|
| 1 | Resumo do resultado + leitura do momento |
| 2 | Três focos prioritários para agir agora |
| 3 | Três perguntas de reflexão prática para organizar o próximo passo |

---

## 8. Webhook CRM — Payload

```json
{
  "nome": "string (obrigatório)",
  "whatsapp": "string E.164 (obrigatório)",
  "email": "string (opcional)",
  "perfil": "dentista | dono_gestor_radiologia",
  "tempo_atuacao": "menos_de_2_anos | 2_a_5_anos | mais_de_5_anos",
  "objetivo_principal": "crescer_e_faturar_mais | organizar_rotina | melhorar_comercial | previsibilidade_qualidade_vida",
  "dor_principal": "atrair_clientes | vender_melhor | melhorar_preco_margem | organizar_gestao | melhorar_equipe",
  "momento_maturidade": "comecando_estruturar | crescendo_desorganizacao | operando_com_gargalos | buscando_escala",
  "aceita_receber_material": "boolean",
  "resultado_resumo": "string (frase curta gerada pela lógica)",
  "foco_1": "string",
  "foco_2": "string",
  "foco_3": "string",
  "origem": "ativacao_base_docs_2026",
  "submitted_at": "ISO 8601 datetime"
}
```

---

## 9. Requisitos de Interface e Usabilidade

- Design dark mode premium — identidade DOCS: laranja `#E87722` + preto
- Mobile-first (maioria da base responde via WhatsApp)
- Barra de progresso visível entre telas (reduz abandono)
- Máximo 2–3 perguntas por tela
- Máscara de WhatsApp para reduzir erro de digitação
- Botão "Continuar" sempre em evidência
- CTA final claro para baixar o material
- Página de resultado: leitura curta, sem excesso de texto, alto valor percebido

---

## 10. Stack Técnica

| Camada | Tecnologia |
|--------|------------|
| Framework | Next.js (App Router) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS |
| Banco de dados | Vercel Postgres (ou Supabase) |
| PDF | react-pdf ou puppeteer/html-to-pdf |
| Webhook | API Route Next.js → POST para CRM externo |
| Deploy | Vercel |
| Fonte | Space Grotesk |

---

## 11. Features com Prioridade MoSCoW

### Must Have (MVP)
- [ ] Tela 1 — Abertura com CTA
- [ ] Tela 2 — Coleta de dados pessoais + perfil
- [ ] Tela 3 — Perguntas de momento/dor/maturidade
- [ ] Tela 4 — Confirmação e envio
- [ ] Tela 5 — Resultado personalizado com devolutiva
- [ ] Lógica de classificação por regras (sem IA)
- [ ] Persistência no banco de dados
- [ ] Webhook disparado ao final
- [ ] Geração de PDF do mini guia
- [ ] Barra de progresso entre telas
- [ ] Design dark mode DOCS (laranja + preto)
- [ ] Mobile-first responsivo

### Should Have
- [ ] Máscara de WhatsApp (formato internacional)
- [ ] Validação de formulário em tempo real
- [ ] Animações de transição entre telas
- [ ] Página de resultado com scroll reveal premium
- [ ] Textos de devolutiva para todas as combinações de respostas

### Could Have
- [ ] E-mail automático com o PDF após envio
- [ ] Analytics de funil (início → conclusão)
- [ ] Preview do mini guia antes do download

### Won't Have (v1)
- [ ] IA generativa em tempo real
- [ ] Login/autenticação de usuário
- [ ] Dashboard administrativo
- [ ] A/B testing de versões

---

## 12. User Stories Priorizadas

### US-01 — Completar diagnóstico (Must Have)
```
Como dentista ou gestor de radiologia,
Quero responder um diagnóstico rápido em 3 minutos,
Para entender meu momento atual e receber orientações práticas.

Critério de aceitação:
- [ ] Dado que acesso a página, quando clico em "Começar", então vejo a Tela 2
- [ ] Dado que preencho nome e WhatsApp, quando clico em "Continuar", então vejo a Tela 3
- [ ] Dado que respondo todas as perguntas, quando clico em "Enviar", então vejo meu resultado
```

### US-02 — Receber devolutiva personalizada (Must Have)
```
Como respondente,
Quero ver uma leitura do meu momento com 3 focos prioritários,
Para saber o que devo priorizar agora.

Critério de aceitação:
- [ ] Dado que sou dentista, quando concluo o quiz, então vejo devolutiva com linguagem de dentista
- [ ] Dado que sou gestor de radiologia, quando concluo o quiz, então vejo devolutiva com linguagem de gestão
- [ ] Dado qualquer combinação de respostas, então sempre exibo 3 focos distintos
```

### US-03 — Baixar Mini Guia PDF (Must Have)
```
Como respondente que concluiu o diagnóstico,
Quero baixar o "Guia Prático DOCS: Clareza e Próximos Passos",
Para ter um material concreto para agir.

Critério de aceitação:
- [ ] Dado que clico em "Baixar Mini Guia", então recebo um PDF válido e legível
- [ ] Dado que sou dentista, então o PDF usa linguagem de dentista
- [ ] O PDF tem 3 páginas: resumo, focos e perguntas de reflexão
```

### US-04 — Dados chegam ao CRM (Must Have)
```
Como equipe DOCS,
Quero que cada envio dispare um webhook com todos os dados estruturados,
Para segmentar e prospectar com inteligência.

Critério de aceitação:
- [ ] Dado que usuário clica em "Enviar" na Tela 4, então webhook é disparado em < 3s
- [ ] Dado que webhook falha, então os dados foram previamente salvos no banco
- [ ] O payload contém todos os 15 campos especificados no brief
```

### US-05 — Experiência mobile fluida (Must Have)
```
Como respondente que acessa pelo WhatsApp,
Quero uma experiência limpa e rápida no celular,
Para concluir o diagnóstico sem fricção.

Critério de aceitação:
- [ ] Layout funciona em viewport 375px (iPhone SE) sem scroll horizontal
- [ ] Botões têm área de toque mínima de 44px
- [ ] Barra de progresso visível em todas as telas intermediárias
```

---

## 13. Critérios de Aceite Gerais

1. Usuário conclui diagnóstico em até 3 minutos
2. Nome e WhatsApp são obrigatórios e chegam corretamente ao banco e ao webhook
3. Sistema classifica corretamente entre dentista e radiologia
4. Página de resultado muda conforme perfil e respostas
5. Mini guia é gerado/disponibilizado sem erro
6. Dados chegam estruturados ao CRM para segmentação futura

---

## 14. Entregáveis Esperados

- [ ] Página pública da Ferramenta 1 pronta para uso
- [ ] Página de resultado personalizada (Tela 5)
- [ ] Geração do mini guia em PDF
- [ ] Persistência das respostas no banco
- [ ] Webhook funcional para CRM
- [ ] Documento com todos os blocos de texto das devolutivas e regras de classificação
- [ ] Deploy no Vercel

---

## 15. Restrições e Premissas

- **Sem IA generativa em produção** — resultado construído com regras e blocos pré-escritos
- **Sem venda nesta fase** — ferramenta de ativação e enriquecimento de dados
- **Mobile-first obrigatório** — base responde via WhatsApp
- **Dados mínimos obrigatórios:** nome + WhatsApp
- **Webhook deve ser resiliente** — dados salvos no banco antes do disparo

---

*Documento gerado por Orion (AIOS Master) a partir do Brief Técnico DOCS v1.0 — 2026-03-14*
