// import type { GetterTree, ActionTree, MutationTree } from 'vuex'
// export interface AppState {}

// export interface RootState {}

// export const state = (): RootState => ({})

// export const getters: GetterTree<RootState, RootState> = {}

// export const mutations: MutationTree<RootState> = {}

// export const actions: ActionTree<RootState, RootState> = {}

import Vue from 'vue'
import Vuex from 'vuex'

import * as movies from './movies'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies: {
      namespaced: true,
      ...movies,
    },
  },
})
