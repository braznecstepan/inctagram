'use client'

import NextTopLoader, { NextTopLoaderProps, useTopLoader } from 'nextjs-toploader'
import { useAppSelector } from '@/shared/lib/hooks'
import { selectIsLoading } from '@/shared/api/base-slice'
import { useEffect } from 'react'

type Props = NextTopLoaderProps

export const AppLoader = (props: Props) => {
  const isLoading = useAppSelector(selectIsLoading)
  const { start, isStarted, done } = useTopLoader()

  useEffect(() => {
    if (isLoading) {
      if (!isStarted()) {
        start()
      }
    } else {
      done()
    }

    return () => {
      if (isStarted()) {
        done(true)
      }
    }
  }, [isLoading])

  return (
    <NextTopLoader
      {...props}
      showSpinner={false}
      initialPosition={0.2}
      height={4}
      speed={400}
      crawlSpeed={100}
    />
  )
}
