const sessionTimeOut = 60

const initialState = () => ({
  user: {}
})

const state = initialState

const getters = {
  loggedIn: ({ user }) => {
    const { token } = user
    const now = new Date().getTime()

    return token && (token + sessionTimeOut) > now
  }
}

const mutations = {
  SET_USER (state, user) {
    state.user = user
    saveState(user.email, user)
  }
}

const actions = {
  logIn ({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = getSavedState(email)

        if (user && user.password === password) {
          const token = new Date().getTime()
          const newUserValue = { ...user, token }

          saveState(email, newUserValue)
          commit('SET_USER', newUserValue)
          resolve(true)
        }
        reject(new Error('Dados incorretos, verifique os campos acima'))
      }, 2000)
    })
  },

  register (store, { name, email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        saveState(email, { name, email, password })
        resolve()
      }, 2000)
    })
  }
}

function getSavedState (key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveState (key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
