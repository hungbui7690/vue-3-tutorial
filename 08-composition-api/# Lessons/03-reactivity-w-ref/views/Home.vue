<script>
import { ref } from 'vue'

export default {
  name: 'Home',

  setup() {
    // PROBLEM: cannot update variables
    // let name = 'joe doe' // # this is not reactive variable -> cannot update
    // let age = 25
    // const handleClick = (e) => {
    //   name = 'john doe' // # this won't work -> not reactive variable
    // }

    // # Solution:
    let name = ref('joe doe')
    let age = ref(25)

    const handleClick = () => {
      age.value = 30
    }

    return { name, age, handleClick }
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>

    <!-- # -->
    <input v-model="name" type="text" />
    <button @click="handleClick">Click Me</button>
    <button @click="age++">add 1 to age</button>
  </div>
</template>
