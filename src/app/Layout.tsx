'use client'

import { PropsWithChildren, useEffect } from 'react'
import s from '@/app/layout.module.scss'
import { Header } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useMeQuery } from '@/entities/auth/api'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useAppDispatch } from '@/shared/lib/hooks'
import { changeIsLoggedIn } from '@/shared/api/base-slice'

export const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const { data, isLoading } = useMeQuery()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isLoading) {
      if (!data) {
        dispatch(changeIsLoggedIn({ isLoggedIn: false }))
        router.replace(AUTH_ROUTES.SIGN_IN)
      } else {
        dispatch(changeIsLoggedIn({ isLoggedIn: true }))
      }
    }
  }, [isLoading])

  if (isLoading) {
    return null
  }

  return (
    <div className={s.layoutContainer}>
      <Header />
      {children}
    </div>
  )
}
