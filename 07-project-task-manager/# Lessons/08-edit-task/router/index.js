import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@views/NotFound.vue'
import CreateTask from '@views/CreateTask.vue'
import EditTask from '@views/EditTask.vue'

const Home = () => import('@views/Home.vue')

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/create', component: CreateTask, name: 'CreateTask' },
  {
    path: '/tasks/:id', // #
    name: 'EditTask',
    component: EditTask,
    props: true,
  },
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
