<template>
  <layout-default>
    <navbar />
    <div class="home">
      <div class="container">
        <template v-if="loading">
          <div>
            <span>Carregando </span>
            <fa-icon
              icon="spinner"
              spin
            />
          </div>
        </template>
        <template v-else>
          <section class="list">
            <currency-list />
          </section>

          <section class="list">
            <stock-list />
          </section>

          <section class="list">
            <bitcoin-list />
          </section>
        </template>
      </div>
    </div>
  </layout-default>
</template>

<script>
import { mapActions } from 'vuex'

import LayoutDefault from '@/layouts/LayoutDefault'
import Navbar from '@/components/Navbar'
import CurrencyList from '@/components/CurrencyList'
import StockList from '@/components/StockList'
import BitcoinList from '@/components/BitcoinList'

export default {
  name: 'Home',
  components: {
    LayoutDefault,
    Navbar,
    CurrencyList,
    StockList,
    BitcoinList
  },
  data () {
    return {
      loading: false
    }
  },
  async created () {
    this.loading = true
    await this.fetchData()
    this.loading = false
  },
  methods: {
    ...mapActions('finances', ['fetchData'])
  }
}
</script>

<style lang="scss" scoped>
.home {
  color: #fff;

  .list + .list {
    margin-top: 30px;
  }
}
</style>
