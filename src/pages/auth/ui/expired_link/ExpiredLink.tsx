'use client'
import s from './ExpiredLink.module.scss'
import { Button, Dialog, TextField } from '@/shared/ui'
import { ExpiredImage } from '@/shared/ui/images'
import { useAppDispatch, useToggleMode } from '@/shared/lib/hooks'
import {
  RegistrationEmailResendingArgs,
  useRegistrationEmailResendingMutation,
} from '@/entities/auth/api'
import { SubmitHandler, useForm } from 'react-hook-form'
import { expiredLinkSchema, expiredLinkType } from '@/pages/auth/model/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleNetworkError } from '@/shared/lib'

export function ExpiredLink() {
  const { mode: showDialog, toggleMode: toggleShowDialog } = useToggleMode()

  const [registrationEmailResending] = useRegistrationEmailResendingMutation()

  const dispatch = useAppDispatch()

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<expiredLinkType>({
    defaultValues: { email: '' },
    resolver: zodResolver(expiredLinkSchema),
    mode: 'onChange',
  })

  const emailValue = watch('email')

  const handleFormSubmit: SubmitHandler<expiredLinkType> = async (data: expiredLinkType) => {
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

  const classnames = {
    box: s.box,
    title: s.title,
    message: s.message,
    form: s.form,
    formImageBox: s.formImageBox,
    resendButton: s.resendButton,
    image: s.image,
  }

  const onConfirmDialogClick = () => {
    reset({ email: '' }, { keepErrors: false, keepDirty: false, keepTouched: false })
    toggleShowDialog()
  }

  return (
    <div className={classnames.box}>
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
      <h1 className={classnames.title}>Email verification link expired</h1>
      <p className={classnames.message}>
        Looks like the verification link has expired. Not to worry, we can send the link again
      </p>
      <div className={classnames.formImageBox}>
        <form className={classnames.form} onSubmit={handleSubmit(handleFormSubmit)}>
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
            className={classnames.resendButton}
            fullWidth
            type={'submit'}
          >
            Resend verification link
          </Button>
        </form>
        <ExpiredImage className={classnames.image} />
      </div>
    </div>
  )
}
