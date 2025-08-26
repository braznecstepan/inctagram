'use client'
import { ConfirmedImage } from '@/shared/ui/images'
import { Button } from '@/shared/ui'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import s from './ConfirmedEmail.module.scss'

export function ConfirmedEmail() {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Congratulations!</h1>
      <p className={s.message}>You email has been confirmed</p>
      <div className={s.buttonImageBox}>
        <Button className={s.signIn} asChild>
          <Link href={AUTH_ROUTES.SIGN_IN}>Sign In</Link>
        </Button>
        <ConfirmedImage className={s.image} />
      </div>
    </div>
  )
}
