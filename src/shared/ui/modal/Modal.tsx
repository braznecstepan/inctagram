import * as Dialog from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef } from 'react'
import s from './Modal.module.scss'
import { Close } from '@/shared/ui/icons'
import { clsx } from 'clsx'

type ModalSize = 'lg' | 'md' | 'sm'

export type ModalProps = {
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
}: ModalProps) => {
  function handleModalClosed() {
    onClose?.()
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleModalClosed} {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.Overlay} />
        <Dialog.Content className={clsx(s.Content, s[size], className)}>
          <div className={s.Header}>
            <Dialog.Title className={s.Title}>{title}</Dialog.Title>
            <Dialog.Close className={s.IconButton} asChild>
              {showCloseButton && <Close />}
            </Dialog.Close>
          </div>
          <hr className={s.Separator} />
          <div className={s.ContentBox}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
