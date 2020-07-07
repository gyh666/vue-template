import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";

// common css
import "./styles/common.less";
// 自动注册全局的组件
import "@/components/global";
// vant
import "./plugins/vant";
// request
import * as api from "@/api";
Vue.prototype.$api = api;
// permission control
import "./permission";
// 全局过滤器
import * as filterTool from "./utils/filter";
Object.keys(filterTool).forEach(key => {
  Vue.filter(key, filterTool[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
