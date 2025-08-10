import type { ComponentPropsWithRef } from 'react'
import s from './Button.module.scss'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text'

type ButtonProps = {
  variant?: ButtonVariant
  asChild?: boolean
  fullWidth?: boolean
} & ComponentPropsWithRef<'button'>

export const Button = ({
  variant = 'primary',
  className,
  fullWidth,
  asChild,
  disabled,
  onClick,
  ...rest
}: ButtonProps) => {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        s.button,
        s[variant],
        fullWidth && s.fullWidth,
        disabled && s.disabled,
        className
      )}
      {...rest}
    />
  )
}
