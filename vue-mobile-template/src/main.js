import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import "@css/index.scss";
import "./icons";

// 页面标题动态改变
import VueWechatTitle from "vue-wechat-title";
Vue.use(VueWechatTitle);

// 自适应 适配
import "lib-flexible";

// permission control
import "./permission";

import request from "@/api/request";
Vue.prototype.$get = request.get;
Vue.prototype.$post = request.post;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
