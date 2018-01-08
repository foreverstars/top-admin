// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Plugins from './plugins'
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用iview css

import iViewCom from './plugins/iviewCom'

Vue.config.productionTip = false

// 全局引入iview组件
// Vue.use(iView)

// 配置vue插件
Vue.use(Plugins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
