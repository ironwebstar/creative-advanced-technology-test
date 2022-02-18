import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Projects from '../app/projects/Projects.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
