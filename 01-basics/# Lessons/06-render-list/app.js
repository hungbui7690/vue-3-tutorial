/*
  Render List
  - v-for="book in books"


*/

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss' },
        { title: 'the way of kings', author: 'brandon sanderson' },
        { title: 'the final empire', author: 'sander anderson' },
      ], // #
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
  },
})

app.mount('#app')
