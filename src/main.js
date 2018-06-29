// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import VueParticles from 'vue-particles'
import App from './App'
import router from './router'

export const SocketInstance = socketio('185.25.207.165:4000', {secure: true, rejectUnauthorized: false})

export const eventBus = new Vue({
  methods: {
    temperature (temp) {
      this.$emit('temperature', temp)
    },
    humidity (humi) {
      this.$emit('humidity', humi)
    },
    pressure (press) {
      this.$emit('pressure', press)
    },
    orientation (ori) {
      this.$emit('orientation', ori)
    },
    position (pos) {
      this.$emit('position', pos)
    }
  }
})

Vue.use(VueParticles)
Vue.use(VueSocketIO, SocketInstance)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'})
