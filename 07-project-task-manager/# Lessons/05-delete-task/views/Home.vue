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
  // # when "delete" event is emitted in SingleTask.vue -> it means that a task should be deleted in db.json -> we should update the UI
  methods: {
    handleDelete(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id
      })
    },
  },
}
</script>

<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <!-- # listen for "delete" event in SingleTask.vue -->
        <SingleTask :task="task" @delete="handleDelete" />
      </div>
    </div>
    <div v-else>
      <p>No tasks found</p>
    </div>
  </div>
</template>
