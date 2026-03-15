import type { QuizAnswers, Resultado } from '@/types/quiz'

// Docs Growth CRM — POST /api/contact
interface DocsGrowthPayload {
  number: string
  name: string
  tags: string[]
  customFields: Record<string, string | boolean>
}

function buildPayload(answers: QuizAnswers, resultado: Resultado): DocsGrowthPayload {
  const tags = [
    'diagnostico-docs-2026',
    answers.perfil === 'dentista' ? 'perfil:dentista' : 'perfil:radiologia',
    `maturidade:${answers.momento_maturidade}`,
    answers.aceita_receber_material ? 'aceita-material' : 'nao-aceita-material',
  ]

  const customFields: Record<string, string | boolean> = {
    email: answers.email ?? '',
    perfil: answers.perfil,
    tempo_atuacao: answers.tempo_atuacao,
    objetivo_principal: answers.objetivo_principal,
    dor_principal: answers.dor_principal,
    momento_maturidade: answers.momento_maturidade,
    aceita_receber_material: answers.aceita_receber_material,
    resultado_resumo: resultado.resultado_resumo,
    foco_1: resultado.foco_1,
    foco_2: resultado.foco_2,
    foco_3: resultado.foco_3,
    origem: 'ativacao_base_docs_2026',
    submitted_at: new Date().toISOString(),
  }

  return {
    number: answers.whatsapp,
    name: answers.nome,
    tags,
    customFields,
  }
}

export async function dispararWebhook(
  answers: QuizAnswers,
  resultado: Resultado
): Promise<boolean> {
  const webhookUrl = process.env.WEBHOOK_URL
  const apiKey = process.env.WEBHOOK_SECRET
  if (!webhookUrl || !apiKey) return false

  const payload = buildPayload(answers, resultado)

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'api-key': apiKey,
  }

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10_000),
      })
      if (res.ok) return true
      // 4xx errors won't improve with retry
      if (res.status >= 400 && res.status < 500) return false
    } catch {
      if (attempt < 3) await new Promise(r => setTimeout(r, attempt * 1000))
    }
  }
  return false
}
