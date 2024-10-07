import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/jobs', component: Jobs, name: 'Jobs' },
  {
    path: '/jobs/:id',
    component: JobDetails,
    name: 'JobDetails',
    props: true, // # use for method 2
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router