<script>
/*
  Create a Timer
  - click start -> start a timer
  - wait for delay -> show block -> click on block -> stop timer -> update reaction time


*/

import Block from './components/Block.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Ninja Reaction Timer',
      isPlaying: false,
      delay: null,
    }
  },
  components: { Block },
  methods: {
    start() {
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000
    },
  },
}
</script>

<template>
  <h1>Ninja Reaction Timer</h1>
  <button class="btn" @click="start" :disabled="isPlaying">Start</button>
  <Block v-if="isPlaying" :delay="delay" />
</template>

<style scoped></style>
