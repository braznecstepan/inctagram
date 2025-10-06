'use client'

import { PropsWithChildren, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useMeQuery } from '@/entities/auth/api'
import { Sidebar } from '@/widgets/sidebar'
import s from './baseLayout.module.scss'

export const MainLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const { data } = useMeQuery()

  useEffect(() => {
    if (!data) {
      router.replace(AUTH_ROUTES.SIGN_IN)
    }
  }, [data])

  if (!data) {
    return null
  }

  return (
    <div className={s.mainLayout}>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
