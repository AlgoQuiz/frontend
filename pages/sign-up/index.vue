<template>
  <div class="signup d-flex flex-row justify-content-center">
    <BCol :md="8">
      <BCard>
        <template #header>
          <h4 class="signup__header">Sign up</h4>
        </template>

        <BFormGroup label="Username" label-for="name">
          <BFormInput v-model="name" id="name" type="text" trim />
        </BFormGroup>

        <BFormGroup label="Email" label-for="email">
          <BFormInput v-model="email" id="email" type="text" trim />
        </BFormGroup>

        <BFormGroup label="Password" label-for="password">
          <BFormInput v-model="password" id="password" type="password" />
        </BFormGroup>

        <BFormGroup label="Confirm password" label-for="confirm-password">
          <BFormInput
            v-model="confirmPassword"
            id="confirm-password"
            type="password"
          />
        </BFormGroup>

        <BButton variant="primary" @click="handleSignUp">Submit</BButton>
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
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },

  methods: {
    ...mapUserActions(['signUpWithEmail']),

    async handleSignUp() {
      const { email, password } = this

      const { user } = await this.signUpWithEmail({ email, password })

      if (!isEmptyObject(user)) {
        this.$router.push('/tasks')
      }
    },
  },
}
</script>

<style>
.signup {
  width: 100%;
  margin-top: 64px;
}

.signup__header {
  margin: 0;
}
</style>
