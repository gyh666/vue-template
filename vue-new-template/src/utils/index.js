import { MessageBox } from "element-ui";

Date.prototype.format = function(fmt) {
  let o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

/** 日期格式化
 * @param { String } timestamp [格式化的时间]
 * @param { String } template [格式化的类型]
 * yyyy-MM-dd | yyyy-MM-dd hh:mm:ss
 */
export const formatDate = (timestamp, template = "yyyy-MM-dd") => {
  let str = "" + timestamp;
  if (str.length < 10) return null;
  if (str.length === 10) timestamp *= 1000;
  return new Date(timestamp).format(template);
};

/**保留两位有效数字
 * @param { Number } num [格式化的数字]
 */
export const formateNumber = num => {
  num = num ? num : 0;
  let numStr = num + "";
  if (numStr.indexOf(".") > -1) {
    let arr = numStr.split(".");
    return arr[0] + "." + (arr[1] + "0").substr(0, 2);
  } else {
    return numStr + ".00";
  }
};

// 弹窗
export function confirmBox(title) {
  return new Promise((resolve, reject) => {
    MessageBox.confirm(`${title}，是否继续?`, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
}
