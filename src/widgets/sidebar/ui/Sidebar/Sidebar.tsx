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
          <SidebarItem title={'Feed'} href={'/feed'} startDecoration={<HomeOutline />} />
          <div className={s.create}>
            <PlusSquareOutline />
            <CreatePublication title={'Create'} className={s.createBtn}/>
          </div>
          <SidebarItem title={'My Profile'} href={'/profile'} startDecoration={<PersonOutline />} />
          <SidebarItem
            title={'Messenger'}
            href={'/messenger'}
            startDecoration={<MessageCircleOutline />}
          />
          <SidebarItem title={'Search'} href={'/search'} startDecoration={<SearchOutline />} />
        </div>

        <div className={s.list}>
          <SidebarItem
            title={'Statistics'}
            href={'/statistics'}
            startDecoration={<TrendingUpOutline />}
          />
          <SidebarItem
            title={'Favorites'}
            href={'/favorites'}
            startDecoration={<BookmarkOutline />}
          />
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
