<script>
import SinglePost from './SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost },

  // # to access "props" inside the setup function -> use as parameters
  // setup(props) {
  setup({ posts }) {
    console.log(posts)
    // no need to return the props value on the posts
  },
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
