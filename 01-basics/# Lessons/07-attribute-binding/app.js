/*
  Attribute Binding 
  - static: 
    -> <img src="./assets/1.jpg" alt="book 1" />
  - dynamic:
    -> <img :src="book.img" :alt="book.title" />


**********************

  - <a v-bind:href="url">
    -> shortcut -> no need v-bind -> <a :href="url">
  - <img :src="book.img" :alt="book.title" />


*/

const app = Vue.createApp({
  data() {
    return {
      url: 'https://hungbui.com',
      showBooks: true,
      books: [
        {
          title: 'name of the wind',
          author: 'patrick rothfuss',
          img: 'assets/1.jpg',
        },
        {
          title: 'the way of kings',
          author: 'brandon sanderson',
          img: 'assets/2.jpg',
        },
        {
          title: 'the final empire',
          author: 'brandon sanderson',
          img: 'assets/3.jpg',
        },
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
  },
})

app.mount('#app')
