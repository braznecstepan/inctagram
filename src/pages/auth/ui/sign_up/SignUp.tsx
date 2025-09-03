'use client'

import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { Button, Card, Dialog, TextField } from '@/shared/ui'

import s from './SignUp.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useAppDispatch } from '@/shared/lib/hooks'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, SignUpType } from '@/pages/auth/model/validation'
import { ControlledCheckbox } from '@/entities/auth/ui'
import { useRegistrationMutation } from '@/entities/auth/api'
import { handleNetworkError } from '@/shared/lib'
import { useBoolean } from 'react-use'

const defaultValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  isAgree: false,
}

export function SignUp() {
  const [showPassword, toggleShowPassword] = useBoolean(false)
  const [showDialog, toggleShowDialog] = useBoolean(false)

  const [registration] = useRegistrationMutation()

  const dispatch = useAppDispatch()

  const {
    watch,
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignUpType>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  })

  const emailValue = watch('email')

  const handleFormSubmit: SubmitHandler<SignUpType> = async (data: SignUpType) => {
    const registrationArgs = {
      userName: data.name,
      email: data.email,
      password: data.password,
      baseUrl: process.env.NEXT_PUBLIC_DOMAIN ?? '',
    }

    try {
      await registration(registrationArgs).unwrap()
      toggleShowDialog()
    } catch (error: unknown) {
      handleNetworkError({ error, dispatch })
    }
  }

  const onConfirmDialogClick = () => {
    reset(defaultValues, { keepErrors: false, keepDirty: false, keepTouched: false })
    toggleShowDialog()
  }

  return (
    <div className={s.box}>
      <Dialog
        confirmButtonText={'OK'}
        onConfirmButtonClick={onConfirmDialogClick}
        open={showDialog}
        size={'sm'}
        title={'Email sent'}
        buttonsMarginTop={'18px'}
      >
        <p>We have sent a link to confirm your email to {emailValue}</p>
      </Dialog>
      <Card className={s.card}>
        <h1 className={s.title}>Sign Up</h1>

        <div className={s.icons}>
          <Link href={AUTH_ROUTES.SIGN_UP}>
            <GoogleSvgrepoCom1 />
          </Link>
          <Link href={AUTH_ROUTES.SIGN_UP}>
            <GithubSvgrepoCom31 />
          </Link>
        </div>

        <form className={s.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField
            className={s.username}
            placeholder={'Username'}
            label={'Username'}
            errorMessage={errors.name && errors.name.message}
            {...register('name')}
          />

          <TextField
            errorMessage={errors.email && errors.email.message}
            className={s.email}
            {...register('email')}
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
            type={'email'}
            autoComplete={'email'}
          />

          <TextField
            className={s.password}
            errorMessage={errors.password && errors.password.message}
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowPassword}
            autoComplete={'new-password'}
          />

          <TextField
            className={s.passwordConfirmation}
            errorMessage={errors.passwordConfirmation && errors.passwordConfirmation.message}
            {...register('passwordConfirmation')}
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password confirmation'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowPassword}
            autoComplete={'new-password'}
          />

          <ControlledCheckbox
            control={control}
            name={'isAgree'}
            className={s.isAgree}
            errorMessage={errors.isAgree && errors.isAgree.message}
            label={
              <p className={s.compliance}>
                I agree to the{' '}
                <Button variant={'text'} className={s.termsOfService} asChild>
                  <Link href={AUTH_ROUTES.TERMS_OF_SERVICE}>Terms of Service</Link>
                </Button>{' '}
                and{' '}
                <Button variant={'text'} className={s.privacyPolicy} asChild>
                  <Link href={AUTH_ROUTES.PRIVACY_POLICY}>Privacy Policy</Link>
                </Button>
              </p>
            }
          />

          <Button
            disabled={!isValid || isSubmitting}
            variant={'primary'}
            className={s.signUp}
            type={'submit'}
          >
            Sign Up
          </Button>
        </form>

        <p className={s.question}>{`Do you have an account?`}</p>

        <Button variant={'text'} className={s.signIn} asChild>
          <Link href={AUTH_ROUTES.SIGN_IN}>Sign In</Link>
        </Button>
      </Card>
    </div>
  )
}
