// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import router from './router'
import store from './store'

Vue.use(vueResource)
Vue.use(MintUI)
// 控制每一个页面跳转至后滚动条回滚
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
Vue.config.productionTip = false
window.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
