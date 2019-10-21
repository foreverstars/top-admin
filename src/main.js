// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Plugins from './plugins'
import axios from './api/fetch'
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用iview css
import './style/index.less'

import iViewCom from './plugins/iviewCom'

Vue.config.productionTip = false

// 全局引入iview组件
// Vue.use(iView)

// 配置vue插件 引入需要的iview组件
Vue.use(Plugins)

Vue.prototype.$http = axios

store.dispatch('initCommon')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})