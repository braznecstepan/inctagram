import { baseApi } from '@/shared/api'

export type RequestType = {
  email: string
  password: string
}

export type ResponseType = {
  accessToken: string
}

export type ResponseMeType = {
  userId: string
  userName: string
  email: string
  isBlocked: boolean
}

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ResponseType, RequestType>({
      query: obj => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: obj,
      }),
    }),
    me: builder.query<ResponseMeType, void>({
      query: () => ({
        url: '/api/v1/auth/me',
        method: 'GET',
      }),
    }),
  }),
})

export const { useMeQuery, useLoginMutation } = authApi
