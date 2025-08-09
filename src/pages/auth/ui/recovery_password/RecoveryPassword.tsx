import { Button, Card, Container, TextField } from '@/shared/ui'
import s from './RecoveryPassword.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { FormEvent } from 'react'

export const RecoveryPassword = () => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Send Link')
  }

  return (
    <Container>
      <Card className={s.card}>
        <h1 className={s.title}>Forgot Password</h1>
        <form onSubmit={handleFormSubmit}>
          <TextField label={'Email'} placeholder={'Epam@epam.com'} />
          <p className={s.text}>
            Enter your email address and we will send you further instructions{' '}
          </p>
          <div className={s.buttonBox}>
            <Button type={'submit'} fullWidth>
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
