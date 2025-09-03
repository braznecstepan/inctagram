'use client'

import { PropsWithChildren, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useMeQuery } from '@/entities/auth/api'

export const MainLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const { data, isFetching } = useMeQuery()

  useEffect(() => {
    if (!isFetching && !data) {
      router.replace(AUTH_ROUTES.SIGN_IN)
    }
  }, [isFetching, data])

  if (!data) {
    return null
  }

  return <main>{children}</main>
}
