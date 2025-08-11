'use client'
import { ConfirmedImage } from '@/shared/ui/images'
import { Button } from '@/shared/ui'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import s from './ConfirmedEmail.module.scss'

export function ConfirmedEmail() {
  const classnames = {
    box: s.box,
    title: s.title,
    message: s.message,
    buttonImageBox: s.buttonImageBox,
    signIn: s.signIn,
    image: s.image,
  }

  return (
    <div className={classnames.box}>
      <h1 className={classnames.title}>Congratulations!</h1>
      <p className={classnames.message}>You email has been confirmed</p>
      <div className={classnames.buttonImageBox}>
        <Button className={classnames.signIn} asChild>
          <Link href={AUTH_ROUTES.SIGN_IN}>Sign In</Link>
        </Button>
        <ConfirmedImage className={classnames.image} />
      </div>
    </div>
  )
}
