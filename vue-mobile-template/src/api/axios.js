import axios from "axios";
import { Toast, Notify } from "vant";
import router from "@/router";
import { getToken, removeToken } from "@/utils/auth";

const service = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/api" : "/",
  timeout: 5000 // 请求超时时间
});

let loading = null;

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers.token = getToken();
    }
    loading = Toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner"
    });
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
    // 请求响应后关闭加载框
    if (loading) loading.clear();
    processStatus(response.data.code);
    return response;
  },
  error => {
    if (error.response) {
      // 请求响应后关闭加载框
      if (loading) loading.clear();
      processStatus(error.response.status);
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response);
  }
);

const processStatus = data => {
  switch (data) {
    case 304:
      Notify({ type: "warning", message: "异地登录，请先登录账号" });
      router.push({ name: "login" });
      break;
    case 401:
      Notify({ type: "warning", message: "很抱歉，登录已过期，请重新登录" });
      removeToken();
      router.replace({ path: "/login" });
      break;
    case 403:
      Notify({
        type: "warning",
        message:
          "很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效"
      });
      router.push({ name: "forbidden" });
      break;
    case 404:
      Notify({ type: "warning", message: "很抱歉，资源未找到" });
      router.push({ name: "notFound" });
      break;
    case 500:
      Notify({
        type: "warning",
        message: "很抱歉，系统发生错误，请联系管理员"
      });
      break;
    case 504:
      Notify({
        type: "warning",
        message: "很抱歉，系统连接超时，请联系管理员"
      });
      break;
    default:
      break;
  }
};

export default service;
