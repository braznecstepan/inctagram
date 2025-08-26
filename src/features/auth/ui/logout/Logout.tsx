'use client'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { changeIsLoggedIn, selectIsLoggedIn } from '@/shared/api/base-slice'
import { useLogoutMutation, useMeQuery } from '@/entities/auth/api'
import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui'
import { handleNetworkError } from '@/shared/lib'
import { AUTH_ROUTES } from '@/shared/lib/routes'

export const Logout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const [logout] = useLogoutMutation()
  const { data: userData } = useMeQuery()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const confirmHandler = () => {
    const isConfirmMessage = confirm(
      `Are you really want to log out of your account ${userData?.email}?`
    )
    if (!isConfirmMessage) {
      return
    }
    try {
      logout().then(() => {
        dispatch(changeIsLoggedIn({ isLoggedIn: false }))
        localStorage.removeItem('token')
        return router.push(`${AUTH_ROUTES.SIGN_IN}`)
      })
    } catch (error: unknown) {
      handleNetworkError({ error, dispatch })
    }
  }

  return (
    <>
      {isLoggedIn && (
        <Button variant="outlined" onClick={confirmHandler}>
          Log out
        </Button>
      )}
    </>
  )
}
