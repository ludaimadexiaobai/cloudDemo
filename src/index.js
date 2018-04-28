import Vue from 'vue'
import App from './app.vue'
import routers from './router.js'
import VueRouter from 'vue-router'
import './assets/styles/reset.less';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter)
Vue.use(iView)

const root = document.createElement('div')
document.body.appendChild(root)

if (module.hot) {
    module.hot.accept();
  } 
  // 解决应用pag-table.vue页面bug                              
  
const router = new VueRouter({
    /*mode: 'history', // 切换路径模式，变成history模式,不然路径为/#/home  
    scrollBehavior: () => ({ // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置  
      y: 0  
    }),*/
    routes: routers
})

new Vue({
    router,
    render:(h) => h(App)
}).$mount(root)