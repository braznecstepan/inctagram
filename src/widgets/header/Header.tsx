'use client'
import s from './Header.module.scss'
import { Button, Container } from '@/shared/ui'
import OutlineBell from '@/shared/ui/icons/OutlineBell'
import { useAppSelector } from '@/app/store'
import { selectIsLoggedIn, selectNotificationStatus } from '@/shared/api/base-slice'
import { Tooltip } from '@/shared/ui/tooltip/Tooltip'
import { Scrollbar } from '@/shared/ui/scrollbar/Scrollbar'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const notificationStatus = useAppSelector(selectNotificationStatus)
  const router = useRouter()

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          <button type={'button'} onClick={() => router.push('/')} className={s.logo}>
            <h1>Inctagram</h1>
          </button>
          <div className={s.selectBox}>
            {isLoggedIn && notificationStatus && <OutlineBell />}
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
            {/*Заглушка select, тут должен быть drop-down*/}
            <select defaultValue={'1'}>
              <option value={'1'}>1</option>
              <option value={'2'}>2</option>
              <option value={'3'}>3</option>
            </select>
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
