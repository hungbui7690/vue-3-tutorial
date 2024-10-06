<script>
/*
  Emitting Custom Events
  - from Modal component, we want to emit an event with the name "close" -> then we can listen to this event in the App component


*/

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
      header: 'Please sign-up',
      text: 'Sign-up allow you to access more features',
      showModal: false, // #
    }
  },
  components: { Modal },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal // #
    },
  },
}
</script>

<template>
  <!-- # -->
  <div v-if="showModal">
    <!-- 3. listening to "close" event -->
    <Modal :header="header" :text="text" theme="winter" @close="toggleModal" />
  </div>

  <!-- # -->
  <button @click="toggleModal">toggle modal</button>
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
