<script>
export default {
  name: 'Modal',
  props: ['header', 'text', 'theme'], // #
}
</script>

<template>
  <div class="backdrop">
    <!-- # theme === winter -> class="modal winter" -->
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

/* # winter theme */
.modal.winter h1 {
  color: skyblue;
}
</style>
