import { EyeOffOutline, EyeOutline, GithubSvgrepoCom31, GoogleSvgrepoCom1 } from '@/shared/ui/icons'
import { Button, Card, Dialog, TextField } from '@/shared/ui'

import s from './SignUp.module.scss'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useAppDispatch, useToggleMode } from '@/shared/lib/hooks'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, signUpType } from '@/pages/auth/model/validation'
import { ControlledCheckbox } from '@/entities/auth/ui'
import { useRegistrationMutation } from '@/entities/auth/api'
import { handleNetworkError } from '@/shared/lib'
import { useMemo } from 'react'

export function SignUp() {
  const { mode: showPassword, toggleMode: toggleShowPassword } = useToggleMode()
  const { mode: showConfirmedPassword, toggleMode: toggleShowConfirmedPassword } = useToggleMode()
  const { mode: showDialog, toggleMode: toggleShowDialog } = useToggleMode()

  const [registration] = useRegistrationMutation()

  const dispatch = useAppDispatch()

  const defaultValues = useMemo(() => {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      isAgree: false,
    }
  }, [])

  const {
    watch,
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<signUpType>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  })

  const emailValue = watch('email')

  const handleFormSubmit: SubmitHandler<signUpType> = async (data: signUpType) => {
    const registrationArgs = {
      userName: data.name,
      email: data.email,
      password: data.password,
      baseUrl: 'https://pikvio.ru/auth/confirmed-email',
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
          />

          <TextField
            errorMessage={errors.email && errors.email.message}
            className={classnames.email}
            {...register('email')}
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
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
          />

          <TextField
            className={classnames.passwordConfirmation}
            errorMessage={errors.passwordConfirmation && errors.passwordConfirmation.message}
            {...register('passwordConfirmation')}
            type={showConfirmedPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password confirmation'}
            iconEnd={showConfirmedPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowConfirmedPassword}
            autoComplete={'new-password'}
          />

          <ControlledCheckbox
            control={control}
            name={'isAgree'}
            className={classnames.isAgree}
            errorMessage={errors.isAgree && errors.isAgree.message}
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

          <Button
            disabled={!isValid || isSubmitting}
            variant={'primary'}
            className={classnames.signUp}
            type={'submit'}
          >
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
