'use client'

import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/shared/lib/hooks'
import { selectIsLoggedIn } from '@/shared/api/base-slice'
import { AUTH_ROUTES, PROFILE_ROUTES } from '@/shared/lib/routes'
import { useEffect } from 'react'

export function Home() {
  const router = useRouter()
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace(AUTH_ROUTES.SIGN_IN)
    } else {
      router.replace(PROFILE_ROUTES.SETTINGS)
    }
  }, [isLoggedIn])

  return null
}
