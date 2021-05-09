import { ActionTree } from 'vuex/types'
import { v4 as uuidv4 } from 'uuid'

import { SolutionsState } from '@/store/solutions/solutions.types'
import { RootState } from '@/store/store.types'

interface Solution {
  name: string
  solution: string
  language: string
}

const actions: ActionTree<SolutionsState, RootState> = {
  async submitSolution(
    { rootGetters },
    { name, solution, language }: Solution
  ) {
    const { uid } = rootGetters['user/currentUser']
    const solutionId = uuidv4()

    const storageRef = this.$fire.storage
      .ref()
      .child(`${uid}/${name}/${solutionId}.${language}`)

    const res = await storageRef.putString(solution)

    return res
  },
}

export default actions
