// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  {'path': '/', component: Home},
  {'path': '/menu', component: Menu},
  {'path': '/admin', component: Admin},
  {'path': '/about', component: About},
  {'path': '/login', component: Login},
  {'path': '/register', component: Register},
  // 如果上面的都没有匹配上路由,redirect:'/'跳转到根路径下
  {'path': '*', redirect: '/'}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
