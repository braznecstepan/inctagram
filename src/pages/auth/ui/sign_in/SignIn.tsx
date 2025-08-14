import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { Button, Card, TextField } from '@/shared/ui'

import s from './SignIn.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema, signInType } from '@/pages/auth/model/validation'
import { useToggleMode } from '@/shared/lib/hooks'

export function SignIn() {
  const { mode: showPassword, toggleMode: toggleShowPassword } = useToggleMode()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signInType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
  })

  const handleFormSubmit: SubmitHandler<signInType> = () => {
    reset()
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
        <h1 className={classnames.title}>Sign In</h1>

        <div className={classnames.icons}>
          <Link href={AUTH_ROUTES.SIGN_IN}>
            <GoogleSvgrepoCom1 />
          </Link>
          <Link href={AUTH_ROUTES.SIGN_IN}>
            <GithubSvgrepoCom31 />
          </Link>
        </div>

        <form className={classnames.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField
            className={classnames.email}
            {...register('email')}
            errorMessage={errors.email && errors.email.message}
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
            type={'email'}
            autoComplete={'email'}
          />

          <TextField
            className={classnames.password}
            {...register('password')}
            errorMessage={errors.password && errors.password.message}
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowPassword}
            autoComplete={'current-password'}
          />

          <Button variant={'text'} className={classnames.forgotPassword} asChild>
            <Link href={AUTH_ROUTES.RECOVERY}>Forgot Password</Link>
          </Button>

          <Button variant={'primary'} className={classnames.signIn} type={'submit'}>
            Sign In
          </Button>
        </form>

        <p className={classnames.question}>{`Don't have an account?`}</p>

        <Button variant={'text'} className={classnames.signUp} asChild>
          <Link href={AUTH_ROUTES.SIGN_UP}>Sign Up</Link>
        </Button>
      </Card>
    </div>
  )
}
