<script>
/*
  Create Filter Navbar
  1. components/FilterNavbar.vue
  2. views/Home.vue


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
