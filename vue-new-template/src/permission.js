import router from "./router";
// import store from "./store";
import { Message } from "element-ui";
import { getToken } from "@/utils/auth";

//引入 nprogress
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  // 判断该路由是否需要登录权限
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (getToken()) {
      next();
    } else {
      Message({ message: "请登录后再进行操作!", type: "warning" });
      next({
        path: "/login",
        // 将要跳转路由的path作为参数，传递到登录页面
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else if (to.meta.title) {
    // 路由发生改变修改页面的title
    document.title = to.meta.title;
    next();
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});
