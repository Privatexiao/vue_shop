import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import axios from 'axios'

// 导入全局样式表
import './assets/css/global.css'

//配置请求的根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
//axios请求拦截
axios.interceptors.request.use(config=>{
  //为请求头对象，tj
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 把axios挂载到vue的原型上
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
