import * as Dialog from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef } from 'react'
import s from './Modal.module.scss'
import { Close } from '@/shared/ui/icons'
import { clsx } from 'clsx'

type ModalSize = 'lg' | 'md' | 'sm'

type Props = {
  open: boolean
  showCloseButton?: boolean
  onClose?: () => void
  title?: string
  size?: ModalSize
} & ComponentPropsWithoutRef<'div'>

export const Modal = ({
  size = 'md',
  showCloseButton = true,
  title,
  onClose,
  children,
  className,
  open = false,
  ...rest
}: Props) => (
  <Dialog.Root open={open} onOpenChange={onClose} {...rest}>
    <Dialog.Portal>
      <Dialog.Overlay className={s.Overlay} />
      <Dialog.Content className={clsx(s.Content, s[size], className)}>
        <div className={s.Header}>
          <Dialog.Title className={s.Title}>{title}</Dialog.Title>
          <Dialog.Close asChild>
            {showCloseButton && (
              <Dialog.Close className={s.IconButton} aria-label={'Close'}>
                <Close />
              </Dialog.Close>
            )}
          </Dialog.Close>
        </div>
        <hr className={s.Separator} />
        <div className={s.contentBox}>{children}</div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
