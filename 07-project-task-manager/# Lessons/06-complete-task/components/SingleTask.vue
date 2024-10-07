<template>
  <div class="task" :class="{ complete: task.complete }">
    <div class="actions">
      <h3 @click="showTask = !showTask">{{ task.title }}</h3>
      <div class="icons">
        <span @click="deleteProject" class="material-icons">delete</span>
        <span class="material-icons"> edit </span>
        <span
          @click="toggleComplete"
          class="material-icons"
          :class="{ tick: task.complete }"
        >
          done
        </span>
      </div>
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
      uri: `http://localhost:5000/tasks/${this.task.id}`,
    }
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => {
          this.$emit('delete', this.task.id)
        })
        .catch((err) => console.log(err))
    },

    // #
    toggleComplete() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.task.complete }),
      })
        .then(() => {
          this.$emit('complete', this.task.id)
        })
        .catch((err) => console.log(err))
    },
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
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
/* # */
.task.complete {
  border-left: 4px solid #00ce89;
}
.task.complete .tick {
  color: #00ce89;
}
</style>
