<template>
  <div>
    <Navbar />
    <main class="container">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Navbar from '@/components/Navbar/index.vue'

export default Vue.extend({
  components: {
    Navbar,
  },

  mounted() {
    // TODO: move to plugin/call on app start
    // @ts-ignore
    this.$fireAuthStore.subscribe()
  },
})
</script>
<style>
/* Todo: Replace default bootstrap styling */
.container {
  margin-top: 64px !important;
  text-align: unset !important;
  min-height: unset !important;
}
</style>
