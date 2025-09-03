import { configureStore } from '@reduxjs/toolkit'
import { baseApi, baseReducer, baseSlice } from '@/shared/api'
import { authReducer, authSlice } from '@/entities/auth/model/authSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      [baseSlice.name]: baseReducer,
      [authSlice.name]: authReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
