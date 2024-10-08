<script>
import { ref } from 'vue' // 1.

export default {
  name: 'Home',

  setup() {
    let name = 'joe doe'
    let age = 25

    // console.log(this) // undefined
    // console.log(this.$refs) // err -> since this === undefined -> the way we work with refs in composition api is different

    const p = ref(null) // 2. p.value = null

    const handleClick = (e) => {
      console.log(p, p.value) // 5. return <p>
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas'
    }

    return { name, age, handleClick, p } // # 3. this step is super important -> won't work if we don't return it
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <!-- 4. -->
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>
