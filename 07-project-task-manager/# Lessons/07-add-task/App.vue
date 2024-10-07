<script>
/*
  Create Task Form
  1. views/CreateTask.vue
  2. router/index.js
  3. components/CreateTask.vue


*****************************

  Navbar
  1. views/Navbar.vue
    -> The <router-link> or <RouterLink> component adds two CSS classes to active links, <router-link-active> and <router-link-exact-active.


*/

import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style></style>
