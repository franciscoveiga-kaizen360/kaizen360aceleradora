import type { QuizAnswers, Resultado, DevolutivaEntry } from '@/types/quiz'
import { DEVOLUTIVAS, FALLBACK_DENTISTA, FALLBACK_RADIOLOGIA } from '@/data/devolutivas'

export function classificar(answers: QuizAnswers, id: string = ''): Resultado {
  const key = `${answers.perfil}:${answers.momento_maturidade}:${answers.dor_principal}`
  const entry: DevolutivaEntry =
    DEVOLUTIVAS[key] ??
    (answers.perfil === 'dentista' ? FALLBACK_DENTISTA : FALLBACK_RADIOLOGIA)

  return {
    id,
    resultado_resumo: entry.resumo,
    leitura_momento: entry.bloco1,
    o_que_trava: entry.bloco2,
    foco_1: entry.focos[0],
    foco_2: entry.focos[1],
    foco_3: entry.focos[2],
    perfil: answers.perfil,
  }
}
