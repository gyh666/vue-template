/* 
 * 商城接口
 */
import Vue from "vue";

// 获取我的订单列表
export const getOrderList = params => Vue.prototype.$post('/course/mall/auth/order/info/list', params);
