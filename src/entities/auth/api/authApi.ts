import { baseApi } from '@/shared/api'
import {
  LoginRequest,
  LoginResponse,
  MeResponse,
  RegistrationArgs,
  RegistrationConfirmationArgs,
  RegistrationEmailResendingArgs,
} from '@/entities/auth/api/authApi.types'

type RecoveryPasswordRequest = {
  email: string
  recaptcha: string
  baseUrl: string
}

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
    registration: builder.mutation<any, RegistrationArgs>({
      query: body => ({
        url: '/api/v1/auth/registration',
        method: 'POST',
        body,
      }),
    }),
    registrationConfirmation: builder.mutation<any, RegistrationConfirmationArgs>({
      query: body => ({
        url: '/api/v1/auth/registration-confirmation',
        method: 'POST',
        body,
      }),
    }),
    registrationEmailResending: builder.mutation<any, RegistrationEmailResendingArgs>({
      query: body => ({
        url: '/api/v1/auth/registration-email-resending',
        method: 'POST',
        body,
      }),
    }),
    recoveryPassword: builder.mutation<void, RecoveryPasswordRequest>({
      query: body => ({
        url: '/api/v1/auth/password-recovery',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useMeQuery,
  useLoginMutation,
  useLazyMeQuery,
  useRegistrationMutation,
  useRegistrationConfirmationMutation,
  useRegistrationEmailResendingMutation,
  useRecoveryPasswordMutation
} = authApi
