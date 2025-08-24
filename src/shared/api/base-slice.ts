import { createSlice } from '@reduxjs/toolkit'
import { LocaleType } from '@/shared/types'

export const baseSlice = createSlice({
  name: 'baseSlice',
  initialState: {
    isLoggedIn: false,
    notificationStatus: false,
    error: null as string | null,
    locale: 'en' as LocaleType,
  },
  reducers: create => ({
    meAC: create.reducer<{ isLoggedIn: boolean }>((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }),
    changeIsLoggedIn: create.reducer<{ isLoggedIn: boolean }>((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }),
    changeNewMessage: create.reducer<{ notificationStatus: boolean }>((state, action) => {
      state.notificationStatus = action.payload.notificationStatus
    }),
    changeError: create.reducer<{ error: string }>((state, action) => {
      state.error = action.payload.error
    }),
    changeLocale: create.reducer<{ locale: LocaleType }>((state, action) => {
      state.locale = action.payload.locale
    }),
  }),
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectNotificationStatus: state => state.notificationStatus,
    selectError: state => state.error,
    selectLocale: state => state.locale,
  },
})

export const { selectIsLoggedIn, selectNotificationStatus, selectError, selectLocale } =
  baseSlice.selectors
export const baseReducer = baseSlice.reducer
export const { meAC, changeNewMessage, changeError, changeLocale, changeIsLoggedIn } =
  baseSlice.actions
