import Vue from 'vue'
import routers from './router.js'
import app from './app.vue'
import spui from 'spui'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(spui)

const router = new VueRouter({
    mode: 'history', // 切换路径模式，变成history模式,不然路径为/#/home 
    routes: routers
})

new Vue({
    router,
    render: h => h(app)
}).$mount('#view')
