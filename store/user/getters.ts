import { GetterTree } from 'vuex/types'

import { RootState } from '../store.types'
import { UserState } from './user.types'

import { isEmptyObject } from '~/utils'

const getters: GetterTree<UserState, RootState> = {
  currentUser(state) {
    return state.data
  },

  isLoggedIn(_, getters) {
    return !isEmptyObject(getters.currentUser)
  },
}

export default getters
