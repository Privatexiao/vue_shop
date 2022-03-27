import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

导入全局样式b

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
