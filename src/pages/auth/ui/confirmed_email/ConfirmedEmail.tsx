'use client'
import { ConfirmedImage } from '@/shared/ui/images'
import { Button } from '@/shared/ui'
import Link from 'next/link'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useDeviceType } from '@/shared/lib/hooks'
import { clsx } from 'clsx'
import s from './ConfirmedEmail.module.scss'

export function ConfirmedEmail() {
  const { isMobile } = useDeviceType()

  const classnames = {
    box: clsx(s.box, isMobile && s.mobile),
    title: s.title,
    message: clsx(s.message, isMobile && s.message),
    buttonImageBox: clsx(s.buttonImageBox, isMobile && s.mobile),
    signIn: clsx(s.signIn, isMobile && s.mobile),
    image: clsx(s.image, isMobile && s.mobile),
  }

  return (
    <div className={classnames.box}>
      <div className={classnames.title}>Congratulations!</div>
      <div className={classnames.message}>You email has been confirmed</div>
      <div className={classnames.buttonImageBox}>
        <Button className={classnames.signIn} asChild>
          <Link href={AUTH_ROUTES.SIGN_IN}>Sign In</Link>
        </Button>
        <ConfirmedImage className={classnames.image} />
      </div>
    </div>
  )
}
