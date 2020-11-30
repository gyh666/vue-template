import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import db from "@/utils/localstorage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userinfo: db.get("userinfo") || {}
  },
  mutations: {
    SET_USERINFO(state, val) {
      state.userinfo = val;
      db.save("userinfo", val);
    }
  },
  actions: {
    setUserinfo: ({ commit }, arg) => {
      commit("SET_USERINFO", arg);
    }
  },
  getters
});
