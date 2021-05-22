<template>
  <BNavbar toggleable="lg" type="dark" variant="primary">
    <BNavbarBrand to="/">AlgoRace</BNavbarBrand>

    <BNavbarToggle target="nav-collapse"></BNavbarToggle>

    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav v-if="isLoggedIn" class="ml-auto">
        <BNavItem to="/tasks">Tasks</BNavItem>
        <BNavItem @click="signOut">Sign out</BNavItem>
      </BNavbarNav>
      <BNavbarNav v-else class="ml-auto">
        <BNavItem to="/sign-in">Sign in</BNavItem>
        <BNavItem to="/sign-up">Sign up</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
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
