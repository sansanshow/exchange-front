// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import i18n from './common/i18n'

import "./mixin/mixin";

Vue.config.productionTip = false
Vue.prototype.$ajax = axios;

Vue.prototype.$websocket = null ;

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
