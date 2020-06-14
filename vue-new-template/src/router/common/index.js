export default [
  {
    path: "/",
    name: "home",
    meta: {
      requireAuth: false,
      title: "首页"
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/home/Home.vue")
  },
  {
    path: "*",
    name: "notFound",
    meta: {
      title: "页面出错"
    },
    component: () =>
      import(/* webpackChunkName: "error" */ "@/views/layout/error/index.vue")
  }
];
