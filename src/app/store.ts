import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { baseApi, baseReducer, baseSlice } from '@/shared'
import process from 'process'

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
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppStore = useStore.withTypes<AppStore>()

const store = makeStore()

if (process.env.NODE_ENV !== 'development') {
  // @ts-ignore
  window.store = store
}
