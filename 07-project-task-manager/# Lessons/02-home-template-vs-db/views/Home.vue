<script>
export default {
  name: 'Home',
  components: {},

  // #
  data() {
    return {
      tasks: [],
    }
  },
  mounted() {
    fetch('http://localhost:5000/tasks')
      .then((res) => res.json())
      .then((data) => (this.tasks = data))
      .catch((err) => console.log(err))
  },
}
</script>

<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <p>{{ task.title }}</p>
      </div>
    </div>
    <div v-else>
      <p>No tasks found</p>
    </div>
  </div>
</template>
