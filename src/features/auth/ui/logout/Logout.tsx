'use client'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { changeIsLoggedIn, selectIsLoggedIn } from '@/shared/api/base-slice'
import { useLogoutMutation, useMeQuery } from '@/entities/auth/api'
import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui'

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
    logout().then(() => {
      dispatch(changeIsLoggedIn({ isLoggedIn: false }))
      localStorage.removeItem('token')
      return router.push('/auth/sign-in')
    })
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
