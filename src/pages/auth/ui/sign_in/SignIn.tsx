'use client'

import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { Button, Card, TextField } from '@/shared/ui'
import s from './SignIn.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES, PROFILE_ROUTES } from '@/shared/lib/routes'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema, SignInType } from '@/pages/auth/model/validation'
import { useAppDispatch } from '@/shared/lib/hooks'
import { useLoginMutation } from '@/entities/auth/api/authApi'
import { useLazyGetProfileQuery } from '@/entities/profile/api/profileApi'
import { useRouter } from 'next/navigation'
import { handleNetworkError } from '@/shared/lib'
import { changeIsLoggedIn } from '@/shared/api/base-slice'
import { useBoolean } from 'react-use'

export function SignIn() {
  const [showPassword, toggleShowPassword] = useBoolean(false)
  const [loginFunc] = useLoginMutation()
  const [getProfile] = useLazyGetProfileQuery()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignInType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
  })

  const handleFormSubmit: SubmitHandler<SignInType> = async data => {
    try {
      const res = await loginFunc(data).unwrap()

      if (res.accessToken) {
        localStorage.setItem('token', res.accessToken)
        const data = await getProfile().unwrap()

        // if (data.firstName) {
        //   router.push(`/profile/${data.id}`)
        // }
        dispatch(changeIsLoggedIn({ isLoggedIn: true }))
        router.replace(PROFILE_ROUTES.SETTINGS)
      }
      reset()
    } catch (error: unknown) {
      handleNetworkError({ error, dispatch })
    }
  }

  return (
    <div className={s.box}>
      <Card className={s.card}>
        <h1 className={s.title}>Sign In</h1>

        <div className={s.icons}>
          <Link href={AUTH_ROUTES.SIGN_IN}>
            <GoogleSvgrepoCom1 />
          </Link>
          <Link href={AUTH_ROUTES.SIGN_IN}>
            <GithubSvgrepoCom31 />
          </Link>
        </div>

        <form className={s.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField
            className={s.email}
            {...register('email')}
            errorMessage={errors.email && errors.email.message}
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
            type={'email'}
            autoComplete={'email'}
          />

          <TextField
            className={s.password}
            {...register('password')}
            errorMessage={errors.password && errors.password.message}
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowPassword}
            autoComplete={'current-password'}
          />

          <Button variant={'text'} className={s.forgotPassword} asChild>
            <Link href={AUTH_ROUTES.RECOVERY}>Forgot Password</Link>
          </Button>

          <Button
            disabled={!isValid || isSubmitting}
            variant={'primary'}
            className={s.signIn}
            type={'submit'}
          >
            Sign In
          </Button>
        </form>

        <p className={s.question}>{`Don't have an account?`}</p>

        <Button variant={'text'} className={s.signUp} asChild>
          <Link href={AUTH_ROUTES.SIGN_UP}>Sign Up</Link>
        </Button>
      </Card>
    </div>
  )
}
