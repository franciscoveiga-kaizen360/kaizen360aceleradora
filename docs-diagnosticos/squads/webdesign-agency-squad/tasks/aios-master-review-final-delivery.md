---
task: Review Final Delivery
responsavel: "@aios-master"
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - all_deliverables: Conjunto completo de entregas do projeto
  - acceptance_criteria: Critérios de aceitação definidos pelo PO
  - quality_standards: Padrões de qualidade estabelecidos no início
  - client_feedback: Feedback acumulado do cliente
Saida: |
  - approval_decision: Aprovado / Reprovado com justificativa
  - feedback_list: Lista priorizada de ajustes necessários
  - sign_off_doc: Documento de sign-off para entrega ao cliente
Checklist:
  - "[ ] Revisar todas as entregas contra critérios de aceitação"
  - "[ ] Avaliar qualidade criativa e técnica"
  - "[ ] Verificar consistência de marca"
  - "[ ] Testar experiência como usuário final"
  - "[ ] Verificar performance e acessibilidade"
  - "[ ] Consolidar feedback final"
  - "[ ] Emitir aprovação ou lista de ajustes"
  - "[ ] Assinar documento de entrega"
---

# *review-final-delivery

Revisão e aprovação final antes de qualquer entrega ao cliente.

## Critérios de Revisão

**Criativo**: A entrega está no nível de excelência definido na visão criativa?
**Técnico**: Performance, acessibilidade e qualidade de código atendem os padrões?
**Negócio**: A entrega resolve o problema real do cliente?
**Consistência**: Identidade visual e tom de voz consistentes em toda a entrega?

## Regra de Ouro

Nenhuma entrega ao cliente sem aprovação do Head of Digital.
