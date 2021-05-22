import Vue from 'vue'
import Vuex from 'vuex'

import MockComponents from './mock-vue-components'

MockComponents.forEach((MockComponent) =>
  // @ts-ignore
  Vue.component(MockComponent.name, MockComponent)
)

Vue.use(Vuex)
