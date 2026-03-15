import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/tokens.css'
import '@/styles/animations.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
})

const BASE_URL = 'https://docs-diagnostico-crescimento.vercel.app'

export const metadata: Metadata = {
  title: 'Diagnóstico de Momento e Crescimento — DOCS Consultoria',
  description:
    'Descubra em qual momento está seu negócio e receba as 3 ações prioritárias para crescer com mais direção e previsibilidade.',
  robots: { index: true, follow: true },
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Diagnóstico de Momento e Crescimento — DOCS Consultoria',
    description:
      'Descubra em qual momento está seu negócio e receba as 3 ações prioritárias para crescer com mais direção e previsibilidade.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'DOCS Consultoria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnóstico de Momento e Crescimento — DOCS Consultoria',
    description:
      'Descubra em qual momento está seu negócio e receba as 3 ações prioritárias para crescer com mais direção e previsibilidade.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  )
}
