<template>
  <h1>Job Details</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  name: 'JobDetails',
  props: ['id'], // # Method 2

  // Method 1:
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   }
  // },
}
</script>
