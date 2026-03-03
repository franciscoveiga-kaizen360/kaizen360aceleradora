import {
  Database,
  Lock,
  UserCircleMinus,
  ChatCircle,
  ChartLineDown,
  CalendarX,
} from '@phosphor-icons/react/dist/ssr'
import type { PainPoint } from '@/types/common'

export const painPoints: PainPoint[] = [
  {
    id: 'dados-espalhados',
    Icon: Database,
    label: 'Dados espalhados em planilhas',
    description: 'Histórico de pacientes perdido e atendimentos sem rastreio?',
  },
  {
    id: 'dono-preso',
    Icon: Lock,
    label: 'Você preso na operação',
    description: 'Sua clínica não funciona sem você presente o tempo todo?',
  },
  {
    id: 'zero-followup',
    Icon: UserCircleMinus,
    label: 'Zero follow-up com dentistas',
    description: 'Seus dentistas indicadores estão mandando pacientes para a concorrência?',
  },
  {
    id: 'whatsapp-caotico',
    Icon: ChatCircle,
    label: 'WhatsApp caótico e despadronizado',
    description: 'Mensagens perdidas, resposta lenta e atendimento sem padrão?',
  },
  {
    id: 'sem-metricas',
    Icon: ChartLineDown,
    label: 'Sem métricas ou controle financeiro',
    description: 'Você não sabe seu CAC, taxa de conversão ou receita recorrente?',
  },
  {
    id: 'agenda-manual',
    Icon: CalendarX,
    label: 'Agenda manual cheia de faltas',
    description: 'Recalls manuais, sem confirmação automática e agenda cheia de buracos?',
  },
]
