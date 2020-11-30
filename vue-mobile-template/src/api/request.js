/*
 * @Description: axios请求封装
 * @Version: 1.0
 * @Author: gyh
 * @Date: 2020-11-30 11:27:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 15:28:07
 */
import service from "./axios";

const request = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  post(url, params) {
    return new Promise((resolve, reject) => {
      service
        .post(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default request;
