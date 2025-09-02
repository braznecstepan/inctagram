import React, { PropsWithChildren } from 'react'
import StoreProvider from '@/app/storeProvider'
import { PopUp } from '@/shared/ui'
import { AppLoader } from '@/shared/composed'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StoreProvider>
        {children}
        <PopUp />
        <AppLoader />
      </StoreProvider>
    </>
  )
}
