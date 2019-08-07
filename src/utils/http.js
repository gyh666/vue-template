import axios from "axios";
import qs from "qs";
import router from "../router";
import { Message } from "element-ui";

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "api";
}
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 10000;

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // console.log(config);
    config.data = qs.stringify(config.data);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    console.log(response);
    if (response.data.code !== 200) {
      Message({ message: response.data.msg, type: "warning" });
    }
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        // 401处理
        case 401:
          localStorage.removeItem("token");
          Message({ message: "请先登录！", type: "warning" });
          router.replace({ path: "/login" });
          break;
        default:
          break;
      }
    }
    // 返回接口返回的错误信息
    // console.log(error.response.data);
    return Promise.reject(error.response);
  }
);

export default axios;
