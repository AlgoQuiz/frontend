import { Store } from 'vuex/types/index'

export interface RootState {}

declare module '@nuxt/types' {
  interface Context {
    Store: Store<RootState>
  }
}
