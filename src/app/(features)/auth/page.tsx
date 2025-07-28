import { Login } from '@/app/(features)/auth/ui/login/Login'
import { Logout } from '@/app/(features)/auth/ui/logout/Logout'

export default async function Page() {
  return (
    <>
      <h1>Auth Page</h1>
      <Login />
      <Logout />
    </>
  )
}
