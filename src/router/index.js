import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import RegisterView from '../views/registerView.vue'

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
  ],
})

export default router
