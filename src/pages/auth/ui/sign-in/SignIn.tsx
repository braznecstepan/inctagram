import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { FormEvent, useState } from 'react'
import { Button, Card, TextField } from '@/shared/ui'

import s from './SignIn.module.scss'
import Link from 'next/link'

export function SignIn() {
  const [passwordMode, setPasswordMode] = useState<boolean>(true)

  const toggleMode = () => {
    setPasswordMode(!passwordMode)
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const classnames = {
    box: s.box,
    card: s.card,
    title: s.title,
    icons: s.icons,
    form: s.form,
    emailInput: s.emailInput,
    passwordInput: s.passwordInput,
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
          <Link href={'/auth'}>
            <GoogleSvgrepoCom1 />
          </Link>
          <Link href={'/auth'}>
            <GithubSvgrepoCom31 />
          </Link>
        </div>

        <form className={classnames.form} onSubmit={handleFormSubmit}>
          <TextField
            className={classnames.emailInput}
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
          />

          <TextField
            className={classnames.passwordInput}
            type={passwordMode ? 'password' : 'text'}
            placeholder={'••••••••••'}
            label={'Password'}
            iconEnd={passwordMode ? <EyeOffOutline /> : <EyeOutline />}
            onEndIconClick={toggleMode}
          />

          <Button variant={'text'} className={classnames.forgotPassword} asChild>
            <Link href={'/auth'}>Forgot Password</Link>
          </Button>

          <Button variant={'primary'} className={classnames.signIn} type={'submit'}>
            Sign In
          </Button>
        </form>

        <span className={classnames.question}>{`Don't have an account?`}</span>

        <Button variant={'text'} className={classnames.signUp} asChild>
          <Link href={'/auth'}>Sign In</Link>
        </Button>
      </Card>
    </div>
  )
}
