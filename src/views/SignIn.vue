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
        <button type="submit">
          Acessar
        </button>
        <router-link to="/register">
          Criar conta
        </router-link>
      </form>
    </div>
  </layout-auth>
</template>

<script>
import LayoutAuth from '@/layouts/LayoutAuth'

export default {
  name: 'SignIn',
  components: {
    LayoutAuth
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit (e) {
      if (this.email && this.password) {
        this.$router.push('/')
      }
    }
  }
}
</script>
