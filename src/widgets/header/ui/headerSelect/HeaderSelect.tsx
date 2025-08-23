'use client'
import * as React from 'react'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select/Select'
import FlagRussia from '@/shared/ui/icons/FlagRussia'
import FlagUnitedKingdom from '@/shared/ui/icons/FlagUnitedKingdom'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { changeLocale, selectLocale } from '@/shared/api/base-slice'
import s from './HeaderSelect.module.scss'
import { clsx } from 'clsx'
import { LocaleType } from '@/shared/types'

export function HeaderSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const locale = useAppSelector(selectLocale)
  const changeLocaleHandler = (value: LocaleType) => {
    dispatch(changeLocale({ locale: value }))
  }
  const openHandler = (open: boolean) => {
    setIsOpen(open)
  }

  return (
    <Select onOpenChange={openHandler} onValueChange={changeLocaleHandler} defaultValue={locale}>
      <SelectTrigger isOpen={isOpen} className={clsx(s.trigger, isOpen && s.open)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent position={'popper'} className={clsx(s.content, isOpen && s.open)}>
        <SelectGroup>
          <SelectItem className={s.item} value={'en'}>
            <FlagUnitedKingdom className={s.icon} />
            <span className={s.text}>English</span>
          </SelectItem>
          <SelectItem value={'ru'}>
            <FlagRussia className={s.icon} />
            <span className={s.text}>Russian</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
