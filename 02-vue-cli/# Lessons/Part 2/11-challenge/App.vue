<script>
/*
  Challenge - Create another Modal
  - create an extra button to open a different modal
  - use the modal component but pass in a different template (slot)
  - use different method (toggleModal2) and data (showModal2)


*/

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
      showModal: false,
      showModal2: false,
    }
  },
  components: { Modal },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    },
  },
}
</script>

<template>
  <div v-if="showModal">
    <Modal theme="winter" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
      </template>
      <h1>Ninja Give away!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </div>

  <!-- # -->
  <div v-if="showModal2">
    <Modal theme="winter" @close="toggleModal2">
      <h1>Newsletter</h1>
      <p>Sign up to our newsletter</p>
    </Modal>
  </div>
  <button @click="toggleModal">toggle modal</button>
  <button @click="toggleModal2">toggle modal 2</button>
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
