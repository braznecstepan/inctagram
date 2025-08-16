import { createSlice } from '@reduxjs/toolkit'

export const baseSlice = createSlice({
  name: 'baseSlice',
  initialState: {
    isLoggedIn: false,
    notificationStatus: false,
    error: null as string | null,
  },
  reducers: create => ({
    meAC: create.reducer<{ isLoggedIn: boolean }>((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }),
    changeNewMessage: create.reducer<{ notificationStatus: boolean }>((state, action) => {
      state.notificationStatus = action.payload.notificationStatus
    }),
    changeError: create.reducer<{ error: string }>((state, action) => {
      state.error = action.payload.error
    }),
  }),
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectNotificationStatus: state => state.notificationStatus,
    selectError: state => state.error,
  },
})

export const { selectIsLoggedIn, selectNotificationStatus, selectError } = baseSlice.selectors
export const baseReducer = baseSlice.reducer
export const { meAC, changeNewMessage, changeError } = baseSlice.actions
