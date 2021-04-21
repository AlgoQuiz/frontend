import { GetterTree, ActionTree, MutationTree } from 'vuex/types'

import { RootState } from './store.types'

export interface AppState {}

export const state = (): AppState => ({})

export const strict = false

export const getters: GetterTree<AppState, RootState> = {}

export const actions: ActionTree<AppState, RootState> = {}

export const mutations: MutationTree<AppState> = {}
