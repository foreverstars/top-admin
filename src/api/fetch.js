// 定义axios拦截

import axios from 'axios'
import router from '../router'
import { Message } from 'iview'

const Axios = axios.create({
})

Axios.defaults.timeout = 10000

// http request 拦截器

// http response 拦截器 
/*
axios.interceptors.response.use(
  response => {
    const data = response.data
    switch (data.code + '') {
      case '0':
        return data
      case '400002':
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
        Message.error({message: data.message})
        break
      default:
        Message.error({message: data.message})
    }

    let err = new Error(data.message)
    err.data = data
    err.response = response 
    throw err
  },
  err => {
    return Promise.reject(err)
  }
)
*/
export default Axios

