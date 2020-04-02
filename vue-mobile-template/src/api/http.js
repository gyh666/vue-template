import axios from "axios";
import router from "@/router";
import { Notify } from "vant";
import { getToken, removeToken } from "@/utils/auth";

// 创建axios实例
const service = axios.create({
  baseURL: "/api/",
  timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.data.accessToken = getToken();
    } else if (
      location.pathname != "/login" &&
      location.pathname != "/register"
    ) {
      router.replace({ path: "/login" });
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401处理
          Notify({
            message:
              "很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效",
            type: "warning"
          });
          router.push({ name: "denied" });
          break;
        case 403:
          Notify({
            message: "很抱歉，登录已过期，请重新登录",
            type: "warning"
          });
          removeToken();
          router.replace({ path: "/login" });
          break;
        case 404:
          Notify({
            message: "很抱歉，资源未找到",
            type: "warning"
          });
          router.push({ name: "undefined" });
          break;
        case 500:
          Notify({
            message: "很抱歉，系统发生错误，请联系管理员",
            type: "warning"
          });
          break;
        case 504:
          Notify({
            message: "很抱歉，系统连接超时，请联系管理员",
            type: "warning"
          });
          break;
        default:
          break;
      }
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response);
  }
);

export default service;
