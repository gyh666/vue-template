/* 
 * 首页接口
 */
import Vue from "vue";

// 广告列表接口
export const getAdvList = params => Vue.prototype.$post('/course/api/adv/list', params);

// 专区课程查询接口
export const getZoneCourseList = params => Vue.prototype.$post('/course/api/zone/course/list', params);
