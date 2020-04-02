import Vue from "vue";
import Vuex from "vuex";
import db from "@/utils/localstorage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: db.getJson("user") || {}
  },
  mutations: {
    setUser(state, prop) {
      state.user = prop;
      db.saveJSON("user", prop);
    }
  },
  actions: {
    userAction({ commit }, arg) {
      commit("setUser", arg);
    }
  }
});
