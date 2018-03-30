import Vue from 'vue';
import routers from './router.js';
import app from './app.vue'
import spui from 'spui';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(spui);

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
    router,
    render: h => h(app)
}).$mount('#view')
