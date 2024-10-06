<script>
/*
  Multiple Components


*/

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
    }
  },
  components: { Modal }, // 1.
  methods: {
    handleClick() {
      console.log(this.$refs.username.value)
    },
  },
}
</script>

<template>
  <!-- 2. -->
  <Modal />
  <input type="text" ref="username" />
  <button @click="handleClick">click me</button>
</template>

<style scoped>
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
