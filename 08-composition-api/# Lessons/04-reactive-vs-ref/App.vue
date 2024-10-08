<script>
/*
  refs vs reactive
  - reactive -> similar to refs but CANNOT be used on primitive values

  🌿 ref
  const ninjaOne = ref({ name: 'mario', age: 30 })
  ninjaOne.value.age = 40

  🌿 reactive
  const ninjaTwo = reactive({ name: 'luigi', age: 35 })
  ninjaTwo.age = 45



*/
</script>

<template>
  <router-view />
</template>

<style></style>
