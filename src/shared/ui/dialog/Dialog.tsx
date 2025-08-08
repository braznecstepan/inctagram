import { Button, Modal } from '@/shared/ui'

import s from './Dialog.module.scss'
import { useDeviceType } from '@/shared/lib/hooks'
import { clsx } from 'clsx'
import { FC } from 'react'
import { ModalProps } from '@/shared/ui/modal/Modal'
import { ButtonVariant } from '@/shared/ui/button/Button'

export type DialogProps = {
  cancelButtonText?: string
  confirmButtonText?: string

  /** If true, confirm button will be secondary and cancel button will be primary
   * defaults to true
   * */
  invertButtons?: boolean

  /** If not provided, onClose will be executed on Cancel click */
  onCancelButtonClick?: () => void
  onConfirmButtonClick: () => void
  buttonsClass?: string
} & ModalProps

export const Dialog: FC<DialogProps> = ({
  cancelButtonText,
  children,
  confirmButtonText,
  invertButtons = true,
  onConfirmButtonClick,
  onCancelButtonClick,
  buttonsClass,
  ...rest
}) => {
  const { isMobile } = useDeviceType()
  const { onClose } = rest
  const showCancelButton = !!cancelButtonText

  const handleConfirmButtonClick = () => {
    onConfirmButtonClick()
  }

  const handleCancelButtonClick = () => {
    if (onCancelButtonClick) {
      onCancelButtonClick()
    } else {
      onClose?.()
    }
  }

  const classnames = {
    buttonsBox: clsx(
      s.buttonsBox,
      showCancelButton && s.hasCancelButton,
      isMobile && s.mobile,
      buttonsClass
    ),
    button: s.button,
  }

  const confirmButtonVariant: ButtonVariant = getConfirmButtonVariant(
    invertButtons,
    showCancelButton
  )
  const cancelButtonVariant: ButtonVariant = invertButtons ? 'primary' : 'outlined'

  return (
    <Modal {...rest}>
      {children}
      <div className={classnames.buttonsBox}>
        {
          <Button
            fullWidth={isMobile}
            onClick={handleConfirmButtonClick}
            variant={confirmButtonVariant}
            className={classnames.button}
          >
            {confirmButtonText}
          </Button>
        }
        {showCancelButton && (
          <Button
            fullWidth={isMobile}
            onClick={handleCancelButtonClick}
            variant={cancelButtonVariant}
            className={classnames.button}
          >
            {cancelButtonText}
          </Button>
        )}
      </div>
    </Modal>
  )
}

const getConfirmButtonVariant = (
  invertButtons: boolean,
  showCancelButton: boolean
): ButtonVariant => {
  if (showCancelButton) {
    if (invertButtons) {
      return 'outlined'
    }
  }

  return 'primary'
}
