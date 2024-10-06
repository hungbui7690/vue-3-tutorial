<script>
/*
  Props
  - If we have 2 components that use the same data -> we should place data in the parent component -> then pass the data to the child component as props -> this is known as "Single Source of Truth"
    -> this will create the consistent between the data of the child and the parent


******************

  <Modal
    header="Please sign-up"
    text="Sign-up allow you to access more features"/>


*/

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
    }
  },
  components: { Modal },
  methods: {
    handleClick() {
      console.log(this.$refs.username.value)
    },
  },
}
</script>

<template>
  <!-- # -->
  <Modal
    header="Please sign-up"
    text="Sign-up allow you to access more features"
  />
  <input type="text" ref="username" />
  <button @click="handleClick">click me</button>
</template>

<style scoped>
h1 {
  color: #e91e63;
}
input[type='text'] {
  appearance: none;
  border: none;
  outline: none;
  border-bottom: 0.2em solid #e91e63;
  background: rgba(#e91e63, 0.2);
  border-radius: 0.2em 0.2em 0 0;
  padding: 0.4em;
  color: #e91e63;
}
button {
  appearance: none;
  border: 0.2em solid #e91e63;
  background: hsl(0 0 0/0);
  padding: 0.85em 1.5em;
  color: #e91e63;
  border-radius: 2em;
  transition: 1s;
  &:hover,
  &:focus,
  &:active {
    background: #e91e63;
    color: #fff;
  }
}
</style>
