<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">AlgoRace</NuxtLink>
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
        <div v-if="isLoggedIn" class="navbar-nav">
          <NuxtLink v-if="isLoggedIn" to="/tasks" class="nav-link"
            >Tasks</NuxtLink
          >
          <button v-if="isLoggedIn" class="nav-link button" @click="signOut">
            Sign out
          </button>
        </div>
        <div v-else class="navbar-nav">
          <NuxtLink
            v-if="!isLoggedIn"
            to="/signin"
            class="nav-link"
            aria-current="page"
            >Sign in</NuxtLink
          >
          <NuxtLink v-if="!isLoggedIn" to="/signup" class="nav-link"
            >Sign up</NuxtLink
          >
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

<style scoped>
.nav-link.button {
  border: none;
  background: transparent !important;
}
</style>
