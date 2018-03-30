
const routers = [
  {
    // 根目录重定向  
    path: '/login', component: resolve => require(['./views/login.vue'], resolve)
  },
  {
    path: '/home', component: resolve => require(['./views/home.vue'], resolve)
  },
  {   // 根目录重定向  
    path: '/', redirect: '/login'
  },
]
export default routers
