import Vue from "vue";
import Vuex from "vuex";
import db from "@/utils/localstorage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: db.getJson("user") || {},
    collapseValue: false,
    tabsFlag: db.get("tabsFlag") ? JSON.parse(db.get("tabsFlag")) : true,
    navColor: db.get("navColor") || "#2E3B4B",
    menuList: db.getJson("menuList") || []
  },
  mutations: {
    setUser(state, prop) {
      state.user = prop;
      db.saveJSON("user", prop);
    },
    setCollapseValue(state, prop) {
      state.collapseValue = prop;
    },
    setTabsFlag(state, prop) {
      state.tabsFlag = prop;
      db.save("tabsFlag", state.tabsFlag);
    },
    setNavColor(state, prop) {
      state.navColor = prop;
      db.save("navColor", state.navColor);
    },
    setMenuList(state, prop) {
      state.menuList = prop;
      db.saveJSON("menuList", state.menuList);
    }
  },
  actions: {
    userAction({ commit }, arg) {
      commit("setUser", arg);
    },
    collapseValueAction({ commit }, arg) {
      commit("setCollapseValue", arg);
    },
    tabsFlagAction({ commit }, arg) {
      commit("setTabsFlag", arg);
    },
    navColorAction({ commit }, arg) {
      commit("setNavColor", arg);
    },
    menuListAction({ commit }, arg) {
      commit("setMenuList", arg);
    }
  }
});
