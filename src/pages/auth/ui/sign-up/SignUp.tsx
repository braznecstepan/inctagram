import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { FormEvent } from 'react'
import { Button, Card, TextField } from '@/shared/ui'

import s from './SignUp.module.scss'
import Link from 'next/link'
import { usePasswordMode } from '@/pages/auth/lib'
import { AUTH_ROUTES } from '@/shared/lib/routes'

export function SignUp() {
  const { mode: passwordMode, toggleMode: togglePasswordMode } = usePasswordMode()
  const { mode: passwordConfirmationMode, toggleMode: togglePasswordConfirmationMode } =
    usePasswordMode()

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Sign Up')
  }

  const classnames = {
    box: s.box,
    card: s.card,
    title: s.title,
    icons: s.icons,
    form: s.form,
    username: s.username,
    email: s.email,
    password: s.password,
    passwordConfirmation: s.passwordConfirmation,
    compliance: s.compliance,
    termsOfServices: s.termsOfService,
    privacyPolicy: s.privacyPolicy,
    signUp: s.signUp,
    question: s.question,
    signIn: s.signIn,
  }

  return (
    <div className={classnames.box}>
      <Card className={classnames.card}>
        <span className={classnames.title}>Sign Up</span>

        <div className={classnames.icons}>
          <Link href={AUTH_ROUTES.SIGN_UP}>
            <GoogleSvgrepoCom1 />
          </Link>
          <Link href={AUTH_ROUTES.SIGN_UP}>
            <GithubSvgrepoCom31 />
          </Link>
        </div>

        <form className={classnames.form} onSubmit={handleFormSubmit}>
          <TextField className={classnames.username} placeholder={'Dimych'} label={'Username'} />

          <TextField
            className={classnames.email}
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
          />

          <TextField
            className={classnames.password}
            type={passwordMode ? 'password' : 'text'}
            placeholder={'••••••••••'}
            label={'Password'}
            iconEnd={passwordMode ? <EyeOffOutline /> : <EyeOutline />}
            onEndIconClick={togglePasswordMode}
          />

          <TextField
            className={classnames.passwordConfirmation}
            type={passwordConfirmationMode ? 'password' : 'text'}
            placeholder={'••••••••••'}
            label={'Password confirmation'}
            iconEnd={passwordConfirmationMode ? <EyeOffOutline /> : <EyeOutline />}
            onEndIconClick={togglePasswordConfirmationMode}
          />

          <span className={classnames.compliance}>
            I agree to the{' '}
            <Button variant={'text'} className={classnames.termsOfServices} asChild>
              <Link href={AUTH_ROUTES.TERMS_OF_SERVICE}>Terms of Service</Link>
            </Button>{' '}
            and{' '}
            <Button variant={'text'} className={classnames.privacyPolicy} asChild>
              <Link href={AUTH_ROUTES.PRIVACY_POLICY}>Privacy Policy</Link>
            </Button>
          </span>

          <Button variant={'primary'} className={classnames.signUp} type={'submit'}>
            Sign Up
          </Button>
        </form>

        <span className={classnames.question}>{`Do you have an account?`}</span>

        <Button variant={'text'} className={classnames.signIn} asChild>
          <Link href={AUTH_ROUTES.SIGN_IN}>Sign In</Link>
        </Button>
      </Card>
    </div>
  )
}
