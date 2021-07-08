import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import mavon from "./mavon";

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  mavon,
  render: (h) => h(App),
}).$mount("#app");
