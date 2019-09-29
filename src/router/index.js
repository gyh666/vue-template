import Vue from "vue";
import Router from "vue-router";
import MainLayout from "@/views/layout/MainLayout.vue";
import IndexLayout from "@/views/layout/IndexLayout.vue";
import EmptyPage from "@/views/layout/EmptyPage.vue";
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
      component: MainLayout,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
          meta: {
            title: "首页"
          }
        },
        {
          path: "/order",
          name: "order",
          component: EmptyPage,
          meta: {
            title: "订单",
            requireAuth: true
          },
          children: [
            {
              path: "/order/order_pay",
              name: "order_pay",
              component: () =>
                import(
                  /* webpackChunkName: "order_pay" */ "@/views/order/OrderPay.vue"
                ),
              meta: {
                title: "充值记录"
              }
            },
            {
              path: "/order/order_buy",
              name: "order_buy",
              component: () =>
                import(
                  /* webpackChunkName: "order_buy" */ "@/views/order/OrderBuy.vue"
                ),
              meta: {
                title: "商城购买记录"
              }
            }
          ]
        },
        {
          path: "/personal",
          name: "personal",
          meta: {
            title: "个人中心",
            requireAuth: true
          },
          component: () =>
            import(
              /* webpackChunkName: "personal" */ "@/views/personal/index.vue"
            )
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

export default router;
