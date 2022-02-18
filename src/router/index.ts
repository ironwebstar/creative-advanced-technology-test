import { store, AUTH_USER, Action } from '../store'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Projects',
    component: () => import('../app/projects/Projects.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter (_to, _from, next) {
      store.dispatch(Action.getEmployees)
      next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'auth' },
    component: () => import('../app/auth/AuthLogin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem(AUTH_USER)) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
