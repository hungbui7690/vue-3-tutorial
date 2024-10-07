<template>
  <h1>List of Jobs</h1>
  <ul v-if="jobs.length" class="job-list">
    <li class="job-item" v-for="job in jobs" :key="job.id">
      <RouterLink
        class="job-link"
        :to="{ name: 'JobDetails', params: { id: job.id } }"
        >{{ job.title }}</RouterLink
      >
    </li>
  </ul>
  <div v-else>Loading Jobs...</div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [], // #
    }
  },

  // #
  async mounted() {
    try {
      const res = await fetch('http://localhost:5000/jobs')
      const data = await res.json()
      this.jobs = data
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style>
.job-list {
  padding: 0;
  margin: 0;
}
.job-item {
  list-style: none;
  padding: 0px;
  margin: 0;
}
.job-link {
  display: block;
  text-decoration: none;
  color: #0faf87;
}
</style>
