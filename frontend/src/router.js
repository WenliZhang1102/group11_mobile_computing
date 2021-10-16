import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Camels from './views/Camels.vue'
import Diet from './views/Diet.vue'
import Allergies from './views/Allergies.vue'

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
      path: '/camels',
      name: 'camels',
      component: Camels
    },
    {
      path: '/diet',
      name: 'diet',
      component: Diet
    },
    {
      path: '/allergies',
      name: 'allergies',
      component: Allergies
    }
  ]
})
