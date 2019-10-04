<template>
  <div class="currency-list">
    <h3>Cotações moedas ({{ currencies.source }})</h3>
    <section>
      <card
        v-for="(currency, key) in currencies.data"
        :key="key"
        :class="{ selected: isCurrencySelected(currency) }"
        @click="setCurrencySelected(currency)"
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
import { mapState, mapGetters, mapMutations } from 'vuex'

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
    ...mapState('finances', ['currencySelected']),
    ...mapGetters('finances', ['currencies'])
  },
  methods: {
    ...mapMutations('finances', ['SET_CURRENCY_SELECTED']),

    getState (value) {
      return value > 0 ? 'success' : 'danger'
    },

    isCurrencySelected (currency) {
      return currency.name === this.currencySelected.name
    },

    setCurrencySelected (currency) {
      if (this.isCurrencySelected(currency)) {
        this['SET_CURRENCY_SELECTED']({})
      } else {
        this['SET_CURRENCY_SELECTED'](currency)
      }
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
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }

    &.selected  {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.8);
      opacity: 0.8;
    }

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
