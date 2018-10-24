import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Program from '@/components/pages/Program'
import Reading from '@/components/pages/Reading'
import Economics from '@/components/pages/Economics'
import Essay from '@/components/pages/Essay'
import Message from '@/components/pages/Message'
import Detail from '@/components/pages/Detail'

import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
Vue.use(Router)

const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/program',
      name: 'Program',
      component: Program,
      meta: {
        title: '编程'
      }
    },{
      path: '/reading',
      name: 'Reading',
      component: Reading,
      meta: {
        title: '阅读'
      }
    },{
      path: '/economics',
      name: 'Economics',
      component: Economics,
      meta: {
        title: '经济学'
      }
    },{
      path: '/essay',
      name: 'Essay',
      component: Essay,
      meta: {
        title: '随笔'
      }
    },{
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        title: '留言'
      }
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '详情'
      }
    },
    {
      path: '/404',
      component: NotFound,
      name: 'NotFound',
      meta: {
        layout: '404'
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]


// 路由元信息 初始化layout信息
routes.forEach(route => {
  if (!route.redirect) {
    route.meta = route.meta || {}
    route.meta.layout = route.meta.layout || 'default'
  }
})


const router = new Router({ mode: 'history', routes })

export default router