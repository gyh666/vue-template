import axios from "axios";
import router from "@/router";
import { Notification, Loading  } from "element-ui";
import { getToken, removeToken } from "@/utils/auth";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000 // 请求超时时间
});
// service.headers.post['Content-Type'] = 'application/json';

// request拦截器
service.interceptors.request.use(
  config => {
    // TODO
    if (getToken()) {
      config.data.accessToken = getToken();
    } else {
      router.replace({ path: "/login" });
    }
    // 在请求先展示加载框
    loading = Loading.service({
      text: '正在加载中......'
    });
    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// loading
let loading = null;
// respone拦截器
service.interceptors.response.use(
  response => {
    // 请求响应后关闭加载框
    if (loading) {
      loading.close()
    }
    return response;
  },
  error => {
    if (error.response) {
      // 请求响应后关闭加载框
      if (loading) {
        loading.close()
      }
      switch (error.response.status) {
        case 401:
          // 401处理
          Notification({
            title: "系统提示",
            message:
              "很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效",
            type: "warning"
          });
          router.push({ name: "denied" });
          break;
        case 403:
          Notification({
            title: "登录已过期",
            message: "很抱歉，登录已过期，请重新登录",
            type: "warning"
          });
          removeToken();
          router.replace({ path: "/login" });
          break;
        case 404:
          Notification({
            title: "系统提示",
            message: "很抱歉，资源未找到",
            type: "warning"
          });
          router.push({ name: "undefined" });
          break;
        case 500:
          Notification({
            title: "系统提示",
            message: "很抱歉，系统发生错误，请联系管理员",
            type: "warning"
          });
          break;
        case 504:
          Notification({
            title: "系统提示",
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