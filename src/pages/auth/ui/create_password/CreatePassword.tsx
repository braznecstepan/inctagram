'use client'

import s from './CreatePassword.module.scss'
import { Button, Card, TextField } from '@/shared/ui'
import { EyeOffOutline, EyeOutline } from '@/shared/ui/icons'
import { useBoolean } from 'react-use'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCreateNewPasswordMutation } from '@/entities/auth/api/authApi'
import { newPasswordSchema, NewPasswordType } from '../../model/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch } from '@/shared/lib/hooks'
import { handleNetworkError } from '@/shared/lib'
import { AUTH_ROUTES } from '@/shared/lib/routes'

export const CreatePassword = () => {
  const [showPassword, toggleShowPassword] = useBoolean(false)
  const [showConfirmedPassword, toggleShowConfirmedPassword] = useBoolean(false)
  const searchParams = useSearchParams()
  const [createNewPassword] = useCreateNewPasswordMutation()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPasswordType>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    resolver: zodResolver(newPasswordSchema),
    mode: 'onBlur',
  })

  const code = searchParams?.get('code')

  const handleFormSubmit: SubmitHandler<NewPasswordType> = async data => {
    alert('New paswword is created')

    if (code) {
      router.push(AUTH_ROUTES.CREATE_PASSWORD)
      return
    }

    const obj = {
      newPassword: data.password,
      recoveryCode: code as string,
    }

    try {
      await createNewPassword(obj).unwrap()
      router.push(AUTH_ROUTES.SIGN_IN)
      sessionStorage.clear()
    } catch (error: unknown) {
      handleNetworkError({ error, dispatch })
      router.push(AUTH_ROUTES.EXPIRED_LINK)
    }
  }

  return (
    <div className={s.box}>
      <Card className={s.card}>
        <span className={s.title}>Create New Password</span>
        <form className={s.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField
            className={s.password}
            {...register('password')}
            errorMessage={errors.password && errors.password.message}
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'New password'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowPassword}
            required
          />
          <TextField
            className={s.password}
            {...register('passwordConfirmation')}
            errorMessage={errors.passwordConfirmation && errors.passwordConfirmation.message}
            type={showConfirmedPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password confirmation'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowConfirmedPassword}
            required
          />
          <span className={s.text}>{`Your password must be between 6 and 20 characters`}</span>

          <Button variant={'primary'} className={s.password} type={'submit'}>
            Create new password
          </Button>
        </form>
      </Card>
    </div>
  )
}
