/*
 * @Description: 用户的vuex存储
 * @Version: 1.0.0
 * @Author: gyh
 * @Date: 2020-07-24 16:15:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 15:57:13
 */
import db from "@/utils/localstorage";

const state = {
  userinfo: db.getJSON("userinfo") || {}
};

const mutations = {
  SET_USERINFO(state, val) {
    state.userinfo = val;
    db.saveJSON("userinfo", val);
  }
};

const actions = {
  setUserinfo({ commit }, arg) {
    commit("SET_USERINFO", arg);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
