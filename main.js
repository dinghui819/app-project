import Vue from 'vue'
import App from './App'
import {myRequest} from './utils/api.js'

Vue.config.productionTip = false
// 把myRequest方法挂载到全局
Vue.prototype.$myRequest = myRequest

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
