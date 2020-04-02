import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import "@css/index.scss";
import "./icons";

// element
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "../theme/index.css";
Vue.use(ElementUI);

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
