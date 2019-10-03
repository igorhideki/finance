import api from '@/services/api'
import mockFinance from '@/mocks/financeResponse'

const initialState = () => ({
  data: {}
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
  bitcoin: ({ data }) => data.results ? data.results.bitcoin : [],
  stocks: ({ data }) => data.results ? data.results.stocks : [],
  taxex: ({ data }) => data.results ? data.results.taxes : []
}

const mutations = {
  SET_DATA (state, data) {
    state.data = data
  }
}

const actions = {
  fetchData ({ commit }) {
    return api
      .get('/finance', {
        params: {
          key: process.env.VUE_APP_HG_KEY
        }
      })
      .then(({ data }) => {
        commit('SET_DATA', data)
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        commit('SET_DATA', mockFinance)
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
