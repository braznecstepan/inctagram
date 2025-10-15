import { RoundedPhoto } from '@/shared/ui/rouned_photo/RoundedPhoto'

export function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <RoundedPhoto
        src={
          'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png'
        }
        alt="User Photo"
        fallback="TM"
        wrapperStyle={{
          border: '2px solid #24e212ff',
          boxShadow: '0 4px 8px rgba(233, 19, 19, 0.88)',
        }}
      />
    </>
  )
}

/////example  'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png'
