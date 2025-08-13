import { useToggleMode } from '@/shared/lib/hooks'
import s from './CreatePassword.module.scss'
import { Button, Card, TextField } from '@/shared/ui'
import { EyeOffOutline, EyeOutline } from '@/shared/ui/icons'
import { FormEvent } from 'react'

export const CreatePassword = () => {
  const { mode: showPassword, toggleMode: toggleShowPassword } = useToggleMode()
  const { mode: showConfirmedPassword, toggleMode: toggleShowConfirmedPassword } = useToggleMode()

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
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'New password'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowPassword}
            required={true}
          />

          <TextField
            className={classnames.password}
            type={showConfirmedPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password confirmation'}
            iconEnd={showConfirmedPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowConfirmedPassword}
            required={true}
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
