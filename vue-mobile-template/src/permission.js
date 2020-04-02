import router from "./router";
// import store from "./store";
import { Toast } from "vant";
import { getToken } from "@/utils/auth";

router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (getToken()) {
      next();
    } else {
      Toast("请登录后再进行操作!");
      next({
        path: "/login",
        // 将要跳转路由的path作为参数，传递到登录页面
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});
