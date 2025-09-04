import s from '@/widgets/sidebar/ui/Sidebar/Sidebar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  title: string
  href: string
  startDecoration: ReactNode
}

export const SidebarItem = ({ title, href, startDecoration }: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`${s.link} ${isActive ? s.active : ''}`} aria-label={title}>
      {startDecoration}
      {title}
    </Link>
  )
}