import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layout/MainLayout.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: MainLayout,
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页"
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue")
      },
      {
        path: "/list",
        name: "list",
        meta: {
          title: "列表"
        },
        component: () =>
          import(/* webpackChunkName: "list" */ "@/views/list/List.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login-module/Login.vue")
  },
  {
    path: "*",
    name: "notFound",
    meta: {
      title: "404"
    },
    component: () =>
      import(/* webpackChunkName: "notFound" */ "@/views/Error.vue")
  },
  {
    path: "/forbidden",
    name: "forbidden",
    meta: {
      title: "403"
    },
    component: () =>
      import(/* webpackChunkName: "forbidden" */ "@/views/Error.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
