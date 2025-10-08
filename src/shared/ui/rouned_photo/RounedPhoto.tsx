import Image from 'next/image'
import s from './RounedPhoto.module.scss'

export const RoundedPhoto = ({}) => {
  return (
    <div className={s.roundedPhoto}>
      <Image src="" alt="Profile Image" width={204} height={204} />
    </div>
  )
}
