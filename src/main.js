// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './router'

Vue.use(ElementUI)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// http request 拦截器，在请求头中带上令牌
axios.interceptors.request.use(
  config => {
      if (localStorage.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.Authorization = localStorage.token;
          // 这种方法也行
          // axios.defaults.headers.common['Authorization'] = localStorage.token;
      }
      return config;
  },
  err => {
      return Promise.reject(err);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
