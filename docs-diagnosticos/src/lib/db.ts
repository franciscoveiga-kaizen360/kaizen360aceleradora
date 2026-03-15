import type { QuizAnswers, Resultado } from '@/types/quiz'

// ─── Mock store (in-memory, survives hot-reload via global) ──────────────────
// Used when POSTGRES_URL is not set. Data lives only for the Node.js process lifetime.

interface DiagnosticoRow {
  id: string
  nome: string
  whatsapp: string
  email: string | null
  perfil: string
  tempo_atuacao: string
  objetivo_principal: string
  dor_principal: string
  momento_maturidade: string
  aceita_receber_material: boolean
  resultado_resumo: string
  leitura_momento: string
  o_que_trava: string
  foco_1: string
  foco_2: string
  foco_3: string
  origem: string
  webhook_enviado: boolean
  webhook_status: string | null
  submitted_at: string
}

// Persist across Next.js hot-reloads in development
const g = globalThis as typeof globalThis & { _mockDb?: Map<string, DiagnosticoRow> }
if (!g._mockDb) g._mockDb = new Map()
const mockStore = g._mockDb

const isPostgresConfigured = !!process.env.POSTGRES_URL

// ─── Postgres helpers (only imported when DB is configured) ──────────────────

async function pgSave(answers: QuizAnswers, resultado: Resultado): Promise<void> {
  const { sql } = await import('@vercel/postgres')
  const id = resultado.id

  await sql`
    CREATE TABLE IF NOT EXISTS diagnosticos (
      id UUID PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      whatsapp VARCHAR(20) NOT NULL,
      email VARCHAR(255),
      perfil VARCHAR(50) NOT NULL,
      tempo_atuacao VARCHAR(100) NOT NULL,
      objetivo_principal VARCHAR(100) NOT NULL,
      dor_principal VARCHAR(100) NOT NULL,
      momento_maturidade VARCHAR(100) NOT NULL,
      aceita_receber_material BOOLEAN NOT NULL DEFAULT false,
      resultado_resumo TEXT,
      leitura_momento TEXT,
      o_que_trava TEXT,
      foco_1 TEXT,
      foco_2 TEXT,
      foco_3 TEXT,
      origem VARCHAR(100) DEFAULT 'ativacao_base_docs_2026',
      webhook_enviado BOOLEAN DEFAULT false,
      webhook_status VARCHAR(20),
      submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `

  await sql`
    INSERT INTO diagnosticos (
      id, nome, whatsapp, email, perfil, tempo_atuacao,
      objetivo_principal, dor_principal, momento_maturidade,
      aceita_receber_material, resultado_resumo, leitura_momento,
      o_que_trava, foco_1, foco_2, foco_3
    ) VALUES (
      ${id}::uuid, ${answers.nome}, ${answers.whatsapp}, ${answers.email ?? null},
      ${answers.perfil}, ${answers.tempo_atuacao},
      ${answers.objetivo_principal}, ${answers.dor_principal},
      ${answers.momento_maturidade}, ${answers.aceita_receber_material},
      ${resultado.resultado_resumo}, ${resultado.leitura_momento},
      ${resultado.o_que_trava}, ${resultado.foco_1},
      ${resultado.foco_2}, ${resultado.foco_3}
    )
  `
}

async function pgUpdateWebhook(id: string, status: 'ok' | 'error'): Promise<void> {
  const { sql } = await import('@vercel/postgres')
  await sql`
    UPDATE diagnosticos
    SET webhook_enviado = ${status === 'ok'}, webhook_status = ${status}
    WHERE id = ${id}::uuid
  `
}

async function pgGet(id: string): Promise<DiagnosticoRow | null> {
  const { sql } = await import('@vercel/postgres')
  const { rows } = await sql`SELECT * FROM diagnosticos WHERE id = ${id}::uuid LIMIT 1`
  return (rows[0] as DiagnosticoRow) ?? null
}

// ─── Mock helpers ────────────────────────────────────────────────────────────

function mockSave(answers: QuizAnswers, resultado: Resultado): void {
  const row: DiagnosticoRow = {
    id: resultado.id,
    nome: answers.nome,
    whatsapp: answers.whatsapp,
    email: answers.email ?? null,
    perfil: answers.perfil,
    tempo_atuacao: answers.tempo_atuacao,
    objetivo_principal: answers.objetivo_principal,
    dor_principal: answers.dor_principal,
    momento_maturidade: answers.momento_maturidade,
    aceita_receber_material: answers.aceita_receber_material,
    resultado_resumo: resultado.resultado_resumo,
    leitura_momento: resultado.leitura_momento,
    o_que_trava: resultado.o_que_trava,
    foco_1: resultado.foco_1,
    foco_2: resultado.foco_2,
    foco_3: resultado.foco_3,
    origem: 'ativacao_base_docs_2026',
    webhook_enviado: false,
    webhook_status: null,
    submitted_at: new Date().toISOString(),
  }
  mockStore.set(resultado.id, row)
}

function mockUpdateWebhook(id: string, status: 'ok' | 'error'): void {
  const row = mockStore.get(id)
  if (row) {
    row.webhook_enviado = status === 'ok'
    row.webhook_status = status
  }
}

function mockGet(id: string): DiagnosticoRow | null {
  return mockStore.get(id) ?? null
}

// ─── Public API ──────────────────────────────────────────────────────────────

export async function saveRespostas(answers: QuizAnswers, resultado: Resultado): Promise<void> {
  if (isPostgresConfigured) {
    await pgSave(answers, resultado)
  } else {
    mockSave(answers, resultado)
  }
}

export async function updateWebhookStatus(id: string, status: 'ok' | 'error'): Promise<void> {
  if (isPostgresConfigured) {
    await pgUpdateWebhook(id, status)
  } else {
    mockUpdateWebhook(id, status)
  }
}

export async function getResultado(id: string): Promise<DiagnosticoRow | null> {
  if (isPostgresConfigured) {
    return pgGet(id)
  }
  return mockGet(id)
}
