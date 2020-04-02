import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/Home.vue";

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录"
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/login/Login.vue")
    },
    {
      path: "/404",
      name: "undefined",
      meta: {
        title: "404"
      },
      component: () =>
        import(/* webpackChunkName: "404" */ "@/views/error/404.vue")
    },
    {
      path: "/401",
      meta: {
        title: "401"
      },
      name: "denied",
      component: () =>
        import(/* webpackChunkName: "404" */ "@/views/error/401.vue")
    }
  ]
});

export default router;
