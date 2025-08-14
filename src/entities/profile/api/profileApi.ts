import { baseApi } from '@/shared/api'

export type GetProfile = {
  id: number
  userName: string
  firstName: string
  lastName: string
  city: string
  country: string
  region: string
  dateOfBirth: string
  aboutMe: string
  avatars: [
    {
      url: string
      width: number
      height: number
      fileSize: number
      createdAt: string
    },
  ]
  createdAt: string
}

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<GetProfile, void>({
      query: () => ({
        url: '/api/v1/users/profile',
        method: 'GET',
      }),
    }),
  }),
})

export const {useGetProfileQuery,useLazyGetProfileQuery} = profileApi