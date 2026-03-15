import type { Metadata } from 'next'
import styles from '../politica-privacidade/page.module.css'

export const metadata: Metadata = {
  title: 'Termos de Uso — Docs Growth CRM',
  description: 'Termos de Uso do site Docs Growth CRM.',
  robots: { index: false, follow: false },
}

export default function TermosDeUsoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Termos de Uso</h1>
        <p className={styles.updated}>Última atualização: março de 2026</p>

        <section className={styles.section}>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o site do Docs Growth CRM, você concorda com estes Termos de Uso.
            Caso não concorde, interrompa o uso do site imediatamente.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Sobre o Serviço</h2>
          <p>
            O Docs Growth CRM é uma plataforma de CRM com inteligência artificial desenvolvida
            exclusivamente para clínicas de radiologia odontológica, comercializada pela Docs
            Consultoria e Gestão com tecnologia licenciada da Logyca Tecnologia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo deste site — textos, imagens, logotipos, layouts e demais elementos —
            é propriedade da Docs Consultoria e Gestão. É proibida a reprodução sem autorização
            prévia e expressa.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Limitação de Responsabilidade</h2>
          <p>
            O Docs Growth CRM não se responsabiliza por danos diretos ou indiretos decorrentes do
            uso ou impossibilidade de uso do serviço. As funcionalidades e preços estão sujeitos a
            alteração sem aviso prévio.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Lei Aplicável</h2>
          <p>
            Estes termos são regidos pelas leis brasileiras, com foro eleito na comarca de São Paulo,
            SP, para resolução de quaisquer conflitos.
          </p>
        </section>

        <p className={styles.note}>
          Este documento é um rascunho para fins de MVP. A versão final deve ser revisada e aprovada
          pelo responsável jurídico da Docs Consultoria antes do lançamento em produção.
        </p>

        <a href="/" className={styles.back}>← Voltar ao site</a>
      </div>
    </main>
  )
}
