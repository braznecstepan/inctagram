import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { Button, Card, TextField } from '@/shared/ui'

import s from './SignUp.module.scss'
import Link from 'next/link'
import { usePasswordMode } from '@/pages/auth/lib'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Checkbox } from '@/shared/ui/checkbox/CheckBox'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, signUpType } from '@/pages/auth/model/validation'

export function SignUp() {
  const { mode: passwordMode, toggleMode: togglePasswordMode } = usePasswordMode()
  const { mode: passwordConfirmationMode, toggleMode: togglePasswordConfirmationMode } =
    usePasswordMode()

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
        <span className={classnames.title}>Sign Up</span>

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
          />

          <TextField
            className={classnames.password}
            errorMessage={errors.password && errors.password.message}
            type={passwordMode ? 'password' : 'text'}
            {...register('password')}
            placeholder={'••••••••••'}
            label={'Password'}
            iconEnd={passwordMode ? <EyeOffOutline /> : <EyeOutline />}
            onEndIconClick={togglePasswordMode}
            required={true}
          />

          <TextField
            className={classnames.passwordConfirmation}
            errorMessage={errors.passwordConfirmation && errors.passwordConfirmation.message}
            type={passwordConfirmationMode ? 'password' : 'text'}
            {...register('passwordConfirmation')}
            placeholder={'••••••••••'}
            label={'Password confirmation'}
            iconEnd={passwordConfirmationMode ? <EyeOffOutline /> : <EyeOutline />}
            onEndIconClick={togglePasswordConfirmationMode}
            required={true}
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
                  }
                />
              </div>
            )}
          />

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
