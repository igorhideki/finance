import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import finances from './modules/finances'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    finances
  },
  strict: process.env.NODE_ENV !== 'production'
})
