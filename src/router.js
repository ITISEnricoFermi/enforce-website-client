import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/views/root.route/root'
import Live from '@/views/live.route/live.route'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    }
  ]
})
