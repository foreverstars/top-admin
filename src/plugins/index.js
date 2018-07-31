import axios from '../api/fetch'
import moment from 'moment'

import { Message } from 'iview'
export default {
  install (Vue, options) {
    // 配置需要引入的ivew组件

    Vue.prototype.$Message = Message
    // axios 设置
    Vue._cusHttp = Vue.prototype.$http = axios
  
    //自定义其它插件
  
  }
}