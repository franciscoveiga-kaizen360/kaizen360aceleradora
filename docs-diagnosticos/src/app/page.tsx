'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import type {
  Perfil,
  TempoAtuacao,
  ObjetivoPrincipal,
  DorPrincipal,
  MomentoMaturidade,
  QuizAnswers,
} from '@/types/quiz'
import styles from './page.module.css'

// ─── Types ──────────────────────────────────────
interface FormState {
  nome: string
  whatsapp: string
  email: string
  perfil: Perfil | ''
  tempo_atuacao: TempoAtuacao | ''
  objetivo_principal: ObjetivoPrincipal | ''
  dor_principal: DorPrincipal | ''
  momento_maturidade: MomentoMaturidade | ''
  aceita_receber_material: boolean
}

interface FieldErrors {
  nome?: string
  whatsapp?: string
  email?: string
  perfil?: string
  tempo_atuacao?: string
  objetivo_principal?: string
  dor_principal?: string
  momento_maturidade?: string
}

// ─── WhatsApp mask ───────────────────────────────
function maskWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

function toInternational(masked: string): string {
  const digits = masked.replace(/\D/g, '')
  return `55${digits}`
}

// ─── Animation variants ──────────────────────────
const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  }),
}

// ─── Option data ─────────────────────────────────
const PERFIL_OPTIONS: { value: Perfil; icon: string; label: string }[] = [
  {
    value: 'dentista',
    icon: '🦷',
    label: 'Dentista / Clínica Odontológica',
  },
  {
    value: 'dono_gestor_radiologia',
    icon: '🩻',
    label: 'Clínica de Radiologia Odontológica',
  },
]

const TEMPO_OPTIONS: { value: TempoAtuacao; icon: string; label: string; desc: string }[] = [
  { value: 'menos_de_2_anos', icon: '🌱', label: 'Menos de 2 anos', desc: '(Início de trajetória)' },
  { value: '2_a_5_anos', icon: '📈', label: 'De 2 a 5 anos', desc: '(Fase de consolidação)' },
  { value: 'mais_de_5_anos', icon: '🏆', label: 'Mais de 5 anos', desc: '(Operação madura)' },
]

const OBJETIVO_OPTIONS: { value: ObjetivoPrincipal; icon: string; label: string }[] = [
  { value: 'crescer_e_faturar_mais', icon: '💰', label: 'Crescer e faturar mais' },
  { value: 'organizar_rotina', icon: '🗂️', label: 'Organizar a rotina e processos' },
  { value: 'melhorar_comercial', icon: '🤝', label: 'Melhorar o comercial e vendas' },
  { value: 'previsibilidade_qualidade_vida', icon: '⚖️', label: 'Previsibilidade e qualidade de vida' },
]

const DOR_OPTIONS: { value: DorPrincipal; icon: string; label: string; desc: string }[] = [
  { value: 'atrair_clientes', icon: '🎯', label: 'Atrair mais pacientes/clientes', desc: '(Captação e visibilidade)' },
  { value: 'vender_melhor', icon: '💬', label: 'Vender e converter melhor', desc: '(Aprovação de orçamentos)' },
  { value: 'melhorar_preco_margem', icon: '📊', label: 'Melhorar preço e margem', desc: '(Rentabilidade)' },
  { value: 'organizar_gestao', icon: '🏗️', label: 'Organizar gestão e processos', desc: '(Operação eficiente)' },
  { value: 'melhorar_equipe', icon: '👥', label: 'Desenvolver minha equipe', desc: '(Pessoas e liderança)' },
]

const MATURIDADE_OPTIONS: { value: MomentoMaturidade; icon: string; label: string; desc: string }[] = [
  {
    value: 'comecando_estruturar',
    icon: '🔧',
    label: 'Começando a estruturar',
    desc: '(Ainda sem processos definidos)',
  },
  {
    value: 'crescendo_desorganizacao',
    icon: '🌊',
    label: 'Crescendo com desorganização',
    desc: '(Movimento, mas sem sistema definido)',
  },
  {
    value: 'operando_com_gargalos',
    icon: '⚙️',
    label: 'Operando com gargalos',
    desc: '(Funciona, mas trava em pontos-chave)',
  },
  {
    value: 'buscando_escala',
    icon: '🚀',
    label: 'Pronto para escalar',
    desc: '(Base sólida, quer crescer mais)',
  },
]

