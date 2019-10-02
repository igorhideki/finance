import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/SignIn')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/SignUp')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    }
  ]
})
