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
          path: 'article',
          name: 'AdminArticle',
          component: AdminArticle
        },{
          path: 'beauty',
          name: 'AdminBeauty',
          component: AdminBeauty
        },{
          path: 'comment',
          name: 'AdminComment',
          component: AdminComment
        },{
          path: 'user',
          name: 'AdminUserManage',
          component: AdminUserManage
        }
      ]
    }
  ]
}
const router = new Router(routerConfig)

export default router 