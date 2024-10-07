<template>
  <h1>Jobs</h1>
  <ul class="job-list">
    <li class="job-item" v-for="job in jobs" :key="job.id">
      <RouterLink
        class="job-link"
        :to="{ name: 'JobDetails', params: { id: job.id } }"
        >{{ job.title }}</RouterLink
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'UX Designer', id: 1, details: 'lorem' },
        { title: 'Web Developer', id: 2, details: 'lorem' },
        { title: 'Vue Developer', id: 3, details: 'lorem' },
      ],
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
