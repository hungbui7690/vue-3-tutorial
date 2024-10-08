<script>
import { ref, computed } from 'vue' // #

export default {
  name: 'Home',

  setup() {
    const search = ref('') // 1.
    const names = ref([
      'mario',
      'yoshi',
      'luigi',
      'toad',
      'bowser',
      'koopa',
      'peach',
    ])

    // 3.
    const filteredNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { names, search, filteredNames }
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <!-- 2. -->
    <input type="text" v-model="search" />
    <p>search term: {{ search }}</p>

    <!-- 3. instead of using "names" array -> we use "filteredNames"  -->
    <div v-for="name in filteredNames" :key="name">{{ name }}</div>
  </div>
</template>
