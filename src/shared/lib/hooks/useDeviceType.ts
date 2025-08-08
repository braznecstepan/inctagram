import { useEffect, useState } from 'react'

type Device = 'desktop' | 'tablet' | 'mobile' | 'unknown'

const getDeviceType = (): Device => {
  if (typeof window === 'undefined') {
    return 'unknown'
  }

  if (window.innerWidth <= 768) {
    return 'mobile'
  }

  if (window.innerWidth <= 1280) {
    return 'tablet'
  }

  return 'desktop'
}

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<Device>('unknown')

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobile = deviceType === 'mobile'
  const isTablet = deviceType === 'tablet'
  const isDesktop = deviceType === 'desktop'

  return { deviceType, isDesktop, isTablet, isMobile }
}
