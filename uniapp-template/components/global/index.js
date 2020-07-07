import Vue from "vue";
//自动化注册全局组件
const requireComponent = require.context("./", true, /\.vue$/);
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
  const componentName = fileName.replace(/^\.\//, "").replace(/\.vue$/, "");
  // 全局注册组件
  Vue.component(
    componentName.split("/")[0],
    componentConfig.default || componentConfig
  );
});
