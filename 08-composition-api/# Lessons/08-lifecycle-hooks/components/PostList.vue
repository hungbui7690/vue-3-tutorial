<script>
import SinglePost from './SinglePost.vue'
import { onMounted } from 'vue'
import { onUpdated } from 'vue'
import { onUnmounted } from 'vue'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    // # Method 2: we can access this inside setup
    onMounted(() => console.log('component mounted'))
    onUpdated(() => console.log('component updated'))
    onUnmounted(() => console.log('component unmounted'))
  },

  // Method 1: options api
  // mounted() {},
  // updated() {},
  // unmounted() {},
}
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <!-- <h3>{{ post.title }}</h3> -->
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<style></style>
