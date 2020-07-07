import Cookies from "js-cookie";

const TokenKey = "accessToken";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token, hours = 2) {
  let expires = new Date(new Date() * 1 + hours * 60 * 60 * 1000);
  return Cookies.set(TokenKey, token, {
    expires
  });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
