import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllDiagnosticos } from '@/lib/db'

export const metadata: Metadata = {
  title: 'Painel Admin — DOCS Consultoria',
  robots: { index: false, follow: false },
}

export const revalidate = 0

const PERFIL: Record<string, string> = {
  dentista: 'Dentista',
  dono_gestor_radiologia: 'Radiologia',
}

const TEMPO: Record<string, string> = {
  menos_de_2_anos: 'Menos de 2 anos',
  '2_a_5_anos': '2 a 5 anos',
  mais_de_5_anos: 'Mais de 5 anos',
}

const OBJETIVO: Record<string, string> = {
  crescer_e_faturar_mais: 'Crescer e faturar mais',
  organizar_rotina: 'Organizar rotina',
  melhorar_comercial: 'Melhorar comercial',
  previsibilidade_qualidade_vida: 'Previsibilidade e qualidade de vida',
}

const DOR: Record<string, string> = {
  atrair_clientes: 'Atrair clientes',
  vender_melhor: 'Vender melhor',
  melhorar_preco_margem: 'Melhorar preço / margem',
  organizar_gestao: 'Organizar gestão',
  melhorar_equipe: 'Melhorar equipe',
}

const MOMENTO: Record<string, string> = {
  comecando_estruturar: 'Começando a estruturar',
  crescendo_desorganizacao: 'Crescendo com desorganização',
  operando_com_gargalos: 'Operando com gargalos',
  buscando_escala: 'Buscando escala',
}

const MOMENTO_COLOR: Record<string, string> = {
  comecando_estruturar: '#f39c12',
  crescendo_desorganizacao: '#e67e22',
  operando_com_gargalos: '#e74c3c',
  buscando_escala: '#27ae60',
}

export default async function AdminPage() {
  const leads = await getAllDiagnosticos()

  return (
    <div style={{ minHeight: '100vh', background: '#0f1117', color: '#e8e8e8', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(11,11,24,0.85)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image src="/logo.png" alt="DOCS Consultoria" width={36} height={36} />
          <div>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff', letterSpacing: '-0.02em' }}>DOCS <span style={{ color: '#E87722' }}>Consultoria</span></span>
            <span style={{ display: 'block', color: '#8892A4', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '1px' }}>Painel de Diagnósticos</span>
          </div>
        </div>
        <span style={{ background: 'rgba(232,119,34,0.1)', border: '1px solid rgba(232,119,34,0.25)', borderRadius: '999px', padding: '0.25rem 0.875rem', fontSize: '0.8rem', color: '#E87722', fontWeight: 600 }}>
          {leads.length} {leads.length === 1 ? 'resposta' : 'respostas'}
        </span>
      </header>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>

        {leads.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#555' }}>
            <p style={{ fontSize: '2rem' }}>📭</p>
            <p>Nenhum diagnóstico recebido ainda.</p>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {leads.map((lead, i) => (
            <div key={lead.id} style={{ background: '#161b27', border: '1px solid #1e2740', borderRadius: '12px', overflow: 'hidden' }}>

              {/* Card header */}
              <div style={{ background: '#1a2035', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ background: '#0d1526', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#4f8ef7', fontWeight: 700 }}>
                    {leads.length - i}
                  </span>
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: '#fff' }}>{lead.nome}</p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>
                      {new Date(lead.submitted_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ background: '#0d1526', border: '1px solid #1e2740', borderRadius: '6px', padding: '0.2rem 0.6rem', fontSize: '0.75rem', color: '#4f8ef7' }}>
                    {PERFIL[lead.perfil] ?? lead.perfil}
                  </span>
                  <span style={{ background: MOMENTO_COLOR[lead.momento_maturidade] + '22', border: `1px solid ${MOMENTO_COLOR[lead.momento_maturidade]}55`, borderRadius: '6px', padding: '0.2rem 0.6rem', fontSize: '0.75rem', color: MOMENTO_COLOR[lead.momento_maturidade] }}>
                    {MOMENTO[lead.momento_maturidade] ?? lead.momento_maturidade}
                  </span>
                  <Link href={`/resultado?id=${lead.id}`} target="_blank" style={{ background: '#1e2740', border: '1px solid #2a3555', borderRadius: '6px', padding: '0.2rem 0.6rem', fontSize: '0.75rem', color: '#aaa', textDecoration: 'none' }}>
                    Ver diagnóstico →
                  </Link>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>

                {/* Contato */}
                <div>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#555' }}>Contato</p>
                  <p style={{ margin: '0 0 0.25rem', fontSize: '0.875rem' }}>📱 {lead.whatsapp}</p>
                  {lead.email && <p style={{ margin: 0, fontSize: '0.875rem', color: '#888' }}>✉️ {lead.email}</p>}
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: '#555' }}>
                    {lead.aceita_receber_material ? '✅ Aceita material' : '❌ Não aceita material'}
                  </p>
                </div>

                {/* Perfil clínico */}
                <div>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#555' }}>Perfil clínico</p>
                  <p style={{ margin: '0 0 0.25rem', fontSize: '0.875rem' }}>⏱ {TEMPO[lead.tempo_atuacao] ?? lead.tempo_atuacao}</p>
                  <p style={{ margin: '0 0 0.25rem', fontSize: '0.875rem' }}>🎯 {OBJETIVO[lead.objetivo_principal] ?? lead.objetivo_principal}</p>
                  <p style={{ margin: 0, fontSize: '0.875rem' }}>🔥 {DOR[lead.dor_principal] ?? lead.dor_principal}</p>
                </div>

                {/* Diagnóstico */}
                <div style={{ gridColumn: 'span 2' }}>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#555' }}>Diagnóstico</p>
                  <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', color: '#ccc', fontStyle: 'italic' }}>{lead.resultado_resumo}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {[lead.foco_1, lead.foco_2, lead.foco_3].map((foco, fi) => (
                      <div key={fi} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <span style={{ background: '#4f8ef722', border: '1px solid #4f8ef744', borderRadius: '50%', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#4f8ef7', flexShrink: 0, marginTop: 1 }}>{fi + 1}</span>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#aaa', lineHeight: 1.5 }}>{foco}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
