import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '@/app/baseQuery'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  // eslint-disable-next-line
  endpoints: builder => ({}),
})
