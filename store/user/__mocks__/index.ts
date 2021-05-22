export const namespaced = true

export const state = () => ({})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: jest.fn(),
}

export const getters = {
  currentUser: jest.fn(),
  isLoggedIn: jest.fn(),
}

export const actions = {
  onAuthStateChangedAction: jest.fn(),
  signIn: jest.fn().mockReturnValue(Promise.resolve({})),
  signUpWithEmail: jest.fn().mockReturnValue(Promise.resolve({})),
  signOut: jest.fn().mockReturnValue(Promise.resolve({})),
}
