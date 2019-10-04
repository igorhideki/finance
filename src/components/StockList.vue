<template>
  <div class="stock-list">
    <h3>Principais bolsas de valores</h3>
    <section>
      <card
        v-for="stock in stocks"
        :key="stock.name"
      >
        <header>
          <div class="title">
            {{ stock.name }}
          </div>
          <div class="subtitle">
            {{ stock.location }}
          </div>
        </header>
        <div
          class="info"
          :class="[getState(stock.variation)]"
        >
          {{ stock.variation }}%
        </div>
      </card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Card from '@/components/Card'

import { formatPrice } from '@/util/format'

export default {
  name: 'CurrencyList',
  components: {
    Card
  },
  filters: {
    formatPrice
  },
  computed: {
    ...mapGetters('finances', ['stocks'])
  },
  methods: {
    getState (value) {
      return value > 0 ? 'success' : 'danger'
    }
  }
}
</script>

<style lang="scss" scoped>
.stock-list {
  color: #fff;

  h3 {
    font-weight: normal;
    margin-bottom: 20px;
  }
}

section {
  display: flex;
  margin: -5px;
  flex-wrap: wrap;

  .card {
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(25% - 10px);
    text-align: center;

    @media(max-width: 760px) {
      flex: 0 0 calc(50% - 10px);
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
      margin-top: auto;
    }

    .success {
      color: $success
    }

    .danger {
      color: $danger
    }
  }
}
</style>
