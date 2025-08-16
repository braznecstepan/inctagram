import { AppStore } from '@/app/store'

export type AppStateTypes = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
