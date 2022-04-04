import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Cate from '../components/goods/Cate.vue'

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
    component:Home,
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        component:Welcome
      },
      {
        path:'/users',
        component:Users
      },
      {
        path:'/rights',
        component:Rights
      },{
        path:'/roles',
        component:Roles
      }
      
    ]
  }
]



const router = new VueRouter({
  routes
})


// 挂载全局路由守卫
router.beforeEach((to,from,next)=>{
  // 如果要去登录页面直接放行
  if(to.path === '/login') return next();
  // 获取页面的token值，看是否登录
  const tokenStr = window.sessionStorage.getItem('token');
  // 没有token就是没有登录，强制跳转到登录页面
  if(!tokenStr) return next('/login');
  // 有就放行
  next()
})

export default router
