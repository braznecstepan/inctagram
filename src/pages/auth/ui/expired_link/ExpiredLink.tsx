import s from './ExpiredLink.module.scss'
import { Button, TextField } from '@/shared/ui'
import { FormEvent } from 'react'
import { ExpiredImage } from '@/shared/ui/images'

export function ExpiredLink() {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Resend expired link')
  }

  const classnames = {
    box: s.box,
    title: s.title,
    message: s.message,
    form: s.form,
    formImageBox: s.formImageBox,
    resendButton: s.resendButton,
    image: s.image,
  }

  return (
    <div className={classnames.box}>
      <h1 className={classnames.title}>Email verification link expired</h1>
      <p className={classnames.message}>
        Looks like the verification link has expired. Not to worry, we can send the link again
      </p>
      <div className={classnames.formImageBox}>
        <form className={classnames.form} onSubmit={handleFormSubmit}>
          <TextField
            placeholder={'it-incubator@gmail.com'}
            label={'Email'}
            type={'email'}
            autoComplete={'email'}
          />
          <Button className={classnames.resendButton} fullWidth type={'submit'}>
            Resend verification link
          </Button>
        </form>
        <ExpiredImage className={classnames.image} />
      </div>
    </div>
  )
}
