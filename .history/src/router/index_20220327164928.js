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

router.beforeEach((to,from,next)=>{
  if(to.path === '/login') return next();
  const tokenStr = 
})


const router = new VueRouter({
  routes
})

export default router
