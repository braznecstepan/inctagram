'use client'
import s from './Header.module.scss'
import { Button, Container } from '@/shared/ui'
import { selectIsLoggedIn } from '@/shared/api/base-slice'
import { Tooltip } from '@/shared/ui/tooltip/Tooltip'
import { Scrollbar } from '@/shared/ui/scrollbar/Scrollbar'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/shared/lib/hooks'
import { HeaderSelect } from '@/widgets/header/ui/headerSelect/HeaderSelect'

export const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const router = useRouter()

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          <button type={'button'} onClick={() => router.push('/')} className={s.logo}>
            <h1>Inctagram</h1>
          </button>
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
            {!isLoggedIn && (
              <div className={s.buttonWrapper}>
                <Button onClick={() => router.push('/auth/sign-in')} variant={'outlined'}>
                  Log in
                </Button>
                <Button onClick={() => router.push('/auth/sign-up')}>Sign up</Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}
