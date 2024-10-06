<script>
export default {
  name: 'Modal',
  props: ['theme'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ winter: theme === 'winter' }">
      <slot>
        <h1>default content (in case no slot is passed)</h1>
      </slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
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
