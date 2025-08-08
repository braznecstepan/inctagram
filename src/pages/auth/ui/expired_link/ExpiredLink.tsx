import { useDeviceType } from '@/shared/lib/hooks'
import { clsx } from 'clsx'
import s from './ExpiredLink.module.scss'
import { Button, TextField } from '@/shared/ui'
import { FormEvent } from 'react'
import { ExpiredImage } from '@/shared/ui/images'

export function ExpiredLink() {
  const { isMobile } = useDeviceType()

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Resend expired link')
  }

  const classnames = {
    box: clsx(s.box, isMobile && s.mobile),
    title: s.title,
    message: clsx(s.message, isMobile && s.message),
    form: clsx(s.form, isMobile && s.mobile),
    formImageBox: clsx(s.formImageBox, isMobile && s.mobile),
    resendButton: clsx(s.resendButton, isMobile && s.mobile),
    image: clsx(s.image, isMobile && s.mobile),
  }

  return (
    <div className={classnames.box}>
      <div className={classnames.title}>Email verification link expired</div>
      <div className={classnames.message}>
        Looks like the verification link has expired. Not to worry, we can send the link again
      </div>
      <div className={classnames.formImageBox}>
        <form className={classnames.form} onSubmit={handleFormSubmit}>
          <TextField placeholder={'it-incubator@gmail.com'} label={'Email'} />
          <Button className={classnames.resendButton} fullWidth type={'submit'}>
            Resend verification link
          </Button>
        </form>
        <ExpiredImage className={classnames.image} />
      </div>
    </div>
  )
}
