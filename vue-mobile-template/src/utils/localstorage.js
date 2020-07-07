let db = {
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
