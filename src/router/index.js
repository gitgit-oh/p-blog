import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import home from "/src/views/home/Home.vue";

const routes = [
    // 主页
  {path: '/',component: home},
  {path: '/home',component: home}
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,

})
  
export default router