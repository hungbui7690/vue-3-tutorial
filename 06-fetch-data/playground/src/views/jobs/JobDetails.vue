<template>
  <h1>Job Details</h1>
  <div>
    <p>
      The job id is <span>{{ id }}</span>
    </p>
    <p>
      The job title is <span>{{ job.title }}</span>
    </p>
    <p>
      The job details are <span>{{ job.details }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'JobDetails',
  props: ['id'],

  // #
  data() {
    return {
      job: {},
    }
  },

  // #
  async mounted() {
    try {
      const res = await fetch('http://localhost:5000/jobs/' + this.id)
      const data = await res.json()
      this.job = data
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style scoped>
p span {
  font-weight: semibold;
  color: crimson;
}
</style>
