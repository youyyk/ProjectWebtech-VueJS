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
    path: '/signUp',
    name: 'SignUp',
    component: () => import('../views/auth/SignUp.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/auth/Logout.vue')
  },
  {
    path: '/reward',
    name: 'Reward',
    component: () => import('../views/Reward.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/admin/board',
    name: 'AdminBoard',
    component: () => import('../views/admin/AdminBoard.vue')
  },
  {
    path: '/admin/items',
    name: 'AdminEditItems',
    component: () => import('../views/admin/AdminItems.vue')
  },
  {
    path: '/admin/Awards',
    name: 'AdminEditAwards',
    component: () => import('../views/admin/AdminAwards.vue')
  },
  {
    path: '/history/rewards',
    name: 'HistoryRewards',
    component: () => import('../views/History_Rewards.vue')
  },
  {
    path: '/history/items',
    name: 'HistoryItems',
    component: () => import('../views/History_Items.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
