import {
  Chats,
  Kanban,
  Robot,
  TreeStructure,
  CalendarCheck,
  Megaphone,
  InstagramLogo,
} from '@phosphor-icons/react/dist/ssr'
import type { Feature } from '@/types/common'

export const features: Feature[] = [
  {
    id: 'omnichannel',
    Icon: Chats,
    name: 'Atendimento Omnichannel',
    description:
      'Gerencie WhatsApp, e-mail e outros canais em um único inbox inteligente. Zero mensagem perdida.',
  },
  {
    id: 'crm-visual',
    Icon: Kanban,
    name: 'CRM Completo e Visual',
    description:
      'Pipeline visual de dentistas indicadores e pacientes. Acompanhe cada lead do primeiro contato ao fechamento.',
  },
  {
    id: 'agente-ia',
    Icon: Robot,
    name: 'Agente Autônomo de IA',
    description:
      'IA que atende, qualifica e agenda pacientes 24h por dia, 7 dias por semana — sem depender de equipe.',
    highlight: true,
  },
  {
    id: 'construtor-fluxos',
    Icon: TreeStructure,
    name: 'Construtor de Fluxos',
    description:
      'Monte automações de atendimento sem código. Defina gatilhos, respostas e jornadas visuais.',
  },
  {
    id: 'agendamentos',
    Icon: CalendarCheck,
    name: 'Agendamentos Inteligentes',
    description:
      'Confirmação automática, lembretes e recall pós-atendimento. Reduza faltas em até 70%.',
  },
  {
    id: 'disparos-massa',
    Icon: Megaphone,
    name: 'Disparos em Massa',
    description:
      'Envie campanhas segmentadas via WhatsApp para pacientes e dentistas indicadores com alta taxa de abertura.',
  },
  {
    id: 'social-media',
    Icon: InstagramLogo,
    name: 'Social Media Suite',
    description:
      'Gerencie e agende publicações nas redes sociais diretamente do CRM. Sua presença digital no automático.',
  },
]
