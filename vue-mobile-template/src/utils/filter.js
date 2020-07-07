/**保留两位有效数字
 * @param { Number } num [格式化的数字]
 */
export const formatePrice = (num, mark = false) => {
  if (mark) return "免费"; //传参一个即可
  num = num ? num : 0;
  let numStr = num + "";
  if (numStr.indexOf(".") > -1) {
    let arr = numStr.split(".");
    return arr[0] + "." + (arr[1] + "0").substr(0, 2);
  } else {
    return numStr + ".00";
  }
};

/** 数量处理
 * @param { Number } num [格式化的数字]
 */
export const formateNumber = num => {
  num = Number(num);
  if (num) {
    if (num < 1000) {
      return num;
    } else if (num < 1000000) {
      return Math.round(num / 100) / 10 + "K";
    } else {
      return Math.floor(num / 10000) / 10 + "M";
    }
  } else {
    return 0;
  }
};

/** 手机号脱敏处理
 * @param { Number } num [格式化的数字]
 */
export const formateMobile = num => {
  if (num) {
    var pat = /^(\d{3})\d*(\d{4})$/;
    return num.replace(pat, "$1****$2");
  } else {
    return "";
  }
};

/** 身份证号脱敏处理
 * @param { Number } num [格式化的数字]
 * 应 产品要求 脱敏改为 前2后2
 */
export const formateIdcard = num => {
  if (num) {
    let pat = /^(.{2})(?:\d+)(.{2})$/;
    return num.replace(pat, "$1************$2");
  } else {
    return "";
  }
};

/** 姓名脱敏处理
 * @param { String } num [格式化的名字]
 */
export const formateName = str => {
  if (str) {
    if (str.length <= 3) {
      return str.substring(0, 1) + "*" + str.substring(2, str.length);
    } else if (str.length > 3 && str.length <= 6) {
      return "**" + str.substring(2, str.length);
    } else if (str.length > 6) {
      return str.substring(0, 2) + "****" + str.substring(6, str.length);
    }
  } else {
    return "";
  }
};

/** 秒数 转 时间
 * @param { Number } num [格式化的秒数]
 */
export const formatSeconds = value => {
  if (!value) return "--";
  let secondTime = parseInt(value); // 秒
  let minuteTime = 0; // 分
  let hourTime = 0; // 时
  if (secondTime > 60) {
    minuteTime = parseInt(secondTime / 60);
    secondTime = parseInt(secondTime % 60);
    if (minuteTime > 60) {
      hourTime = parseInt(minuteTime / 60);
      minuteTime = parseInt(minuteTime % 60);
    }
  }
  let result = "" + parseInt(secondTime) + "秒";
  if (minuteTime > 0) {
    result = "" + parseInt(minuteTime) + "分" + result;
  }
  if (hourTime > 0) {
    result = "" + parseInt(hourTime) + "时" + result;
  }
  return result;
};
