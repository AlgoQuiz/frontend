<template>
  <div>
    <Navbar />
    <BContainer>
      <Nuxt />
    </BContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Navbar from '@/components/Navbar/index.vue'

export default Vue.extend({
  components: {
    Navbar,
  },
})
</script>
<style>
.container {
  text-align: unset !important;
  min-height: unset !important;
}
</style>
