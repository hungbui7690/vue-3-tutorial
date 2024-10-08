<script>
import { ref } from 'vue'
import PostList from '@components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      { title: 'Vue Course', body: 'lorem ipsum', id: 1 },
      { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
      { title: 'html crash course', body: 'lorem ipsum', id: 3 },
    ])
    const showPost = ref(true) // #

    return { posts, showPost } // #
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>

    <!-- # -->
    <PostList v-if="showPost" :posts="posts" />
    <button @click="posts.pop()" class="btn">Delete Last Post</button>
    <button @click="showPost = !showPost">
      {{ showPost ? 'Hide' : 'Show' }}
    </button>
  </div>
</template>

<style scoped>
.btn {
  background-color: crimson;
}
</style>
