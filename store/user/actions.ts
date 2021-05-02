import firebase from 'firebase'
import { ActionTree } from 'vuex/types'

import { UserAuth, UserState } from '@/store/user/user.types'
import { RootState } from '../store.types'

interface UserDetails {
  email: string
  password: string
}

const actions: ActionTree<UserState, RootState> = {
  onAuthStateChangedAction: ({ commit }, { authUser, claims }: UserAuth) => {
    if (!authUser) {
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  },

  signIn: async (_, { email, password }: UserDetails) => {
    try {
      return await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      console.error(e)
    }
  },

  signOut: async () => {
    try {
      await firebase.auth().signOut()
    } catch (e) {
      console.error(e)
    }
  },

  signUpWithEmail: async (_, { email, password }: UserDetails) => {
    try {
      return await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
    } catch (e) {
      console.error(e)
    }
  },
}

export default actions
