<script>
export default {
  props: ['id'],
  data() {
    return {
      uri: 'http://localhost:5000/tasks/' + this.id,
      title: '',
      details: '',
    }
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title
        this.details = data.details
      })
      .catch((err) => console.log(err))
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: this.title, details: this.details }),
      })
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="title" required placeholder="Title" />
    <textarea v-model="details" required placeholder="Details"></textarea>
    <button>Update Project</button>
  </form>
</template>

<style></style>
