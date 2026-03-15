import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getResultado } from '@/lib/db'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Seu Diagnóstico — DOCS Consultoria',
  description: 'Seu diagnóstico de momento e crescimento personalizado.',
  robots: { index: false, follow: false },
}

interface DiagnosticoRow {
  id: string
  nome: string
  perfil: string
  resultado_resumo: string
  leitura_momento?: string
  o_que_trava?: string
  foco_1: string
  foco_2: string
  foco_3: string
  submitted_at: string
}

interface PageProps {
  searchParams: { id?: string }
}

const PERFIL_LABEL: Record<string, string> = {
  dentista: 'Dentista / Clínica Odontológica',
  dono_gestor_radiologia: 'Clínica de Radiologia Odontológica',
}

const PERFIL_ICON: Record<string, string> = {
  dentista: '🦷',
  dono_gestor_radiologia: '🩻',
}

export default async function ResultadoPage({ searchParams }: PageProps) {
  const id = searchParams?.id

  if (!id) {
    return (
      <div className={styles.notFound}>
        <p style={{ fontSize: '3rem' }}>🔍</p>
        <h1 className={styles.notFoundTitle}>Diagnóstico não encontrado</h1>
        <p className={styles.notFoundText}>
          O link que você acessou não contém um diagnóstico válido.
        </p>
        <Link href="/" className={styles.btnPrimary} style={{ maxWidth: 320 }}>
          Fazer meu diagnóstico →
        </Link>
      </div>
    )
  }

  const data = await getResultado(id) as DiagnosticoRow | null

  if (!data) {
    return (
      <div className={styles.notFound}>
        <p style={{ fontSize: '3rem' }}>😕</p>
        <h1 className={styles.notFoundTitle}>Diagnóstico não encontrado</h1>
        <p className={styles.notFoundText}>
          Não encontramos um diagnóstico com este identificador. Verifique o link ou refaça o diagnóstico.
        </p>
        <Link href="/" className={styles.btnPrimary} style={{ maxWidth: 320 }}>
          Refazer diagnóstico →
        </Link>
      </div>
    )
  }

  const perfilLabel = PERFIL_LABEL[data.perfil] ?? data.perfil
  const perfilIcon = PERFIL_ICON[data.perfil] ?? '🏥'
  const firstName = data.nome.split(' ')[0]

  return (
    <div className={styles.root}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="DOCS Consultoria" width={36} height={36} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />
          DOCS <span className={styles.logoAccent}>Consultoria</span>
        </Link>
        <div className={styles.headerAction}>
          <a
            href={`/api/pdf?id=${data.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
            style={{ width: 'auto', marginTop: 0, padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--font-size-small)' }}
          >
            📄 Salvar PDF
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className={styles.main}>

        {/* Hero card */}
        <div className={styles.heroCard}>
          <div className={styles.perfilBadge}>
            <span>{perfilIcon}</span>
            <span>{perfilLabel}</span>
          </div>
          <p className={styles.greeting}>Diagnóstico de {firstName}</p>
          <h1 className={styles.headline}>{data.resultado_resumo}</h1>
        </div>

        {/* Leitura do momento */}
        {data.leitura_momento && (
          <div className={styles.sectionBlock}>
            <span className={styles.sectionTag}>Leitura do seu momento</span>
            <p className={styles.sectionText}>{data.leitura_momento}</p>
          </div>
        )}

        {/* O que trava */}
        {data.o_que_trava && (
          <div className={styles.sectionBlock}>
            <span className={styles.sectionTag}>O que costuma travar esse perfil</span>
            <p className={styles.sectionText}>{data.o_que_trava}</p>
          </div>
        )}

        {/* Focos prioritários */}
        <div className={styles.focusSection}>
          <h2 className={styles.focusSectionTitle}>Seus 3 focos prioritários agora</h2>

          <div className={styles.focusCard}>
            <span className={styles.focusNumber}>1</span>
            <p className={styles.focusText}>{data.foco_1}</p>
          </div>

          <div className={styles.focusCard}>
            <span className={styles.focusNumber}>2</span>
            <p className={styles.focusText}>{data.foco_2}</p>
          </div>

          <div className={styles.focusCard}>
            <span className={styles.focusNumber}>3</span>
            <p className={styles.focusText}>{data.foco_3}</p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaArea}>
          <h3 className={styles.ctaTitle}>Quer colocar esses focos em prática?</h3>
          <p className={styles.ctaSubtitle}>
            A equipe DOCS Consultoria pode te ajudar a implementar cada um desses pontos
            com acompanhamento personalizado para sua realidade.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20fiz%20o%20diagn%C3%B3stico%20DOCS%20Growth%20e%20quero%20conversar%20sobre%20os%20meus%20focos"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            💬 Conversar com um especialista
          </a>
          <a
            href={`/api/pdf?id=${data.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            📄 Baixar meu diagnóstico em PDF
          </a>
        </div>

        {/* Footer */}
        <p className={styles.footer}>
          Diagnóstico gerado em {new Date(data.submitted_at).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}.
          {' '}
          <Link href="/politica-privacidade" className={styles.footerLink}>
            Política de Privacidade
          </Link>
          {' · '}
          <Link href="/" className={styles.footerLink}>
            docsgrowth.com.br
          </Link>
        </p>
      </main>
    </div>
  )
}
