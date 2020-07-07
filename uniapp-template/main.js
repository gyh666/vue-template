import Vue from 'vue'
import App from './App'

// 自动注册全局的组件
import "@/components/global/index";

// uview-ui 组件库
import uView from 'uview-ui'
Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
