// 定义axios拦截

import axios from 'axios'
import router from '../router'
import { Message } from 'iview'

const Axios = axios.create({
})

Axios.defaults.timeout = 10000

// http request 拦截器

// http response 拦截器 
Axios.interceptors.response.use(
  response => {
    const data = response.data;
    if (data.code == '0') {
      return data;
    } else {
      Message.error({message: 'data.message'})
      return Promise.reject(data);
    }
    // if (data.code == '0') {
    //   return data;
    // } else if (data.code == '5') {
    //   Message.error({message: data.message})
    //   router.replace({
    //     path: '/login',
    //     query: {redirect: router.currentRoute.fullPath}
    //   })
    //   return false
    // } else {
    //   Message.error({message: data.message})
    //   return Promise.reject(data);
    // }
    // router.replace({
    //   path: '/login',
    //   query: {redirect: router.currentRoute.fullPath}
    // })
  },
  err => {
    return Promise.reject(err)
  }
)
export default Axios

