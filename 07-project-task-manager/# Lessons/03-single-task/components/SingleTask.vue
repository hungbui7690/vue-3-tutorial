<template>
  <div class="task" @click="showTask = !showTask">
    <div class="actions">
      <h3>{{ task.title }}</h3>
    </div>
    <div v-if="showTask" class="details">
      <p>{{ task.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      showTask: false,
    }
  },
}
</script>

<style scoped>
.task {
  margin: 20px auto;
  max-width: 450px;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
</style>
