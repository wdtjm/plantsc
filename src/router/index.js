import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/t-home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/test',
    name: 'test',
    component: home
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
