/*
 * @Description: localocalStorage存储
 * @Version: gyh
 * @Author: 1.0
 * @Date: 2020-11-30 11:27:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 15:07:50
 */
const db = {
  save(key, value) {
    localStorage.setItem(key, value);
  },
  saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return localStorage.getItem(key);
  },
  getJSON(key, defaultValue = {}) {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
};

export default db;
