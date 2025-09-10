import s from './Sidebar.module.scss'
import { Logout } from '@/features/auth'
import {
  BookmarkOutline,
  HomeOutline,
  LogOutOutline,
  MessageCircleOutline,
  PersonOutline,
  PlusSquareOutline,
  SearchOutline,
  TrendingUpOutline,
} from '@/shared/ui/icons'
import { SidebarItem } from '@/widgets/sidebar'
import { CreatePublication } from '@/pages/create_publication'

export const Sidebar = () => {

  const mainLinks = [
    { title: 'Feed', href: '/feed', icon: <HomeOutline /> },
    { title: 'Create', href: '/create', icon: <PlusSquareOutline /> },
    { title: 'My Profile', href: '/profile', icon: <PersonOutline /> },
    { title: 'Messenger', href: '/messenger', icon: <MessageCircleOutline /> },
    { title: 'Search', href: '/search', icon: <SearchOutline /> },
  ]

  const extraLinks = [
    { title: 'Statistics', href: '/statistics', icon: <TrendingUpOutline /> },
    { title: 'Favorites', href: '/favorites', icon: <BookmarkOutline /> },
  ]

  return (
    <nav className={s.sidebar} aria-label="Main navigation">
      <div>
        <div className={s.main}>
          {mainLinks.map(({ title, href, icon }) => {
                if (title === 'Create') {
                  return (
                      <div className={s.create} key={href}>
                        <PlusSquareOutline/>
                        <CreatePublication title={title} className={s.createBtn}/>
                      </div>
                  )
                } else {
                  return (
                      <SidebarItem
                          key={href}
                          title={title}
                          href={href}
                          startDecoration={icon}
                      />
                  )
                }
          })}
        </div>

        <div className={s.list}>
          {extraLinks.map(link => {
            return (
                <SidebarItem
                    key={link.href}
                    title={link.title}
                    href={link.href}
                    startDecoration={link.icon}
                />
            )
          })}
        </div>
      </div>

      <div className={s.logout}>
        <LogOutOutline aria-label="Log out" />
        <Logout className={s.logoutBtn} />
      </div>
    </nav>
  )
}

export default Sidebar
