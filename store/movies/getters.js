const getters = {
  movies(state) {
    return state.data
  },

  getMovie(state) {
    return (title) => {
      const movie = state.data.find((movie) => movie.title === title)

      // Ideally would need better check, also check if movies exist.
      // Preferably ditch this getter and send a separate get request to movies/:id to
      // get a single movie in case it's not in the store.
      return movie || null
    }
  },
}

export default getters
