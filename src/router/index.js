import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Register from '@/components/register/Index'
import Login from '@/components/login/Index'
import Home from '@/components/layout/Home'
import Admin from '@/components/layout/Admin'
import AdminArticle from '@/components/pages/admin/AdminArticle'
import AdminBeauty from '@/components/pages/admin/AdminBeauty'
import AdminComment from '@/components/pages/admin/AdminComment'
import AdminUserManage from '@/components/pages/admin/AdminUserManage'

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
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: 'adminArticle',
          name: 'AdminArticle',
          component: AdminArticle
        },{
          path: 'adminBeauty',
          name: 'AdminBeauty',
          component: AdminBeauty
        },{
          path: 'adminComment',
          name: 'AdminComment',
          component: AdminComment
        },{
          path: 'userManage',
          name: 'AdminUserManage',
          component: AdminUserManage
        }
      ]
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