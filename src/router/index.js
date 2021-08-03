import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/reward',
    name: 'Reward',
    component: () => import('../views/Reward.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/admin-board',
    name: 'AdminBoard',
    component: () => import('../views/AdminBoard.vue')
  },
  {
    path: '/admin-edit-items',
    name: 'AdminEditItems',
    component: () => import('../views/AdminEditItems.vue')
  },
  {
    path: '/admin-edit-Awards',
    name: 'AdminEditAwards',
    component: () => import('../views/AdminEditAwards.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
