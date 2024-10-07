<script>
/*
  Fetch Data
  - Jobs.vue
  - JobDetails.vue



*/
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>

  <router-view />
</template>

<style></style>
