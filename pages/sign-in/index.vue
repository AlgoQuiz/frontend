<template>
  <div class="signin d-flex flex-row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Sign in</div>
        <div class="card-body">
          <div class="form-group">
            <input
              v-model="login.email"
              type="text"
              placeholder="Email"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <input
              v-model="login.password"
              type="password"
              placeholder="Password"
              class="form-control"
            />
          </div>

          <button @click="handleSignIn">Submit</button>
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
      login: {
        email: '',
        password: '',
      },
    }
  },

  mounted() {
    console.log(this.$auth)
  },

  methods: {
    ...mapUserActions(['signIn']),

    async handleSignIn() {
      try {
        let response = await this.$auth.loginWith('cookie', {
          data: this.login,
        })
        console.log(response)
        console.log(this.$auth)
      } catch (err) {
        console.log(err)
      }
      // const { email, password } = this

      // const { user } = await this.signIn({ email, password })

      // if (!isEmptyObject(user)) {
      //   this.$router.push('/tasks')
      // }
    },
  },
}
</script>

<style>
.signin {
  width: 100%;
}
</style>
