import { Button, Card, Container, Dialog, TextField } from '@/shared/ui'
import s from './RecoveryPassword.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { recoveryPasswordSchema, recoveryPasswordType } from '@/pages/auth/model/validation'
import { zodResolver } from '@hookform/resolvers/zod'

export const RecoveryPassword = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<recoveryPasswordType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(recoveryPasswordSchema),
    mode: 'onBlur',
  })
  const value = watch().email

  const handleFormSubmit: SubmitHandler<recoveryPasswordType> = data => {
    setModalOpen(true)
    console.log(data)
  }

  const closeHandler = () => {
    setModalOpen(false)
    reset()
  }

  return (
    <Container>
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
            <Button disabled={!!errors.email} type={'submit'} fullWidth>
              Send Link
            </Button>
            <Button variant={'text'} fullWidth asChild>
              <Link href={AUTH_ROUTES.SIGN_IN}>Back to Sigh In</Link>
            </Button>
          </div>
          {/*// TODO:Captcha*/}
        </form>
      </Card>
    </Container>
  )
}
