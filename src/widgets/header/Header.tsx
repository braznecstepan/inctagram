import s from './Header.module.scss'
import { ReactNode } from 'react'
import { Button } from '@/shared/ui'
import OutlineBell from '@/shared/ui/icons/OutlineBell'

type Props = {
  newMessage?: boolean
  isAuth: boolean
}

export const Header = ({ newMessage, isAuth }: Props) => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          <h1 className={s.logo}>Inctagram</h1>
          <div>
            {isAuth && newMessage && <OutlineBell />}
            {!isAuth && (
              <div className={s.buttonWrapper}>
                <Button variant={'outlined'}>Log in</Button>
                <Button>Sign up</Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className={s.container}>{children}</div>
}
