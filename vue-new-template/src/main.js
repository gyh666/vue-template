import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filterTool from './utils/filter';

// 自动注册全局的组件
import "@/components/index";

// request
import request from "@/api/request";
Vue.prototype.$get = request.get;
Vue.prototype.$post = request.post;

// element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// svg
import "./icons";

// 全局过滤器
Object.keys(filterTool).forEach(key => {
	Vue.filter(key, filterTool[key]);
});

// md5 加密
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

// permission control
import "./permission";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
