import React from 'react'

import { clsx } from 'clsx'
import * as Select from '@radix-ui/react-select'

import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { ChevronUpIcon } from '../icons/ChevronUpIcon'

import s from './DropDown.module.scss'

export type DropDownOption = {
  value: string
  label: string
  disabled?: boolean
}

export type DropDownProps = {
  options: DropDownOption[]
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  label?: string
  error?: string
  className?: string
  onValueChange?: (value: string) => void
}

export const DropDown: React.FC<DropDownProps> = ({
  options,
  value,
  defaultValue,
  placeholder = 'Select an option...',
  disabled = false,
  label,
  error,
  className,
  onValueChange,
}) => {
  return (
    <div className={clsx(s.dropdown, className)}>
      {label && <label className={s.label}>{label}</label>}

      <Select.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <Select.Trigger
          className={clsx(s.trigger, {
            [s.error]: error,
            [s.disabled]: disabled,
          })}
          aria-label={label}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon className={s.icon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={s.content}
            position={'popper'}
            side={'bottom'}
            align={'start'}
            sideOffset={4}
          >
            <Select.ScrollUpButton className={s.scrollButton}>
              <ChevronUpIcon />
            </Select.ScrollUpButton>

            <Select.Viewport className={s.viewport}>
              {options.length === 0 ? (
                <div className={s.emptyState}>No options available</div>
              ) : (
                options.map(option => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={clsx(s.item, {
                      [s.itemDisabled]: option.disabled,
                    })}
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                  </Select.Item>
                ))
              )}
            </Select.Viewport>

            <Select.ScrollDownButton className={s.scrollButton}>
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {error && <div className={s.errorMessage}>{error}</div>}
    </div>
  )
}
