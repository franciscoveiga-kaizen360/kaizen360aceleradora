import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>Feito para Radiologia</Badge>)
    expect(screen.getByText('Feito para Radiologia')).toBeInTheDocument()
  })

  it('renders as a span element', () => {
    const { container } = render(<Badge>Label</Badge>)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('renders with highlight variant', () => {
    render(<Badge variant="highlight">Diferencial exclusivo</Badge>)
    expect(screen.getByText('Diferencial exclusivo')).toBeInTheDocument()
  })

  it('renders with popular variant', () => {
    render(<Badge variant="popular">Mais Popular</Badge>)
    expect(screen.getByText('Mais Popular')).toBeInTheDocument()
  })

  it('renders with recommended variant', () => {
    render(<Badge variant="recommended">Recomendado</Badge>)
    expect(screen.getByText('Recomendado')).toBeInTheDocument()
  })
})
