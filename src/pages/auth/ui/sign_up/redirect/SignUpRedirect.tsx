'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch } from '@/shared/lib/hooks'
import { useRegistrationConfirmationMutation } from '@/entities/auth/api'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { handleNetworkError } from '@/shared/lib'
import { useEffect } from 'react'

export function SignUpRedirect() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [registrationConfirmation] = useRegistrationConfirmationMutation()

  const code = searchParams?.get('code') || ''

  const handleConfirmationRegistration = async (confirmationCode: string) => {
    try {
      await registrationConfirmation({ confirmationCode }).unwrap()
      router.replace(AUTH_ROUTES.CONFIRMED_EMAIL)
    } catch (error: unknown) {
      handleNetworkError({ error, dispatch })
      router.replace(AUTH_ROUTES.EXPIRED_LINK)
    }
  }

  useEffect(() => {
    void handleConfirmationRegistration(code)
  }, [code])

  return null
}
