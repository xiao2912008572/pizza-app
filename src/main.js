// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// 引入routes对象
import { routes } from './routes'
// 引入全局axios
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(VueRouter);

// 配置全局的url路径
axios.defaults.baseURL = 'https://wd2655002152mdkudo.wilddogio.com/'


const router = new VueRouter({
  routes,
  mode: 'history',

  // ⚠️ 路由滚动行为
  // 该方法接收to和from路由对象。
  // 第三个参数savedPostion当且仅当popstate导航(通过浏览器的 前进/后退按 钮触发)时才可用
  scrollBehavior(to, from, savedPosition) {
    // ...
    // return { x: 0, y: 100 }
    // return {selector:'.btn'}
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

// ⚠️ 1. 全局守卫 - 学习
// 进入组件之前产生作用
// 回调函数(to,from.next)
// 1. to的作用：进入哪个路由
// 2. from的作用: 从哪个路由离开
// 3. next的作用: next对应的函数，决定你是否要展示的页面
// router.beforeEach((to, from, next) => {
//   // alert("还没有登录，请先登录！");
//   // next();// 点击确定之后就可以继续
//   console.log(to)

//   // vuex中，判断store.gettes.isLogin === false
//   if (to.path == '/login' || to.path == '/register') {
//     next();
//   } else {
//     alert('还没有登录，请先登录！');
//     next('/login');
//   }
// });

// ⚠️ 2. 后置钩子 -学习
// 进入组件之后产生作用
// 没有next方法
// router.afterEach((to, from) => {
//   alert("after each");
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
