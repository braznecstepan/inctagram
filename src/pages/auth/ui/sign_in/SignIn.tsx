'use client'
import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { Button, Card, TextField } from '@/shared/ui'
import s from './SignIn.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema, signInType } from '@/pages/auth/model/validation'
import { useAppDispatch, useToggleMode } from '@/shared/lib/hooks'
import { useLoginMutation } from '@/entities/auth/api/authApi'
import { useLazyGetProfileQuery } from '@/entities/profile/api/profileApi'
import { useRouter } from 'next/navigation'
import { handleNetworkError } from '@/shared/lib'
import { changeIsLoggedIn } from '@/shared/api/base-slice'

export function SignIn() {
  const { mode: showPassword, toggleMode: toggleShowPassword } = useToggleMode()
  const [loginFunc] = useLoginMutation()
  const [getProfile] = useLazyGetProfileQuery()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<signInType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
  })

  const handleFormSubmit: SubmitHandler<signInType> = async data => {
    try {
      const res = await loginFunc(data).unwrap()

      if (res.accessToken) {
        localStorage.setItem('token', res.accessToken)
        const data = await getProfile().unwrap()

        if (data.firstName) {
          router.push(`/profile/${data.id}`)
        }
        router.push('/profile_settings')
      }
      dispatch(changeIsLoggedIn({ isLoggedIn: true }))
      reset()
    } catch (error: unknown) {
      handleNetworkError({ error, dispatch })
    }
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

          <Button
            disabled={!isValid || isSubmitting}
            variant={'primary'}
            className={classnames.signIn}
            type={'submit'}
          >
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
