'use client'
import s from './Header.module.scss'
import { Button, Container } from '@/shared/ui'
import { selectIsLoggedIn } from '@/shared/api/base-slice'
import { Tooltip } from '@/shared/ui/tooltip/Tooltip'
import { Scrollbar } from '@/shared/ui/scrollbar/Scrollbar'
import { useAppSelector } from '@/shared/lib/hooks'
import { HeaderSelect } from '@/widgets/header/ui/headerSelect/HeaderSelect'
import { Logout } from '@/features/auth/ui/logout/Logout'
import Link from 'next/link'
import { APP_ROUTES, AUTH_ROUTES } from '@/shared/lib/routes'

export const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          <Link href={APP_ROUTES.ROOT} className={s.logo}>
            <h1>Inctagram</h1>
          </Link>
          <div className={s.selectBox}>
            <Tooltip side={'bottom'}>
              <Scrollbar maxHeight={425} type={'scroll'}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem!
                  Animi architecto dolore dolores doloribus earum enim id illo, incidunt laudantium
                  magni porro praesentium quaerat qui quia rerum sit.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore
                  dolores doloribus earum enim id illo, incidunt laudantium magni porro praesentium
                  quaerat qui quia rerum sitLorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores doloribus earum
                  enim id illo, incidunt laudantium magni porro praesentium quaerat qui quia rerum
                  sitLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt,
                  voluptatem! Animi architecto dolore dolores doloribus earum enim id illo, incidunt
                  laudantium magni porro praesentium quaerat qui quia rerum sitLorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto
                  dolore dolores doloribus earum enim id illo, incidunt laudantium magni porro
                  praesentium quaerat qui quia rerum sitLorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores
                  doloribus earum enim id illo, incidunt laudantium magni porro praesentium quaerat
                  qui quia rerum sitLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                  sunt, voluptatem! Animi architecto dolore dolores doloribus earum enim id illo,
                  incidunt laudantium magni porro praesentium quaerat qui quia rerum sitLorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi
                  architecto dolore dolores doloribus earum enim id illo, incidunt laudantium magni
                  porro praesentium quaerat qui quia rerum sit
                </p>
              </Scrollbar>
            </Tooltip>
            <HeaderSelect />
            {isLoggedIn ? (
              <div className={s.buttonWrapper}>
                <Logout />
              </div>
            ) : (
              <div className={s.buttonWrapper}>
                <Button variant={'text'} asChild>
                  <Link href={AUTH_ROUTES.SIGN_IN}>Log in</Link>
                </Button>
                <Button variant={'primary'} asChild>
                  <Link href={AUTH_ROUTES.SIGN_UP}>Sign up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}
