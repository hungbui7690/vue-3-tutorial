<script>
/*
  Setup
  ~~ npm create vite@latest playground -- --template vue


*/

export default {
  name: 'App',
  data() {
    return {
      title: 'Ninja Reaction Timer',
      isPlaying: false,
      delay: null,
    }
  },
  methods: {
    start() {
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000 // from 2s to 7s
      console.log(this.delay)
    },
  },
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <button class="btn" @click="start">Start</button>
  </div>
</template>

<style scoped></style>
