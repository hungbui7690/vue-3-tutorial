<script>
/*
 


*/

export default {
  name: 'App',
  methods: {
    redirect() {
      this.$router.push({ name: 'Jobs' })
    },
    goBack() {
      this.$router.go(-1)
    },
    goForward() {
      this.$router.go(1)
    },
  },
}
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="goBack">Go Back</button>
  <button @click="goForward">Go Forward</button>

  <router-view />
</template>

<style></style>
