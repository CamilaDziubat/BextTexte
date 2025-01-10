import { createRouter, createWebHistory } from 'vue-router'
import ECommerceView from '@/views/Dashboard/ECommerceView.vue'
import ProfileView from '@/views/ProfileView.vue'
import TasksDashboard from '@/components/tasks/TasksDashboard.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/Geral',
    name: 'Geral',
    component: ECommerceView,
    meta: {
      title: 'Geral Dashboard'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksDashboard,
    meta: {
      title: 'Dashboard de Tarefas'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | Bext-Texte-Para Front-End`
  next()
})

export default router