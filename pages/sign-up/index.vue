<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Sign up</div>
          <div class="card-body">
            <div class="form-group">
              <input
                v-model="email"
                type="text"
                placeholder="Email"
                class="form-control"
              />
            </div>

            <div class="form-group">
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="form-control"
              />
            </div>

            <button @click="handleSignUp">Submit</button>
          </div>
        </div>
      </div>
    </div>
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

<style></style>
