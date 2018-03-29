import Vue from 'vue';
import router from './router.js';
import app from './app.vue'
import spui from 'spui';

Vue.use(spui);

new Vue({
    router,
    render:h => h(app)
}).$mount('#view')
