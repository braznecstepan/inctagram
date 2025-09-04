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

export const Sidebar = () => {
  return (
    <nav className={s.sidebar} aria-label="Main navigation">
        <div>
          <div className={s.main}>
            <SidebarItem
                title={'Feed'}
                href={'/feed'}
                startDecoration={<HomeOutline />} />
            <SidebarItem
                title={'Create'}
                href={'/post'}
                startDecoration={<PlusSquareOutline />} />
            <SidebarItem
              title={'My Profile'}
              href={'/profile'}
              startDecoration={<PersonOutline />}
            />
            <SidebarItem
              title={'Messenger'}
              href={'/messenger'}
              startDecoration={<MessageCircleOutline />}
            />
            <SidebarItem
                title={'Search'}
                href={'/search'}
                startDecoration={<SearchOutline />} />
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
