<template>
  <layout-auth>
    <div>
      <h1>Finance App</h1>
      <form @submit.prevent="onSubmit">
        <input
          v-model="email"
          type="email"
          placeholder="E-mail"
        >
        <input
          v-model="password"
          type="password"
          placeholder="Senha"
        >
        <span
          v-show="message"
        >
          {{ message }}
        </span>
        <button
          type="
          submit"
        >
          <span v-if="loading">
            Carregando
            <fa-icon
              icon="spinner"
              spin
            />
          </span>
          <span v-else>
            Acessar
          </span>
        </button>
        <router-link to="/register">
          Criar conta
        </router-link>
      </form>
    </div>
  </layout-auth>
</template>

<script>
import { mapActions } from 'vuex'

import LayoutAuth from '@/layouts/LayoutAuth'

export default {
  name: 'SignIn',
  components: {
    LayoutAuth
  },
  data () {
    return {
      email: '',
      password: '',
      message: '',
      loading: false
    }
  },
  methods: {
    ...mapActions('auth', ['logIn']),

    onSubmit (e) {
      if (!(this.email || this.password)) return

      if (this.loading) return

      this.loading = true

      this.logIn({
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/')
      }).catch(error => {
        this.message = error.message
        this.loading = false
      })
    }
  }
}
</script>
