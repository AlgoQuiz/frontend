import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

import * as user from '~/store/user'

import Navbar from './index.vue'

jest.mock('~/store/user')

describe('Components: Navbar', () => {
  let store: any

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        user,
      },
    })
  })

  const factory = (opts = {}) =>
    shallowMount(Navbar, {
      store,
      ...opts,
    })

  describe('snapshots', () => {
    it('matches default snapshot', () => {
      const wrapper = factory()

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
