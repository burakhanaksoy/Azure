import Vue from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
// use
Vue.use(mavonEditor);
export default new Vue({
  el: "#main",
  data() {
    return { value: "" };
  },
});
