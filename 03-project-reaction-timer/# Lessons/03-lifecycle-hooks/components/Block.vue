<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
    }
  },

  // #
  mounted() {
    console.log('component mounted')
    setTimeout(() => {
      this.showBlock = true
    }, this.delay)
  },
  // # this will be called when this.showBlock is changed in mounted()
  updated() {
    console.log('component updated')
  },
  // # comment the Block component in App.vue and see what happens
  unmounted() {
    console.log('component unmounted')
  },
}
</script>

<template>
  <div class="block" v-if="showBlock">click me</div>
</template>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
