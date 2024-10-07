<script>
/*
  Why Vue Router?
  - multiple pages


\\\\\\\\\\\\\\\\\\\\\\\\

  Vue Router Setup
  - https://router.vuejs.org/guide/essentials/nested-routes.html
  ~~ npm install vue-router@4

  1. create router/index.js
  2. main.js
  3. App.vue


*/

export default {
  name: 'App',
}
</script>

<template>
  <div id="nav">
    <!-- # use router-link or RouterLink instead of <a> -->
    <router-link to="/">Home</router-link> |
    <RouterLink :to="{ name: 'About' }">About</RouterLink>
  </div>

  <!-- # place this at the end of <template> -->
  <router-view />
</template>

<style></style>
