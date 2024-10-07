<script>
/*
  Jobs & Job Details Page - Route Parameters
  1. create:
    # views/jobs/Jobs.vue
    # views/jobs/JobDetails.vue
  2. config router/index.js


  🌙 Method 1 
    - <RouterLink :to="`/jobs/${job.id}`">
        {{ job.title }}
      </RouterLink>

  🌙 Method 2
    - <RouterLink :to="{ name: 'JobDetails', params: { id: job.id } }">
        {{ job.title }}
      </RouterLink>


*/

export default {
  name: 'App',
}
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <!-- # -->
    <router-link to="/jobs">Jobs</router-link>
  </div>
  <router-view />
</template>

<style></style>
