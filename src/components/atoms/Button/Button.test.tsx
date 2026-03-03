import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Agendar Demonstração</Button>)
    expect(screen.getByRole('button', { name: /Agendar Demonstração/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders as anchor tag when href is provided', () => {
    render(<Button href="https://calendly.com">Agendar</Button>)
    const link = screen.getByRole('link', { name: /Agendar/i })
    expect(link).toHaveAttribute('href', 'https://calendly.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not trigger onClick when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    )
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies aria-label when provided', () => {
    render(<Button aria-label="Agendar demo gratuita">Agendar</Button>)
    expect(screen.getByRole('button', { name: 'Agendar demo gratuita' })).toBeInTheDocument()
  })

  it('is keyboard accessible — receives focus', () => {
    render(<Button>Focus me</Button>)
    const btn = screen.getByRole('button')
    btn.focus()
    expect(btn).toHaveFocus()
  })
})
