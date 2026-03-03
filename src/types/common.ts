import type { Icon } from '@phosphor-icons/react'

export interface PainPoint {
  id: string
  Icon: Icon
  label: string
  description: string
}

export interface Feature {
  id: string
  Icon: Icon
  name: string
  description: string
  highlight?: boolean
}
