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
import {SidebarItem} from "@/widgets/sidebar";

export const Sidebar = () => {
  return (
    <nav className={s.sidebar} aria-label="Main navigation">
      <div>
        <div className={s.main}>
          <SidebarItem title={'Feed'} href={'/feed'}>
            <HomeOutline />
          </SidebarItem>

          <SidebarItem title={'Create'} href={'/post'}>
            <PlusSquareOutline />
          </SidebarItem>

          <SidebarItem title={'My Profile'} href={'/profile'}>
            <PersonOutline />
          </SidebarItem>

          <SidebarItem title={'Messenger'} href={'/messenger'}>
            <MessageCircleOutline />
          </SidebarItem>

          <SidebarItem title={'Search'} href={'/search'}>
            <SearchOutline />
          </SidebarItem>
        </div>

        <div className={s.list}>
          <SidebarItem title={'Statistics'} href={'/statistics'}>
            <TrendingUpOutline />
          </SidebarItem>

          <SidebarItem title={'Favorites'} href={'/favorites'}>
            <BookmarkOutline />
          </SidebarItem>
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
