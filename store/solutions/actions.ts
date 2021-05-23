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

    const file = `${uid}/${name}/${solutionId}.${language}`

    return file
  },
}

export default actions
