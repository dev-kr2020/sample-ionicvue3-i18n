import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/triangle'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'triangle'
      },
      {
        path: 'triangle',
        component: () => import('@/views/Triangle.vue')
      },
      {
        path: 'ellipse',
        component: () => import('@/views/Ellipse.vue')
      },
      {
        path: 'square',
        component: () => import('@/views/Square.vue')
      }
    ]
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/Account.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/Logout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
