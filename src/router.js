import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isPrivate: true
      }
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
      component: () => import('./views/About'),
      meta: {
        isPrivate: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.getters['auth/loggedIn']()) {
    if (to.meta && to.meta.isPrivate) {
      return next()
    } else {
      return next('/')
    }
  }

  if (to.meta && to.meta.isPrivate) {
    return next('/login')
  }

  return next()
})

export default router
