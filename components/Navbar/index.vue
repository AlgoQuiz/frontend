<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <nuxt-link
            to="/signin"
            class="nav-link active"
            aria-current="page"
            href="#"
            >Sign in</nuxt-link
          >
          <nuxt-link to="/signup" class="nav-link" href="#">Sign up</nuxt-link>
          <nuxt-link to="/account" class="nav-link" href="#">Account</nuxt-link>
          <button v-if="isLoggedIn" class="nav-link" @click="signOut">
            Sign out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const {
  mapActions: mapUserActions,
  mapGetters: mapUserGetters,
} = createNamespacedHelpers('user')

export default {
  name: 'Navbar',

  computed: {
    ...mapUserGetters(['isLoggedIn']),
  },

  methods: {
    ...mapUserActions(['signOut']),
  },
}
</script>

<style></style>
