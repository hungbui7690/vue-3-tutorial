<script>
export default {
  name: 'Home',
  // # composition API
  setup() {
    console.log('setup')

    let name = 'joe doe'
    let age = 25

    const handleClick = (e) => {
      console.log('you clicked me')
    }

    return { name, age, handleClick }
  },
  mounted() {
    console.log('mounted')
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>
