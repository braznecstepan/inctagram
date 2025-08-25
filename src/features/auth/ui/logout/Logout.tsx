'use client'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { changeIsLoggedIn, selectIsLoggedIn } from '@/shared/api/base-slice'
import { useLogoutMutation } from '@/entities/auth/api'
import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui'

export const Logout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const [logout] = useLogoutMutation()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const confirmHandler = () => {
    const isConfirmMessage = confirm(`Are you really want to log out of your account ${'email'}?`)
    if (!isConfirmMessage) {
      return
    }
    logout().then(() => {
      dispatch(changeIsLoggedIn({ isLoggedIn: false }))
      localStorage.removeItem('token')
      return router.push('/')
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
