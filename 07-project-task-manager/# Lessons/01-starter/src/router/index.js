import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
const Home = () => import('@views/Home.vue') // Lazy loading

const routes = [
  { path: '/', component: Home, name: 'Home' },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
