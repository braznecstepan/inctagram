import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { Button, Card, TextField } from '@/shared/ui'

import s from './SignUp.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useToggleMode } from '@/shared/lib/hooks'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Checkbox } from '@/shared/ui/checkbox/CheckBox'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, signUpType } from '@/pages/auth/model/validation'

export function SignUp() {
  const { mode: showPassword, toggleMode: toggleShowPassword } = useToggleMode()
  const { mode: showConfirmedPassword, toggleMode: toggleShowConfirmedPassword } = useToggleMode()

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<signUpType>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      isAgree: false,
    },
    resolver: zodResolver(signUpSchema),
  })

  const handleFormSubmit: SubmitHandler<signUpType> = data => {
    // console.log(data)
    reset()
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
    isAgree: s.isAgree,
  }

  return (
    <div className={classnames.box}>
      <Card className={classnames.card}>
        <h1 className={classnames.title}>Sign Up</h1>

        <div className={classnames.icons}>
          <Link href={AUTH_ROUTES.SIGN_UP}>
            <GoogleSvgrepoCom1 />
          </Link>
          <Link href={AUTH_ROUTES.SIGN_UP}>
            <GithubSvgrepoCom31 />
          </Link>
        </div>

        <form className={classnames.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField
            className={classnames.username}
            placeholder={'Dimych'}
            label={'Username'}
            errorMessage={errors.name && errors.name.message}
            {...register('name')}
            required={true}
          />

          <TextField
            errorMessage={errors.email && errors.email.message}
            className={classnames.email}
            {...register('email')}
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
            required={true}
            type={'email'}
            autoComplete={'email'}
          />

          <TextField
            className={classnames.password}
            errorMessage={errors.password && errors.password.message}
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowPassword}
            autoComplete={'new-password'}
            required={true}
          />

          <TextField
            className={classnames.passwordConfirmation}
            errorMessage={errors.passwordConfirmation && errors.passwordConfirmation.message}
            {...register('passwordConfirmation')}
            type={showConfirmedPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password confirmation'}
            required={true}
            iconEnd={showConfirmedPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowConfirmedPassword}
            autoComplete={'new-password'}
          />

          <Controller
            control={control}
            name="isAgree"
            render={({ field }) => (
              <div className={classnames.isAgree}>
                <Checkbox
                  onChange={e => field.onChange(e)}
                  required={true}
                  checked={field.value}
                  label={
                    <p className={classnames.compliance}>
                      I agree to the{' '}
                      <Button variant={'text'} className={classnames.termsOfServices} asChild>
                        <Link href={AUTH_ROUTES.TERMS_OF_SERVICE}>Terms of Service</Link>
                      </Button>{' '}
                      and{' '}
                      <Button variant={'text'} className={classnames.privacyPolicy} asChild>
                        <Link href={AUTH_ROUTES.PRIVACY_POLICY}>Privacy Policy</Link>
                      </Button>
                    </p>
                  }
                />
              </div>
            )}
          />

          <Button variant={'primary'} className={classnames.signUp} type={'submit'}>
            Sign Up
          </Button>
        </form>

        <p className={classnames.question}>{`Do you have an account?`}</p>

        <Button variant={'text'} className={classnames.signIn} asChild>
          <Link href={AUTH_ROUTES.SIGN_IN}>Sign In</Link>
        </Button>
      </Card>
    </div>
  )
}
