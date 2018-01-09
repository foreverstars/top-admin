import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Index from '@/components/Index'
import Register from '@/components/register/Index'
import Login from '@/components/login/Index'
import Home from '@/components/layout/Home'

Vue.use(Router)

let routerConfig = {
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      component: Index,
      children: [{
        name: 'Home',
        path: '/',
        component: Home
      }]
    }
  ]
}
const router = new Router(routerConfig)

// 路由拦截
// Router.beforeEach((to, from, next) => {
  
//   if (to.meta.requireAuth) { //判断该路由是否需要登陆权限
//     store.dispatch('checkLogin').then((data) => {
//       if (!data) {
//         next({
//           path: '/login',
//           query: {redirect: to.fullpath}  //将跳转的路由path作为参数, 登陆成功后跳转到该路由
//         })
//       }
//     })
//   }

//   next()
// })


export default router 