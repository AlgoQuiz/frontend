import { Store } from 'vuex/types/index'

import { AppState } from '.'

export interface RootState extends AppState {}

declare module '@nuxt/types' {
  interface Context {
    Store: Store<RootState>
  }
}
