/*
 * @Description: vuex 存储
 * @Version: 1.0.0
 * @Author: gyh
 * @Date: 2020-07-24 14:19:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 15:57:27
 */
import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/);

// you do not need `import app from "./modules/app"`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set "./app.js" => "app"
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
  getters,
  modules
});

export default store;
