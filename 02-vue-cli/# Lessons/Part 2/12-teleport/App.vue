<script>
/*
  Using Teleport
  - teleport content to another location in the DOM entirely
  - index.html -> we have another div.modal -> we want to teleport our Modal component there


*/

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
      showModal: false,
    }
  },
  components: { Modal },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
  },
}
</script>

<template>
  <!-- change from div to teleport -->
  <Teleport to=".modal" v-if="showModal">
    <Modal theme="winter" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
      </template>
      <h1>Ninja Give away!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </Teleport>
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
