<template>
  <nav class="navbar">
    <div class="content">
      <router-link
        class="brand"
        to="/"
        tag="div"
      >
        Finance app
      </router-link>
      <aside>
        <div class="user">
          <div>{{ user.name }}</div>
          <router-link to="/about">
            Meu perfil
          </router-link>
        </div>
        <button
          class="logout"
          @click="onLogOut"
        >
          Sair
        </button>
      </aside>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['logOut']),

    onLogOut () {
      this.logOut()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  padding: 0 30px;

  .content {
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    margin: 0 auto;
  }

  .brand {
    color: $primary;
    text-transform: uppercase;
    font-weight: bold;
  }

  a {
    color: $accent;

    &:hover {
      color: $primary-dark;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }

  .user {
    line-height: 1.2;
    text-align: right;
    margin-right: 20px;

    div {
      font-weight: bold;
      font-size: 14px;
    }

    a {
      font-size: 12px;
    }
  }

  .logout {
    height: 40px;
    background: $primary;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    padding: 0 16px;
    transition: background 0.2s;

    &:hover {
      background: $primary-dark;
    }
  }
}
</style>
