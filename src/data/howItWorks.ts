import { CalendarCheck, Rocket, Robot } from '@phosphor-icons/react/dist/ssr'
import type { Icon } from '@phosphor-icons/react'

export interface Step {
  id: string
  step: number
  Icon: Icon
  title: string
  description: string
}

export const howItWorksSteps: Step[] = [
  {
    id: 'agendar',
    step: 1,
    Icon: CalendarCheck,
    title: 'Agende sua demonstração gratuita',
    description:
      'Escolha o melhor horário e conheça a plataforma na prática. Nossa equipe mostra tudo em tempo real, sem enrolação.',
  },
  {
    id: 'implementacao',
    step: 2,
    Icon: Rocket,
    title: 'Implementação guiada pela nossa equipe',
    description:
      'Em poucos dias configuramos sua plataforma, integramos seus canais e treinamos sua equipe. Zero dor de cabeça técnica.',
  },
  {
    id: 'automatico',
    step: 3,
    Icon: Robot,
    title: 'Sua clínica no piloto automático',
    description:
      'A IA trabalha 24h, o atendimento flui sem você e os números aparecem em tempo real. Você foca em crescer.',
  },
]
