<template>
  <div class="signin d-flex flex-row justify-content-center">
    <BCol :md="8">
      <BCard>
        <template #header>
          <h4 class="signin__header">Sign in</h4>
        </template>

        <BFormGroup label="Email" label-for="email">
          <BFormInput v-model="email" id="email" type="text" trim />
        </BFormGroup>

        <BFormGroup label="Password" label-for="password">
          <BFormInput v-model="password" id="password" type="password" />
        </BFormGroup>

        <BButton variant="primary" @click="handleSignIn">Submit</BButton>
      </BCard>
    </BCol>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import { isEmptyObject } from '~/utils'

const { mapActions: mapUserActions } = createNamespacedHelpers('user')

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    ...mapUserActions(['signIn']),

    async handleSignIn() {
      const { email, password } = this

      const { user } = await this.signIn({ email, password })

      if (!isEmptyObject(user)) {
        this.$router.push('/tasks')
      }
    },
  },
}
</script>

<style>
.signin {
  width: 100%;
  margin-top: 64px;
}

.signin__header {
  margin: 0;
}
</style>
