import { configureStore } from '@reduxjs/toolkit'
import { baseApi, baseReducer, baseSlice } from '@/shared/api'

export const makeStore = () =>
  configureStore({
    reducer: {
      [baseSlice.name]: baseReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
