import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { FormEvent } from 'react'
import { Button, Card, TextField } from '@/shared/ui'

import s from './SignIn.module.scss'
import Link from 'next/link'
import { usePasswordMode } from '@/pages/auth/lib'
import { AUTH_ROUTES } from '@/shared/lib/routes'

export function SignIn() {
  const { mode, toggleMode } = usePasswordMode()

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Sign In')
  }

  const classnames = {
    box: s.box,
    card: s.card,
    title: s.title,
    icons: s.icons,
    form: s.form,
    email: s.email,
    password: s.password,
    forgotPassword: s.forgotPassword,
    signIn: s.signIn,
    question: s.question,
    signUp: s.signUp,
  }

  return (
    <div className={classnames.box}>
      <Card className={classnames.card}>
        <span className={classnames.title}>Sign In</span>

        <div className={classnames.icons}>
          <Link href={AUTH_ROUTES.SIGN_IN}>
            <GoogleSvgrepoCom1 />
          </Link>
          <Link href={AUTH_ROUTES.SIGN_IN}>
            <GithubSvgrepoCom31 />
          </Link>
        </div>

        <form className={classnames.form} onSubmit={handleFormSubmit}>
          <TextField
            className={classnames.email}
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
          />

          <TextField
            className={classnames.password}
            type={mode ? 'password' : 'text'}
            placeholder={'••••••••••'}
            label={'Password'}
            iconEnd={mode ? <EyeOffOutline /> : <EyeOutline />}
            onEndIconClick={toggleMode}
          />

          <Button variant={'text'} className={classnames.forgotPassword} asChild>
            <Link href={AUTH_ROUTES.RECOVERY}>Forgot Password</Link>
          </Button>

          <Button variant={'primary'} className={classnames.signIn} type={'submit'}>
            Sign In
          </Button>
        </form>

        <span className={classnames.question}>{`Don't have an account?`}</span>

        <Button variant={'text'} className={classnames.signUp} asChild>
          <Link href={AUTH_ROUTES.SIGN_UP}>Sign Up</Link>
        </Button>
      </Card>
    </div>
  )
}
