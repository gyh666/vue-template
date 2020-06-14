/* 
 * 课程中心接口
 */
import Vue from "vue";

// 课程分类列表查询
export const getCategoryList = params => Vue.prototype.$post('/course/api/course/category/list', params);
