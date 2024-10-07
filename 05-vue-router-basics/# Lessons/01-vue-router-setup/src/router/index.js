import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
]

const router = createRouter({
  history: createWebHistory(), // # if we use <createMemoryHistory>, we cannot input url directly in the browser -> just work when we click on the router-link -> <createWebHistory> allows us to click on the back, and forward buttons to move around the history
  routes,
})

export default router
