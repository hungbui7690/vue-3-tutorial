<script>
/*
  Setup 
  !! npm create vite@latest playground -- --template vue

*/

// # this just work when <script> has no "setup"
export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
    }
  },
}
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
