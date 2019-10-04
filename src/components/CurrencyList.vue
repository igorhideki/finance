<template>
  <div class="currency-list">
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
            {{ currency.variation }}%
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
</template>

<script>
import { mapGetters } from 'vuex'

import Card from '@/components/Card'
import Badge from '@/components/Badge'

import { formatPrice } from '@/util/format'

export default {
  name: 'CurrencyList',
  components: {
    Card,
    Badge
  },
  filters: {
    formatPrice
  },
  computed: {
    ...mapGetters('finances', ['currencies'])
  },
  methods: {
    getState (value) {
      return value > 0 ? 'success' : 'danger'
    }
  }
}
</script>

<style lang="scss" scoped>
.currency-list {
  color: #fff;

  h3 {
    font-weight: normal;
    margin-bottom: 20px;
  }
}

section {
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
  justify-content: space-between;

  .card {
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(20% - 10px);

    @media(max-width: 899px) {
      flex: 0 0 calc(25% - 10px);
    }

    @media(max-width: 760px) {
      flex: 0 0 calc(50% - 10px);
    }

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
}
</style>
