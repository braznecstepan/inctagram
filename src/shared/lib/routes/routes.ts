export const APP_ROUTES = {
  ROOT: `/`,
  AUTH: `/auth`,
  PROFILE: `/profile`,
}

export const AUTH_ROUTES = {
  SIGN_IN: `${APP_ROUTES.AUTH}/sign-in`,
  SIGN_UP: `${APP_ROUTES.AUTH}/sign-up`,
  RECOVERY: `${APP_ROUTES.AUTH}/recovery`,
  CREATE_PASSWORD: `${APP_ROUTES.AUTH}/recovery/create-password`,
  EXPIRED_LINK: `${APP_ROUTES.AUTH}/expired-link`,
  CONFIRMED_EMAIL: `${APP_ROUTES.AUTH}/confirmed-email`,
  TERMS_OF_SERVICE: `${APP_ROUTES.AUTH}/terms-of-service`,
  PRIVACY_POLICY: `${APP_ROUTES.AUTH}/privacy-policy`,
}

export const SIDEBAR_ROUTES = {
  FEED: `${APP_ROUTES.ROOT}feed`,
  CREATE: `${APP_ROUTES.ROOT}create_publication`,
  MESSENGER: `${APP_ROUTES.ROOT}messenger`,
  SEARCH: `${APP_ROUTES.ROOT}search`,
  STATISTICS: `${APP_ROUTES.ROOT}statistics`,
  FAVORITE: `${APP_ROUTES.ROOT}favorites`,
}

export const PROFILE_ROUTES = {
  SETTINGS: `${APP_ROUTES.PROFILE}/settings`,
}

// example
export const getUserProfileRoute = (id: string) => `/users/${id}`
