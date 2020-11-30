import Vue from 'vue'
import App from './App'
import store from './store'

// 自动注册全局的组件
import "@/components/global/index"

// uview-ui 组件库
import uView from 'uview-ui'
Vue.use(uView)
// api
import * as api from "@/api"
Vue.prototype.$api = api

// 全局过滤器
import * as filterTool from "./utils/filter"
Object.keys(filterTool).forEach(key => {
  Vue.filter(key, filterTool[key])
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
