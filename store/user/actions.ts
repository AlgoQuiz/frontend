import { ActionTree } from 'vuex/types'

import { UserAuth, UserState } from '@/store/user/user.types'
import { RootState } from '../store.types'

interface UserDetails {
  email: string
  password: string
}

const actions: ActionTree<UserState, RootState> = {
  async signIn(_, { email, password }: UserDetails) {
    try {
      return
    } catch (e) {
      console.error(e)
    }
  },

  async signOut() {
    try {
      await
    } catch (e) {
      console.error(e)
    }
  },

  async signUpWithEmail(_, { email, password }: UserDetails) {
    try {
      return
    } catch (e) {
      console.error(e)
    }
  },
}

export default actions
