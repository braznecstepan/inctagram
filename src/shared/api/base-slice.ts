import { createSlice } from '@reduxjs/toolkit'

export const baseSlice = createSlice({
  name: 'baseSlice',
  initialState: {
    isLoggedIn: false,
    notificationStatus: false,
  },
  reducers: create => ({
    meAC: create.reducer<{ isLoggedIn: boolean }>((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }),
    changeNewMessage: create.reducer<{ notificationStatus: boolean }>((state, action) => {
      state.notificationStatus = action.payload.notificationStatus
    }),
  }),
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectNotificationStatus: state => state.notificationStatus,
  },
})

export const { selectIsLoggedIn, selectNotificationStatus } = baseSlice.selectors
export const baseReducer = baseSlice.reducer
export const { meAC, changeNewMessage } = baseSlice.actions
