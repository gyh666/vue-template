import Cookies from "js-cookie";

const TokenKey = "accessToken";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token, timer) {
  return Cookies.set(TokenKey, token, timer);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
