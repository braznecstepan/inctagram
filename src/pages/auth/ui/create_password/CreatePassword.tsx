import { useToggleMode } from '@/shared/lib/hooks'
import s from './CreatePassword.module.scss'
import { Button, Card, TextField } from '@/shared/ui'
import { EyeOffOutline, EyeOutline } from '@/shared/ui/icons'
import { FormEvent } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { newPasswordShema, newPasswordType } from '../../model/validation'
import { useForm } from 'react-hook-form'

export const CreatePassword = () => {
  const { mode: showPassword, toggleMode: toggleShowPassword } = useToggleMode()
  const { mode: showPasswordConfirmation, toggleMode: togglePasswordConfirmation } = useToggleMode()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newPasswordType>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    resolver: zodResolver(newPasswordShema),
  })

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('New paswword is created')
  }

  const classnames = {
    box: s.box,
    card: s.card,
    title: s.title,
    icons: s.icons,
    form: s.form,
    password: s.password,
    text: s.text,
  }

  return (
    <div className={classnames.box}>
      <Card className={classnames.card}>
        <span className={classnames.title}>Create New Password</span>
        <form className={classnames.form} onSubmit={handleFormSubmit}>
          <TextField
            className={classnames.password}
            errorMessage={errors.password && errors.password.message}
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'New password'}
            iconEnd={showPassword ? <EyeOffOutline /> : <EyeOutline />}
            onEndIconClick={toggleShowPassword}
            required={true}
          />

          <TextField
            className={classnames.password}
            errorMessage={errors.passwordConfirmation && errors.passwordConfirmation.message}
            {...register('passwordConfirmation')}
            type={showPasswordConfirmation ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password confirmation'}
            required={true}
            iconEnd={showPasswordConfirmation ? <EyeOffOutline /> : <EyeOutline />}
            onEndIconClick={togglePasswordConfirmation}
          />
          <span className={classnames.text}>
            {`Your password must be between 6 and 20 characters`}
          </span>

          <Button variant={'primary'} className={classnames.password} type={'submit'}>
            Create new password
          </Button>
        </form>
      </Card>
    </div>
  )
}
