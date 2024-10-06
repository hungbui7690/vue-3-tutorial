<script>
/*
  Scoped & Global CSS
  - App.vue 
    -> <style> -> h1
    -> global css
  - Modal.vue -> we have h1 
    -> h1 has the style of App.vue


*************************

  Solution 1: 
  - Modal.vue -> <style> -> h1 -> overwrite App.vue

  Solution 2: 
  - <style scoped>
    -> scoped to this file only

  🌿 If we add "scoped" -> will create unique data-v-xxxx


*************************

  🌙 We should apply global css in style.css
    -> main.js -> import 
    Then for each component -> we scope the css to that component



*/

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
    }
  },
  components: { Modal },
  methods: {
    handleClick() {
      console.log(this.$refs.username.value)
    },
  },
}
</script>

<template>
  <Modal />
  <input type="text" ref="username" />
  <button @click="handleClick">click me</button>
</template>

<style scoped>
h1 {
  color: #e91e63;
}
input[type='text'] {
  appearance: none;
  border: none;
  outline: none;
  border-bottom: 0.2em solid #e91e63;
  background: rgba(#e91e63, 0.2);
  border-radius: 0.2em 0.2em 0 0;
  padding: 0.4em;
  color: #e91e63;
}
button {
  appearance: none;
  border: 0.2em solid #e91e63;
  background: hsl(0 0 0/0);
  padding: 0.85em 1.5em;
  color: #e91e63;
  border-radius: 2em;
  transition: 1s;
  &:hover,
  &:focus,
  &:active {
    background: #e91e63;
    color: #fff;
  }
}
</style>
