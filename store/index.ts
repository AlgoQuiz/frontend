import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '@/store/store.types'

export interface AppState {}

export const state = (): RootState => ({})

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {}

export const actions: ActionTree<RootState, RootState> = {}

export const strict = false
