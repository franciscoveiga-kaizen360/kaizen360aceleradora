---
task: Technical SEO Audit
responsavel: "@seo-geo-specialist"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - website_url: URL do site para auditoria
  - crawl_data: Dados de crawl (Screaming Frog, Sitebulb)
  - current_rankings: Rankings atuais (se existir histórico)
Saida: |
  - technical_seo_report: Relatório técnico completo de SEO
  - priority_fixes: Correções prioritárias por impacto
  - implementation_guide: Guia de implementação das correções
Checklist:
  - "[ ] Auditar crawlability (robots.txt, sitemap.xml)"
  - "[ ] Verificar erros 4xx e 5xx"
  - "[ ] Auditar metadados (title, description, H1)"
  - "[ ] Verificar canonical tags"
  - "[ ] Auditar velocidade e Core Web Vitals"
  - "[ ] Verificar mobile-friendliness"
  - "[ ] Auditar dados estruturados (schema)"
  - "[ ] Verificar HTTPS e segurança"
  - "[ ] Checar duplicate content"
---

# *technical-seo-audit

SEO técnico é a fundação. Sem ela, o melhor conteúdo fica invisível.

## Ferramentas de Auditoria

- **Screaming Frog** — crawl completo do site
- **Google Search Console** — erros indexação e performance
- **PageSpeed Insights** — Core Web Vitals real data
- **Semrush/Ahrefs** — backlinks, rankings, site health
