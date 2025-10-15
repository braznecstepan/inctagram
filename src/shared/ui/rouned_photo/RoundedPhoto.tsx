'use client'

import Image, { ImageProps } from 'next/image'
import { CSSProperties, useState, useEffect } from 'react'
import s from './RoundedPhoto.module.scss'

interface Props extends Omit<ImageProps, 'width' | 'height'> {
  src: string
  size?: number | string
  borderRadius?: number | string
  wrapperStyle?: CSSProperties
  fallback?: React.ReactNode
}

export const RoundedPhoto = ({
  src,
  fallback,
  onError,
  size = 100,
  borderRadius = '50%',
  wrapperStyle,
  style,
  alt,
  ...imageProps
}: Props) => {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)
  }, [src])

  const baseWrapperStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius,
  }

  if (size) {
    baseWrapperStyle.width = size
    baseWrapperStyle.height = size
  }

  const combinedWrapperStyle = { ...baseWrapperStyle, ...wrapperStyle }

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true)
    onError?.(e)
  }

  const showFallback = (!src || hasError) && fallback

  return (
    <div style={combinedWrapperStyle} className={s.photo}>
      {!showFallback ? (
        <Image
          className={s.image}
          src={src}
          alt={alt}
          onError={handleError}
          priority={true}
          fill
          style={{ objectFit: 'cover', ...style }}
          sizes={`${size}px`}
          {...imageProps}
        />
      ) : (
        <div className={s.fallback}>{fallback}</div>
      )}
    </div>
  )
}

// 1 Должна настраиваться степень скругления (по уомолчанию круг)
// 2 должна быть возможность указыввать размер компонента
// 3 должна быть возможность указывать стили
// с такими условиями
