/*
 * @Description: cookie存储
 * @Version: 1.0
 * @Author: gyh
 * @Date: 2020-11-30 11:27:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 15:07:01
 */
import Cookies from "js-cookie";

const TokenKey = "accessToken";

export const getToken = () => {
  return Cookies.get(TokenKey);
};

export const setToken = (token, hours = 2) => {
  let expires = new Date(new Date() * 1 + hours * 60 * 60 * 1000);
  return Cookies.set(TokenKey, token, {
    expires
  });
};

export const removeToken = () => {
  return Cookies.remove(TokenKey);
};
