const mutations = {
  SET_MOVIES(state, { data }) {
    if (data && data.length > 0) {
      state.data = data
    }
  },

  SET_USER(state, { data }) {
    if (data && data.length > 0) {
      state.data = data
    }
  },
}

export default mutations
