
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import {store} from './store'
import '../node_modules/animate.css/animate.css'
new Vue({
  el: '#app',
  router,
  ...App,
  store //管理所有的状态
})
