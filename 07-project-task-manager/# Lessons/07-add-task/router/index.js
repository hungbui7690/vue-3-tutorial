import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@views/NotFound.vue'
import CreateTask from '@views/CreateTask.vue'

const Home = () => import('@views/Home.vue')

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/create', component: CreateTask, name: 'CreateTask' },
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
