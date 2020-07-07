/**
 * Created by GuoYuhan on 2020/07/06.
 * element form validate
 * @param { Array } rule [验证规则]
 * @example:
 * ```js
 *  import { validPhone } from "@/utils/validate";
 *  :rules="verifyPhone"
 * ```
 */

// 校验长度
const verifyLength = (str, len = 4) => {
  const reg = new RegExp("^\\w{" + len + "}$");
  return reg.test(str);
};

export const isCorrectPhone = str => {
  // const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  const reg = /^1\d{10}$/;
  return reg.test(str);
};

export const isCorrectPwd = str => {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
  return reg.test(str);
};

export const isCorrectCaptcha = str => {
  return verifyLength(str, 6);
};

// 手机号验证
export const verifyPhone = [
  { required: true, message: "请输入手机号码" },
  { validator: isCorrectPhone, message: "请输入正确的11位数手机号码" }
];

// 密码验证
export const verifyPassword = [
  { required: true, message: "请输入密码" },
  { validator: isCorrectPwd, message: "请输入包含数字和英文，长度6-20的密码" }
];

// 图形验证码验证
export const verifyCode = [
  { required: true, message: "请输入短信验证码" },
  { validator: isCorrectCaptcha, message: "请输入6位数短信验证码" }
];
