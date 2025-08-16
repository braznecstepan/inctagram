import { baseApi } from '@/shared/api'
import { LoginRequest, LoginResponse, MeResponse } from '@/entities/auth/types/authApi.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: obj => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: obj,
      }),
    }),
    me: builder.query<MeResponse, void>({
      query: () => ({
        url: '/api/v1/auth/me',
        method: 'GET',
      }),
    }),
  }),
})

export const { useMeQuery, useLoginMutation, useLazyMeQuery } = authApi
