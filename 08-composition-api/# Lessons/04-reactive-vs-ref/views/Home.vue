<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',

  setup() {
    // # reference type, we can use ref() or reactive()
    const ninjaOne = ref({ name: 'mario', age: 30 }) // -> ninjaOne.value.age = 40
    const ninjaTwo = reactive({ name: 'luigi', age: 35 }) // -> ninjaTwo.age = 45

    // # primitive type, can only use ref()
    const nameOne = ref('mario') //
    const nameTwo = reactive('luigi') // # NOT WORK

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45
      // nameTwo.value = 'yoshi' // # return Error
    }

    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo } // # remember to return
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>
