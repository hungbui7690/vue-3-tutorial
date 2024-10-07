<template>
  <h1>Job Details</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  name: 'JobDetails',
  props: ['id'],
}
</script>
