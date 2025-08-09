import Link from 'next/link'

import { AUTH_ROUTES } from '@/shared/lib/routes'
import { ArrowBackOutline } from '@/shared/ui/icons'

import s from './TermsOfService.module.scss'

const TermsOfService = () => {
  return (
    <>
      <div className={s.back_link}>
        <Link href={AUTH_ROUTES.SIGN_UP}>
          <ArrowBackOutline className="text-blue-500" />
          Back to Sign Up
        </Link>
      </div>
      <div className={s.container}>
        <h1 className={s.terms_title}>Terms of Service</h1>
        <p className={s.terms_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh. Amet
          consectetur adipiscing elit ut aliquam purus sit amet luctus. Tortor vitae purus faucibus
          ornare suspendisse sed nisi. Dolor sit amet consectetur adipiscing. Massa enim nec dui
          nunc mattis enim ut tellus. Scelerisque eleifend donec pretium vulputate sapien nec
          sagittis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tortor aliquam
          nulla facilisi cras. Elit pellentesque habitant morbi tristique senectus et netus. Nulla
          facilisi nullam vehicula ipsum a arcu cursus. Ut lectus arcu bibendum at varius vel
          pharetra. Etiam erat velit scelerisque in dictum non consectetur. Quam adipiscing vitae
          proin sagittis nisl rhoncus mattis rhoncus. Id diam maecenas ultricies mi eget mauris
          pharetra. Tincidunt lobortis feugiat vivamus at augue. Non odio euismod lacinia at.
          Aliquet eget sit amet tellus. Auctor neque vitae tempus quam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Fames ac turpis egestas integer eget aliquet nibh. Amet consectetur adipiscing
          elit ut aliquam purus sit amet luctus. Tortor vitae purus faucibus ornare suspendisse sed
          nisi. Dolor sit amet consectetur adipiscing. Massa enim nec dui nunc mattis enim ut
          tellus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Feugiat nisl
          pretium fusce id velit ut tortor pretium viverra. Tortor aliquam nulla facilisi cras. Elit
          pellentesque habitant morbi tristique senectus et netus. Nulla facilisi nullam vehicula
          ipsum a arcu cursus. Ut lectus arcu bibendum at varius vel pharetra. Etiam erat velit
          scelerisque in dictum non consectetur. Quam adipiscing vitae proin sagittis nisl rhoncus
          mattis rhoncus. Id diam maecenas ultricies mi eget mauris pharetra. Tincidunt lobortis
          feugiat vivamus at augue. Non odio euismod lacinia at. Aliquet eget sit amet tellus.
          Auctor neque vitae tempus quam.
        </p>
      </div>
    </>
  )
}

export default TermsOfService
