import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/root.route/root'
import Live from '@/components/live.route/live.route'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
