import React, { PropsWithChildren } from 'react'
import StoreProvider from '@/app/storeProvider'
import { PopUp } from '@/shared/ui'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StoreProvider>
        {children}
        <PopUp />
      </StoreProvider>
    </>
  )
}
