/*
  Conditional Rendering
  - v-if: use for something that changes very rarely -> will remove and add elements into DOM -> time consuming + expensive operations -> NOT GOOD FOR PERFORMANCE
  - v-else
  - v-show: show only if condition is true -> use for something that changes very often -> this just hide and show -> GOOD FOR PERFORMANCE


*/

const app = Vue.createApp({
  data() {
    return {
      showBooks: true, // #
      title: 'The Way of Kings',
      author: 'Brandon Sanderson',
      age: 45,
    }
  },
  methods: {
    // #
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
  },
})

app.mount('#app')
