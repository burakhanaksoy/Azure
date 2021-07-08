import Vue from "vue";
import Vuex from "vuex";
import PaginationStore from "./modules/PaginationStore.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    paginationStore: PaginationStore,
  },
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
});
