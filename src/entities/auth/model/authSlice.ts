import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '@/entities/auth/api'

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {},
  reducers: create => ({}),
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.accessToken)
    })
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, () => {
      localStorage.removeItem('token')
    })
  },
})

export const authReducer = authSlice.reducer
