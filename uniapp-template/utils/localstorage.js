let db = {
	save(key, data) {
		uni.setStorage({
			key,
			data
		});
	},
	get(key) {
		return uni.getStorageSync(key);
	},
	remove(key) {
		uni.removeStorage({
			key
		})
	},
	clear() {
		uni.clearStorage();
	}
};

export default db;
