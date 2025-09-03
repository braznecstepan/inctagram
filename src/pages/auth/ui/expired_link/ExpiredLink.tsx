'use client'

import s from './ExpiredLink.module.scss'
import { Button, Dialog, TextField } from '@/shared/ui'
import { ExpiredImage } from '@/shared/ui/images'
import { useAppDispatch } from '@/shared/lib/hooks'
import {
  RegistrationEmailResendingArgs,
  useRegistrationEmailResendingMutation,
} from '@/entities/auth/api'
import { SubmitHandler, useForm } from 'react-hook-form'
import { expiredLinkSchema, ExpiredLinkType } from '@/pages/auth/model/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleNetworkError } from '@/shared/lib'
import { useBoolean } from 'react-use'

export function ExpiredLink() {
  const [showDialog, toggleShowDialog] = useBoolean(false)

  const [registrationEmailResending] = useRegistrationEmailResendingMutation()

  const dispatch = useAppDispatch()

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ExpiredLinkType>({
    defaultValues: { email: '' },
    resolver: zodResolver(expiredLinkSchema),
    mode: 'onChange',
  })

  const emailValue = watch('email')

  const handleFormSubmit: SubmitHandler<ExpiredLinkType> = async (data: ExpiredLinkType) => {
    const registrationEmailResendingArgs: RegistrationEmailResendingArgs = {
      email: data.email,
      baseUrl: process.env.NEXT_PUBLIC_DOMAIN ?? '',
    }

    try {
      await registrationEmailResending(registrationEmailResendingArgs).unwrap()
      toggleShowDialog()
    } catch (error: unknown) {
      handleNetworkError({ error, dispatch })
    }
  }

  const onConfirmDialogClick = () => {
    reset({ email: '' }, { keepErrors: false, keepDirty: false, keepTouched: false })
    toggleShowDialog()
  }

  return (
    <div className={s.box}>
      <Dialog
        confirmButtonText={'OK'}
        onConfirmButtonClick={onConfirmDialogClick}
        open={showDialog}
        size={'sm'}
        title={'Email sent'}
        buttonsMarginTop={'18px'}
      >
        <p>We have sent a link to confirm your email to {emailValue}</p>
      </Dialog>
      <h1 className={s.title}>Email verification link expired</h1>
      <p className={s.message}>
        Looks like the verification link has expired. Not to worry, we can send the link again
      </p>
      <div className={s.formImageBox}>
        <form className={s.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
            type={'email'}
            errorMessage={errors.email && errors.email.message}
            {...register('email')}
            autoComplete={'email'}
          />
          <Button
            disabled={!isValid || isSubmitting}
            className={s.resendButton}
            fullWidth
            type={'submit'}
          >
            Resend verification link
          </Button>
        </form>
        <ExpiredImage className={s.image} />
      </div>
    </div>
  )
}
