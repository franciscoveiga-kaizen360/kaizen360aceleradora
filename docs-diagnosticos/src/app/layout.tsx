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

export const metadata: Metadata = {
  title: 'Diagnóstico de Momento e Crescimento — DOCS',
  description: 'Descubra em qual momento você está e receba orientações práticas personalizadas para o seu crescimento.',
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  )
}
