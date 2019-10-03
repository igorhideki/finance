<template>
  <layout-default>
    <navbar />
    <div class="home">
      <div class="container">
        <h3>Cotações moedas ({{ currencies.source }})</h3>
        <section>
          <card
            v-for="(currency, key) in currencies.data"
            :key="key"
          >
            <header>
              <div class="title">
                {{ key }}
              </div>
              <badge :state="getState(currency.variation)">
                {{ currency.variation }}
              </badge>
            </header>
            <div class="subtitle">
              {{ currency.name }}
            </div>
            <div class="info">
              {{ currency.buy | formatPrice }}
            </div>
          </card>
        </section>
      </div>
    </div>
  </layout-default>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import LayoutDefault from '@/layouts/LayoutDefault'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Badge from '@/components/Badge'

import { formatPrice } from '@/util/format'

export default {
  name: 'Home',
  components: {
    LayoutDefault,
    Navbar,
    Card,
    Badge
  },
  filters: {
    formatPrice
  },
  computed: {
    ...mapGetters('finances', ['currencies'])
  },
  created () {
    this.fetchData()
  },
  methods: {
    ...mapActions('finances', ['fetchData']),

    getState (value) {
      return value > 0 ? 'success' : 'danger'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  color: #fff;

  h3 {
    font-weight: normal;
    margin-bottom: 20px;
  }
}

section {
  display: flex;

  .card {
    display: flex;
    flex-direction: column;
    flex-basis: 20%;

    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .title {
      font-weight: bold;
      color: $accent;
      font-size: 18px;
    }

    .subtitle {
      font-size: 14px;
      color: $primary-dark;
      margin-bottom: 10px;
    }

    .info {
      font-size: 22px;
      text-align: right;
      margin-top: auto;
    }
  }

  .card + .card {
    margin-left: 10px;
  }
}
</style>
