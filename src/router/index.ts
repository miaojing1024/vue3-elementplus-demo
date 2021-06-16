import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/loginRegister.vue')
  },
  {
    path: '/forgotpassword',
    name: 'Forgotpassword',
    component: () => import('../views/forgotpassword.vue')
  },
  {
    path: '/resetpassword/:id',
    name: 'Resetpassword',
    component: () => import('../views/resetpassword.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
