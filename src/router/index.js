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
import Program from '@/components/pages/home/Program'
import Reading from '@/components/pages/home/Reading'
import Economics from '@/components/pages/home/Economics'
import Essay from '@/components/pages/home/Essay'
import Message from '@/components/pages/home/Message'

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
      component: Home,
      children: [
        {
          path: 'program',
          name: 'Program',
          component: Program
        },{
          path: 'reading',
          name: 'Reading',
          component: Reading
        },{
          path: 'economics',
          name: 'Economics',
          component: Economics
        },{
          path: 'essay',
          name: 'Essay',
          component: Essay
        },{
          path: 'message',
          name: 'Message',
          component: Message                    
        }
      ]
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