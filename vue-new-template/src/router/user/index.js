export default [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () =>
      import(
        /* webpackChunkName: "login" */ "@/views/login-module/login/index.vue"
      )
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "注册"
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "@/views/login-module/register/index.vue"
      )
  }
];
