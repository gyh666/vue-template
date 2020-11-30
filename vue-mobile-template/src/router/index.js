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

const scrollBehavior = (/* to, from, savedPosition */) => {
  return {
    x: 0,
    y: 0
  };
};

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE,
  scrollBehavior,
  routes
});

export default router;
