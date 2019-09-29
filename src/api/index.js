import Vue from "vue";

// 登录
export const apiLogin = params =>
  Vue.prototype.$post("/api/admin/login", params);
