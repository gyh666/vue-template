/*
 * 用户中心接口
 */
import request from "../request";

// 登录
export const login = params => request.post("/api/user/login", params);
