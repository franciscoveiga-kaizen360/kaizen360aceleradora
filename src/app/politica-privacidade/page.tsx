import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Docs Growth CRM',
  description: 'Política de Privacidade e proteção de dados do Docs Growth CRM, em conformidade com a LGPD.',
  robots: { index: false, follow: false },
}

export default function PoliticaPrivacidadePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.updated}>Última atualização: março de 2026</p>

        <section className={styles.section}>
          <h2>1. Coleta de Dados</h2>
          <p>
            O Docs Growth CRM, operado pela Docs Consultoria e Gestão, coleta informações fornecidas
            voluntariamente por meio de formulários de contato e agendamento de demonstração. As
            informações coletadas incluem: nome, e-mail, telefone, nome da clínica e mensagem.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Uso dos Dados</h2>
          <p>
            As informações coletadas são utilizadas exclusivamente para: responder solicitações de
            contato, agendar demonstrações do produto, enviar comunicações comerciais relevantes (com
            consentimento), e melhorar a experiência no site. Não vendemos ou compartilhamos seus
            dados com terceiros, exceto quando necessário para a prestação do serviço.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Cookies e Rastreamento</h2>
          <p>
            Utilizamos cookies analíticos (Google Analytics 4 via GTM) e de remarketing (Facebook
            Pixel) apenas após consentimento explícito, em conformidade com a LGPD. Você pode
            gerenciar suas preferências de cookies a qualquer momento pelo banner de consentimento.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Seus Direitos (LGPD)</h2>
          <p>
            Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:
            acessar seus dados, corrigir informações incorretas, solicitar exclusão, revogar
            consentimento, e solicitar portabilidade. Para exercer qualquer direito, entre em contato:
            contato@docsconsultoria.com.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Contato</h2>
          <p>
            Docs Consultoria e Gestão<br />
            E-mail: contato@docsconsultoria.com<br />
            Site: docsconsultoria.com
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
