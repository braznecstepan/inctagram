import { authApi, useLogoutMutation, useMeQuery } from '@/entities/auth/api'
import { useAppDispatch } from '@/shared/lib/hooks'
import { handleNetworkError } from '@/shared/lib'

export const useLogout = () => {
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
    }
  }

  return {
    onLogout: handleConfirmClick,
    userData,
  }
}
