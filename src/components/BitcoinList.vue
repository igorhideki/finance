<template>
  <div class="bitcoin-list">
    <h3>Cotações bitcoin</h3>
    <section>
      <template
        v-for="broker in bitcoin"
      >
        <card
          v-if="broker.buy"
          :key="broker.name"
        >
          <header>
            <div class="title">
              {{ broker.name }}
            </div>
          </header>
          <div
            class="info"
            :class="[getState(broker.variation)]"
          >
            {{ broker.variation }}%
          </div>
        </card>
      </template>
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
    ...mapGetters('finances', ['bitcoin'])
  },
  methods: {
    getState (value) {
      return value > 0 ? 'success' : 'danger'
    }
  }
}
</script>

<style lang="scss" scoped>
.bitcoin-list {
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
