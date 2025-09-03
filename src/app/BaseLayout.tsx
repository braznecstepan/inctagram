'use client'

import { PropsWithChildren } from 'react'
import s from '@/app/baseLayout.module.scss'
import { Header } from '@/widgets'
import { useMeQuery } from '@/entities/auth/api'

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const { isLoading } = useMeQuery()

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
