import request from "./request";

// 登录
export const login = params => request.post("/api/user/login", params);

// 广告列表接口
export const getAdvList = params =>
  request.post("/course/api/adv/list", params);
