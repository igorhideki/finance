<template>
  <layout-auth>
    <div>
      <h1>Finance App</h1>
      <form @submit.prevent="onSubmit">
        <input
          v-model="name"
          type="text"
          placeholder="Nome"
        >
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
        <button type="submit">
          <span v-if="loading">
            Carregando
            <fa-icon
              icon="spinner"
              spin
            />
          </span>
          <span v-else>
            Criar conta
          </span>
        </button>
        <router-link to="/login">
          Já tenho login
        </router-link>
      </form>
    </div>
  </layout-auth>
</template>

<script>
import { mapActions } from 'vuex'

import LayoutAuth from '@/layouts/LayoutAuth'

export default {
  name: 'SignUp',
  components: {
    LayoutAuth
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    ...mapActions('auth', ['register']),

    onSubmit (e) {
      if (this.loading) return

      if (this.name && this.email && this.password) {
        this.loading = true

        this.register({
          name: this.name,
          email: this.email,
          password: this.password
        }).finally(() => {
          this.loading = true
          this.$router.push({ name: 'login' })
        })
      }
    }
  }
}
</script>
