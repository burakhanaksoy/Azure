import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.use(Antd);

/* eslint-disable no-new */

export default new Vue({
  // el: "#main",
  data() {
    return { value: "" };
  },
});
