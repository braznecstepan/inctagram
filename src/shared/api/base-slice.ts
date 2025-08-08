import { createSlice } from '@reduxjs/toolkit'

export const baseSlice = createSlice({
  name: 'baseSlice',
  initialState: {
    isLoggedIn: false,
    messageStatus: false,
  },
  reducers: create => ({
    meAC: create.reducer<{ isLoggedIn: boolean }>((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }),
    changeNewMessage: create.reducer<{ messageStatus: boolean }>((state, action) => {
      state.messageStatus = action.payload.messageStatus
    }),
  }),
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectMessageStatus: state => state.messageStatus,
  },
})

export const { selectIsLoggedIn, selectMessageStatus } = baseSlice.selectors
export const baseReducer = baseSlice.reducer
