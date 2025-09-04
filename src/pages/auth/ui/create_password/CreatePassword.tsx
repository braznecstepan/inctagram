'use client'

import s from './CreatePassword.module.scss'
import { Button, Card, TextField } from '@/shared/ui'
import { EyeOffOutline, EyeOutline } from '@/shared/ui/icons'
import { FormEvent } from 'react'
import { useBoolean } from 'react-use'

export const CreatePassword = () => {
  const [showPassword, toggleShowPassword] = useBoolean(false)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('New paswword is created')
  }

  return (
    <div className={s.box}>
      <Card className={s.card}>
        <span className={s.title}>Create New Password</span>
        <form className={s.form} onSubmit={handleFormSubmit}>
          <TextField
            className={s.password}
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'New password'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowPassword}
            required
          />
          <TextField
            className={s.password}
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••'}
            label={'Password confirmation'}
            iconEnd={showPassword ? <EyeOutline /> : <EyeOffOutline />}
            onEndIconClick={toggleShowPassword}
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
