'use client'
import s from './Header.module.scss'
import { Button, Container } from '@/shared/ui'
import OutlineBell from '@/shared/ui/icons/OutlineBell'
import { useAppSelector } from '@/app/store'
import { selectIsLoggedIn, selectNotificationStatus } from '@/shared/api/base-slice'
import { Tooltip } from '@/shared/ui/tooltip/Tooltip'
import { Scrollbar } from '@/shared/ui/scrollbar/Scrollbar'

export const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const notificationStatus = useAppSelector(selectNotificationStatus)

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          <h1 className={s.logo}>Inctagram</h1>
          <div className={s.selectBox}>
            {isLoggedIn && notificationStatus && <OutlineBell />}
            <Tooltip  side={'bottom'}>
              <Scrollbar type={'scroll'}>
                <ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores doloribus earum enim id illo, incidunt laudantium magni porro praesentium quaerat qui quia rerum sit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores doloribus earum enim id illo, incidunt laudantium magni porro praesentium quaerat qui quia rerum sitLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores doloribus earum enim id illo, incidunt laudantium magni porro praesentium quaerat qui quia rerum sitLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores doloribus earum enim id illo, incidunt laudantium magni porro praesentium quaerat qui quia rerum sitLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores doloribus earum enim id illo, incidunt laudantium magni porro praesentium quaerat qui quia rerum sitLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores doloribus earum enim id illo, incidunt laudantium magni porro praesentium quaerat qui quia rerum sitLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores doloribus earum enim id illo, incidunt laudantium magni porro praesentium quaerat qui quia rerum sitLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt, voluptatem! Animi architecto dolore dolores doloribus earum enim id illo, incidunt laudantium magni porro praesentium quaerat qui quia rerum sit</p>
                </ul>
              </Scrollbar>
            </Tooltip>
            {/*Заглушка select, тут должен быть drop-down*/}
            <select defaultValue={'1'}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {!isLoggedIn && (
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
