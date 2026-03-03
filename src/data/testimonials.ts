// Placeholder testimonials — to be replaced with CRM-specific testimonials from client
// isPlaceholder: true marks staging-only content
import type { Testimonial } from '@/types/testimonial'

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Dra. Ana Carolina Mendes',
    clinicName: 'Clínica RadioImagem',
    city: 'São Paulo, SP',
    quote:
      'Desde que implementamos o CRM da Docs, nossa taxa de retorno de pacientes aumentou mais de 40%. O follow-up automático com os dentistas indicadores mudou completamente o nosso jogo.',
    avatarInitials: 'AM',
    isPlaceholder: true,
  },
  {
    id: 'testimonial-2',
    name: 'Dr. Ricardo Fonseca',
    clinicName: 'Centro de Radiologia Oral',
    city: 'Belo Horizonte, MG',
    quote:
      'Antes eu ficava preso na operação o dia inteiro. Hoje a IA resolve o atendimento inicial, agenda as consultas e ainda manda lembrete. Minha clínica funciona mesmo quando não estou.',
    avatarInitials: 'RF',
    isPlaceholder: true,
  },
  {
    id: 'testimonial-3',
    name: 'Dra. Patrícia Sousa',
    clinicName: 'Diagnóstico Radiológico Curitiba',
    city: 'Curitiba, PR',
    quote:
      'A mentoria 12 Pilares da Docs já transformou minha gestão. Quando lançaram o CRM com IA, foi o passo que faltava. Em 3 meses, saí de 80 para 140 exames por semana.',
    avatarInitials: 'PS',
    isPlaceholder: true,
  },
]
