/* 
 * 用户中心接口
 */
import Vue from "vue";

// 用户密码登录接口
export const loginPassword = params => Vue.prototype.$post('/user/api/user/login/password', params);

// 用户验证码登录接口
export const loginCode = params => Vue.prototype.$post('/user/api/user/login/code', params);