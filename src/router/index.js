import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',//登录页面
      name : 'Login',
      component: () => import('../views/loginPage.vue')//登录页面组件
    }
  ],
})

export default router
