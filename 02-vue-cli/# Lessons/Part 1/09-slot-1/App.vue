<script>
/*
  Slots
  - passing custom templates into components
  - is designed to only pass templates to components
  - never use slots to pass data like simple strings or booleans to components 


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
  <div v-if="showModal">
    <Modal theme="winter" @close="toggleModal">
      <!-- # anything inside this Modal tag will be passed into the <slot> of Modal component -> this is default slot -->
      <h1>Ninja Give away!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </div>
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
