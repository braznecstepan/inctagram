import type { ComponentPropsWithRef } from 'react'
import s from './Button.module.scss'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text'
  asChild?: boolean
  fullWidth?: boolean
} & ComponentPropsWithRef<'button'>

export const Button = ({
  variant = 'primary',
  className,
  fullWidth,
  asChild,
  disabled,
  ...rest
}: ButtonProps) => {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
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
