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
          Criar conta
        </button>
        <router-link to="/register">
          Já tenho login
        </router-link>
      </form>
    </div>
  </layout-auth>
</template>

<script>
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
      password: ''
    }
  },
  methods: {
    onSubmit (e) {
      if (this.name && this.email && this.password) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password
        }

        localStorage.setItem(this.email, JSON.stringify(user))
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>
