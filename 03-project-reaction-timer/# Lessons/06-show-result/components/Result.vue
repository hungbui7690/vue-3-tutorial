<script>
export default {
  data() {
    return {
      rank: null,
    }
  },
  props: ['score'], // #
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja Fingers'
    } else if (this.score < 400) {
      this.rank = 'Rapid Reflexes'
    } else {
      this.rank = 'Snail pace...'
    }
  },
}
</script>

<template>
  <div>
    <!-- # -->
    <h3>Result - {{ score }}</h3>
    <p>{{ rank }}</p>
  </div>
</template>

<style scoped></style>
