import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import RegisterView from '../views/registerView.vue'
import LoginView from '../views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',//登录页面
      name : 'Login',
      component: () => import('../views/loginView.vue')//登录页面组件
    }
  ],
})

export default router
