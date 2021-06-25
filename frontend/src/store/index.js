import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: "en",
  },
  mutations: {
    SET_LANGUAGE: (state, val) => {
      state.language = val;
    },
  },
  actions: {
    setLanguage: (context, val) => {
      context.commit("SET_LANGUAGE", val);
    },
  },
  modules: {},
});
