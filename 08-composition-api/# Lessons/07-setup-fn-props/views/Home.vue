<script>
import { ref } from 'vue'
import PostList from '@components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    // 1a. create an array of posts
    const posts = ref([
      {
        title: 'welcome to the blog',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula ac eros ultricies.',
        id: 1,
      },
      { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
    ])

    return { posts } // 1b. return the posts
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>

    <!-- 2. pass the posts to the component -->
    <PostList :posts="posts" />
  </div>
</template>
