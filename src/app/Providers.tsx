import React, { PropsWithChildren } from 'react'
import StoreProvider from '@/app/storeProvider'
import { PopUp } from '@/shared/ui'
import NextTopLoader from 'nextjs-toploader'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StoreProvider>
        {children}
        <PopUp />
        <NextTopLoader showSpinner={false} />
      </StoreProvider>
    </>
  )
}
