<script>
export default {
  data() {
    return {
      title: '',
      details: '',
    }
  },
  methods: {
    handleSubmit() {
      let newTask = {
        title: this.title,
        details: this.details,
        complete: false,
        id: new Date().getTime().toString(),
      }

      fetch('http://localhost:5000/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
      })
        .then(() => {
          this.$router.push('/') // redirect to homepage
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>

<template>
  <h1>Create Task</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="title" required placeholder="Title" />
    <textarea v-model="details" required placeholder="Details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<style>
form {
  margin: 20px auto;
  background: white;
  max-width: 450px;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
