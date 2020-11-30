/*
 * @Description: 主路由列表
 * @Version: 1.0
 * @Author: gyh
 * @Date: 2020-11-30 14:51:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 16:02:52
 */
import MainLayout from "../../layout/MainLayout.vue";
export default [
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
          import(/* webpackChunkName: "home" */ "@/views/home/Home.vue")
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
      import(/* webpackChunkName: "notFound" */ "@/views/error/Error.vue")
  },
  {
    path: "/forbidden",
    name: "forbidden",
    meta: {
      title: "403"
    },
    component: () =>
      import(/* webpackChunkName: "forbidden" */ "@/views/error/Error.vue")
  }
];
