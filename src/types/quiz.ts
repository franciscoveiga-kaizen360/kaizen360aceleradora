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
  id: string
  resultado_resumo: string
  leitura_momento: string
  o_que_trava: string
  foco_1: string
  foco_2: string
  foco_3: string
  perfil: Perfil
}

export interface DevolutivaEntry {
  resumo: string
  bloco1: string
  bloco2: string
  focos: [string, string, string]
}
