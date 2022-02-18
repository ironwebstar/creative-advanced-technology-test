import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Projects from '../app/projects/Projects.vue'
import Login from '../app/auth/AuthLogin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
