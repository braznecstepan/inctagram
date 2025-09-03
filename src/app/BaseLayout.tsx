'use client'

import { PropsWithChildren, useEffect } from 'react'
import s from '@/app/baseLayout.module.scss'
import { Header } from '@/widgets'
import { useMeQuery } from '@/entities/auth/api'
import { useAppDispatch } from '@/shared/lib/hooks'
import { changeIsLoggedIn } from '@/shared/api/base-slice'

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const { data, isLoading } = useMeQuery()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isLoading) {
      dispatch(changeIsLoggedIn({ isLoggedIn: !!data }))
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
