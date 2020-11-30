import * as request from "./http";

// 广告列表接口
export const getAdvList = params => request.post('/course/api/adv/list', params);