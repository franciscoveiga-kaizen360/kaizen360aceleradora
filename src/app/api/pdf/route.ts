import { NextRequest, NextResponse } from 'next/server'
import { getResultado } from '@/lib/db'

interface DiagnosticoRow {
  id: string
  nome: string
  perfil: string
  resultado_resumo: string
  leitura_momento: string
  o_que_trava: string
  foco_1: string
  foco_2: string
  foco_3: string
  submitted_at: string
}

function generatePdfHtml(data: DiagnosticoRow): string {
  const perfilLabel =
    data.perfil === 'dentista' ? 'Dentista / Clínica Odontológica' : 'Clínica de Radiologia Odontológica'
  const dateFormatted = new Date(data.submitted_at).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Diagnóstico DOCS Growth — ${data.nome}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: #fff;
      color: #1a1a2e;
      line-height: 1.65;
      padding: 0;
    }

    .page {
      max-width: 794px;
      margin: 0 auto;
      padding: 48px 56px;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 2px solid #E87722;
    }

    .logo {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a1a2e;
      letter-spacing: -0.02em;
    }

    .logo span {
      color: #E87722;
    }

    .date {
      font-size: 0.875rem;
      color: #8892A4;
    }

    .hero {
      background: linear-gradient(135deg, #1a1a2e 0%, #252545 100%);
      border-radius: 16px;
      padding: 36px 40px;
      margin-bottom: 32px;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(232,119,34,0.2) 0%, transparent 70%);
      border-radius: 50%;
    }

    .perfil-badge {
      display: inline-block;
      background: rgba(232, 119, 34, 0.15);
      color: #E87722;
      border: 1px solid rgba(232, 119, 34, 0.4);
      border-radius: 100px;
      padding: 6px 16px;
      font-size: 0.8125rem;
      font-weight: 600;
      font-family: 'Space Grotesk', sans-serif;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    .recipient-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1rem;
      color: rgba(255,255,255,0.6);
      margin-bottom: 8px;
      font-weight: 400;
    }

    .result-headline {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.3;
      position: relative;
    }

    .section {
      margin-bottom: 28px;
    }

    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      color: #E87722;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 10px;
    }

    .section-body {
      font-size: 0.9375rem;
      color: #374151;
      line-height: 1.7;
    }

    .focos-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 16px;
      padding-top: 8px;
      border-top: 1px solid #e5e7eb;
    }

    .foco-card {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      padding: 20px;
      background: #f9fafb;
      border-radius: 12px;
      border-left: 4px solid #E87722;
    }

    .foco-number {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #E87722;
      line-height: 1;
      min-width: 28px;
    }

    .foco-text {
      font-size: 0.9375rem;
      color: #374151;
      line-height: 1.6;
    }

    .footer {
      margin-top: 40px;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-brand {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #1a1a2e;
    }

    .footer-brand span { color: #E87722; }

    .footer-note {
      font-size: 0.75rem;
      color: #8892A4;
    }

    .divider {
      height: 1px;
      background: #e5e7eb;
      margin: 24px 0;
    }

    @media print {
      body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
      .page { padding: 0; }
      .hero { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .no-print { display: none !important; }
    }
  </style>
  <script>window.onload = () => { setTimeout(() => window.print(), 500) }</script>
</head>
<body>
  <div class="page">
    <header class="header">
      <div class="logo">DOCS <span>Growth</span></div>
      <div class="date">Diagnóstico gerado em ${dateFormatted}</div>
    </header>

    <div class="hero">
      <div class="perfil-badge">${perfilLabel}</div>
      <p class="recipient-name">Diagnóstico de ${data.nome}</p>
      <h1 class="result-headline">${data.resultado_resumo}</h1>
    </div>

    <div class="section">
      <div class="section-title">Leitura do seu momento</div>
      <p class="section-body">${data.leitura_momento}</p>
    </div>

    <div class="section">
      <div class="section-title">O que costuma travar esse perfil</div>
      <p class="section-body">${data.o_que_trava}</p>
    </div>

    <div class="divider"></div>

    <div class="focos-title">Seus 3 focos prioritários de ação</div>

    <div class="foco-card">
      <div class="foco-number">1</div>
      <div class="foco-text">${data.foco_1}</div>
    </div>

    <div class="foco-card">
      <div class="foco-number">2</div>
      <div class="foco-text">${data.foco_2}</div>
    </div>

    <div class="foco-card">
      <div class="foco-number">3</div>
      <div class="foco-text">${data.foco_3}</div>
    </div>

    <footer class="footer">
      <div class="footer-brand">DOCS <span>Growth</span> CRM</div>
      <div class="footer-note">docsgrowth.com.br — Diagnóstico confidencial</div>
    </footer>
  </div>
</body>
</html>`
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'id obrigatório' }, { status: 400 })

  const data = await getResultado(id) as DiagnosticoRow | null
  if (!data) return NextResponse.json({ error: 'Diagnóstico não encontrado' }, { status: 404 })

  const html = generatePdfHtml(data)

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': `inline; filename="diagnostico-docs-${id.slice(0, 8)}.html"`,
    },
  })
}
