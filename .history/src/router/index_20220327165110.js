import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login' //默认重定向到登录页面
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/home',
    component:Home
  }
]

// 挂载全局路由守卫
router.beforeEach((to,from,next)=>{
  // 如果要去登录页面直接放行
  if(to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login');
  next()
})


const router = new VueRouter({
  routes
})

export default router
