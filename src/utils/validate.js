/**
 * Created by GuoYuhan on 2019/09/10.
 * element form validate
 * @param { Object } rule [验证规则]
 * @param { String, Number } value  [传递参数]
 * @param { Function } callback [回调函数]
 * @example:
 * ```js
 *  import { validPhone } from "@/utils/validate";
 *  rules: {
 *    phone: {
 *      required: true,
 *      trigger: "blur",
 *      validator: validPhone
 *    }
 *  }
 * ```
 */

// 手机号验证
export const isvalidPhone = str => {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  return reg.test(str);
};

export const validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入手机号码"));
  } else if (!isvalidPhone(value)) {
    callback(new Error("请输入正确的11位手机号码"));
  } else {
    callback();
  }
};

// 邀请送机会验证
export const validOpportunity = (rule, value, callback) => {
  if (["", null, undefined].includes(value.inviteNum)) {
    callback(new Error("请输入邀请的人数"));
  } else if (["", null, undefined].includes(value.inviteFreetime)) {
    callback(new Error("请输入邀请的机会次数"));
  } else if (
    typeof value.inviteNum != "number" ||
    typeof value.inviteFreetime != "number"
  ) {
    callback(new Error("请输入数字值"));
  } else if (value.inviteNum < 0 || value.inviteFreetime < 0) {
    callback("输入的值不能是负数");
  } else {
    callback();
  }
};

// 比例验证
export const validRate = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入比例"));
  } else if (Number(value) < 0 || Number(value) > 100) {
    callback(new Error("请输入0-100%区间的比例"));
  } else {
    callback();
  }
};
