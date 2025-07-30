import { Login, Logout } from '@/features/auth'

export function Auth() {
  return (
    <>
      <h1>Auth Page</h1>
      <Login />
      <Logout />
    </>
  )
}
