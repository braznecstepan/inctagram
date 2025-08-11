import { Button, Card, Container, Dialog, TextField } from '@/shared/ui'
import s from './RecoveryPassword.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { FormEvent, useState } from 'react'

export const RecoveryPassword = () => {
  const [value, setValue] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setModalOpen(true)
  }

  const closeHandler = () => {
    setModalOpen(false)
    setValue('')
  }

  return (
    <Container>
      <Card className={s.card}>
        <h1 className={s.title}>Forgot Password</h1>
        <form onSubmit={handleFormSubmit}>
          <TextField
            onChange={event => setValue(event.currentTarget.value)}
            value={value}
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
          >
            <p className={s.modalText}>We have sent a link to confirm your email to {value}</p>
          </Dialog>
          <p className={s.text}>
            Enter your email address and we will send you further instructions{' '}
          </p>
          <div className={s.buttonBox}>
            <Button disabled={!value} type={'submit'} fullWidth>
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
