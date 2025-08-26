'use client'
import { Button, Card, Dialog, TextField } from '@/shared/ui'
import s from './RecoveryPassword.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { recoveryPasswordSchema, RecoveryPasswordType } from '@/pages/auth/model/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '@/shared/lib/hooks'
import { changeError } from '@/shared/api/base-slice'
import { ReCAPTCHA } from 'react-google-recaptcha'
import { useRecoveryPasswordMutation } from '@/entities/auth/api/authApi'
//import dynamic from 'next/dynamic'

// const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {
//   ssr: false,
//   loading: () => <div>Загрузка</div>,
// })
export const RecoveryPassword = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [recoveryPassword] = useRecoveryPasswordMutation()
  const dispatch = useAppDispatch()
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RecoveryPasswordType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(recoveryPasswordSchema),
    mode: 'onChange',
  })
  const value = watch().email

  const handleFormSubmit: SubmitHandler<RecoveryPasswordType> = async data => {
    if (!recaptchaToken) {
      dispatch(changeError({ error: 'Пожалуйста, подтвердите что вы не робот' }))

      return
    }

    const obj = {
      email: data.email,
      recaptcha: recaptchaToken,
      baseUrl: process.env.NEXT_PUBLIC_DOMAIN!,
    }

    try {
      await recoveryPassword(obj)
      setModalOpen(true)
    } catch {
      dispatch(changeError({ error: 'Ошибка обработки reCaptcha' }))
    }
  }

  const closeHandler = () => {
    setModalOpen(false)
    reset()
  }
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
  }

  return (
    <div className={s.box}>
      <Card className={s.card}>
        <h1 className={s.title}>Forgot Password</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField
            {...register('email')}
            errorMessage={errors.email && errors.email.message}
            label={'Email'}
            placeholder={'Epam@epam.com'}
            type={'email'}
            autoComplete={'email'}
          />
          <Dialog
            size={'sm'}
            title={'Email sent'}
            confirmButtonText={'OK'}
            onClose={closeHandler}
            onConfirmButtonClick={closeHandler}
            open={modalOpen}
            className={s.dialog}
          >
            <p className={s.modalText}>We have sent a link to confirm your email to {value}</p>
          </Dialog>
          <p className={s.text}>
            Enter your email address and we will send you further instructions{' '}
          </p>
          <div className={s.buttonBox}>
            <Button disabled={!value || !recaptchaToken} type={'submit'} fullWidth>
              Send Link
            </Button>
            <Button variant={'text'} fullWidth asChild>
              <Link href={AUTH_ROUTES.SIGN_IN}>Back to Sigh In</Link>
            </Button>
          </div>
          <ReCAPTCHA
            size={'normal'}
            onChange={handleRecaptchaChange}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            className={s.recaptcha}
            theme={'dark'}
          />
        </form>
      </Card>
    </div>
  )
}
