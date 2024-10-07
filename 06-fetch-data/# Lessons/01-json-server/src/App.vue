<script>
/*
  Use json-server
  ~~ npm i -D json-server
  ~~ "server": "json-server --watch src/db/db.json --port 5000"


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
