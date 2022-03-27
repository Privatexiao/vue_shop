import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

// 导入全局样式表
import './assets/css/global.css'
import './/at.alicdn.com/t/font_3280215_bo12n44tarb.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
