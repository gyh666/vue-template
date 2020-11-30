import config from "@/config/index";
import db from "@/utils/localstorage";

const request = (url, type = "GET", params, header, isloading) => {
	return new Promise((resolve, reject) => {
		if (isloading) uni.showLoading({
			title: "请求中..."
		});
		uni.request({
			/* #ifdef MP-WEIXIN || APP-PLUS */
			url: config.gatewayUrl + url,
			/* #endif */
			/* #ifdef H5 */
			url: process.env.NODE_ENV == 'development' ? '/api' + url : config.gatewayUrl + url,
			/* #endif */
			method: type,
			data: params,
			header,
			success(res) {
				if (isloading) uni.hideLoading();
				switch (res.statusCode) {
					case 200:
						resolve(res.data);
						break;
					case 401:
						uni.showToast({ title: "登录信息已失效，请重新登录" });
						resolve(res.data);
						toLogin();
						break;
					case 403:
						uni.showToast({ title: "很抱歉，您无法访问该资源" });
						resolve(res.data);
						break;
					case 404:
						uni.showToast({ title: "服务器被吃了⊙﹏⊙∥" });
						resolve(res.data);
						break;
					case 500:
						uni.showToast({ title: "服务器内部错误" });
						resolve(res.data);
						break;
				}
			},
			fail(err) {
				if (isloading) uni.hideLoading();
				console.error(err);
				reject(err);
			}
		});
	});
}

export const get = (url, params = {}, isloading = true) => {
	// let token = db.get('token') || '';
	// const header = {
	// 	token
	// }
	return request(url, 'GET', params, {}, isloading);
}

export const post = (url, params = {}, isloading = true) => {
	let token = db.get('token') || '';
	const header = {
		"content-type": "application/json",
		token
	}
	return request(url, 'POST', params, header, isloading);
}
