import API from '@/services/api'
import firebase from 'firebase'
import 'firebase/auth'

const actions = {
  async fetchMovies({ commit }) {
    const { data } = await API().get('/movies.json')

    commit('SET_MOVIES', data)
  },

  async signIn({ commit }, details) {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(details.email, details.password)

      if (user) commit('SET_USER', user)
    } catch (e) {
      console.error(e)
    }
  },
}

export default actions

// // export interface UserState {}
// // export interface UserDetails {
// //   email: string
// //   password: string
// // }

// // interface RootState {}
// const actions = {
//   async signUp({ commit }, { email, password }) {
//     const user = await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)

//     console.log('signup', user)

//     commit('SET_USER', user)
//   },

//   async signIn({ commit }, details) {
//     // console.log()
//     // commit('SET_USER', { name: 'hola' })

//     try {
//       const { user } = await firebase
//         .auth()
//         .signInWithEmailAndPassword(details.email, details.password)

//       if (user) commit('SET_USER', user)
//     } catch (e) {
//       console.error(e)
//     }
//   },

//   async signOut({ commit }) {
//     const user = await firebase.auth().signOut()

//     console.log('signout', user)
//     commit('SET_USER', {})
//   },
// }

// export default actions
