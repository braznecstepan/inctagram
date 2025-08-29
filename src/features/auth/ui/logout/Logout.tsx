'use client'
import { useAppDispatch } from '@/shared/lib/hooks'
import { changeIsLoggedIn } from '@/shared/api/base-slice'
import { useLogoutMutation, useMeQuery } from '@/entities/auth/api'
import { useRouter } from 'next/navigation'
import { Button, Dialog } from '@/shared/ui'
import { handleNetworkError } from '@/shared/lib'
import { AUTH_ROUTES } from '@/shared/lib/routes'
import { useState } from 'react'

export const Logout = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const [logout] = useLogoutMutation()
  const { data: userData } = useMeQuery()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const logoutInitHandler = () => {
    setShowModal(true)
  }

  const confirmHandler = async () => {
    try {
      await logout()
        .unwrap()
        .then(() => {
          dispatch(changeIsLoggedIn({ isLoggedIn: false }))
          localStorage.removeItem('token')
          setShowModal(false)
          router.push(`${AUTH_ROUTES.SIGN_IN}`)
        })
    } catch (error: unknown) {
      handleNetworkError({ error, dispatch })
    }
  }
  return (
    <>
      <Button variant="outlined" onClick={logoutInitHandler} disabled={showModal}>
        Log out
      </Button>
      <Dialog
        open={showModal}
        title="Log out"
        confirmButtonText="Yup"
        cancelButtonText="No"
        showCloseButton
        onConfirmButtonClick={confirmHandler}
        onClose={() => setShowModal(false)}
      >
        {`Do you really want to log out of your account ${userData?.email}?`}
      </Dialog>
    </>
  )
}
