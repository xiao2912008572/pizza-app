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

// ⚠️ 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// ⚠️ 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  //给路由添加name属性
  {'path': '/', name: "homeLink", component: Home},
  {'path': '/menu', name: "menuLink", component: Menu},
  {'path': '/admin', name: "adminLink", component: Admin},
  {
    // children：子路由(数组)
    // redirect: 默认展示的路径
    'path': '/about', name: "aboutLink", redirect: "/about/contact", component: About, children: [
      {
        path: '/about/contact', name: "contactLink", redirect: "/personname", component: Contact, children: [
          {path: '/phone', name: "phoneNumber", component: Phone},
          {path: '/personname', name: "personName", component: PersonName},
        ]
      },
      {path: '/history', name: "historyLink", component: History},
      {path: '/delivery', name: "deliveryLink", component: Delivery},
      {path: '/orderingGuide', name: "orderingGuideLink", component: OrderingGuide},
    ]
  },
  {'path': '/login', name: "loginLink", component: Login},
  {'path': '/register', name: "registerLink", component: Register},
  // 如果上面的都没有匹配上路由,redirect:'/'跳转到根路径下
  {'path': '*', redirect: '/'}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

// ⚠️ 全局守卫
// 回调函数(to,from.next)
// 1. to的作用：进入哪个路由
// 2. from的作用: 从哪个路由离开
// 3. next的作用: next对应的函数，决定你是否要展示的页面
router.beforeEach((to, from, next) => {
  // alert("还没有登录，请先登录！");
  // next();// 点击确定之后就可以继续
  // console.log(to)

  // vuex中，判断store.gettes.isLogin === false
  if (to.path == '/login' || to.path == '/register') {
    next();
  } else {
    alert('还没有登录，请先登录！');
    next('/login');
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
