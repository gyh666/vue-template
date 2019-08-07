import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import IndexLayout from "./views/layout/IndexLayout.vue";
import MainLayout from "./views/layout/MainLayout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "/template",
          name: "templateLibrary",
          component: () =>
            import(
              /* webpackChunkName: "template" */ "@/views/templateLibrary/TemplateLibrary.vue"
            )
        },
        {
          path: "/project",
          name: "project",
          component: () =>
            import(
              /* webpackChunkName: "project" */ "@/views/project/Project.vue"
            )
        },
        {
          path: "/about",
          name: "about",
          component: () =>
            import(/* webpackChunkName: "about" */ "@/views/about/About.vue")
        },
        {
          path: "/customize",
          name: "customize",
          component: () =>
            import(
              /* webpackChunkName: "customize" */ "@/views/customize/Customize.vue"
            )
        }
      ]
    },
    {
      path: "/",
      component: IndexLayout,
      children: [
        {
          path: "/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "login" */ "@/views/login/Login.vue")
        }
      ]
    }
  ]
});
