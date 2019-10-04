import api from '@/services/api'

const initialState = () => ({
  data: {},
  currencySelected: {}
})

const state = initialState

const getters = {
  currencies: ({ data }) => {
    if (data.results) {
      const { source, ...currencies } = data.results.currencies

      return { source, data: currencies }
    }
    return {}
  },
  bitcoin: ({ data }) => data.results ? data.results.bitcoin : {},
  stocks: ({ data }) => data.results ? data.results.stocks : {},
  taxes: ({ data }) => data.results ? data.results.taxes : {}
}

const mutations = {
  SET_DATA (state, data) {
    state.data = data
  },

  SET_CURRENCY_SELECTED (state, currency) {
    console.log(currency)
    state.currencySelected = currency
  }
}

const actions = {
  fetchData ({ commit }) {
    return api
      .get('/quotations', {
        params: {
          key: process.env.VUE_APP_HG_KEY,
          format: 'json-cors'
        }
      })
      .then(({ data }) => {
        commit('SET_DATA', data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
