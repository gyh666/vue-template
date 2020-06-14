import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//自动引入模块路由，路由为模块下index.js文件
let routes = [];
const routerContext = require.context("./", true, /index\.js$/);
routerContext.keys().forEach(route => {
  if (route.startsWith("./index")) return;
  const routerModule = routerContext(route);
  routes = [...routes, ...(routerModule.default || routerModule)];
});
var router = new VueRouter({
  mode: "history",
  // base: process.env.NODE_ENV === "production" ? "/ggfwstatic/chinahrss-unwork/" : "/",
  linkActiveClass: "active",
  routes
});

export default router;
