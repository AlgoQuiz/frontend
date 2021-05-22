import { Middleware } from '@nuxt/types'

const isAuthorized: Middleware = ({ store, redirect }) => {
  const isLoggedIn = store.getters['user/isLoggedIn']

  if (!isLoggedIn) {
    return redirect('/sign-in')
  }
}

export default isAuthorized
