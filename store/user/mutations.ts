import { MutationTree } from 'vuex/types/index'
import { UserState, UserAuth } from './user.types'

const mutations: MutationTree<UserState> = {
  ON_AUTH_STATE_CHANGED_MUTATION: (
    state: UserState,
    { authUser }: UserAuth
  ) => {
    if (!authUser) {
      state.data = {}
      return
    }

    const { uid, email, emailVerified } = authUser

    state.data = { uid, email, emailVerified }
  },
}

export default mutations
