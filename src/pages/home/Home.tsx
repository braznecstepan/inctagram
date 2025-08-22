'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { selectIsLoggedIn } from '@/shared/api/base-slice'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { Suspense, useEffect } from 'react'
import { useRegistrationConfirmationMutation } from '@/entities/auth/api'
import { handleNetworkError } from '@/shared/lib'

export function Home() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <PrivateHome />
    </Suspense>
  )
}

const PrivateHome = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useAppDispatch()
  const [registrationConfirmation] = useRegistrationConfirmationMutation()

  const code = searchParams?.get('code')

  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const handleConfirmationRegistration = async (confirmationCode: string) => {
    try {
      await registrationConfirmation({ confirmationCode }).unwrap()
      router.push(AUTH_ROUTES.CONFIRMED_EMAIL)
    } catch (error: unknown) {
      handleNetworkError({ error, dispatch })
      router.push(AUTH_ROUTES.EXPIRED_LINK)
    }
  }

  useEffect(() => {
    if (!isLoggedIn && !code) {
      router.push(AUTH_ROUTES.SIGN_IN)
    }

    if (code) {
      void handleConfirmationRegistration(code)
    }
  }, [isLoggedIn, code])

  return (
    <div>
      <main>
        <h1>Loading...</h1>
      </main>
    </div>
  )
}
