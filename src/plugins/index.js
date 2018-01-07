import axios from '../api/fetch'
import moment from 'moment'

import {
  Form,
  FormItem,
  Input,
  Icon,
  Button,
  Message
} from 'iview'

export default {
  install (Vue, options) {
    // 配置需要引入的ivew组件
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Icon)
    Vue.use(Input)
    Vue.use(Button)  

    Vue.prototype.$message = Message
    // axios 设置
    Vue._cusHttp = Vue.prototype.$http = axios
  
    //自定义其它插件
  
  }
}