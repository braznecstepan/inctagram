import { baseApi } from '@/shared/api'
import { GetProfileResponse } from '@/entities/profile/types/profileApi.types'

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<GetProfileResponse, void>({
      query: () => ({
        url: '/api/v1/users/profile',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetProfileQuery, useLazyGetProfileQuery } = profileApi
