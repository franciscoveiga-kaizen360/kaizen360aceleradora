import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import Script from 'next/script'
import { GTM_ID } from '@/lib/constants'
import { Navbar } from '@/components/organisms/Navbar/Navbar'
import '@/styles/globals.css'
import '@/styles/tokens.css'
import '@/styles/animations.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://docsgrowth.com.br'),
  title: 'Docs Growth CRM — CRM com IA para Radiologia Odontológica',
  description:
    'Atendimento omnichannel, pipeline de dentistas indicadores, agente de IA 24h e métricas em tempo real. CRM desenvolvido exclusivamente para clínicas de radiologia odontológica.',
  keywords: [
    'CRM radiologia odontológica',
    'gestão clínica radiologia',
    'software clínica odontológica',
    'CRM odontologia',
    'atendimento automático clínica',
    'IA para clínica odontológica',
    'agendamento inteligente radiologia',
  ],
  openGraph: {
    title: 'Docs Growth CRM — CRM com IA para Radiologia Odontológica',
    description:
      'Atendimento omnichannel, pipeline de dentistas, IA 24h e métricas em tempo real.',
    url: 'https://docsgrowth.com.br',
    siteName: 'Docs Growth CRM',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {!!GTM_ID && (
          <Script id="gtm-head" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body>
        {!!GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Navbar />
        {children}
      </body>
    </html>
  )
}
