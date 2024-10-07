<script>
import SingleTask from '../components/SingleTask.vue'
import FilterNavbar from '@components/FilterNavbar.vue'

export default {
  name: 'Home',
  components: { SingleTask, FilterNavbar }, // #
  data() {
    return {
      tasks: [],
      current: 'all', // #
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
  // #
  computed: {
    filteredTasks() {
      if (this.current === 'completed') {
        return this.tasks.filter((task) => task.complete)
      }
      if (this.current === 'ongoing') {
        return this.tasks.filter((task) => !task.complete)
      }
      return this.tasks
    },
  },
}
</script>

<template>
  <div class="home">
    <!-- # listen to "filterChange" event -->
    <FilterNavbar :current="current" @filterChange="current = $event" />
    <div v-if="tasks.length">
      <!-- instead of getting task from "tasks" -> we get it from "filteredTasks" -->
      <div v-for="task in filteredTasks" :key="task.id">
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
