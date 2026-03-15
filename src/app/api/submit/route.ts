import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { classificar } from '@/lib/classification'
import { saveRespostas, updateWebhookStatus } from '@/lib/db'
import { dispararWebhook } from '@/lib/webhook'
import { randomUUID } from 'crypto'

const schema = z.object({
  nome: z.string().min(2),
  whatsapp: z.string().min(10),
  email: z.string().email().optional().or(z.literal('')),
  perfil: z.enum(['dentista', 'dono_gestor_radiologia']),
  tempo_atuacao: z.enum(['menos_de_2_anos', '2_a_5_anos', 'mais_de_5_anos']),
  objetivo_principal: z.enum([
    'crescer_e_faturar_mais',
    'organizar_rotina',
    'melhorar_comercial',
    'previsibilidade_qualidade_vida',
  ]),
  dor_principal: z.enum([
    'atrair_clientes',
    'vender_melhor',
    'melhorar_preco_margem',
    'organizar_gestao',
    'melhorar_equipe',
  ]),
  momento_maturidade: z.enum([
    'comecando_estruturar',
    'crescendo_desorganizacao',
    'operando_com_gargalos',
    'buscando_escala',
  ]),
  aceita_receber_material: z.boolean(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const answers = schema.parse(body)

    const id = randomUUID()
    const resultado = classificar(answers, id)

    // Persist first — never lose a lead
    await saveRespostas(answers, resultado)

    // Fire webhook async (don't block response)
    dispararWebhook(answers, resultado)
      .then(ok => updateWebhookStatus(id, ok ? 'ok' : 'error'))
      .catch(() => updateWebhookStatus(id, 'error'))

    return NextResponse.json({ id, resultado })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 })
    }
    console.error('[submit]', err)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
