/**保留两位有效数字
 * @param { Number } num [格式化的数字]
 */
export const formatePrice = num => {
	num = num ? num : 0;
	let numStr = num + "";
	if (numStr.indexOf(".") > -1) {
		let arr = numStr.split(".");
		return arr[0] + "." + (arr[1] + "0").substr(0, 2);
	} else {
		return numStr + ".00";
	}
};

/** 数字处理
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
		return num.replace(pat, '$1****$2');
	} else {
		return "";
	}
};

/** 身份证号脱敏处理
 * @param { Number } num [格式化的数字]
 */
export const formateIdcard = num => {
	if (num) {
		var pat = /^(.{6})(?:\d+)(.{4})$/;
		return num.replace(pat, '$1****$2');
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
			return "*" + str.substring(1, str.length);
		} else if (str.length > 3 && str.length <= 6) {
			return "**" + str.substring(2, str.length);
		} else if (str.length > 6) {
			return str.substring(0, 2) + "****" + str.substring(6, str.length)
		}
	} else {
		return "";
	}
};
