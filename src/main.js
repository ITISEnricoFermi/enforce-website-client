import Vue from "vue";
import VueParticles from "vue-particles";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods: {
    temperature(temp) {
      this.$emit("temperature", temp);
    },
    humidity(humi) {
      this.$emit("humidity", humi);
    },
    pressure(press) {
      this.$emit("pressure", press);
    },
    altitude(alt) {
      this.$emit("altitude", alt);
    },
    orientation(ori) {
      this.$emit("orientation", ori);
    },
    position(pos) {
      this.$emit("position", pos);
    },
  },
});

Vue.use(VueParticles);

/**
 * Disattivato per sito statico.
 */
// Vue.use(
//   new VueSocketIO({
//     debug: false,
//     connection: socketio("/", {
//       secure: true,
//       rejectUnauthorized: false,
//       transports: ["websocket", "flashsocket", "polling"],
//     }),
//   })
// );

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
