// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import home from '@/components/home'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: home },
  { path: '/home', component: home },
];
const router = new VueRouter({routes});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
