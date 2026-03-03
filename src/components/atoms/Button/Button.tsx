import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'whatsapp'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
  href?: string
  onClick?: () => void
  fullWidth?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

export function Button({
  variant = 'primary',
  children,
  href,
  onClick,
  fullWidth = false,
  className = '',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