// ─── Initial state ───────────────────────────────
const INITIAL_STATE: FormState = {
  nome: '',
  whatsapp: '',
  email: '',
  perfil: '',
  tempo_atuacao: '',
  objetivo_principal: '',
  dor_principal: '',
  momento_maturidade: '',
  aceita_receber_material: true,
}

// ─── RadioCard component ─────────────────────────
interface RadioCardProps {
  selected: boolean
  onClick: () => void
  icon: string
  label: string
  desc?: string
}

function RadioCard({ selected, onClick, icon, label, desc }: RadioCardProps) {
  return (
    <button
      type="button"
      className={`${styles.radioCard} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <span className={styles.radioCardIcon}>{icon}</span>
      <span className={styles.radioCardContent}>
        <span className={styles.radioCardLabel}>{label}</span>
        {desc && <span className={styles.radioCardDesc}>{desc}</span>}
      </span>
      <span className={styles.radioCheck} />
    </button>
  )
}

// ─── TOTAL STEPS ─────────────────────────────────
const TOTAL_STEPS = 4 // 0, 1, 2, 3 (+ loading = 4)

// ─── Main component ──────────────────────────────
export default function DiagnosticoPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [whatsappDisplay, setWhatsappDisplay] = useState('')

  const progressPercent = step === 0 ? 0 : Math.round((step / TOTAL_STEPS) * 100)

  const goNext = useCallback(() => {
    setDirection(1)
    setStep(s => s + 1)
  }, [])

  const goBack = useCallback(() => {
    setDirection(-1)
    setStep(s => s - 1)
  }, [])

  const setField = useCallback(<K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm(prev => ({ ...prev, [key]: value }))
    setErrors(prev => ({ ...prev, [key]: undefined }))
  }, [])

  // ─── Validation ──────────────────────────────
  const validateStep1 = (): boolean => {
    const errs: FieldErrors = {}
    if (!form.nome.trim() || form.nome.trim().length < 2) {
      errs.nome = 'Informe seu nome completo'
    }
    const digits = form.whatsapp.replace(/\D/g, '')
    if (digits.length < 10) {
      errs.whatsapp = 'WhatsApp inválido — informe DDD + número'
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'E-mail inválido'
    }
    if (!form.perfil) {
      errs.perfil = 'Selecione seu perfil'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const validateStep2 = (): boolean => {
    const errs: FieldErrors = {}
    if (!form.tempo_atuacao) errs.tempo_atuacao = 'Selecione uma opção'
    if (!form.objetivo_principal) errs.objetivo_principal = 'Selecione uma opção'
    if (!form.dor_principal) errs.dor_principal = 'Selecione uma opção'
    if (!form.momento_maturidade) errs.momento_maturidade = 'Selecione uma opção'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleStep1Next = () => {
    if (validateStep1()) goNext()
  }

  const handleStep2Next = () => {
    if (validateStep2()) goNext()
  }

  // ─── Submit ───────────────────────────────────
  const handleSubmit = async () => {
    if (submitting) return
    setSubmitting(true)
    setStep(4) // loading

    const payload: QuizAnswers = {
      nome: form.nome.trim(),
      whatsapp: toInternational(whatsappDisplay),
      email: form.email.trim() || undefined,
      perfil: form.perfil as Perfil,
      tempo_atuacao: form.tempo_atuacao as TempoAtuacao,
      objetivo_principal: form.objetivo_principal as ObjetivoPrincipal,
      dor_principal: form.dor_principal as DorPrincipal,
      momento_maturidade: form.momento_maturidade as MomentoMaturidade,
      aceita_receber_material: form.aceita_receber_material,
    }

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json() as { id: string }
      if (res.ok && data.id) {
        router.push(`/resultado?id=${data.id}`)
      } else {
        // fallback: try classification client-side
        setSubmitting(false)
        setStep(3)
      }
    } catch {
      setSubmitting(false)
      setStep(3)
    }
  }

  // ─── Labels for confirmation ──────────────────
  const PERFIL_LABEL: Record<string, string> = {
    dentista: 'Dentista / Clínica Odontológica',
    dono_gestor_radiologia: 'Clínica de Radiologia',
  }
  const TEMPO_LABEL: Record<string, string> = {
    menos_de_2_anos: 'Menos de 2 anos',
    '2_a_5_anos': 'De 2 a 5 anos',
    mais_de_5_anos: 'Mais de 5 anos',
  }
  const OBJETIVO_LABEL: Record<string, string> = {
    crescer_e_faturar_mais: 'Crescer e faturar mais',
    organizar_rotina: 'Organizar rotina e processos',
    melhorar_comercial: 'Melhorar comercial e vendas',
    previsibilidade_qualidade_vida: 'Previsibilidade e qualidade de vida',
  }
  const DOR_LABEL: Record<string, string> = {
    atrair_clientes: 'Atrair mais clientes',
    vender_melhor: 'Vender e converter melhor',
    melhorar_preco_margem: 'Melhorar preço e margem',
    organizar_gestao: 'Organizar gestão',
    melhorar_equipe: 'Desenvolver equipe',
  }
  const MATURIDADE_LABEL: Record<string, string> = {
    comecando_estruturar: 'Começando a estruturar',
    crescendo_desorganizacao: 'Crescendo com desorganização',
    operando_com_gargalos: 'Operando com gargalos',
    buscando_escala: 'Pronto para escalar',
  }

  // ─── Loading screen ───────────────────────────
  if (step === 4) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.spinner} />
        <p className={styles.loadingText}>Gerando seu diagnóstico personalizado…</p>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Header */}
      <header className={styles.header}>
        <span className={styles.logo}>
          <Image src="/logo.png" alt="DOCS Consultoria" width={36} height={36} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />
          DOCS <span className={styles.logoAccent}>Consultoria</span>
        </span>
        {step > 0 && (
          <span className={styles.stepIndicator}>
            Etapa {step} de {TOTAL_STEPS - 1}
          </span>
        )}
      </header>

      {/* Main */}
      <main className={styles.main}>
        <div className={styles.container}>
          <AnimatePresence mode="wait" custom={direction}>
            {/* ─── STEP 0: Abertura ─── */}
            {step === 0 && (
              <motion.div
                key="step0"
                className={styles.step}
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className={styles.openingCard}>
                  <h1 className={styles.openingTitle}>
                    Diagnóstico de Momento e Crescimento
                  </h1>
                  <p className={styles.openingSubtitle}>
                    Em menos de 3 minutos, descubra onde você está na jornada de crescimento
                    e quais são as 3 ações prioritárias para o seu negócio agora.
                  </p>
                  <div className={styles.openingMeta}>
                    <span className={styles.metaItem}>
                      <span className={styles.metaDot} />
                      3 minutos
                    </span>
                    <span className={styles.metaItem}>
                      <span className={styles.metaDot} />
                      8 perguntas
                    </span>
                    <span className={styles.metaItem}>
                      <span className={styles.metaDot} />
                      Diagnóstico gratuito
                    </span>
                  </div>
                  <button className={styles.btnPrimary} onClick={goNext}>
                    Quero meu diagnóstico →
                  </button>
                  <p className={styles.privacyNote} style={{ marginTop: 'var(--space-4)' }}>
                    Seus dados são tratados com segurança, em conformidade com a LGPD.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ─── STEP 1: Identificação ─── */}
            {step === 1 && (
              <motion.div
                key="step1"
                className={styles.step}
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h2 className={styles.sectionTitle}>Sobre você</h2>
                <p className={styles.sectionSubtitle}>
                  Precisamos de algumas informações básicas para personalizar seu diagnóstico.
                </p>

                {/* Nome */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="nome">
                    Nome completo <span className={styles.labelRequired}>*</span>
                  </label>
                  <input
                    id="nome"
                    type="text"
                    className={`${styles.input} ${errors.nome ? styles.error : ''}`}
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={e => setField('nome', e.target.value)}
                    autoComplete="name"
                  />
                  {errors.nome && <p className={styles.fieldError}>{errors.nome}</p>}
                </div>

                {/* WhatsApp + Email */}
                <div className={styles.fieldRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="whatsapp">
                      WhatsApp <span className={styles.labelRequired}>*</span>
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      className={`${styles.input} ${errors.whatsapp ? styles.error : ''}`}
                      placeholder="(11) 99999-9999"
                      value={whatsappDisplay}
                      onChange={e => {
                        const masked = maskWhatsApp(e.target.value)
                        setWhatsappDisplay(masked)
                        setField('whatsapp', masked)
                      }}
                      autoComplete="tel"
                      inputMode="tel"
                    />
                    {errors.whatsapp && <p className={styles.fieldError}>{errors.whatsapp}</p>}
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="email">
                      E-mail <span style={{ color: 'var(--color-muted)', fontSize: '0.75rem' }}>(opcional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`${styles.input} ${errors.email ? styles.error : ''}`}
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={e => setField('email', e.target.value)}
                      autoComplete="email"
                      inputMode="email"
                    />
                    {errors.email && <p className={styles.fieldError}>{errors.email}</p>}
                  </div>
                </div>

                {/* Perfil */}
                <div className={styles.fieldGroup}>
                  <span className={styles.questionLabel}>
                    Qual é o seu perfil? <span className={styles.labelRequired}>*</span>
                  </span>
                  {errors.perfil && <p className={styles.fieldError}>{errors.perfil}</p>}
                  <div className={`${styles.radioGrid} ${styles.radioGrid1}`}>
                    {PERFIL_OPTIONS.map(opt => (
                      <RadioCard
                        key={opt.value}
                        selected={form.perfil === opt.value}
                        onClick={() => setField('perfil', opt.value)}
                        icon={opt.icon}
                        label={opt.label}
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.navRow}>
                  <button className={styles.btnSecondary} onClick={goBack}>
                    ← Voltar
                  </button>
                  <button
                    className={styles.btnPrimary}
                    style={{ width: 'auto', flex: 1 }}
                    onClick={handleStep1Next}
                  >
                    Continuar →
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─── STEP 2: Momento ─── */}
            {step === 2 && (
              <motion.div
                key="step2"
                className={styles.step}
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h2 className={styles.sectionTitle}>Seu momento de negócio</h2>
                <p className={styles.sectionSubtitle}>
                  As respostas abaixo definem seu perfil de maturidade e geram sua devolutiva.
                </p>

                {/* Tempo de atuação */}
                <div className={styles.fieldGroup}>
                  <span className={styles.questionLabel}>Há quanto tempo atua na área?</span>
                  {errors.tempo_atuacao && (
                    <p className={styles.fieldError}>{errors.tempo_atuacao}</p>
                  )}
                  <div className={`${styles.radioGrid} ${styles.radioGrid2}`}>
                    {TEMPO_OPTIONS.map(opt => (
                      <RadioCard
                        key={opt.value}
                        selected={form.tempo_atuacao === opt.value}
                        onClick={() => setField('tempo_atuacao', opt.value)}
                        icon={opt.icon}
                        label={opt.label}
                        desc={opt.desc}
                      />
                    ))}
                  </div>
                </div>

                {/* Objetivo principal */}
                <div className={styles.fieldGroup}>
                  <span className={styles.questionLabel}>Qual é seu principal objetivo agora?</span>
                  {errors.objetivo_principal && (
                    <p className={styles.fieldError}>{errors.objetivo_principal}</p>
                  )}
                  <div className={`${styles.radioGrid} ${styles.radioGrid2}`}>
                    {OBJETIVO_OPTIONS.map(opt => (
                      <RadioCard
                        key={opt.value}
                        selected={form.objetivo_principal === opt.value}
                        onClick={() => setField('objetivo_principal', opt.value)}
                        icon={opt.icon}
                        label={opt.label}
                      />
                    ))}
                  </div>
                </div>

                {/* Dor principal */}
                <div className={styles.fieldGroup}>
                  <span className={styles.questionLabel}>Qual é sua maior dor hoje?</span>
                  {errors.dor_principal && (
                    <p className={styles.fieldError}>{errors.dor_principal}</p>
                  )}
                  <div className={`${styles.radioGrid} ${styles.radioGrid1}`}>
                    {DOR_OPTIONS.map(opt => (
                      <RadioCard
                        key={opt.value}
                        selected={form.dor_principal === opt.value}
                        onClick={() => setField('dor_principal', opt.value)}
                        icon={opt.icon}
                        label={opt.label}
                        desc={opt.desc}
                      />
                    ))}
                  </div>
                </div>

                {/* Momento de maturidade */}
                <div className={styles.fieldGroup}>
                  <span className={styles.questionLabel}>Qual melhor descreve sua situação atual?</span>
                  {errors.momento_maturidade && (
                    <p className={styles.fieldError}>{errors.momento_maturidade}</p>
                  )}
                  <div className={`${styles.radioGrid} ${styles.radioGrid1}`}>
                    {MATURIDADE_OPTIONS.map(opt => (
                      <RadioCard
                        key={opt.value}
                        selected={form.momento_maturidade === opt.value}
                        onClick={() => setField('momento_maturidade', opt.value)}
                        icon={opt.icon}
                        label={opt.label}
                        desc={opt.desc}
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.navRow}>
                  <button className={styles.btnSecondary} onClick={goBack}>
                    ← Voltar
                  </button>
                  <button
                    className={styles.btnPrimary}
                    style={{ width: 'auto', flex: 1 }}
                    onClick={handleStep2Next}
                  >
                    Continuar →
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─── STEP 3: Confirmação ─── */}
            {step === 3 && (
              <motion.div
                key="step3"
                className={styles.step}
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h2 className={styles.sectionTitle}>Confirme seus dados</h2>
                <p className={styles.sectionSubtitle}>
                  Tudo certo? Clique em gerar diagnóstico para receber sua análise personalizada.
                </p>

                <div className={styles.confirmCard}>
                  <h3 className={styles.confirmTitle}>Resumo das respostas</h3>
                  <div className={styles.confirmRow}>
                    <span className={styles.confirmKey}>Nome</span>
                    <span className={styles.confirmValue}>{form.nome}</span>
                  </div>
                  <div className={styles.confirmRow}>
                    <span className={styles.confirmKey}>WhatsApp</span>
                    <span className={styles.confirmValue}>{whatsappDisplay}</span>
                  </div>
                  {form.email && (
                    <div className={styles.confirmRow}>
                      <span className={styles.confirmKey}>E-mail</span>
                      <span className={styles.confirmValue}>{form.email}</span>
                    </div>
                  )}
                  <div className={styles.confirmRow}>
                    <span className={styles.confirmKey}>Perfil</span>
                    <span className={styles.confirmValue}>{PERFIL_LABEL[form.perfil] ?? '—'}</span>
                  </div>
                  <div className={styles.confirmRow}>
                    <span className={styles.confirmKey}>Tempo de atuação</span>
                    <span className={styles.confirmValue}>{TEMPO_LABEL[form.tempo_atuacao] ?? '—'}</span>
                  </div>
                  <div className={styles.confirmRow}>
                    <span className={styles.confirmKey}>Objetivo principal</span>
                    <span className={styles.confirmValue}>{OBJETIVO_LABEL[form.objetivo_principal] ?? '—'}</span>
                  </div>
                  <div className={styles.confirmRow}>
                    <span className={styles.confirmKey}>Maior dor</span>
                    <span className={styles.confirmValue}>{DOR_LABEL[form.dor_principal] ?? '—'}</span>
                  </div>
                  <div className={styles.confirmRow}>
                    <span className={styles.confirmKey}>Momento</span>
                    <span className={styles.confirmValue}>{MATURIDADE_LABEL[form.momento_maturidade] ?? '—'}</span>
                  </div>
                </div>

                {/* Aceite de material */}
                <label className={styles.checkboxLabel}>
                  <span
                    className={`${styles.checkboxBox} ${form.aceita_receber_material ? styles.checked : ''}`}
                    onClick={() => setField('aceita_receber_material', !form.aceita_receber_material)}
                  >
                    {form.aceita_receber_material && (
                      <span className={styles.checkboxCheck}>✓</span>
                    )}
                  </span>
                  <span className={styles.checkboxText}>
                    Quero receber conteúdos e materiais gratuitos da DOCS Consultoria sobre gestão e crescimento de
                    clínicas odontológicas. Posso cancelar a qualquer momento.
                  </span>
                </label>

                <button
                  className={styles.btnPrimary}
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting ? 'Gerando diagnóstico…' : 'Gerar meu diagnóstico gratuito →'}
                </button>

                <p className={styles.privacyNote}>
                  Seus dados são protegidos conforme a LGPD.{' '}
                  <a href="/politica-privacidade" className={styles.privacyLink} target="_blank" rel="noopener">
                    Política de Privacidade
                  </a>
                </p>

                <div className={styles.navRow} style={{ marginTop: 'var(--space-4)' }}>
                  <button className={styles.btnSecondary} onClick={goBack} style={{ width: '100%' }}>
                    ← Voltar e editar respostas
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
