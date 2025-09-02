import { PropsWithChildren } from 'react'
import s from '@/app/layout.module.scss'
import { Header } from '@/widgets'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={s.layoutContainer}>
      <Header />
      {children}
    </div>
  )
}
