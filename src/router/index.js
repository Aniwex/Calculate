import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculate from '../components/Calculate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calculate',
    component: Calculate
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
