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
  //给路由添加name属性
  {'path': '/', name: "homeLink", component: Home},
  {'path': '/menu', name: "menuLink", component: Menu},
  {'path': '/admin', name: "adminLink", component: Admin},
  {'path': '/about', name: "aboutLink", component: About},
  {'path': '/login', name: "loginLink", component: Login},
  {'path': '/register', name: "registerLink", component: Register},
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
