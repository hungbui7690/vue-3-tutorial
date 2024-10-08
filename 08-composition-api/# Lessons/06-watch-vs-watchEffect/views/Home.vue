<script>
import { watchEffect } from 'vue'
import { watch } from 'vue'
import { ref, computed } from 'vue'

export default {
  name: 'Home',

  setup() {
    const search = ref('')
    const names = ref([
      'mario',
      'yoshi',
      'luigi',
      'toad',
      'bowser',
      'koopa',
      'peach',
    ])

    // 1. watch for "search" term -> if it changes, run this function
    const stopWatch = watch(search, () => {
      console.log('watch ran', search.value)
    })

    // 2. watchEffect checks for the variables inside the callback function, and track its changes -> if there's no variable, it will run at initial render
    const stopEffect = watchEffect(() => {
      // console.log('watchEffect ran') // run at initial render
      console.log('watchEffect ran', search.value) // run whenever "search" changes
    })

    // 3. stop watching
    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    const filteredNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { names, search, filteredNames, handleClick }
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term: {{ search }}</p>
    <div v-for="name in filteredNames" :key="name">{{ name }}</div>

    <!-- # -->
    <button @click="handleClick">Stop watch</button>
  </div>
</template>
