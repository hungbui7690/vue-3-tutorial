<script>
/*
  Show Result


*/

import Block from './components/Block.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Ninja Reaction Timer',
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    }
  },
  components: { Block, Result }, // #
  methods: {
    start() {
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResult = true
    },
  },
}
</script>

<template>
  <h1>Ninja Reaction Timer</h1>
  <button class="btn" @click="start" :disabled="isPlaying">Start</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Result v-if="showResult" :score="score" />
</template>

<style scoped></style>
