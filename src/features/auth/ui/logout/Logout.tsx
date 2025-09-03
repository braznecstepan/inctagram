'use client'
import { useAppDispatch } from '@/shared/lib/hooks'
import { authApi, useLogoutMutation, useMeQuery } from '@/entities/auth/api'
import { Button, Dialog } from '@/shared/ui'
import { handleNetworkError } from '@/shared/lib'
import { useState } from 'react'

export const Logout = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const [logout] = useLogoutMutation()
  const { data: userData } = useMeQuery()
  const dispatch = useAppDispatch()

  const handleConfirmClick = async () => {
    try {
      await logout().unwrap()
      dispatch(authApi.util.resetApiState())
    } catch (error: unknown) {
      const handle401Error = () => {
        dispatch(authApi.util.resetApiState())
      }

      handleNetworkError({ error, dispatch, handle401Error })
    } finally {
      setShowModal(false)
    }
  }

  return (
    <>
      <Button variant={'outlined'} onClick={() => setShowModal(true)}>
        Log out
      </Button>
      <Dialog
        open={showModal}
        title={'Log out'}
        size={'sm'}
        confirmButtonText={'Yes'}
        cancelButtonText={'No'}
        buttonsMarginTop={'18px'}
        onConfirmButtonClick={handleConfirmClick}
        onClose={() => setShowModal(false)}
      >
        {`Do you really want to log out of your account ${userData?.email}?`}
      </Dialog>
    </>
  )
}
