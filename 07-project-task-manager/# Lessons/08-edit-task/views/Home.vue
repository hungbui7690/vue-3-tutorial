<script>
import SingleTask from '../components/SingleTask.vue'

export default {
  name: 'Home',
  components: { SingleTask },
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
  methods: {
    handleDelete(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id
      })
    },
    handleComplete(id) {
      let newTasks = this.tasks.map((task) => {
        if (task.id === id) {
          task.complete = !task.complete
        }
        return task
      })
    },
  },
}
</script>

<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <SingleTask
          :task="task"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
    <div v-else>
      <p>No tasks found</p>
    </div>
  </div>
</template>
