// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import iView from 'iview';
Vue.use(iView)
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';

import '../my-theme/index.less'
import 'bootstrap/less/main1.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import '../my-theme/index.less'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
