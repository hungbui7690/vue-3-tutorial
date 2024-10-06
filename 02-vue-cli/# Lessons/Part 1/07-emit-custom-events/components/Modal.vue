<script>
export default {
  name: 'Modal',
  props: ['header', 'text', 'theme'],
  methods: {
    // 1. in this method, we want to refer to the toggleModal method in the parent component ->
    closeModal() {
      this.$emit('close') // emit an event with the name 'close'
    },
  },
}
</script>

<template>
  <!-- 2. click this div -> emit "close" event -->
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ winter: theme === 'winter' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal.winter h1 {
  color: skyblue;
}
</style>
