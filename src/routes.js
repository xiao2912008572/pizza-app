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

// 加入export 公开routes，这样在main.js中就可以引入该文件
export const routes = [
  //给路由添加name属性
  {
    'path': '/', name: "homeLink", components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
  },
  { 'path': '/menu', name: "menuLink", component: Menu },

  // ⚠️ 3. 路由独享守卫 - 学习
  {
    'path': '/admin', name: "adminLink", component: Admin,
    // beforeEnter: (to, from, next) => {
    // 路由独享守卫
    // alert("非登录状态, 不能访问此页面!");
    // next(true);

    // 实现下面全局组件的功能
    // if (to.path == '/login' || to.path == '/register') {
    //       next();
    //     } else {
    //       alert('还没有登录，请先登录！');
    //       next('/login');
    //     }
    // }
  },
  {
    // children：子路由(数组)
    // redirect: 默认展示的路径
    'path': '/about', name: "aboutLink", redirect: "/about/contact", component: About, children: [
      {
        path: '/about/contact', name: "contactLink", redirect: "/personname", component: Contact, children: [
          { path: '/phone', name: "phoneNumber", component: Phone },
          { path: '/personname', name: "personName", component: PersonName },
        ]
      },
      { path: '/history', name: "historyLink", component: History },
      { path: '/delivery', name: "deliveryLink", component: Delivery },
      { path: '/orderingGuide', name: "orderingGuideLink", component: OrderingGuide },
    ]
  },
  { 'path': '/login', name: "loginLink", component: Login },
  { 'path': '/register', name: "registerLink", component: Register },
  // 如果上面的都没有匹配上路由,redirect:'/'跳转到根路径下
  { 'path': '*', redirect: '/' }
];
